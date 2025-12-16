"use client";

import { useLanguage } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function QuickGuide() {
  const { t } = useLanguage();

  return (
    <Card className="border-0 shadow-sm dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl">
      <CardHeader className="border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 pt-2 flex flex-col justify-center">
        <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          {t.quick_guide.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          {/* Step 1 */}
          <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-slate-900 dark:text-white">
                  1
                </span>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                    {t.quick_guide.trading.step1.title}
                  </h4>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                    {t.quick_guide.trading.step1.desc}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="h-8 text-xs"
                  >
                    <a
                      href={t.quick_guide.trading.step1.swap_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      {t.quick_guide.trading.step1.swap_button}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-slate-900 dark:text-white">
                  2
                </span>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                    {t.quick_guide.trading.step2.title}
                  </h4>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                    {t.quick_guide.trading.step2.desc}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="h-8 text-xs"
                  >
                    <a
                      href={t.quick_guide.trading.step2.help_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      {t.quick_guide.trading.step2.help_button}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-slate-900 dark:text-white">
                  3
                </span>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                    {t.quick_guide.trading.step3.title}
                  </h4>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t.quick_guide.trading.step3.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Participation */}
          <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors bg-slate-50/30 dark:bg-white/[0.01]">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                {t.quick_guide.team.title}
              </h4>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.quick_guide.team.desc}
              </p>
              <Button
                variant="default"
                size="sm"
                asChild
                className="h-8 text-xs bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-white/90 dark:text-slate-900"
              >
                <a
                  href={t.quick_guide.team.form_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  {t.quick_guide.team.form_button}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
