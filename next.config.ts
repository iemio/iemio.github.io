import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export", // to generate a static site.
    basePath: "",
    assetPrefix: "",
    images: {
        unoptimized: true, // Required for GitHub Pages (no Next.js Image Optimization)
    },
};

export default nextConfig;
