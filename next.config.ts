import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Force a new buildId per发布，避免客户端继续请求旧静态文件。
   * 可以通过 NEXT_BUILD_ID 注入（推荐用 git commit / 构建时间），否则 fallback 为构建时间戳。
   */
  generateBuildId: async () => {
    if (process.env.NEXT_BUILD_ID) {
      return process.env.NEXT_BUILD_ID;
    }
    return `build-${Date.now()}`;
  },
  /**
   * 确保 HTML、数据请求不缓存，避免更新后客户端还用旧引用。
   * 静态资源仍然走长缓存（路径含 buildId）。
   */
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/data/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "Pragma", value: "no-cache" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "Pragma", value: "no-cache" },
        ],
      },
    ];
  },
};

export default nextConfig;
