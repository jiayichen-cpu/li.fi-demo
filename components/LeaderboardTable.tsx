'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, maskAddress } from "@/lib/utils";
import { Search } from "lucide-react";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface LeaderboardEntry {
  rank: number;
  address: string;
  volume: number;
  pnl: number;
}

// OneKey Style Rank Badge
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

export function LeaderboardTable({ entries, lastUpdated }: { entries: LeaderboardEntry[], lastUpdated: Date | null }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEntries = entries.filter(entry => 
    entry.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <CardHeader className="border-b border-slate-100 dark:border-white/5 bg-white/50 dark:bg-transparent px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold tracking-tight">Daily Volume Rankings</CardTitle>
            <CardDescription className="mt-1.5 text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Last updated: {lastUpdated ? lastUpdated.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }) : "Pending..."} (UTC+8)
            </CardDescription>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-xl border-0 bg-slate-100 pl-10 text-sm text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-[#00B812] dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-400"
            />
          </div>
        </div>
      </CardHeader>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b border-slate-100 dark:border-white/5">
              <TableHead className="w-[80px] pl-8 font-semibold text-slate-900 dark:text-slate-200">Rank</TableHead>
              <TableHead className="font-semibold text-slate-900 dark:text-slate-200">Trader</TableHead>
              <TableHead className="text-right font-semibold text-slate-900 dark:text-slate-200">24h Volume</TableHead>
              <TableHead className="text-right pr-8 font-semibold text-slate-900 dark:text-slate-200">24h PnL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEntries.length === 0 ? (
               <TableRow>
                 <TableCell colSpan={4} className="h-24 text-center text-slate-500">
                   No results found.
                 </TableCell>
               </TableRow>
            ) : (
              filteredEntries.map((entry) => (
                <TableRow 
                  key={entry.address} 
                  className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors border-b border-slate-50 dark:border-white/5 last:border-0"
                >
                  <TableCell className="pl-8 font-medium py-4">
                    <RankBadge rank={entry.rank} />
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="font-mono text-sm text-slate-600 dark:text-slate-300 bg-slate-100/50 dark:bg-white/5 px-2.5 py-1 rounded-md ring-1 ring-black/5 dark:ring-white/5 group-hover:bg-white dark:group-hover:bg-white/10 transition-all">
                      {maskAddress(entry.address)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono font-medium py-4 text-slate-700 dark:text-slate-200">
                    {formatCurrency(entry.volume)}
                  </TableCell>
                  <TableCell className={`text-right pr-8 font-mono font-bold py-4 ${
                    entry.pnl > 0 
                      ? "text-[#00B812] dark:text-[#00B812]" 
                      : entry.pnl < 0 
                        ? "text-rose-500 dark:text-rose-400" 
                        : "text-slate-400"
                  }`}>
                    {entry.pnl > 0 ? "+" : ""}{formatCurrency(entry.pnl)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
