import type { Pillar } from "./types";

/**
 * Mobile browser chrome (`theme-color`) — keep in sync with `--background`
 * in `app/globals.css` for `[data-theme="light"]` / `[data-theme="dark"]`.
 */
export const themeChrome = {
  light: "#f8fafc",
  dark: "#0b1220",
} as const;

/** About pillar left-bar token (maps to Tailwind in AboutSection). */
export type PillarAccent = "brand" | "warm" | "accent";

/** Skill chip tint — matches soft Tag variants (not project pillar chips). */
export type SkillTagVariant = "default" | "accent" | "brand" | "warm";

/** Project pillar chip variant — matches Tag.tsx `pillar-*` keys. */
export type PillarTagVariant =
  | "pillar-fullstack"
  | "pillar-ml"
  | "pillar-scientific";

/** Proof pillar → About accent bar color. */
export const pillarAccent: Record<Pillar, PillarAccent> = {
  fullstack: "accent",
  ml: "brand",
  scientific: "warm",
};

/** Proof pillar → project card chip variant. */
export const pillarTagVariant: Record<Pillar, PillarTagVariant> = {
  fullstack: "pillar-fullstack",
  ml: "pillar-ml",
  scientific: "pillar-scientific",
};

/** Skill group id → chip tint (interactive blue reserved for CTAs/links). */
export const skillGroupTagVariant: Record<string, SkillTagVariant> = {
  "fullstack-web": "accent",
  "ml-ai": "brand",
  "scientific-data": "warm",
  "cloud-mlops": "default",
};
