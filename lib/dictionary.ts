export type Locale = 'en' | 'zh';

export const dictionary = {
  en: {
    hero: {
      title_prefix: "OneKey × LI.FI",
      title_suffix: "Trading Carnival",
      description: "Complete cross-chain or Swap on OneKey App using LI.FI channel to participate in daily draws. Teams of 2-5 members can participate in the trading event, ranked by combined trading volume to win more rewards.",
      event_date: "Event Period: Dec 16 - Dec 31",
    },
    countdown: {
      ends_in: "Event ends in",
      ended: "Event ended",
      days: "DAYS",
      hours: "HOURS",
      mins: "MINS",
      secs: "SECS",
    },
    quick_guide: {
      title: "Quick Guide",
      trading: {
        step1: {
          title: "Open OneKey App",
          desc: "Launch the OneKey App on your device and navigate to the trading page.",
          swap_link: "https://app.onekey.so/swap",
          swap_button: "Go to Swap",
        },
        step2: {
          title: "Go to Swap, switch to LI.FI",
          desc: "After entering Swap page, select LI.FI as your exchange channel provider. See Help Center for detailed instructions.",
          help_link: "https://example.com/help-center-lifi",
          help_button: "Help Center",
        },
        step3: {
          title: "Complete your trade",
          desc: "Complete cross-chain or Swap trades. Daily trading volume of 100+ USDT will automatically enter you into the draw.",
        },
      },
      team: {
        title: "Team Participation",
        desc: "Form teams of 2-5 members. Team leader submits team name and member addresses. Teams compete by combined trading volume for Top 3 rewards.",
        form_link: "https://gr4yl99ujhl.typeform.com/to/k5hXzX1j",
        form_button: "Submit Team Info",
      },
    },
    leaderboard: {
      title: "LI.FI Daily Volume Rankings",
      last_updated: "Last updated:",
      refresh_note: "Refreshes daily at 00:00 UTC",
      headers: {
        rank: "Rank",
        address: "Address",
        daily_volume: "Daily Volume (USDT)",
        tx_count: "Tx Count",
      },
    },
    daily_rewards: {
      title: "Daily Rewards",
      description: "Complete daily trading challenges to unlock exclusive rewards and climb the leaderboard.",
      reward_1: {
        title: "Daily Trading Bonus",
        desc: "Trade $100+ daily through LI.FI to earn bonus rewards. Your daily volume resets at midnight UTC.",
      },
      reward_2: {
        title: "Volume Milestones",
        desc: "Reach trading volume milestones ($500, $1,000, $5,000) for special prizes including OneKey hardware wallets and exclusive merchandise.",
      },
      reward_3: {
        title: "Referral Rewards",
        desc: "Invite friends to join the carnival. Both you and your referrals earn bonus rewards when they complete their first trade.",
      },
    },
    team_leaderboard: {
      title: "Team Leaderboard",
      description: "Compete as teams and see which group dominates the trading charts. Team rankings are updated in real-time based on combined trading volume.",
      how_it_works: "How it works",
      step_1: "Join or create a trading team (up to 10 members)",
      step_2: "Accumulate team trading volume through LI.FI",
      step_3: "Climb the leaderboard together and compete for team prizes",
      step_4: "Top 3 teams win exclusive rewards at the end of the event",
    },
    how_to_participate: {
      title: "How to Participate",
      step_1: {
        title: "Connect Your Wallet",
        desc: "Connect your OneKey wallet to get started. Make sure you have funds available for trading.",
      },
      step_2: {
        title: "Start Trading",
        desc: "Use LI.FI to execute cross-chain trades. All trades through LI.FI's bridge aggregator count towards your volume.",
      },
      step_3: {
        title: "Track Your Progress",
        desc: "Monitor your trading volume and rankings on this page. Rankings update in real-time as you trade.",
      },
      step_4: {
        title: "Win Prizes",
        desc: "Complete daily challenges, reach volume milestones, and climb the leaderboard to win amazing prizes including OneKey hardware wallets and exclusive merchandise.",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: {
        title: "How do I participate in the event?",
        answer: "You are considered successfully participating and eligible for the draw when you meet the following conditions:",
        conditions: [
          "Complete trades through LI.FI channel within OneKey App",
          "Complete cross-chain trades or Swap",
          "Daily cumulative trading volume reaches 100 USDT"
        ],
        note: "When your cumulative trading volume through LI.FI channel reaches ≥ 100 USDT on the same day, the system will automatically record one draw entry for you. No manual action or form submission required.",
      },
      q2: {
        title: "Is there a draw every day? What are the prizes?",
        answer: "Yes, draws are conducted daily during the event period. The system will randomly select winners from all eligible trading addresses of the day.",
        daily_prizes: "Daily prizes include:",
        prize_list: [
          "LI.FI co-branded Classic 1S hardware wallet × 1",
          "Merchandise set × 2 (T-shirt + beach towel + camping cup)"
        ],
        announcement: "Winning addresses are announced on the event page every 48 hours.",
      },
      q3: {
        title: "What is the team leaderboard? How do I participate?",
        answer: "You can form a team with 1-4 friends (2-5 members total). The team leader submits the team name and member addresses.",
        ranking: "After the event ends, the system will calculate the total trading volume completed by all team members through LI.FI channel during the event period, and rank teams based on trading volume.",
      },
      q4: {
        title: "What are the team leaderboard rewards?",
        answer: "After the event ends, the following rewards will be distributed based on team rankings:",
        rewards: {
          top1: "Top 1: Co-branded Classic 1S × 5 + Merchandise box × 2",
          top2: "Top 2: Co-branded Classic 1S × 3 + Merchandise box × 2",
          top3: "Top 3: Co-branded Classic 1S × 1 + Merchandise box × 1",
        },
        distribution: "Rewards are distributed within the team. The team leader must DM the official X account @OneKeyHQ after the event ends to submit claim information.",
        help_link: "https://example.com/help-center-lifi",
        help_text: "For detailed claim process, please refer to the",
        help_link_text: "Help Center documentation",
      },
    },
  },
  zh: {
    hero: {
      title_prefix: "OneKey × LI.FI",
      title_suffix: "交易嘉年华",
      description: "在 OneKey App 使用 LI.FI 渠道完成跨链或 Swap，即可参与每日抽奖。同时支持 2–5 人组队参与交易活动，按团队交易量排名，赢取更多奖励。",
      event_date: "活动时间：12.16-12.31",
    },
    countdown: {
      ends_in: "距离活动结束",
      ended: "活动已结束",
      days: "天",
      hours: "时",
      mins: "分",
      secs: "秒",
    },
    quick_guide: {
      title: "快速指南",
      trading: {
        step1: {
          title: "打开 OneKey App",
          desc: "在您的设备上打开 OneKey App，进入交易页面。",
          swap_link: "https://app.onekey.so/swap",
          swap_button: "前往 Swap",
        },
        step2: {
          title: "进入 Swap，切换渠道为 LI.FI",
          desc: "进入 Swap 页面后，选择 LI.FI 作为兑换渠道商。详情操作见帮助中心。",
          help_link: "https://example.com/help-center-lifi",
          help_button: "帮助中心",
        },
        step3: {
          title: "完成交易",
          desc: "完成跨链或 Swap 交易。每日交易额满 100 USDT 将自动参与抽奖。",
        },
      },
      team: {
        title: "组队参与",
        desc: "活动支持 2–5 人组队，队长提交队伍名称与成员地址，按队伍交易量参与排名并争夺 Top 3 奖励。",
        form_link: "https://gr4yl99ujhl.typeform.com/to/k5hXzX1j",
        form_button: "提交队伍信息",
      },
    },
    leaderboard: {
      title: "LI.FI 日交易量排行榜",
      last_updated: "更新于:",
      refresh_note: "每日 00:00 UTC 刷新",
      headers: {
        rank: "排名",
        address: "地址",
        daily_volume: "日交易量 (USDT)",
        tx_count: "交易次数",
      },
    },
    daily_rewards: {
      title: "每日奖励",
      description: "完成每日交易挑战，解锁专属奖励并登上排行榜。",
      reward_1: {
        title: "每日交易奖励",
        desc: "每日通过 LI.FI 交易 $100+ 即可获得奖励。您的每日交易量在 UTC 午夜重置。",
      },
      reward_2: {
        title: "交易量里程碑",
        desc: "达到交易量里程碑（$500、$1,000、$5,000）可获得特殊奖品，包括 OneKey 硬件钱包和独家周边商品。",
      },
      reward_3: {
        title: "推荐奖励",
        desc: "邀请好友加入嘉年华。当您的推荐人完成第一笔交易时，您和您的推荐人都将获得奖励。",
      },
    },
    team_leaderboard: {
      title: "团队排行榜",
      description: "以团队形式竞争，看看哪个团队主导交易排行榜。团队排名根据组合交易量实时更新。",
      how_it_works: "运作方式",
      step_1: "加入或创建交易团队（最多 10 名成员）",
      step_2: "通过 LI.FI 累积团队交易量",
      step_3: "一起登上排行榜并竞争团队奖品",
      step_4: "活动结束时，前 3 名团队将获得专属奖励",
    },
    how_to_participate: {
      title: "如何参与",
      step_1: {
        title: "连接钱包",
        desc: "连接您的 OneKey 钱包开始。确保您有足够的资金进行交易。",
      },
      step_2: {
        title: "开始交易",
        desc: "使用 LI.FI 执行跨链交易。所有通过 LI.FI 桥接聚合器的交易都会计入您的交易量。",
      },
      step_3: {
        title: "追踪进度",
        desc: "在此页面上监控您的交易量和排名。排名会随着您的交易实时更新。",
      },
      step_4: {
        title: "赢取奖品",
        desc: "完成每日挑战，达到交易量里程碑，并登上排行榜，赢取丰厚奖品，包括 OneKey 硬件钱包和独家周边商品。",
      },
    },
    faq: {
      title: "常见问题",
      q1: {
        title: "活动如何参与？",
        answer: "满足以下条件时，视为成功参与活动并获得抽奖资格：",
        conditions: [
          "必须通过 OneKey App 内的 LI.FI 渠道完成交易",
          "完成跨链交易或 Swap",
          "每日累计交易额达到 100 USDT"
        ],
        note: "当你在同一天内通过 LI.FI 渠道累计交易额 ≥ 100 USDT 时，系统将自动为你记录一次抽奖资格。无需手动操作，也无需填写任何表单。",
      },
      q2: {
        title: "每天都会抽奖吗？奖品是什么？",
        answer: "是的，活动期间每天都会进行抽奖。系统将从当日所有符合条件的交易地址中随机抽取获奖者。",
        daily_prizes: "每日奖品包括：",
        prize_list: [
          "LI.FI 联名款 Classic 1S 硬件钱包",
          "周边套装 × 2（T 恤 + 沙滩巾 + 露营杯）"
        ],
        announcement: "中奖地址每 48 小时在当前活动页面公布一次。",
      },
      q3: {
        title: "什么是组队排行榜？如何参与？",
        answer: "你可以与 1–4 位好友组成一支队伍（共 2–5 人），由队长提交队伍名称和成员地址。",
        ranking: "活动结束后，系统将统计队伍内所有成员在活动期间通过 LI.FI 渠道完成的交易量总和，并根据交易量进行排名。",
      },
      q4: {
        title: "组队排行榜的奖励是什么？",
        answer: "活动结束后，将根据队伍排行榜发放以下奖励：",
        rewards: {
          top1: "Top 1：联名款 Classic 1S × 5 + 周边礼盒 × 2",
          top2: "Top 2：联名款 Classic 1S × 3 + 周边礼盒 × 2",
          top3: "Top 3：联名款 Classic 1S × 1 + 周边礼盒 × 1",
        },
        distribution: "奖励由队伍内部自行分配。队长需在活动结束后，私信官方 X 账号 @OneKeyHQ 提交领奖信息。",
        help_link: "https://example.com/help-center-lifi",
        help_text: "具体领奖流程请参考",
        help_link_text: "帮助中心文档",
      },
    },
  }
};
