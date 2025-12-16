"use client";

import { useLanguage } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DailyRewards() {
  const { t } = useLanguage();

  return (
    <Card className="border-0 shadow-sm dark:shadow-none dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl">
      <CardHeader className="border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 pt-2 flex flex-col justify-center">
        <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          {t.daily_rewards.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="px-8 pb-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t.daily_rewards.description}
          </p>
          <div className="space-y-4">
            <div className="px-4 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors rounded-lg">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                {t.daily_rewards.reward_1.title}
              </h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.daily_rewards.reward_1.desc}
              </p>
            </div>
            <div className="px-4 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors rounded-lg">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                {t.daily_rewards.reward_2.title}
              </h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.daily_rewards.reward_2.desc}
              </p>
            </div>
            <div className="px-4 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors rounded-lg">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                {t.daily_rewards.reward_3.title}
              </h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.daily_rewards.reward_3.desc}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
