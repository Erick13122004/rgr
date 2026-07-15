import type { NextConfig } from "next";
import path from "node:path";

const projectRoot = path.resolve();

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: projectRoot,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
