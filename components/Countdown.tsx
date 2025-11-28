'use client';

import { useEffect, useState } from 'react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-10T23:59:59Z').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
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

  return (
    <div className="flex items-center gap-2 sm:gap-4 text-slate-900 dark:text-white">
       <TimeUnit value={timeLeft.days} label="DAYS" />
       <Separator />
       <TimeUnit value={timeLeft.hours} label="HOURS" />
       <Separator />
       <TimeUnit value={timeLeft.minutes} label="MINS" />
       <Separator />
       <TimeUnit value={timeLeft.seconds} label="SECS" />
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
