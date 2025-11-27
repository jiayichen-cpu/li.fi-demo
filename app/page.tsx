import { prisma } from "@/lib/prisma";
import { formatCurrency, maskAddress } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Plan listed table, card, button. Badge wasn't listed, but it's nice for Rank.
// I'll just use simple styling for now to avoid extra steps unless needed.

interface LeaderboardEntry {
  rank: number;
  address: string;
  volume: number;
  pnl: number; // Added PnL
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
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-slate-50 dark:bg-slate-950">
      <div className="z-10 w-full max-w-4xl items-center justify-between font-mono text-sm lg:flex mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Perps Trading Leaderboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          OneKey Users - 24h Volume & PnL
        </p>
      </div>

      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader>
          <CardTitle>Daily Volume Rankings</CardTitle>
          <CardDescription>
            Last updated: {snapshot ? new Date(snapshot.date).toLocaleString() : "Never"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!snapshot ? (
             <div className="text-center py-10 text-slate-500">
               No data available yet. Run the cron job to populate data.
             </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Rank</TableHead>
                  <TableHead>User Address</TableHead>
                  <TableHead className="text-right">24h Volume (USD)</TableHead>
                  <TableHead className="text-right">24h PnL (USD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.address}>
                    <TableCell className="font-medium">
                      {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : entry.rank}
                    </TableCell>
                    <TableCell className="font-mono">{maskAddress(entry.address)}</TableCell>
                    <TableCell className="text-right font-bold text-emerald-600 dark:text-emerald-400">
                      {formatCurrency(entry.volume)}
                    </TableCell>
                    <TableCell className={`text-right font-bold ${entry.pnl >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                      {entry.pnl >= 0 ? "+" : ""}{formatCurrency(entry.pnl)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
