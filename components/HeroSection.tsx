'use client';

import { Countdown } from "@/components/Countdown";
import { useLanguage } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-b from-[#F0FDF4] to-white dark:from-[#00B812]/10 dark:to-[#111111] border-b border-slate-200 dark:border-white/5 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-12">
         {/* Header: Logo & Language Switcher */}
         <div className="flex justify-between items-center mb-12 lg:mb-8">
            <img src="/onekey_icon_default_solid_green_black.svg" alt="OneKey Logo" className="h-8 w-8" />
            <LanguageSwitcher />
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
            
            {/* Left: Text Content */}
            <div className="text-left space-y-4">
               <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  {t.hero.title_prefix} <br/>
                  <span 
                    style={{
                      backgroundImage: 'linear-gradient(to right, #00B812 20%, #16a34a 40%, #4ade80 50%, #16a34a 60%, #00B812 80%)',
                      backgroundSize: '200% auto',
                      animation: 'shine 4s linear infinite',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      display: 'inline-block' 
                    }}
                  >
                    {t.hero.title_suffix}
                  </span>
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

