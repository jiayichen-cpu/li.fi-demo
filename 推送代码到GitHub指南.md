# 推送代码到 GitHub 并提 PR 指南

## 什么是 Fork 和 PR？

- **Fork（分叉）**：把别人的仓库复制一份到你的 GitHub 账号下，这样你就可以自由修改
- **PR（Pull Request，拉取请求）**：你修改完代码后，请求原仓库的维护者把你的修改合并进去

## 完整流程步骤

### 第一步：Fork 原仓库到你的 GitHub

1. **访问原仓库**
   - 打开浏览器，访问：https://github.com/OneKeyHQ/PerpsTradingList
   - 确保你已经登录 GitHub 账号

2. **点击 Fork 按钮**
   - 在页面右上角找到 "Fork" 按钮（通常在 "Star" 和 "Watch" 旁边）
   - 点击 "Fork"
   - 等待几秒钟，GitHub 会创建一个副本到你的账号下
   - Fork 完成后，你会看到仓库地址变成：`https://github.com/YOUR_USERNAME/PerpsTradingList`
     （YOUR_USERNAME 是你的 GitHub 用户名）

### 第二步：将你的代码推送到 Fork 的仓库

#### 2.1 初始化 Git（如果还没初始化）

```bash
cd /Users/yael/Downloads/lifi-carnival-landing

# 检查是否已经是 Git 仓库
git status

# 如果不是 Git 仓库，初始化
git init
```

#### 2.2 添加远程仓库

```bash
# 添加你 Fork 的仓库作为远程仓库
# 替换 YOUR_USERNAME 为你的 GitHub 用户名
git remote add origin https://github.com/YOUR_USERNAME/PerpsTradingList.git

# 检查远程仓库是否正确添加
git remote -v
```

#### 2.3 提交并推送代码

```bash
# 添加所有文件
git add .

# 提交代码（写一个清晰的提交信息）
git commit -m "Add LI.FI Trading Carnival landing page"

# 推送到你的 Fork 仓库
git branch -M main
git push -u origin main
```

**如果推送时要求输入账号密码：**
- GitHub 现在不支持密码登录，需要使用 Personal Access Token
- 或者使用 SSH 方式（推荐）

#### 2.4 如果遇到认证问题，使用 SSH（推荐）

**生成 SSH 密钥（如果还没有）：**
```bash
# 检查是否已有 SSH 密钥
ls -al ~/.ssh

# 如果没有，生成新的 SSH 密钥
ssh-keygen -t ed25519 -C "your_email@example.com"
# 按回车使用默认路径，可以设置密码或直接回车

# 复制公钥
cat ~/.ssh/id_ed25519.pub
# 复制输出的内容
```

**在 GitHub 添加 SSH 密钥：**
1. 访问 https://github.com/settings/keys
2. 点击 "New SSH key"
3. Title 填：`MacBook`（或任意名字）
4. Key 粘贴刚才复制的公钥内容
5. 点击 "Add SSH key"

**使用 SSH 方式连接：**
```bash
# 删除之前的 HTTPS 远程仓库
git remote remove origin

# 添加 SSH 方式的远程仓库（替换 YOUR_USERNAME）
git remote add origin git@github.com:YOUR_USERNAME/PerpsTradingList.git

# 再次推送
git push -u origin main
```

### 第三步：创建 Pull Request（PR）

1. **访问你的 Fork 仓库**
   - 打开：`https://github.com/YOUR_USERNAME/PerpsTradingList`
   - 你会看到页面顶部有一个黄色提示框，显示 "This branch is X commits ahead of OneKeyHQ:main"
   - 点击 "Contribute" → "Open pull request"

2. **填写 PR 信息**
   - **Title（标题）**：例如：`Add LI.FI Trading Carnival landing page`
   - **Description（描述）**：详细说明你做了什么修改，例如：
     ```
     添加了 LI.FI 交易嘉年华落地页，包括：
     - Hero 区域带倒计时
     - 快速指南（交易参与3步 + 组队参与）
     - LI.FI 日交易量排行榜
     - FAQ 常见问题
     - 支持中英文切换
     ```

3. **提交 PR**
   - 点击 "Create pull request"
   - 等待后端同事审查和合并

### 第四步：等待审查和合并

- 后端同事会收到通知，审查你的代码
- 如果有问题，他们会提出修改建议
- 修改后，再次提交代码，PR 会自动更新
- 审查通过后，代码会被合并到主仓库

---

## 常见问题

### Q: 如果原仓库更新了，如何同步？

```bash
# 添加上游仓库（原仓库）
git remote add upstream https://github.com/OneKeyHQ/PerpsTradingList.git

# 获取上游更新
git fetch upstream

# 合并到你的分支
git merge upstream/main

# 推送到你的 Fork
git push origin main
```

### Q: 如何修改 PR？

```bash
# 修改代码后
git add .
git commit -m "Update: 修改说明"
git push origin main

# PR 会自动更新，不需要重新创建
```

### Q: 如何查看 PR 状态？

- 访问：`https://github.com/OneKeyHQ/PerpsTradingList/pulls`
- 找到你创建的 PR，查看状态和评论

### Q: 推送时提示 "remote: Permission denied"？

- 检查是否使用了正确的 GitHub 账号
- 确认 SSH 密钥已添加到 GitHub
- 或者使用 Personal Access Token

---

## 快速命令总结

```bash
# 1. 进入项目目录
cd /Users/yael/Downloads/lifi-carnival-landing

# 2. 初始化 Git（如果还没初始化）
git init
git add .
git commit -m "Add LI.FI Trading Carnival landing page"

# 3. 添加你的 Fork 仓库（替换 YOUR_USERNAME）
git remote add origin git@github.com:YOUR_USERNAME/PerpsTradingList.git

# 4. 推送代码
git branch -M main
git push -u origin main

# 5. 然后在 GitHub 网页上创建 PR
```

---

## 需要帮助？

如果遇到问题，可以：
1. 截图错误信息
2. 询问后端同事
3. 查看 GitHub 文档：https://docs.github.com

