"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";
import { maskAddress } from "@/lib/utils";
import { Trophy, Gift, Video } from "lucide-react";

export function AwardsSection() {
  const { t } = useLanguage();

  const volumeWinners = [
    "0x0c61b057acc778517e3e49d2a052c6207397ce5b",
    "0xca3a84068be42a4e0dcef92fe0d080fae28fdd02",
    "0x9fdab5aedf5e372bfe1a819535bbc89957f3e3e5",
    "0x88c28af7e9a54bfd0508071419ab4555bde642a5",
    "0x0cc30f47f92c9c3720dff6bb587960a86fb339cf",
  ];

  const merchWinners = [
    "0xf911d613caf6d8a87951ea845fada5e6af2c448c",
    "0xd273b83e68712f4b006044650fb00df06420339e",
    "0x28d1359e3c37013a4f309d27c275cd2eef94b56b",
    "0x5c3e83415e0c9427749193d6a5bcf1acc87e8f70",
    "0x5fe4030a0d838b6dd6a31f0074ce868ac7db32ff",
    "0xe16ec5963c911d4459e317928e7a835ddcf4b1e4",
  ];

  const contentWinners = {
    classic: ["@jobin444343"],
    merch: ["@Shohan83117450", "@CryptoV82385"],
  };

  return (
    <Card className="border-0 shadow-sm dark:shadow-none dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl mb-8 gap-0">
      <CardHeader className=" border-slate-100  bg-white dark:bg-transparent px-8 h-[72px] flex flex-col justify-center items-start">
        <CardTitle className="text-[14px] font-bold uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-2">
          {t.awards.title}
        </CardTitle>
        <div className="mt-0.5 text-[10px] text-slate-400 flex items-center">
          <span>{t.awards.claim_info.subtitle_prefix}</span>
          <button 
            onClick={() => {
              const q3Element = document.getElementById('q3-accordion-item');
              if (q3Element) {
                q3Element.scrollIntoView({ behavior: 'smooth' });
                const trigger = q3Element.querySelector('button[aria-expanded="false"]') as HTMLButtonElement;
                if (trigger) trigger.click();
              }
            }}
            className="text-[#00B812] hover:text-[#00B812]/80 font-medium transition-colors cursor-pointer hover:underline flex items-center"
          >
            {t.awards.claim_info.subtitle_link}
          </button>
          {t.awards.claim_info.subtitle_suffix && <span>{t.awards.claim_info.subtitle_suffix}</span>}
        </div>
      </CardHeader>
      <CardContent className="p-0 bg-white dark:bg-[#111111]">
        <div className="flex flex-col divide-y divide-slate-100 dark:divide-white/5">
          {/* 1. Volume Awards */}
          <div className="px-8 py-6 space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">
              {t.awards.volume_awards.title}
            </h3>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
              {t.awards.volume_awards.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {volumeWinners.map((addr) => (
                <div key={addr} className="flex items-center text-sm">
                  <span className="font-mono text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/5 px-1 py-1.5 rounded-md text-xs w-[120px] text-center truncate">
                    {maskAddress(addr)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Merch Awards */}
          <div className="px-8 py-6 space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">
              {t.awards.merch_awards.title}
            </h3>
             <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
              {t.awards.merch_awards.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
               {merchWinners.map((addr) => (
                <div key={addr} className="flex items-center text-sm">
                  <span className="font-mono text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/5 px-1 py-1.5 rounded-md text-xs w-[120px] text-center truncate">
                    {maskAddress(addr)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Content Awards */}
          <div className="px-8 py-6 space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">
              {t.awards.content_awards.title}
            </h3>
            <div className="hidden">
              {/* Spacer removed for vertical layout */}
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t.awards.content_awards.classic_prize}
                </p>
                <div className="flex flex-wrap gap-2">
                  {contentWinners.classic.map((handle) => (
                    <div
                      key={handle}
                      className="font-mono text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 rounded-md text-center text-xs w-[140px] truncate"
                    >
                      {handle}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t.awards.content_awards.merch_prize}
                </p>
                <div className="flex flex-wrap gap-2">
                  {contentWinners.merch.map((handle) => (
                    <div
                      key={handle}
                      className="font-mono text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/5 px-2.5 py-1.5 rounded-md text-center text-xs w-[140px] truncate"
                    >
                      {handle}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
