"use client";

import { useLifiLanguage } from "@/lib/i18n-lifi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

export function LifiFAQ() {
  const { t } = useLifiLanguage();

  return (
    <Card className="border-0 shadow-sm dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl">
      <CardHeader className="border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 pt-2 flex flex-col justify-center">
        <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          {t.faq.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className="border-slate-100 dark:border-white/5"
          >
            <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
              {t.faq.q1.title}
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-4 pt-0">
              <div className="space-y-3 text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>{t.faq.q1.answer}</p>
                <ul className="space-y-1.5 list-disc pl-5 marker:text-slate-400">
                  {t.faq.q1.conditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
                <p className="pt-1">{t.faq.q1.note}</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border-slate-100 dark:border-white/5"
          >
            <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
              {t.faq.q2.title}
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-4 pt-0">
              <div className="space-y-3 text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>{t.faq.q2.answer}</p>
                <p className="font-medium text-slate-900 dark:text-white">{t.faq.q2.daily_prizes}</p>
                <ul className="space-y-1.5 list-disc pl-5 marker:text-slate-400">
                  {t.faq.q2.prize_list.map((prize, index) => (
                    <li key={index}>{prize}</li>
                  ))}
                </ul>
                <p className="pt-1">{t.faq.q2.announcement}</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border-slate-100 dark:border-white/5"
          >
            <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
              {t.faq.q3.title}
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-4 pt-0">
              <div className="space-y-3 text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>{t.faq.q3.answer}</p>
                <p>{t.faq.q3.ranking}</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border-b-0 border-slate-100 dark:border-white/5"
          >
            <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
              {t.faq.q4.title}
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-4 pt-0">
              <div className="space-y-3 text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>{t.faq.q4.answer}</p>
                <ul className="space-y-1.5 list-disc pl-5 marker:text-slate-400">
                  <li>{t.faq.q4.rewards.top1}</li>
                  <li>{t.faq.q4.rewards.top2}</li>
                  <li>{t.faq.q4.rewards.top3}</li>
                </ul>
                <p className="pt-1">{t.faq.q4.distribution}</p>
                <p>
                  {t.faq.q4.help_text}{" "}
                  <a
                    href={t.faq.q4.help_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 dark:text-white font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {t.faq.q4.help_link_text}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
