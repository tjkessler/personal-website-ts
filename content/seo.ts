import type { Metadata } from "next";
import { site } from "./site";
import type { PageSeo, SiteSeo } from "./types";

const siteName = site.person.name;

const home: PageSeo = {
  title: siteName,
  description: site.person.shortBio,
  path: "/",
};

const projects: PageSeo = {
  title: "Projects",
  description:
    "Full-stack, ML/AI, and scientific computing projects — from production SaaS and agentic analytics to open-source scientific tools.",
  path: "/projects",
};

const research: PageSeo = {
  title: "Research",
  description:
    "Publications and presentations in machine learning, QSAR, combustion, and open-source scientific software.",
  path: "/research",
};

const privacy: PageSeo = {
  title: "Privacy",
  description:
    "This site does not use cookies or analytics and has no contact-form backend.",
  path: "/privacy",
};

/** Per-route titles, descriptions, and paths for Next.js Metadata / Open Graph (Bluesky CardyB). */
export const seo: SiteSeo = {
  siteUrl: "https://www.traviskessler.com",
  siteName,
  titleTemplate: `%s · ${siteName}`,
  defaultTitle: siteName,
  defaultDescription: site.person.shortBio,
  home,
  projects,
  research,
  privacy,
};

/**
 * Shared page metadata: title, description, Open Graph, and canonical.
 * Home uses an absolute title so the root template does not double the name.
 * Paths resolve to absolute URLs via root `metadataBase`.
 */
export function buildPageMetadata(page: PageSeo): Metadata {
  const isHome = page.path === "/";
  const openGraphTitle = isHome ? page.title : `${page.title} · ${siteName}`;

  return {
    title: isHome ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: openGraphTitle,
      description: page.description,
      url: page.path,
    },
  };
}
