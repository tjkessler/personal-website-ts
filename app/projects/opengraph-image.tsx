import { seo, site } from "@/content";
import { createOgImage, ogContentType, ogSize } from "@/app/lib/og-image";

export const alt = `${seo.projects.title} · ${seo.siteName}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: seo.projects.title,
    subtitle: site.person.name,
    description: seo.projects.description,
  });
}
