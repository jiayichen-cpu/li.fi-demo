'use client';

import { useLanguage } from '@/lib/i18n';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { maskAddress, formatCurrency } from "@/lib/utils";

interface LeaderboardEntry {
  rank: number;
  address: string;
  volume: number;
  pnl: number;
}

interface PerpsLeaderboardTableProps {
  entries: LeaderboardEntry[];
  lastUpdated: Date;
}

export function LeaderboardTable({ entries, lastUpdated }: PerpsLeaderboardTableProps) {
  const { t, locale } = useLanguage();

  const formatDate = (date: Date) => {
    // Use the user's locale based on current language setting
    const dateLocale = locale === 'zh' ? 'zh-CN' : 'en-US';
    return date.toLocaleString(dateLocale, { 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="w-full">
      <div className="border-b border-slate-100 dark:border-white/5 px-8 py-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            {t.leaderboard.title}
          </h3>
          <p className="text-[10px] text-slate-400 mt-0.5">
            {t.leaderboard.last_updated} {formatDate(lastUpdated)}
          </p>
        </div>
      </div>

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
                {t.leaderboard.headers.pnl || "24h PnL"}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-12 text-slate-500">
                  {t.leaderboard.no_results}
                </TableCell>
              </TableRow>
            ) : (
              entries.map((entry) => (
                <TableRow 
                  key={entry.address} 
                  className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors border-b border-slate-50 dark:border-white/5 h-[60px]"
                >
                  <TableCell className="pl-8 font-medium h-[60px]">
                    <span className="font-mono text-sm text-slate-500">{entry.rank}</span>
                  </TableCell>
                  <TableCell className="h-[60px]">
                    <span className="font-mono text-sm text-slate-600 dark:text-slate-300 bg-slate-100/50 dark:bg-white/5 px-2.5 py-1 rounded-md ring-1 ring-black/5 dark:ring-white/5 group-hover:bg-white dark:group-hover:bg-white/10 transition-all">
                      {maskAddress(entry.address)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono font-medium h-[60px] text-slate-700 dark:text-slate-200">
                    {formatCurrency(entry.volume)}
                  </TableCell>
                  <TableCell className={`text-right pr-8 font-mono font-medium h-[60px] ${entry.pnl >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                    {entry.pnl >= 0 ? '+' : ''}{formatCurrency(entry.pnl)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

