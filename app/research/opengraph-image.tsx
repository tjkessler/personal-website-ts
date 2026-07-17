import { seo, site } from "@/content";
import { createOgImage, ogContentType, ogSize } from "@/app/lib/og-image";

export const alt = `${seo.research.title} · ${seo.siteName}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: seo.research.title,
    subtitle: site.person.name,
    description: seo.research.description,
  });
}
