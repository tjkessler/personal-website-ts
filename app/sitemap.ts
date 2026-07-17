import type { MetadataRoute } from "next";
import { seo } from "@/content";

const pages = [seo.home, seo.projects, seo.research, seo.privacy] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: new URL(page.path, seo.siteUrl).href,
  }));
}
