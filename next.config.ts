import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      /* ── non-www → www (canonical domain redirect) ── */
      /* Preserves path and query string. 301 permanent. */
      {
        source:      "/:path*",
        has: [
          {
            type:  "host",
            value: "ilovekanthalloor.com",
          },
        ],
        destination: "https://www.ilovekanthalloor.com/:path*",
        permanent:   true,
      },

      /* ── /rooms → /stay (legacy) ── */
      {
        source:      "/rooms",
        destination: "/stay",
        permanent:   true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          /* Force HTTPS */
          {
            key:   "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options",   value: "nosniff" },
          { key: "X-Frame-Options",          value: "DENY" },
          { key: "Referrer-Policy",          value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control",   value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
