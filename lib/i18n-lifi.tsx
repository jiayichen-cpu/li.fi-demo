'use client';

import { useContext } from 'react';
import { LanguageContext } from './i18n';
import { lifiDictionary, Locale } from './dictionary-lifi';

export function useLifiLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLifiLanguage must be used within a LanguageProvider');
  }
  return {
    locale: context.locale,
    setLocale: context.setLocale,
    t: lifiDictionary[context.locale],
  };
}

