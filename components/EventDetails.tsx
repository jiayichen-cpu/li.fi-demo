import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function EventDetails() {
  return (
    <div className="space-y-6 h-full">
      {/* Rewards & Schedule */}
      <Card className="border-0 shadow-sm dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl flex-1">
        <CardHeader className=" border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 pt-2 flex flex-col justify-center">
          <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Ways to Win
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {/* Method 1 */}
            <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Trade to join the prize draw
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Complete two Perps trades within a cycle to automatically
                  enter the current draw. Each cycle selects{" "}
                  <strong className="text-slate-900 dark:text-white">
                    three winners
                  </strong>
                  , who will receive a set of OneKey merchandise.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    Cycle 1: Dec 3-5
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    Cycle 2: Dec 6-9
                  </span>
                </div>
              </div>
            </div>

            {/* Method 2 */}
            <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Share your content to join the draw
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Post content related to your OneKey Perps trading logic,
                  strategies, or trade reviews on social media with your
                  referral link/image.
                </p>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4 marker:text-slate-400 mt-2">
                  <li>
                    <span className="font-medium text-slate-900 dark:text-white">
                      1 Winner:
                    </span>{" "}
                    OneKey Classic 1S.
                  </li>
                  <li>
                    <span className="font-medium text-slate-900 dark:text-white">
                      2 Winners:
                    </span>{" "}
                    OneKey Merchandise Set.
                  </li>
                </ul>
              </div>
            </div>

            {/* Method 3 */}
            <div className="px-8 py-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Trading volume ranking rewards
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  After the event ends, the{" "}
                  <strong className="text-slate-900 dark:text-white">
                    top five users
                  </strong>{" "}
                  by trading volume will each receive a{" "}
                  <strong className="text-slate-900 dark:text-white">
                    OneKey Classic 1S hardware wallet
                  </strong>
                  .
                </p>
                <p className="text-xs text-slate-400 italic pt-0.5">
                  * Final ranking will be published here after the event ends.
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
            Quick Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-slate-100 dark:border-white/5">
              <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
                Q1. How do I place my first Perps trade?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-4 pt-0">
                <div className="space-y-2">
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 marker:text-slate-400">
                    <li>Download or open the OneKey App.</li>
                    <li>Go to the Perps trading page from the home screen.</li>
                    <li>Deposit funds and open a position.</li>
                    <li>Complete two trades within a cycle to join the draw.</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/10">
                    <p className="text-xs font-medium text-slate-900 dark:text-white mb-2">
                      Reference resources:
                    </p>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 list-disc pl-5 marker:text-slate-400">
                      <li>
                        <a 
                          href="https://onekey.so/download/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-900 dark:text-white font-medium hover:underline"
                        >
                          OneKey App download link
                        </a>.
                      </li>
                      <li>Perps quick start guide (links added after preview phase).</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-slate-100 dark:border-white/5">
              <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
                Q2. How do I participate through content sharing?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-4 pt-0">
                <div className="space-y-2">
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 marker:text-slate-400">
                    <li>(Optional) Open any Perps position.</li>
                    <li>Go to the referral page to generate your referral link or code.</li>
                    <li>Publish your trading logic, reviews, screenshots, or opinions on platforms such as X, Telegram, Discord, Xiaohongshu, or WeChat.</li>
                    <li>
                      Posts on X must include the hashtag{" "}
                      <a 
                        href="https://x.com/hashtag/OneKeyPerps" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-slate-900 dark:text-white hover:underline"
                      >
                        #OneKeyPerps
                      </a>{" "}
                      and tag{" "}
                      <a 
                        href="https://x.com/OneKeyCN" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-slate-900 dark:text-white hover:underline"
                      >
                        @OneKeyCN
                      </a>{" "}
                      <a 
                        href="https://x.com/OneKeyHQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-slate-900 dark:text-white hover:underline"
                      >
                        @OneKeyHQ
                      </a>.
                    </li>
                    <li>Your post must contain your referral link or a position share image.</li>
                    <li>
                      After publishing, send your post to{" "}
                      <a 
                        href="https://x.com/OneKeyCN" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-slate-900 dark:text-white hover:underline"
                      >
                        @OneKeyCN
                      </a>{" "}
                      or{" "}
                      <a 
                        href="https://x.com/OneKeyHQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-slate-900 dark:text-white hover:underline"
                      >
                        @OneKeyHQ
                      </a>{" "}
                      via direct message on X, or submit it to customer support on the official Help Center.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b-0 border-slate-100 dark:border-white/5">
              <AccordionTrigger className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:no-underline hover:bg-slate-50/50 dark:hover:bg-white/[0.02] text-left justify-start gap-2 [&>svg]:ml-auto">
                Q3. How do I claim my prize?
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-4 pt-0">
                <div className="space-y-2">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    After the event, we will publish:
                  </p>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 marker:text-slate-400">
                    <li>The cycle draw winners.</li>
                    <li>Content selection results.</li>
                    <li>The top trading volume rankings.</li>
                  </ul>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Winners may claim their prizes by sending a direct message to the official X account or by submitting a support ticket.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    You will need to provide a screenshot of the corresponding account address inside the OneKey App.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
