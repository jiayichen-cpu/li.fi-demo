'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Megaphone } from 'lucide-react';

// Beijing Time: 2025-12-12 00:00:00 (+08:00) -> UTC: 2025-12-11 16:00:00
const END_TIME = new Date('2025-12-11T16:00:00Z').getTime();

export function ResultBanner() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = Date.now();
      const isEnded = now > END_TIME;
      setShow(isEnded);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div className="relative w-full bg-white dark:bg-[#111111] border-b border-slate-200 dark:border-white/10 py-3 px-4 text-center text-sm font-medium transition-colors">
      <div className="relative flex items-center justify-center gap-2.5">
        <div className="rounded-full bg-[#00B812]/10 dark:bg-[#00B812]/20 p-1.5">
          <Megaphone className="w-3.5 h-3.5 text-[#00B812]" />
        </div>
        <span className="tracking-wide text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          {t.hero.result_banner}
        </span>
      </div>
    </div>
  );
}
