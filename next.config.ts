import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "main.d1hiqvipguwtuq.amplifyapp.com",
      },
    ],
  },
};
export default nextConfig;
