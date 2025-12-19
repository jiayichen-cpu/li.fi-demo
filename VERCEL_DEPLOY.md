# Vercel 部署指南 - LI.FI 落地页 Demo

## 📋 前置要求

1. **GitHub 账号**（项目已连接到 GitHub）
2. **Vercel 账号**（免费注册：https://vercel.com）

## 🚀 快速部署步骤

### 方法一：通过 Vercel Dashboard（推荐）

1. **登录 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择仓库：`jiayichen-cpu/PerpsTradingList1`
   - 点击 "Import"

3. **配置项目**
   - **Framework Preset**: Next.js（自动检测）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）

4. **环境变量配置**（Demo 演示用假值即可）
   
   点击 "Environment Variables" 添加以下变量：
   
   ```bash
   # 必须设置（即使是假值，因为构建时需要）
   DATABASE_URL=postgresql://demo:demo@localhost:5432/demo?schema=public
   
   # 可选（如果不需要 Cron 功能）
   CRON_SECRET=demo-secret-key
   ONEKEY_BUILDER_ADDRESS=0x0000000000000000000000000000000000000000
   
   # 可选（PostHog 分析）
   NEXT_PUBLIC_POSTHOG_KEY=
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 2-3 分钟）

6. **访问 Demo**
   - 部署完成后会获得一个 URL，例如：`https://your-project.vercel.app`
   - LI.FI 页面：`https://your-project.vercel.app/lifi`
   - Perps 页面：`https://your-project.vercel.app/perps`

### 方法二：通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   cd /Users/yael/Downloads/lifi-carnival-landing
   vercel
   ```

4. **设置环境变量**
   ```bash
   vercel env add DATABASE_URL
   # 输入：postgresql://demo:demo@localhost:5432/demo?schema=public
   
   vercel env add CRON_SECRET
   # 输入：demo-secret-key
   
   vercel env add ONEKEY_BUILDER_ADDRESS
   # 输入：0x0000000000000000000000000000000000000000
   ```

5. **生产环境部署**
   ```bash
   vercel --prod
   ```

## 📍 访问地址

部署成功后，你可以访问：

- **LI.FI 落地页**: `https://your-project.vercel.app/lifi`
- **Perps 页面**: `https://your-project.vercel.app/perps`
- **根路径**: `https://your-project.vercel.app/`（重定向到 `/perps`）

## ⚙️ 重要说明

### 为什么需要 DATABASE_URL？

虽然 LI.FI 页面使用静态数据，但：
- `package.json` 的 build 脚本包含 `prisma generate`
- Prisma 需要在构建时生成客户端
- 即使不使用数据库，也需要设置 `DATABASE_URL`（可以是假值）

### Cron 任务

- `/api/cron` 路由配置在 `vercel.json` 中
- 如果只是 Demo，可以忽略 Cron 功能
- Cron 任务需要真实的 `CRON_SECRET` 和 `ONEKEY_BUILDER_ADDRESS`

### 构建优化

如果只想部署 LI.FI 页面，可以修改 `package.json` 的 build 脚本：

```json
{
  "scripts": {
    "build": "next build"
  }
}
```

但这样会移除 Prisma 生成步骤，如果其他部分需要 Prisma，建议保留。

## 🔧 故障排查

### 构建失败：Prisma 错误

**问题**: `Prisma schema loaded from prisma/schema.prisma` 报错

**解决**: 确保设置了 `DATABASE_URL` 环境变量（即使是假值）

### 页面 404

**问题**: 访问 `/lifi` 返回 404

**解决**: 
- 检查 `app/lifi/page.tsx` 是否存在
- 重新部署项目

### 样式丢失

**问题**: 页面没有样式

**解决**: 
- 检查 `tailwind.config.js` 配置
- 确保 `app/globals.css` 被正确导入

## 📝 后续步骤

1. **自定义域名**（可选）
   - 在 Vercel Dashboard → Settings → Domains
   - 添加你的自定义域名

2. **环境变量管理**
   - 生产环境：使用真实的环境变量
   - 预览环境：可以使用假值

3. **自动部署**
   - 推送到 `main` 分支会自动触发部署
   - 每个 PR 会创建预览部署

## 🎉 完成！

部署成功后，你就可以分享 LI.FI 落地页的 Demo 链接了！

