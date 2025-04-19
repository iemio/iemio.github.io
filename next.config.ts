import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export", // to generate a static site.
    basePath: "",
    assetPrefix: "",
    images: {
        unoptimized: true, // Required for GitHub Pages (no Next.js Image Optimization)
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    transpilePackages: ["next-mdx-remote"],
};

// export default nextConfig;

// const withMDX = createMDX({
//
// });

const withMDX = createMDX({
    extension: /\.mdx?$/,
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
