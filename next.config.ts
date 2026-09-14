import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/rooms",
        destination: "/stay",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

