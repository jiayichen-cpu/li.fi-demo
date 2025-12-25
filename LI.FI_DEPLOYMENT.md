# LI.FI 落地页部署到 Vercel 指南

## 📋 部署前准备

### 1. 确认当前状态

✅ **LI.FI 页面已配置使用静态数据**
- 文件：`components/LeaderboardTable.tsx`
- 数据源：`data/mockLeaderboard.ts` 中的 `mockLeaderboardData`
- 路由：`/lifi`

✅ **数据库相关文件已保留**（供后续接入数据使用）
- `lib/prisma.ts` - Prisma 客户端
- `prisma/schema.prisma` - 数据库 schema
- `prisma/dev.db` - 开发数据库（不需要提交到 Git）

### 2. 检查构建配置

当前 `package.json` 的构建命令：
```json
{
  "scripts": {
    "build": "prisma generate && next build"
  }
}
```

**说明**：
- `prisma generate` 会生成 Prisma Client（即使 LI.FI 页面不使用，但 Perps 页面需要）
- 构建时会执行，但不影响 LI.FI 页面的静态数据展示

## 🚀 部署步骤

### 方法一：通过 Vercel Dashboard（推荐）

1. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub/GitLab/Bitbucket 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择你的 Git 仓库
   - Vercel 会自动检测 Next.js 项目

3. **配置项目**
   - **Framework Preset**: Next.js（自动检测）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（或使用默认）
   - **Output Directory**: `.next`（自动）
   - **Install Command**: `npm install`（默认）

4. **环境变量**（当前不需要，后续接入数据时可能需要）
   - `DATABASE_URL` - 数据库连接字符串（后续接入数据时配置）
   - `CRON_SECRET` - Cron 任务密钥（如果需要）

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 2-3 分钟）

### 方法二：通过 Vercel CLI

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 部署到生产环境
vercel --prod

# 或部署到预览环境
vercel
```

## 🌐 访问地址

部署成功后，你会得到：

- **生产环境**: `https://your-project.vercel.app/lifi`
- **预览环境**: `https://your-project-git-branch.vercel.app/lifi`

## 📊 当前使用的静态数据

LI.FI 页面当前使用 `data/mockLeaderboard.ts` 中的模拟数据：

```typescript
export const mockLeaderboardData: LeaderboardEntry[] = [
  { rank: 1, address: '0x1234...', dailyVolume: 125000.50, txCount: 45 },
  { rank: 2, address: '0xabcd...', dailyVolume: 98000.25, txCount: 38 },
  // ... 更多数据
];
```

## 🔄 后续接入真实数据（保留的准备工作）

### 方案一：API 路由 + 定时任务（推荐）

1. **创建 API 路由** `app/api/lifi/leaderboard/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // 从数据库获取最新的排行榜数据
    const snapshot = await prisma.lifiLeaderboardSnapshot.findFirst({
      orderBy: { date: 'desc' },
    });
    
    if (!snapshot) {
      return NextResponse.json({ error: 'No data' }, { status: 404 });
    }
    
    const entries = JSON.parse(snapshot.entries);
    return NextResponse.json({ entries, lastUpdated: snapshot.date });
  } catch (error) {
    console.error('Failed to fetch leaderboard:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
```

2. **创建定时任务** `app/api/lifi/cron/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
// import { fetchLifiData } from '@/lib/lifi-data-fetcher'; // 你的数据获取函数

export async function GET(request: NextRequest) {
  // 验证 Cron Secret
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // 获取数据并保存到数据库
    // const data = await fetchLifiData();
    
    // await prisma.lifiLeaderboardSnapshot.create({
    //   data: {
    //     date: new Date(),
    //     entries: JSON.stringify(data),
    //   },
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

3. **更新组件使用 API** `components/LeaderboardTable.tsx`:
```typescript
'use client';

import { useEffect, useState } from 'react';
import { mockLeaderboardData } from '@/data/mockLeaderboard';

export function LifiLeaderboardTable() {
  const [data, setData] = useState(mockLeaderboardData);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    // 获取真实数据，失败时使用静态数据
    fetch('/api/lifi/leaderboard')
      .then(res => res.json())
      .then(result => {
        if (result.entries) {
          setData(result.entries);
          setLastUpdated(new Date(result.lastUpdated));
        }
      })
      .catch(() => {
        // 失败时使用静态数据
        setData(mockLeaderboardData);
      });
  }, []);

  // ... 渲染逻辑
}
```

4. **更新 vercel.json 添加定时任务**:
```json
{
  "crons": [
    {
      "path": "/api/cron",
      "schedule": "0 16 * * *"
    },
    {
      "path": "/api/lifi/cron",
      "schedule": "0 0 * * *"
    }
  ]
}
```

### 方案二：ISR (Incremental Static Regeneration)

```typescript
// app/lifi/page.tsx
export const revalidate = 86400; // 24 小时重新生成一次

export default async function LifiPage() {
  // 从数据库获取数据
  const data = await getLifiLeaderboardData();
  
  return (
    // ... 页面内容
  );
}
```

### 数据库 Schema 扩展（需要时添加）

在 `prisma/schema.prisma` 中添加：

```prisma
model LifiLeaderboardSnapshot {
  id        String   @id @default(cuid())
  date      DateTime @default(now())
  entries   String   // JSON string
  createdAt DateTime @default(now())
  
  @@index([date])
}
```

然后运行：
```bash
npx prisma migrate dev --name add_lifi_leaderboard
```

## 🐛 常见问题

### 1. 构建失败 - Prisma 相关
- **问题**: `prisma generate` 失败
- **解决**: 确保 `prisma/schema.prisma` 文件存在且配置正确
- **临时方案**: 如果只部署 LI.FI，可以修改 build 命令为 `next build`（但会影响 Perps）

### 2. 路由 404
- **问题**: 访问 `/lifi` 返回 404
- **解决**: 确保 `app/lifi/page.tsx` 文件存在

### 3. 静态数据不显示
- **问题**: 排行榜为空
- **解决**: 检查 `data/mockLeaderboard.ts` 是否正确导入

### 4. 样式问题
- **问题**: 页面样式异常
- **解决**: 确保 `app/globals.css` 和 Tailwind 配置正确

## 📌 注意事项

1. **Prisma 依赖**: 
   - 虽然 LI.FI 页面当前不使用 Prisma，但项目依赖中包含它（Perps 需要）
   - 构建时会执行 `prisma generate`，这是正常的
   - 所有 Prisma 相关文件已保留，方便后续接入数据

2. **环境变量**: 
   - LI.FI 页面目前不需要环境变量
   - 后续接入数据时可能需要 `DATABASE_URL` 和 `CRON_SECRET`

3. **域名配置**: 
   - 可以在 Vercel Dashboard 中配置自定义域名

4. **预览部署**: 
   - 每次 push 到 Git 都会自动创建预览部署，方便测试

5. **数据更新**: 
   - 当前使用静态数据，后续接入数据时：
     - 保留 `data/mockLeaderboard.ts` 作为 fallback
     - 使用 API 路由获取真实数据
     - 配置定时任务每日更新

## ✅ 部署检查清单

- [ ] 代码已提交到 Git 仓库
- [ ] 本地构建成功 (`npm run build`)
- [ ] LI.FI 页面可以正常访问 (`/lifi`)
- [ ] 静态数据正常显示
- [ ] 多语言切换正常（中英文）
- [ ] 响应式布局正常（移动端/桌面端）
- [ ] Prisma 相关文件已保留（用于后续接入数据）

## 🎉 部署完成

部署成功后，你可以：
1. 分享 demo 链接给团队：`https://your-project.vercel.app/lifi`
2. 配置自定义域名（可选）
3. 监控访问量和性能
4. 准备后续接入真实数据

---

**需要帮助？** 
- 查看 [Vercel 文档](https://vercel.com/docs)
- 查看 [Next.js 文档](https://nextjs.org/docs)
- 查看项目 README




