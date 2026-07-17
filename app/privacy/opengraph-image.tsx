import { seo, site } from "@/content";
import { createOgImage, ogContentType, ogSize } from "@/app/lib/og-image";

export const alt = `${seo.privacy.title} · ${seo.siteName}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: seo.privacy.title,
    subtitle: site.person.name,
    description: seo.privacy.description,
  });
}
