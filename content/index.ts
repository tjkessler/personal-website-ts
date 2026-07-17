/** Barrel for typed site content. Prefer `import { … } from "@/content"`. */

export type {
  Award,
  NavItem,
  Presentation,
  Project,
  Publication,
} from "./types";

export { education, featuredAwards, otherAwards } from "./awards";
export { experience } from "./experience";
export { pillars } from "./pillars";
export {
  pillarAccent,
  pillarTagVariant,
  skillGroupTagVariant,
  themeChrome,
  type PillarAccent,
} from "./theme";
export {
  featuredProjects,
  mainProjects,
  sideProjects,
} from "./projects";
export {
  featuredPublications,
  homeResearchIntro,
  presentations,
  publications,
  topicLabel,
} from "./research";
export { buildJsonLd } from "./jsonLd";
export { buildPageMetadata, seo } from "./seo";
export { site } from "./site";
export { skillGroups } from "./skills";
