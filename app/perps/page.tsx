import { Card, CardContent } from "@/components/ui/card";
import { LeaderboardTable } from "@/components/PerpsLeaderboardTable";
import { EventDetails } from "@/components/EventDetails";
import { HeroSection } from "@/components/PerpsHeroSection";
import { ResultBanner } from "@/components/ResultBanner";
import { LEADERBOARD_DATA } from "@/lib/leaderboardData";

export const dynamic = "force-dynamic";

export default function PerpsPage() {
  // Use static data since the event has ended.
  // LEADERBOARD_DATA already contains the finalized results.
  const entries = LEADERBOARD_DATA;
  // Set a fixed end date for "Last Updated"
  const finalUpdateDate = new Date("2025-12-11T16:00:00Z");

  return (
    <main className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500/30">
      <ResultBanner />
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
                <LeaderboardTable
                  entries={entries}
                  lastUpdated={finalUpdateDate}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
