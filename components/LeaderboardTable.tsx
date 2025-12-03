'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, maskAddress } from "@/lib/utils";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Filter entries
  const filteredEntries = entries.filter(entry => 
    entry.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredEntries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEntries = filteredEntries.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when search changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <CardHeader className="border-b border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 h-[72px] flex flex-col justify-center">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex flex-col justify-center">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
               {t.leaderboard.title}
            </CardTitle>
            <CardDescription className="mt-0.5 text-[10px] text-slate-400 hidden md:block">
              {t.leaderboard.updated} {lastUpdated ? lastUpdated.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour12: false, month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) + " UTC+8" : "--/-- --:--"}
            </CardDescription>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-40 md:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t.leaderboard.search_placeholder}
              value={searchQuery}
              onChange={handleSearch}
              className="h-10 w-full rounded-xl border-0 bg-slate-100 pl-10 text-sm text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-[#00B812] dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-400"
            />
          </div>
        </div>
      </CardHeader>

      {/* Table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-slate-100 dark:border-white/5">
                <TableHead className="w-[80px] pl-8 font-semibold text-slate-900 dark:text-slate-200 h-[44px]">{t.leaderboard.headers.rank}</TableHead>
                <TableHead className="font-semibold text-slate-900 dark:text-slate-200 h-[44px]">{t.leaderboard.headers.trader}</TableHead>
                <TableHead className="text-right font-semibold text-slate-900 dark:text-slate-200 h-[44px]">{t.leaderboard.headers.volume}</TableHead>
                <TableHead className="text-right pr-8 font-semibold text-slate-900 dark:text-slate-200 h-[44px]">{t.leaderboard.headers.pnl}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedEntries.length === 0 ? (
                 <TableRow className="h-[900px]">
                   <TableCell colSpan={4} className="text-center text-slate-500">
                     {t.leaderboard.no_results}
                   </TableCell>
                 </TableRow>
              ) : (
                <>
                  {paginatedEntries.map((entry) => (
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
                        {formatCurrency(entry.volume)}
                      </TableCell>
                      <TableCell className={`text-right pr-8 font-mono font-bold h-[60px] ${
                        entry.pnl > 0 
                          ? "text-[#00B812] dark:text-[#00B812]" 
                        : entry.pnl < 0 
                          ? "text-rose-500 dark:text-rose-400" 
                          : "text-slate-400"
                      }`}>
                        {entry.pnl > 0 ? "+" : ""}{formatCurrency(entry.pnl)}
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* Fill empty rows to always show 15 rows */}
                  {Array.from({ length: itemsPerPage - paginatedEntries.length }).map((_, index) => (
                    <TableRow key={`empty-${index}`} className="h-[60px] border-b border-slate-50 dark:border-white/5">
                      <TableCell className="h-[60px]">&nbsp;</TableCell>
                      <TableCell className="h-[60px]">&nbsp;</TableCell>
                      <TableCell className="h-[60px]">&nbsp;</TableCell>
                      <TableCell className="h-[60px]">&nbsp;</TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination Controls */}
        {filteredEntries.length > 0 && (
            <div className="flex-shrink-0 flex items-center justify-center px-6 py-6 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="h-8 w-8 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-sm font-medium px-2">
                   {t.leaderboard.page} {currentPage} {t.leaderboard.of} {totalPages}{t.leaderboard.page_unit}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
        )}
      </div>
    </>
  );
}
