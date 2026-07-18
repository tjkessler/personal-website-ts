/** Shared content types for typed modules under `content/`. */

export type Pillar = "fullstack" | "ml" | "scientific";

export type SocialKind =
  "github" | "linkedin" | "bluesky" | "email" | "cv" | "other";

export interface Person {
  name: string;
  /** Short credential / role lines shown near the name (e.g. PhD, titles). */
  titles: string[];
  shortBio: string;
  /** Home About section narrative. */
  aboutNarrative: string;
}

/** Proof pillar for About (Full-stack / ML/AI / Scientific computing). */
export interface ProofPillar {
  id: Pillar;
  label: string;
  summary: string;
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  /** Display range, e.g. "2024 – Present". */
  dates: string;
  /** Machine-readable start (YYYY-MM). */
  startDate: string;
  /** Machine-readable end (YYYY-MM); omit when ongoing. */
  endDate?: string;
  bullets: string[];
  location?: string;
  url?: string;
}

export interface Skill {
  label: string;
  /** Official project page or a neutral overview of the concept. */
  href?: string;
}

export interface SkillGroup {
  id: string;
  /** Category label, e.g. "Full-stack / Web". */
  label: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  pillars: Pillar[];
  /** Featured on home Selected Work when true. */
  featured?: boolean;
  /** Side / secondary project listing when true. */
  side?: boolean;
  url?: string;
  github?: string;
  demo?: string;
  doi?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  topics?: string[];
  /** Featured on home Research section when true. */
  featured?: boolean;
}

export interface Presentation {
  id: string;
  title: string;
  authors: string;
  event: string;
  year: number;
  location?: string;
  url?: string;
  topics?: string[];
}

export interface Award {
  id: string;
  title: string;
  year: number;
  org?: string;
  description?: string;
  /** Featured on home About footer strip when true. */
  featured?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  /** Display range or conferral year, e.g. "2017 – 2022" or "2022". */
  dates: string;
  details?: string[];
}

export interface NavItem {
  label: string;
  /** Route (`/projects`) or in-page anchor (`#about`). */
  href: string;
  /** When set, header renders an icon-only control. */
  icon?: "github" | "linkedin";
}

export interface SocialLink {
  label: string;
  href: string;
  kind?: SocialKind;
}

export interface Cta {
  label: string;
  href: string;
}

export interface SiteContent {
  person: Person;
  email: string;
  github: string;
  linkedin: string;
  /** Profile URL, e.g. https://bsky.app/profile/… */
  bluesky: string;
  /** Display handle with @, e.g. @name.bsky.social */
  blueskyHandle: string;
  cvPath: string;
  heroCtas: Cta[];
  /** Soft consulting availability line for contact / about. */
  consultingLine?: string;
  /** Primary header / mobile nav entries. */
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

/** Title, description, and path for one route’s metadata / Open Graph. */
export interface PageSeo {
  title: string;
  description: string;
  /** Path relative to site root, e.g. `/projects`. */
  path: string;
}

/** Site-wide and per-route SEO fields (OG image via App Router opengraph-image routes). */
export interface SiteSeo {
  siteUrl: string;
  siteName: string;
  /** Next.js title template, e.g. `%s · Travis Kessler`. */
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  home: PageSeo;
  projects: PageSeo;
  research: PageSeo;
  privacy: PageSeo;
}
