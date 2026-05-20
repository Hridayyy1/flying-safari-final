import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Prevent Next from picking ~/package-lock.json as the monorepo root
  turbopack: {
    root: projectRoot,
  },
  images: {
    // Skip on-the-fly optimization in dev — large safari photos were hanging compile
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
