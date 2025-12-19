# LI.FI 落地页 Vercel 部署指南

## 📋 部署前检查

### ✅ 当前状态
- ✅ LI.FI 页面使用静态数据（`data/mockLeaderboard.ts`）
- ✅ 路由已分离：`/lifi` 和 `/perps` 完全独立
- ✅ 组件已分离：使用独立的 LI.FI 组件
- ✅ 多语言支持：英文和中文

## 🚀 部署步骤

### 方法一：通过 Vercel Dashboard（推荐）

1. **准备代码仓库**
   ```bash
   # 确保代码已提交到 Git 仓库（GitHub/GitLab/Bitbucket）
   git add .
   git commit -m "准备部署 LI.FI 落地页"
   git push origin main
   ```

2. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub/GitLab/Bitbucket 账号登录

3. **导入项目**
   - 点击 "Add New Project"
   - 选择你的代码仓库
   - Vercel 会自动检测 Next.js 项目

4. **配置项目**
   - **Framework Preset**: Next.js（自动检测）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）

5. **环境变量**（如果需要）
   - 目前 LI.FI 页面不需要环境变量
   - 如果后续接入数据，可能需要添加：
     - `DATABASE_URL`（如果使用数据库）
     - `API_KEY`（如果调用外部 API）

6. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 2-3 分钟）

### 方法二：通过 Vercel CLI

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 在项目根目录部署
cd /Users/yael/Downloads/lifi-carnival-landing
vercel

# 4. 生产环境部署
vercel --prod
```

## 📝 部署配置说明

### vercel.json
当前配置只包含 Perps 的 cron 任务，LI.FI 页面不需要额外配置：

```json
{
  "crons": [
    {
      "path": "/api/cron",
      "schedule": "0 16 * * *"
    }
  ]
}
```

**注意**：这个 cron 任务是给 `/perps` 路由用的，LI.FI 页面不需要。

### Build 配置
- **Build Command**: `prisma generate && next build`
  - 虽然 LI.FI 页面不使用 Prisma，但 Perps 页面需要
  - 如果只部署 LI.FI，可以优化为：`next build`（但会影响 Perps）

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

## 🔄 后续接入真实数据

### 方案一：API 路由 + 定时任务

1. **创建 API 路由** `app/api/lifi/leaderboard/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  // 从数据库或外部 API 获取数据
  const data = await fetchLeaderboardData();
  return NextResponse.json(data);
}
```

2. **在组件中调用**:
```typescript
// components/LeaderboardTable.tsx
const [data, setData] = useState(mockLeaderboardData);

useEffect(() => {
  fetch('/api/lifi/leaderboard')
    .then(res => res.json())
    .then(setData)
    .catch(() => setData(mockLeaderboardData)); // 失败时使用静态数据
}, []);
```

3. **配置定时更新**（在 vercel.json 中添加）:
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

### 方案二：使用 Vercel Edge Functions

如果数据更新频率不高，可以使用 Edge Functions 缓存数据。

### 方案三：ISR (Incremental Static Regeneration)

```typescript
// app/lifi/page.tsx
export const revalidate = 86400; // 24 小时重新生成一次

export default async function LifiPage() {
  const data = await fetchLeaderboardData();
  // ...
}
```

## 🐛 常见问题

### 1. 构建失败
- **问题**: `prisma generate` 失败
- **解决**: 确保 `prisma/schema.prisma` 文件存在且配置正确
- **临时方案**: 如果只部署 LI.FI，可以修改 build 命令为 `next build`

### 2. 路由 404
- **问题**: 访问 `/lifi` 返回 404
- **解决**: 确保 `app/lifi/page.tsx` 文件存在

### 3. 静态数据不显示
- **问题**: 排行榜为空
- **解决**: 检查 `data/mockLeaderboard.ts` 是否正确导入

## 📌 注意事项

1. **Prisma 依赖**: 虽然 LI.FI 页面不使用 Prisma，但项目依赖中包含它（Perps 需要）。构建时会执行 `prisma generate`，如果不需要可以跳过。

2. **环境变量**: LI.FI 页面目前不需要环境变量，但后续接入数据时可能需要。

3. **域名配置**: 可以在 Vercel Dashboard 中配置自定义域名。

4. **预览部署**: 每次 push 到 Git 都会自动创建预览部署，方便测试。

## ✅ 部署检查清单

- [ ] 代码已提交到 Git 仓库
- [ ] 本地构建成功 (`npm run build`)
- [ ] LI.FI 页面可以正常访问 (`/lifi`)
- [ ] 静态数据正常显示
- [ ] 多语言切换正常
- [ ] 响应式布局正常（移动端/桌面端）

## 🎉 部署完成

部署成功后，你可以：
1. 分享 demo 链接给团队
2. 配置自定义域名
3. 设置环境变量（如果需要）
4. 监控访问量和性能

---

**需要帮助？** 查看 [Vercel 文档](https://vercel.com/docs) 或联系团队。

