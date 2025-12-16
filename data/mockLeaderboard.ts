export interface LeaderboardEntry {
  rank: number;
  address: string;
  dailyVolume: number;
  txCount: number;
}

export const mockLeaderboardData: LeaderboardEntry[] = [
  { rank: 1, address: '0x1234567890abcdef1234567890abcdef12345678', dailyVolume: 125000.50, txCount: 45 },
  { rank: 2, address: '0xabcdef1234567890abcdef1234567890abcdef12', dailyVolume: 98000.25, txCount: 38 },
  { rank: 3, address: '0x9876543210fedcba9876543210fedcba98765432', dailyVolume: 87500.75, txCount: 42 },
  { rank: 4, address: '0xfedcba0987654321fedcba0987654321fedcba09', dailyVolume: 72000.00, txCount: 35 },
  { rank: 5, address: '0x567890abcdef1234567890abcdef1234567890ab', dailyVolume: 65000.50, txCount: 28 },
  { rank: 6, address: '0xcdef1234567890abcdef1234567890abcdef1234', dailyVolume: 58000.25, txCount: 32 },
  { rank: 7, address: '0x2345678901bcdef2345678901bcdef23456789', dailyVolume: 52000.75, txCount: 26 },
  { rank: 8, address: '0xbcdef2345678901bcdef2345678901bcdef2345', dailyVolume: 48000.00, txCount: 24 },
  { rank: 9, address: '0x3456789012cdef3456789012cdef3456789012', dailyVolume: 45000.50, txCount: 22 },
  { rank: 10, address: '0xcdef3456789012cdef3456789012cdef345678', dailyVolume: 42000.25, txCount: 20 },
];
