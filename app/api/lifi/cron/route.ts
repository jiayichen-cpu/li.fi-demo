import { NextRequest, NextResponse } from 'next/server';
import { getDailyTop10Leaderboard } from '@/lib/lifi-api';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

/**
 * LI.FI 排行榜数据抓取定时任务
 * 每天 00:00 (UTC+8) 执行，对应 UTC 16:00
 * 从 LI.FI API 获取每日交易量前十的数据并保存到数据库
 */
export async function GET(request: NextRequest) {
  try {
    // 验证 Cron Secret
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('Starting LI.FI Cron Job: Fetching daily top 10 leaderboard...');
    }

    // 获取每日交易量前十的数据
    const leaderboard = await getDailyTop10Leaderboard();
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Fetched ${leaderboard.length} entries.`);
    }

    // 计算总交易量
    const totalVolume = leaderboard.reduce((acc, curr) => acc + curr.dailyVolume, 0);

    // 创建今天的日期（UTC+8 时区的今天）
    // 获取当前 UTC+8 时区的日期
    const nowUTC8 = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    const year = nowUTC8.getFullYear();
    const month = nowUTC8.getMonth();
    const date = nowUTC8.getDate();
    
    // UTC+8 时区今天的 00:00:00
    const todayStartUTC8 = new Date(year, month, date, 0, 0, 0, 0);
    
    // 转换为 UTC 时间（减去 8 小时）
    const todayStartUTC = new Date(todayStartUTC8.getTime() - 8 * 60 * 60 * 1000);

    // 检查今天是否已经有快照
    const existingSnapshot = await prisma.lifiLeaderboardSnapshot.findUnique({
      where: { date: todayStartUTC },
    });

    if (existingSnapshot) {
      // 更新现有快照
      await prisma.lifiLeaderboardSnapshot.update({
        where: { id: existingSnapshot.id },
        data: {
          totalVolume,
          entries: JSON.stringify(leaderboard),
        },
      });

      if (process.env.NODE_ENV === 'development') {
        console.log(`Updated existing snapshot for ${todayStartUTC.toISOString()}`);
      }

      return NextResponse.json({ 
        success: true, 
        snapshotId: existingSnapshot.id, 
        entriesCount: leaderboard.length,
        updated: true,
      });
    } else {
      // 创建新快照
      const snapshot = await prisma.lifiLeaderboardSnapshot.create({
        data: {
          date: todayStartUTC,
          totalVolume,
          entries: JSON.stringify(leaderboard),
        },
      });

      if (process.env.NODE_ENV === 'development') {
        console.log(`Created new snapshot for ${todayStartUTC.toISOString()}`);
      }

      return NextResponse.json({ 
        success: true, 
        snapshotId: snapshot.id, 
        entriesCount: leaderboard.length,
        created: true,
      });
    }
  } catch (error) {
    console.error('LI.FI Cron job failed:', error);
    // 不暴露错误详情到生产环境
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

