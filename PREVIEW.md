# 如何预览落地页

## 🚀 本地预览（开发模式）

### 步骤 1: 安装依赖

```bash
cd /Users/yael/Downloads/lifi-carnival-landing
npm install
```

### 步骤 2: 启动开发服务器

```bash
npm run dev
```

### 步骤 3: 在浏览器中打开

开发服务器启动后，你会看到类似这样的输出：
```
  ▲ Next.js 16.0.7
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000
```

**在浏览器中访问：** [http://localhost:3000](http://localhost:3000)

### 步骤 4: 查看预览

- ✅ 页面会自动热重载（修改代码后自动刷新）
- ✅ 支持深色模式切换（浏览器开发者工具）
- ✅ 可以切换语言（英文/中文）

## 🏗️ 本地生产预览

如果你想预览生产构建的效果：

```bash
# 1. 构建生产版本
npm run build

# 2. 启动生产服务器
npm start

# 3. 访问 http://localhost:3000
```

## 🌐 Vercel 预览

### 部署到 Vercel 后

1. **生产环境预览：**
   - 部署完成后，Vercel 会提供一个 URL
   - 格式：`https://your-project-name.vercel.app`
   - 在 Vercel Dashboard 的项目页面可以看到

2. **预览部署（Preview Deployments）：**
   - 每次推送到 Git 分支或创建 Pull Request 时
   - Vercel 会自动创建预览部署
   - 预览 URL 格式：`https://your-project-git-branch-name.vercel.app`
   - 在 Vercel Dashboard 的 "Deployments" 标签页可以看到所有预览

3. **查看方式：**
   - 登录 [vercel.com](https://vercel.com)
   - 进入你的项目
   - 点击 "Deployments" 标签
   - 每个部署都有一个可点击的 URL

## 📱 测试响应式设计

在浏览器中：
1. 按 `F12` 打开开发者工具
2. 点击设备工具栏图标（或按 `Ctrl+Shift+M` / `Cmd+Shift+M`）
3. 选择不同的设备尺寸测试移动端效果

## 🎨 测试功能

### 语言切换
- 点击右上角的语言切换按钮
- 在英文和中文之间切换

### 深色模式
- 浏览器设置 → 外观 → 深色模式
- 或使用浏览器扩展切换

### FAQ 手风琴
- 点击 FAQ 部分的问题
- 查看展开/收起动画效果

## 🔍 常见问题

### 端口被占用？

如果 3000 端口被占用，Next.js 会自动使用下一个可用端口（3001, 3002 等）

### 页面无法加载？

1. 检查终端是否有错误信息
2. 确保所有依赖已安装：`npm install`
3. 检查 Node.js 版本：`node --version`（需要 18+）

### 样式没有加载？

1. 确保 `npm install` 已运行
2. 检查 `app/globals.css` 文件是否存在
3. 重启开发服务器

## 📝 快速命令参考

```bash
# 开发模式（热重载）
npm run dev

# 生产构建
npm run build

# 生产预览
npm start

# 代码检查
npm run lint
```

## 🌍 访问地址总结

| 环境 | 地址 | 说明 |
|------|------|------|
| 本地开发 | http://localhost:3000 | `npm run dev` 后访问 |
| 本地生产 | http://localhost:3000 | `npm run build && npm start` 后访问 |
| Vercel 生产 | https://your-project.vercel.app | 部署后的生产地址 |
| Vercel 预览 | https://your-project-git-branch.vercel.app | PR 或分支部署的预览地址 |


