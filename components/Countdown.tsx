'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n';

// Time configuration (UTC)
// Start: 2025-12-05 00:00:00 UTC+8 -> 2025-12-04 16:00:00 UTC
// End: 2025-12-11 23:59:59 UTC+8 -> 2025-12-11 15:59:59 UTC
const START_TIME = new Date('2025-12-04T16:00:00Z').getTime();
const END_TIME = new Date('2025-12-11T15:59:59Z').getTime();

export function Countdown() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'upcoming' | 'live' | 'ended'>('live');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      let targetDate = END_TIME;
      let currentStatus: 'upcoming' | 'live' | 'ended' = 'live';

      if (now < START_TIME) {
        targetDate = START_TIME;
        currentStatus = 'upcoming';
      } else if (now > END_TIME) {
        currentStatus = 'ended';
      }

      setStatus(currentStatus);

      if (currentStatus === 'ended') {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const distance = targetDate - now;
      if (distance < 0) {
        // Should be handled by status check, but safe guard
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTitle = () => {
    switch (status) {
      case 'upcoming':
        return t.countdown.starts_in;
      case 'ended':
        return t.countdown.ended;
      default:
        return t.countdown.ends_in;
    }
  };

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
        {getTitle()}
      </p>
      <div className="flex items-center gap-2 sm:gap-4 text-slate-900 dark:text-white">
         <TimeUnit value={timeLeft.days} label={t.countdown.days} />
         <Separator />
         <TimeUnit value={timeLeft.hours} label={t.countdown.hours} />
         <Separator />
         <TimeUnit value={timeLeft.minutes} label={t.countdown.mins} />
         <Separator />
         <TimeUnit value={timeLeft.seconds} label={t.countdown.secs} />
      </div>
    </>
  );
}

function Separator() {
  return (
    <div className="flex flex-col gap-1.5 pt-2 opacity-30">
      <div className="w-1 h-1 rounded-full bg-slate-900 dark:bg-white"></div>
      <div className="w-1 h-1 rounded-full bg-slate-900 dark:bg-white"></div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="
        bg-slate-100/80 dark:bg-white/5 
        text-slate-900 dark:text-white 
        rounded-2xl 
        w-12 h-12 sm:w-14 sm:h-14 
        flex items-center justify-center 
        text-2xl sm:text-3xl font-bold 
        shadow-sm ring-1 ring-black/5 dark:ring-white/10
        group-hover:shadow-md group-hover:scale-105 transition-all duration-300
        tabular-nums
      ">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-[10px] font-semibold text-slate-400 mt-2 tracking-wider uppercase">{label}</span>
    </div>
  );
}
