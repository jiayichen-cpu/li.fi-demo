import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { EventDetails } from "@/components/EventDetails";
import { HeroSection } from "@/components/HeroSection";

interface LeaderboardEntry {
  rank: number;
  address: string;
  volume: number;
  pnl: number;
}

export const dynamic = 'force-dynamic';

export default async function PerpsPage() {
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
      
      <HeroSection />

      {/* Content Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Rules & FAQ (4/12) */}
          <div className="lg:col-span-4 order-2 lg:order-1">
             <EventDetails />
          </div>

          {/* Right Column: Leaderboard (8/12) */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
            <Card className="border-0 shadow-sm dark:shadow-none dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl pb-0">
              <CardContent className="p-0 bg-white dark:bg-[#111111]">
                {!snapshot ? (
                  <div className="flex flex-col items-center justify-center py-24 text-slate-500">
                    <div className="h-12 w-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-4 animate-pulse">
                      <svg className="w-6 h-6 text-slate-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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

        </div>
      </div>
    </main>
  );
}

