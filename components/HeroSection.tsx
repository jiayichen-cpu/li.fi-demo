'use client';

import { Countdown } from "@/components/Countdown";
import { EventBadge } from "@/components/EventBadge";
import { useLanguage } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-white dark:bg-[#111111] border-b border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-12">
         <div className="absolute top-4 right-4 lg:top-8 lg:right-8 z-10">
            <LanguageSwitcher />
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
            
            {/* Left: Text Content */}
            <div className="text-left space-y-4">
               <EventBadge />

               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  {t.hero.title_prefix} <br/>
                  <span className="text-shimmer">{t.hero.title_suffix}</span>
               </h1>
               
               <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                  {t.hero.description}
               </p>
            </div>

            {/* Right: Countdown Timer */}
            <div className="flex flex-col items-start md:items-end space-y-4">
               <Countdown />
            </div>

         </div>
      </div>
    </div>
  );
}

