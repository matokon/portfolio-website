import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  redirects() {
    return [{ source: "/", destination: "/pl", permanent: false }];
  },
};

export default nextConfig;
