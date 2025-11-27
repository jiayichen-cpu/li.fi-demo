export interface HydromancerFill {
  coin: string;
  px: string; // price
  sz: string; // size
  side: string; // "B" or "A" (or "S"?) - usually B/S or A/B. Docs say "B".
  time: number;
  startPosition: string;
  dir: string; // "Open Long", etc.
  closedPnl: string;
  hash: string;
  oid: number;
  crossed: boolean;
  fee: string;
  tid: number;
  cloid?: string;
  builderFee?: string | null;
  feeToken: string;
  user: string;
  twapId?: number | null;
  txIndex?: number;
}

interface HydromancerResponse {
  fills: HydromancerFill[];
  cursor?: string; // It seems the response is an array, but let's double check the docs.
                 // Docs say response is: [ { ... }, ... ]
                 // But how is cursor returned?
                 // Ah, the docs example shows a list of fills.
                 // Usually pagination works by taking the last item's timestamp/index as the next cursor.
                 // The docs say: cursor is "Composite of time and txIndex with '_' separator (optional)"
                 // And the request takes a cursor.
                 // So we likely need to construct the cursor from the last element.
}

const HYDROMANCER_API_URL = "https://api.hydromancer.xyz/info";

export async function fetchDailyFills(builderAddress: string): Promise<HydromancerFill[]> {
  const endTime = Date.now();
  const startTime = endTime - 24 * 60 * 60 * 1000; // 24 hours ago
  
  let allFills: HydromancerFill[] = [];
  let cursor: string | undefined = undefined;
  let hasMore = true;

  console.log(`Fetching fills for builder ${builderAddress} from ${new Date(startTime).toISOString()} to ${new Date(endTime).toISOString()}`);

  while (hasMore) {
    try {
      const payload: any = {
        type: "builderFillsByTime",
        builder: builderAddress,
        startTime: startTime, // Docs say: skipped when cursor is used.
        endTime: endTime,
      };

      if (cursor) {
        payload.cursor = cursor;
        delete payload.startTime; // Ensure startTime is skipped if cursor is present, as per docs hint (though usually API handles it)
      }

      const response = await fetch(HYDROMANCER_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.HYDROMANCER_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Hydromancer API error:", response.status, errorText);
        throw new Error(`Hydromancer API error: ${response.status} ${errorText}`);
      }

      const fills: HydromancerFill[] = await response.json();

      if (!Array.isArray(fills)) {
        console.error("Unexpected response format:", fills);
        throw new Error("Unexpected response format from Hydromancer API");
      }

      if (fills.length === 0) {
        hasMore = false;
      } else {
        allFills = [...allFills, ...fills];
        
        // Construct cursor for next page
        const lastFill = fills[fills.length - 1];
        // Docs: "Composite of time and txIndex with '_' separator"
        // Assuming `txIndex` is present in the response as per docs example.
        if (lastFill.time && lastFill.txIndex !== undefined) {
           // Docs example cursor: "1234567890000_12"
           // Caution: If the API returns fills descending or ascending? 
           // Usually "builderFillsByTime" might be time sorted. 
           // If we keep getting the same cursor, we stop.
           const nextCursor = `${lastFill.time}_${lastFill.txIndex}`;
           if (nextCursor === cursor) {
             hasMore = false; // Prevent infinite loop if cursor doesn't change
           } else {
             cursor = nextCursor;
           }
        } else {
          // If we can't construct a cursor, we can't fetch more specific pages reliably
          // unless the API handles generic time ranges well.
          // Assuming we are done if we can't find cursor info.
          hasMore = false;
        }

        // Safety break for very large datasets to avoid timeout in this specific MVP
        if (allFills.length > 10000) {
             console.warn("Hit safety limit of 10,000 fills");
             hasMore = false;
        }
      }
      
      // Rate limit handling (basic sleep)
      await new Promise(resolve => setTimeout(resolve, 200)); 

    } catch (error) {
      console.error("Error fetching fills:", error);
      throw error;
    }
  }

  return allFills;
}


const HYPERLIQUID_API_URL = "https://api.hyperliquid.xyz/info";

// Add this new interface and function
interface HyperliquidPnlResponse {
  day: {
    pnlHistory: [number, string][];
  };
  // ... other fields we might not need right now
}

export async function fetchUserPnl(userAddress: string): Promise<number> {
  try {
    const response = await fetch(HYPERLIQUID_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "portfolio",
        user: userAddress,
      }),
    });

    if (!response.ok) {
      console.error(`Failed to fetch PnL for ${userAddress}: ${response.status}`);
      return 0;
    }

    const data = await response.json();
    
    // The structure is [ ["day", {...}], ["week", {...}], ... ]
    // We need to find the "day" entry.
    const dayEntry = data.find((item: any) => item[0] === "day");
    
    if (!dayEntry || !dayEntry[1] || !dayEntry[1].pnlHistory) {
        return 0;
    }

    const pnlHistory = dayEntry[1].pnlHistory as [number, string][];
    
    // Sum up the PnL history for the day
    // The example shows pnlHistory as a list of [timestamp, pnlString]
    // We just need to sum the second element.
    // Wait, the example provided shows `pnlHistory` contains cumulative values or discrete values?
    // "pnlHistory": [ [1764156960001, "0.0"], [1764164160034, "-0.960858"], ... ]
    // Usually "History" implies a time series. 
    // If it is cumulative PnL for the day, the last entry is the total.
    // Let's look at the user provided example values: 
    // 0.0 -> -0.96 -> 0.12 -> 12.58 -> 14.23 ...
    // These look like cumulative PnL at that snapshot time relative to start of period.
    // If so, the last value is the current 24h PnL.
    
    if (pnlHistory.length === 0) return 0;
    
    const lastEntry = pnlHistory[pnlHistory.length - 1];
    return parseFloat(lastEntry[1]);

  } catch (error) {
    console.error(`Error fetching PnL for ${userAddress}:`, error);
    return 0;
  }
}

export interface UserVolume {
  address: string;
  volume: number;
  rank: number;
  pnl: number; // Added PnL field
}

export async function aggregateVolume(fills: HydromancerFill[]): Promise<UserVolume[]> {
  const volumeMap = new Map<string, number>();

  for (const fill of fills) {
    const price = parseFloat(fill.px);
    const size = parseFloat(fill.sz);
    const user = fill.user;

    if (!isNaN(price) && !isNaN(size) && user) {
      const tradeVolume = price * size;
      const currentVolume = volumeMap.get(user) || 0;
      volumeMap.set(user, currentVolume + tradeVolume);
    }
  }

  // Convert to array
  let userStats = Array.from(volumeMap.entries()).map(([address, volume]) => ({
    address,
    volume,
  }));

  // Fetch PnL for each user (in parallel with limit to avoid rate limits)
  // We should probably limit concurrency. 
  // For 58 users it's fine to do batching.
  const BATCH_SIZE = 5;
  const usersWithPnl: UserVolume[] = [];

  for (let i = 0; i < userStats.length; i += BATCH_SIZE) {
    const batch = userStats.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(
      batch.map(async (user) => {
        const pnl = await fetchUserPnl(user.address);
        return { ...user, pnl };
      })
    );
    usersWithPnl.push(...results);
    // Small delay to be nice to the API
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  const sortedUsers = usersWithPnl
    .sort((a, b) => b.volume - a.volume) // Descending volume
    .map((user, index) => ({
      ...user,
      rank: index + 1
    }));

  return sortedUsers;
}

