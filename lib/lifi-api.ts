import type { LeaderboardEntry } from '@/data/mockLeaderboard';

interface LifiTransfer {
  transactionId: string;
  fromAddress: string;
  toAddress: string;
  sending: {
    amountUSD: string;
    timestamp: number;
  };
  receiving: {
    amountUSD: string;
    timestamp: number;
  };
  status: string;
  substatus: string;
}

interface LifiApiResponse {
  transfers: LifiTransfer[];
}

interface AddressStats {
  address: string;
  totalVolume: number;
  txCount: number;
}

/**
 * 从 LI.FI API 获取转账数据
 */
export async function fetchLifiTransfers(): Promise<LifiTransfer[]> {
  const response = await fetch('https://li.quest/v1/analytics/transfers', {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`LI.FI API error: ${response.status} ${response.statusText}`);
  }

  const data: LifiApiResponse = await response.json();
  return data.transfers;
}

/**
 * 过滤出当天的交易（UTC+8 时区）
 * 获取 UTC+8 时区今天的 00:00:00 对应的 UTC 时间戳
 */
function filterTodayTransfers(transfers: LifiTransfer[]): LifiTransfer[] {
  // 获取当前 UTC+8 时区的日期
  const nowUTC8 = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
  const year = nowUTC8.getFullYear();
  const month = nowUTC8.getMonth();
  const date = nowUTC8.getDate();
  
  // UTC+8 时区今天的 00:00:00
  const todayStartUTC8 = new Date(year, month, date, 0, 0, 0, 0);
  
  // 转换为 UTC 时间（减去 8 小时）
  const todayStartUTC = new Date(todayStartUTC8.getTime() - 8 * 60 * 60 * 1000);
  const todayEndUTC = new Date(todayStartUTC.getTime() + 24 * 60 * 60 * 1000);
  
  const startTimestamp = Math.floor(todayStartUTC.getTime() / 1000);
  const endTimestamp = Math.floor(todayEndUTC.getTime() / 1000);

  return transfers.filter(transfer => {
    // timestamp 是秒级 Unix 时间戳
    const transferTimestamp = transfer.sending.timestamp;
    return transferTimestamp >= startTimestamp && transferTimestamp < endTimestamp;
  });
}

/**
 * 聚合每个地址的交易量和交易次数
 * 只统计状态为 DONE 且 substatus 为 COMPLETED 的交易
 */
function aggregateLifiVolume(transfers: LifiTransfer[]): AddressStats[] {
  const addressMap = new Map<string, AddressStats>();

  for (const transfer of transfers) {
    // 只统计完成的交易
    if (transfer.status !== 'DONE' || transfer.substatus !== 'COMPLETED') {
      continue;
    }

    const address = transfer.fromAddress.toLowerCase();
    const volume = parseFloat(transfer.sending.amountUSD) || 0;

    if (addressMap.has(address)) {
      const stats = addressMap.get(address)!;
      stats.totalVolume += volume;
      stats.txCount += 1;
    } else {
      addressMap.set(address, {
        address: transfer.fromAddress, // 保留原始大小写格式
        totalVolume: volume,
        txCount: 1,
      });
    }
  }

  return Array.from(addressMap.values());
}

/**
 * 获取每日交易量前十的排行榜数据
 */
export async function getDailyTop10Leaderboard(): Promise<LeaderboardEntry[]> {
  try {
    // 获取所有转账数据
    const transfers = await fetchLifiTransfers();
    
    // 过滤出今天的交易
    const todayTransfers = filterTodayTransfers(transfers);
    
    // 聚合数据
    const aggregated = aggregateLifiVolume(todayTransfers);
    
    // 按交易量降序排序
    aggregated.sort((a, b) => b.totalVolume - a.totalVolume);
    
    // 取前 10 名
    const top10 = aggregated.slice(0, 10);
    
    // 转换为 LeaderboardEntry 格式
    return top10.map((entry, index) => ({
      rank: index + 1,
      address: entry.address,
      dailyVolume: entry.totalVolume,
      txCount: entry.txCount,
    }));
  } catch (error) {
    console.error('Failed to fetch LI.FI leaderboard:', error);
    throw error;
  }
}

