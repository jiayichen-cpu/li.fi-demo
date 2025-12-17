'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { dictionary, Locale } from './dictionary';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof dictionary['en'];
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  // Persist language preference
  // Check for SSR safety - localStorage is only available in browser
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('language') as Locale;
        if (stored && (stored === 'en' || stored === 'zh')) {
          setLocale(stored);
        }
      } catch (error) {
        // localStorage might be disabled in privacy mode
        console.warn('Failed to read language preference from localStorage');
      }
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    // Safely set localStorage with error handling
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('language', newLocale);
      } catch (error) {
        // localStorage might be disabled in privacy mode
        console.warn('Failed to save language preference to localStorage');
      }
    }
  };

  const value = {
    locale,
    setLocale: handleSetLocale,
    t: dictionary[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

