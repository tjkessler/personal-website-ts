import type { MetadataRoute } from "next";
import { seo } from "@/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", seo.siteUrl).href,
  };
}
