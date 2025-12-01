import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { EventDetails } from "@/components/EventDetails";
import { Countdown } from "@/components/Countdown";
import { EventBadge } from "@/components/EventBadge";

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
      
      {/* Hero Section - Light Theme & Left Aligned */}
      <div className="relative bg-white dark:bg-[#111111] border-b border-slate-200 dark:border-white/5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-12">
           <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">
              
              {/* Left: Text Content */}
              <div className="text-left space-y-4">
                 <EventBadge />

                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                    OneKey Perps: <br/>
                    <span className="text-shimmer">Chase Your First 100x Return</span>
                 </h1>
                 
                 <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                    Join the 7-day trading challenge. Trade or share strategies to win OneKey Classic 1S and exclusive merchandise.
                 </p>
              </div>

              {/* Right: Countdown Timer */}
              <div className="flex flex-col items-start md:items-end space-y-4">
                 <Countdown />
              </div>

           </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
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
