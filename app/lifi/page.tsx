import { LifiHeroSection } from "@/components/HeroSection";
import { LifiQuickGuide } from "@/components/QuickGuide";
import { LifiLeaderboardTable } from "@/components/LeaderboardTable";
import { LifiFAQ } from "@/components/FAQ";

export default function LifiPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] dark:bg-[#000000] text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500/30">
      <LifiHeroSection />

      {/* Content Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Rules & Info (4/12) */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-6">
            <LifiQuickGuide />
            <LifiFAQ />
          </div>

          {/* Right Column: Main Content (8/12) */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
            <LifiLeaderboardTable />
          </div>

        </div>
      </div>
    </main>
  );
}

