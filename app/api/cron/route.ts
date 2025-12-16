import { NextRequest, NextResponse } from 'next/server';
import { fetchDailyFills, aggregateVolume } from '@/lib/hydromancer';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic'; // static by default, unless reading request

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const builderAddress = process.env.ONEKEY_BUILDER_ADDRESS;
    if (!builderAddress) {
        return new NextResponse('ONEKEY_BUILDER_ADDRESS not configured', { status: 500 });
    }

    console.log('Starting Cron Job: Fetching daily fills...');
    const fills = await fetchDailyFills(builderAddress);
    console.log(`Fetched ${fills.length} fills.`);

    const leaderboard = await aggregateVolume(fills);
    console.log(`Aggregated ${leaderboard.length} users.`);

    // Create snapshot
    const today = new Date();
    // Normalize date to midnight for consistency if needed, or just use exact timestamp
    // The requirement is "every 24h", effectively a daily snapshot.
    // We'll use the current time as the snapshot key.
    
    const snapshot = await prisma.leaderboardSnapshot.create({
      data: {
        date: today,
        totalVolume: leaderboard.reduce((acc, curr) => acc + curr.volume, 0),
        entries: JSON.stringify(leaderboard),
      },
    });

    return NextResponse.json({ success: true, snapshotId: snapshot.id, entriesCount: leaderboard.length });
  } catch (error) {
    console.error('Cron job failed:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

