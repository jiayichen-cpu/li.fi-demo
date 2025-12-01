'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n';

// UTC+8
const START_TIME = new Date('2025-12-02T16:00:00Z').getTime(); // Dec 3 00:00 UTC+8
const END_TIME = new Date('2025-12-09T15:59:59Z').getTime();   // Dec 9 23:59 UTC+8

export function EventBadge() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'upcoming' | 'live' | 'ended'>('live');

  useEffect(() => {
    const checkStatus = () => {
      const now = Date.now();
      if (now < START_TIME) {
        setStatus('upcoming');
      } else if (now > END_TIME) {
        setStatus('ended');
      } else {
        setStatus('live');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 1000 * 60); // Check every minute
    return () => clearInterval(interval);
  }, []);

  if (status === 'ended') {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
        <div className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
        <span>{t.badge.ended}</span>
      </div>
    );
  }

  if (status === 'upcoming') {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span>{t.badge.upcoming}</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300">
      <div className="h-1.5 w-1.5 rounded-full bg-[#00B812] animate-pulse" />
      <span>{t.badge.live}</span>
    </div>
  );
}

