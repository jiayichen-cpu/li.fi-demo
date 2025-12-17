'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n';

// Perps countdown - adjust dates as needed
// Target time: 2024-12-31 23:59:59 UTC (update as needed)
const END_TIME = new Date('2024-12-31T23:59:59Z').getTime();

export function PerpsCountdown() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = END_TIME - now;

      if (distance < 0) {
        setIsEnded(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setIsEnded(false);
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isEnded) {
    return (
      <div className="flex flex-col items-center md:items-end space-y-2">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          {t.countdown.ended}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center md:items-end space-y-2">
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
        {t.countdown.ends_in}
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
    </div>
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

