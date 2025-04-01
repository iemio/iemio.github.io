import type { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/lib/constants";

// Force this route to be treated as static during export
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `${WEBSITE_URL}/sitemap.xml`,
    };
}
