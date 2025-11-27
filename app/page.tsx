import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { LeaderboardTable } from "@/components/LeaderboardTable";

interface LeaderboardEntry {
  rank: number;
  address: string;
  volume: number;
  pnl: number;
}

export const dynamic = 'force-dynamic';

export default async function Home() {
  const snapshot = await prisma.leaderboardSnapshot.findFirst({
    orderBy: {
      date: 'desc',
    },
  });

  const entries: LeaderboardEntry[] = snapshot
    ? JSON.parse(snapshot.entries)
    : [];

  return (
    <main className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white mb-6">
              OneKey Perps Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B812] to-[#00D615]">Leaderboard</span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Daily performance tracking for top traders in the OneKey ecosystem. 
              Monitor 24h volume and PnL with precision.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
        <Card className="border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none dark:bg-[#111111] dark:border dark:border-white/10 backdrop-blur-sm overflow-hidden rounded-3xl transition-all duration-200">
          <CardContent className="p-0 bg-white dark:bg-[#111111]">
            {!snapshot ? (
              <div className="flex flex-col items-center justify-center py-24 text-slate-500">
                <div className="h-12 w-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-4 animate-pulse">
                  <svg className="w-6 h-6 text-slate-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <p className="font-medium">Awaiting data synchronization...</p>
              </div>
            ) : (
              <LeaderboardTable 
                entries={entries} 
                lastUpdated={new Date(snapshot.date)} 
              />
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
