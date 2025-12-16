"use client";

import { useLanguage } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function EventDetails() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 h-full">
      {/* Rewards & Schedule */}
      <Card className="border-0 shadow-sm dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl flex-1">
        <CardHeader className=" border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 pt-2 flex flex-col justify-center">
          <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            {t.event_details.ways_to_win}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {/* Method 1 */}
            <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  {t.event_details.method_1.title}
                </h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.event_details.method_1.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    {t.event_details.method_1.cycles.c1}
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    {t.event_details.method_1.cycles.c2}
                  </span>
                </div>
              </div>
            </div>

            {/* Method 2 */}
            <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  {t.event_details.method_2.title}
                </h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.event_details.method_2.desc}
                </p>
                <ul className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4 marker:text-slate-400 mt-2">
                  <li>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {t.event_details.method_2.prizes.w1}
                    </span>{" "}
                    {t.event_details.method_2.prizes.p1}
                  </li>
                  <li>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {t.event_details.method_2.prizes.w2}
                    </span>{" "}
                    {t.event_details.method_2.prizes.p2}
                  </li>
                </ul>
              </div>
            </div>

            {/* Method 3 */}
            <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  {t.event_details.method_3.title}
                </h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.event_details.method_3.desc_prefix}{" "}
                  <strong className="text-slate-900 dark:text-white">
                    {t.event_details.method_3.desc_highlight}
                  </strong>{" "}
                  {t.event_details.method_3.desc_suffix}{" "}
                  <strong className="text-slate-900 dark:text-white">
                    {t.event_details.method_3.desc_prize}
                  </strong>
                  {t.event_details.method_3.desc_end}
                </p>
                <p className="text-[11px] text-slate-400 italic pt-0.5">
                  {t.event_details.method_3.note}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="border-0 shadow-sm dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl">
        <CardHeader className=" border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 pt-2 flex flex-col justify-center">
          <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            {t.event_details.quick_guide}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-slate-100 dark:border-white/5"
            >
              <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
                {t.event_details.q1.title}
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-4 pt-0">
                <div className="space-y-2">
                  <ul className="space-y-1.5 text-[13px] text-slate-600 dark:text-slate-400 list-disc pl-5 marker:text-slate-400">
                    <li>{t.event_details.q1.step1}</li>
                    <li>{t.event_details.q1.step2}</li>
                    <li>{t.event_details.q1.step3}</li>
                    <li>{t.event_details.q1.step4}</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/10">
                    <p className="text-[13px] font-medium text-slate-900 dark:text-white mb-2">
                      {t.event_details.q1.ref_title}
                    </p>
                    <ul className="space-y-1 text-[13px] text-slate-600 dark:text-slate-400 list-disc pl-5 marker:text-slate-400">
                      <li>
                        <a
                          href="https://onekey.so/download/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-900 dark:text-white font-medium hover:underline"
                        >
                          {t.event_details.q1.ref_link}
                        </a>
                        {t.event_details.q1.ref_link_suffix}
                      </li>
                      <li>
                        <a
                          href={t.event_details.q1.ref_guide_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-900 dark:text-white font-medium hover:underline"
                        >
                          {t.event_details.q1.ref_guide}
                        </a>
                        {t.event_details.q1.ref_guide_suffix}
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-slate-100 dark:border-white/5"
            >
              <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
                {t.event_details.q2.title}
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-4 pt-0">
                <div className="space-y-2">
                  <ul className="space-y-1.5 text-[13px] text-slate-600 dark:text-slate-400 list-disc pl-5 marker:text-slate-400">
                    <li>{t.event_details.q2.step1}</li>
                    <li>
                      {t.event_details.q2.step2_prefix}
                      <a
                        href="https://help.onekey.so/en/articles/12979733-onekey-perps-unlock-your-first-100x-returns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 dark:text-white font-medium hover:underline"
                      >
                        {t.event_details.q2.step2_link}
                      </a>
                      {t.event_details.q2.step2_suffix}
                      <br />
                      <span className="italic text-slate-500 dark:text-slate-400">
                        {t.event_details.q2.step2_note}
                      </span>
                    </li>
                    <li>{t.event_details.q2.step3}</li>
                    <li>
                      {t.event_details.q2.step4_prefix}{" "}
                      <a
                        href="https://x.com/hashtag/OneKeyPerps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-900 dark:text-white hover:underline"
                      >
                        #OneKeyPerps
                      </a>{" "}
                      {t.event_details.q2.step4_middle}{" "}
                      <a
                        href="https://x.com/OneKeyHQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-900 dark:text-white hover:underline"
                      >
                        @OneKeyHQ
                      </a>
                      {t.event_details.q2.step4_suffix}
                    </li>
                    {t.event_details.q2.step5 && (
                      <li>{t.event_details.q2.step5}</li>
                    )}
                    <li>
                      {t.event_details.q2.step6_prefix}{" "}
                      <a
                        href="https://x.com/OneKeyHQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-900 dark:text-white hover:underline"
                      >
                        @OneKeyHQ
                      </a>{" "}
                      {t.event_details.q2.step6_suffix}
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              id="q3-accordion-item"
              value="item-3"
              className="border-b-0 border-slate-100 dark:border-white/5"
            >
              <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
                {t.event_details.q3.title}
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-4 pt-0">
                <div className="space-y-2">
                  <p className="text-[13px] text-slate-600 dark:text-slate-400">
                    {t.event_details.q3.intro}
                  </p>
                  <ul className="space-y-1 text-[13px] text-slate-600 dark:text-slate-400 list-disc pl-5 marker:text-slate-400">
                    <li>{t.event_details.q3.list1}</li>
                    <li>{t.event_details.q3.list2}</li>
                    <li>{t.event_details.q3.list3}</li>
                  </ul>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t.event_details.q3.claim_desc}
                  </p>
                  <div className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">
                    <p className="font-medium text-slate-900 dark:text-white">
                      {t.event_details.q3.sign_intro}
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>{t.event_details.q3.sign_step1}</li>
                      <li>{t.event_details.q3.sign_step2}</li>
                      <li>
                        {t.event_details.q3.sign_step3_prefix}{" "}
                        <a
                          href="https://x.com/OneKeyHQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-900 dark:text-white hover:underline"
                        >
                          @OneKeyHQ
                        </a>
                      </li>
                    </ol>
                    <p>
                      {t.event_details.q3.help_prefix}
                      <a
                        href="https://help.onekey.so/en/articles/12979733-onekey-perps-unlock-your-first-100x-returns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 dark:text-white font-medium hover:underline"
                      >
                        {t.event_details.q3.help_link}
                      </a>
                      {t.event_details.q3.help_suffix}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
