# Vercel 部署指南

## 📋 部署前准备

### 1. 确保代码已推送到 GitHub
```bash
git add .
git commit -m "准备部署到 Vercel"
git push origin main
```

### 2. 检查项目状态
- ✅ Next.js 16.0.7 项目
- ✅ 已配置 `vercel.json`（包含 Cron 任务）
- ✅ Perps 页面使用静态数据（不需要数据库）
- ⚠️ `/api/cron` 路由仍使用 Prisma（需要 DATABASE_URL）

## 🚀 部署步骤

### 方法一：通过 Vercel Dashboard（推荐）

#### 步骤 1: 访问 Vercel
1. 打开 https://vercel.com
2. 使用 GitHub 账号登录

#### 步骤 2: 导入项目
1. 点击 **"Add New Project"**
2. 选择仓库：`jiayichen-cpu/PerpsTradingList1`
3. 点击 **"Import"**

#### 步骤 3: 配置项目
- **Framework Preset**: Next.js（自动检测）
- **Root Directory**: `./`（默认）
- **Build Command**: `prisma generate && next build`（默认）
- **Output Directory**: `.next`（默认）
- **Install Command**: `npm install`（默认）

#### 步骤 4: 配置环境变量 ⚠️ 重要

在 **"Environment Variables"** 中添加以下变量：

**必需的环境变量：**
```bash
# 数据库连接（build 时需要，即使 demo 不使用数据库查询）
# 可以使用假的连接字符串，因为 Perps 页面使用静态数据
DATABASE_URL=postgresql://demo:demo@localhost:5432/demo?schema=public

# Cron 任务认证密钥（如果启用 /api/cron）
CRON_SECRET=your-secret-key-here-change-this

# OneKey Builder 地址（Cron 任务需要）
ONEKEY_BUILDER_ADDRESS=your-builder-address-here
```

**可选的环境变量：**
```bash
# PostHog 分析（可选，如果不需要可以留空）
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

**注意：**
- 对于 Demo 演示，`DATABASE_URL` 可以是假的，因为：
  - Perps 页面使用静态数据 `LEADERBOARD_DATA`
  - 只需要在 build 时生成 Prisma Client
  - `/api/cron` 路由在生产环境可能不需要运行

#### 步骤 5: 部署
1. 点击 **"Deploy"**
2. 等待构建完成（通常 2-5 分钟）
3. 部署成功后，Vercel 会提供一个 URL，例如：`https://your-project.vercel.app`

### 方法二：使用 Vercel CLI

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 在项目目录中部署
cd /Users/yael/Downloads/lifi-carnival-landing
vercel

# 4. 按提示配置：
# - Set up and deploy? Yes
# - Which scope? 选择你的账号
# - Link to existing project? No
# - Project name? lifi-carnival-landing（或自定义）
# - Directory? ./
# - Override settings? No

# 5. 设置环境变量
vercel env add DATABASE_URL
vercel env add CRON_SECRET
vercel env add ONEKEY_BUILDER_ADDRESS

# 6. 生产环境部署
vercel --prod
```

## 🔧 Demo 部署优化建议

### 方案 A：简化部署（推荐用于 Demo）

如果只是做 Demo 演示，不需要 `/api/cron` 功能，可以：

1. **移除 Cron 配置**（可选）：
   - 删除或注释 `vercel.json` 中的 `crons` 配置
   - 这样就不需要 `CRON_SECRET` 和 `ONEKEY_BUILDER_ADDRESS`

2. **使用假的 DATABASE_URL**：
   ```bash
   DATABASE_URL=postgresql://demo:demo@localhost:5432/demo?schema=public
   ```
   这个只在 build 时生成 Prisma Client 使用，运行时不需要。

### 方案 B：完整功能部署

如果需要完整的 Cron 功能：

1. **设置真实的数据库**：
   - 使用 Vercel Postgres 或其他数据库服务
   - 在 Vercel Dashboard 中添加数据库连接

2. **配置 Cron 任务**：
   - 确保 `CRON_SECRET` 和 `ONEKEY_BUILDER_ADDRESS` 正确配置
   - Cron 任务会在每天 16:00 UTC 执行

## 📝 部署后检查清单

- [ ] 访问首页 `/` 是否重定向到 `/perps`
- [ ] `/perps` 页面是否正常显示
- [ ] `/lifi` 页面是否正常显示
- [ ] 排行榜数据是否正常显示
- [ ] 多语言切换是否正常
- [ ] 响应式布局是否正常

## 🐛 常见问题

### 1. Build 失败：Prisma Client 生成错误
**解决方案**：确保设置了 `DATABASE_URL` 环境变量（即使是假的）

### 2. 页面显示空白
**解决方案**：检查浏览器控制台错误，可能是环境变量缺失

### 3. Cron 任务不执行
**解决方案**：
- 检查 `vercel.json` 中的 Cron 配置
- 确保 `CRON_SECRET` 已设置
- 检查 Vercel Dashboard 中的 Cron 任务日志

### 4. 数据库连接错误
**解决方案**：如果只是 Demo，使用假的 `DATABASE_URL` 即可，因为 Perps 页面使用静态数据

## 🔗 相关链接

- Vercel 文档：https://vercel.com/docs
- Next.js 部署：https://nextjs.org/docs/deployment
- Prisma 部署：https://www.prisma.io/docs/guides/deployment

