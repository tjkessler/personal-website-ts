import { seo, site } from "@/content";
import { createOgImage, ogContentType, ogSize } from "@/app/lib/og-image";

export const alt = `${site.person.name} — ${site.person.titles.join(" · ")}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    title: site.person.name,
    description: seo.home.description,
  });
}
