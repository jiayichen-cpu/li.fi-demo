"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockLeaderboardData } from "@/data/mockLeaderboard";
import { maskAddress, formatCurrency } from "@/lib/utils";

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 shadow-sm ring-1 ring-yellow-600/20">
        <span className="text-xs font-bold">1</span>
      </div>
    );
  }
  if (rank === 2) {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 shadow-sm ring-1 ring-slate-600/10">
        <span className="text-xs font-bold">2</span>
      </div>
    );
  }
  if (rank === 3) {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 shadow-sm ring-1 ring-orange-600/20">
        <span className="text-xs font-bold">3</span>
      </div>
    );
  }
  return <span className="pl-1.5 font-mono text-slate-500 text-sm">{rank}</span>;
}

export function DailyVolumeLeaderboard() {
  const { t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState<number>(1);

  return (
    <Card className="border-0 shadow-sm dark:shadow-none dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl pb-0">
      <CardHeader className="border-b border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 h-[72px] flex flex-col justify-center">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex flex-col justify-center">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.leaderboard.title}
            </CardTitle>
            <CardDescription className="mt-0.5 text-[10px] text-slate-400 hidden md:block">
              {t.leaderboard.last_updated} {new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour12: false, month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) + " UTC+8"}
            </CardDescription>
          </div>
          
          {/* Date Selector Placeholder */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedDay === day
                    ? "bg-[#00B812] text-white"
                    : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0 bg-white dark:bg-[#111111]">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-slate-100 dark:border-white/5">
                <TableHead className="w-[80px] pl-8 font-semibold text-slate-900 dark:text-slate-200 h-[44px]">
                  {t.leaderboard.headers.rank}
                </TableHead>
                <TableHead className="font-semibold text-slate-900 dark:text-slate-200 h-[44px]">
                  {t.leaderboard.headers.address}
                </TableHead>
                <TableHead className="text-right font-semibold text-slate-900 dark:text-slate-200 h-[44px]">
                  {t.leaderboard.headers.daily_volume}
                </TableHead>
                <TableHead className="text-right pr-8 font-semibold text-slate-900 dark:text-slate-200 h-[44px]">
                  {t.leaderboard.headers.tx_count}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLeaderboardData.map((entry) => (
                <TableRow 
                  key={entry.address} 
                  className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors border-b border-slate-50 dark:border-white/5 h-[60px]"
                >
                  <TableCell className="pl-8 font-medium h-[60px]">
                    <RankBadge rank={entry.rank} />
                  </TableCell>
                  <TableCell className="h-[60px]">
                    <span className="font-mono text-sm text-slate-600 dark:text-slate-300 bg-slate-100/50 dark:bg-white/5 px-2.5 py-1 rounded-md ring-1 ring-black/5 dark:ring-white/5 group-hover:bg-white dark:group-hover:bg-white/10 transition-all">
                      {maskAddress(entry.address)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono font-medium h-[60px] text-slate-700 dark:text-slate-200">
                    {formatCurrency(entry.dailyVolume)}
                  </TableCell>
                  <TableCell className="text-right pr-8 font-mono font-medium h-[60px] text-slate-700 dark:text-slate-200">
                    {entry.txCount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

