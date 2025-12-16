'use client';

import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'zh' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white gap-2 font-medium"
    >
      <Globe className="h-4 w-4" />
      {locale === 'en' ? 'English' : '中文'}
    </Button>
  );
}
