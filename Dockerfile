# syntax=docker/dockerfile:1

# 使用 bullseye（Debian 11，含 libssl1.1），避免 Prisma 运行时缺少 libssl.so.1.1
FROM node:20-bullseye-slim AS base
WORKDIR /app

FROM base AS deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl \
  && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS builder
COPY . .
# 用构建时的 env/arg 生成最新静态资源
# DATABASE_URL should be provided via build args, not hardcoded
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
RUN npm run build

# 仅安装生产依赖，避免把 builder 的 node_modules 整包带入
FROM base AS prod-deps
# DATABASE_URL should be provided via build args, not hardcoded
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY prisma ./prisma
# 生产镜像内生成 Prisma Client，避免运行时找不到 .prisma/client
RUN npx prisma generate

FROM base AS runner
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
CMD ["npm", "run", "start"]
