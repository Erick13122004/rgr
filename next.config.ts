import type { NextConfig } from "next";
import path from "node:path";

const projectRoot = path.resolve();

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: projectRoot,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
