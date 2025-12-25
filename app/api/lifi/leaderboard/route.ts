import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { LeaderboardEntry } from '@/data/mockLeaderboard';
import { mockLeaderboardData } from '@/data/mockLeaderboard';

export const dynamic = 'force-dynamic';

/**
 * 获取最新的 LI.FI 排行榜数据
 * 如果数据库中有今天的数据，返回数据库中的数据
 * 否则返回静态数据作为后备
 */
export async function GET() {
  try {
    // 获取今天的日期（UTC+8 时区的今天）
    // 获取当前 UTC+8 时区的日期
    const nowUTC8 = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    const year = nowUTC8.getFullYear();
    const month = nowUTC8.getMonth();
    const date = nowUTC8.getDate();
    
    // UTC+8 时区今天的 00:00:00
    const todayStartUTC8 = new Date(year, month, date, 0, 0, 0, 0);
    
    // 转换为 UTC 时间（减去 8 小时）
    const todayStartUTC = new Date(todayStartUTC8.getTime() - 8 * 60 * 60 * 1000);

    // 尝试获取今天的快照
    const snapshot = await prisma.lifiLeaderboardSnapshot.findUnique({
      where: { date: todayStartUTC },
    });

    if (snapshot && snapshot.entries) {
      // 解析数据库中的数据
      const entries: LeaderboardEntry[] = JSON.parse(snapshot.entries);
      
      return NextResponse.json({
        success: true,
        entries,
        lastUpdated: snapshot.date.toISOString(),
        source: 'database',
      });
    }

    // 如果没有今天的快照，尝试获取最新的快照
    const latestSnapshot = await prisma.lifiLeaderboardSnapshot.findFirst({
      orderBy: { date: 'desc' },
    });

    if (latestSnapshot && latestSnapshot.entries) {
      const entries: LeaderboardEntry[] = JSON.parse(latestSnapshot.entries);
      
      return NextResponse.json({
        success: true,
        entries,
        lastUpdated: latestSnapshot.date.toISOString(),
        source: 'database_latest',
      });
    }

    // 如果数据库中没有数据，返回静态数据作为后备
    return NextResponse.json({
      success: true,
      entries: mockLeaderboardData.slice(0, 10), // 只返回前 10 名
      lastUpdated: new Date().toISOString(),
      source: 'static',
    });
  } catch (error) {
    console.error('Failed to fetch LI.FI leaderboard:', error);
    
    // 出错时返回静态数据
    return NextResponse.json({
      success: false,
      entries: mockLeaderboardData.slice(0, 10),
      lastUpdated: new Date().toISOString(),
      source: 'static_fallback',
      error: 'Database error, using static data',
    });
  }
}

