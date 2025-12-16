"use client";

import { useLanguage } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HowToParticipate() {
  const { t } = useLanguage();

  return (
    <Card className="border-0 shadow-sm dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl">
      <CardHeader className="border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 pt-2 flex flex-col justify-center">
        <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          {t.how_to_participate.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                {t.how_to_participate.step_1.title}
              </h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.how_to_participate.step_1.desc}
              </p>
            </div>
          </div>
          <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                {t.how_to_participate.step_2.title}
              </h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.how_to_participate.step_2.desc}
              </p>
            </div>
          </div>
          <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                {t.how_to_participate.step_3.title}
              </h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.how_to_participate.step_3.desc}
              </p>
            </div>
          </div>
          <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                {t.how_to_participate.step_4.title}
              </h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.how_to_participate.step_4.desc}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
