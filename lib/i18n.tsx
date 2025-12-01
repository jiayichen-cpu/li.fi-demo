'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { dictionary, Locale } from './dictionary';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof dictionary['en'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  // Persist language preference
  useEffect(() => {
    const stored = localStorage.getItem('language') as Locale;
    if (stored && (stored === 'en' || stored === 'zh')) {
      setLocale(stored);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('language', newLocale);
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

