"use client";

import { useLanguage } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TeamLeaderboard() {
  const { t } = useLanguage();

  return (
    <Card className="border-0 shadow-sm dark:shadow-none dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl">
      <CardHeader className="border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 pt-2 flex flex-col justify-center">
        <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          {t.team_leaderboard.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="px-8 pb-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {t.team_leaderboard.description}
          </p>
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">
              {t.team_leaderboard.how_it_works}
            </h4>
            <ul className="space-y-3 text-[13px] text-slate-600 dark:text-slate-400 list-disc pl-5 marker:text-slate-400">
              <li>{t.team_leaderboard.step_1}</li>
              <li>{t.team_leaderboard.step_2}</li>
              <li>{t.team_leaderboard.step_3}</li>
              <li>{t.team_leaderboard.step_4}</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
