export type Locale = 'en' | 'zh';

export const lifiDictionary = {
  en: {
    hero: {
      title_prefix: "OneKey × LI.FI",
      title_suffix: "Trading Carnival",
      description: "Complete cross-chain or Swap on OneKey App using LI.FI channel to participate in daily draws. Teams of 2-5 members can participate in the trading event, ranked by combined trading volume to win more rewards.",
      event_date: "Event Period: Dec 25, 2025 - Jan 1, 2026",
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
      refresh_note: "Refreshes daily at 00:00 (UTC+8)",
      loading: "Loading...",
      no_results: "No data available",
      headers: {
        rank: "Rank",
        address: "Address",
        daily_volume: "Daily Volume (USDT)",
        tx_count: "Tx Count",
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
      event_date: "活动时间：12.25-01.01",
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
      refresh_note: "每日 00:00 (UTC+8) 刷新",
      loading: "加载中...",
      no_results: "暂无数据",
      headers: {
        rank: "排名",
        address: "地址",
        daily_volume: "日交易量 (USDT)",
        tx_count: "交易次数",
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

