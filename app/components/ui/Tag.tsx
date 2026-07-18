import { pillarTagVariant } from "@/content";
import type { Pillar } from "@/content/types";

/** Shared chip styles for skills, tech, pillars, and topic tags. */
const tagBaseClassName =
  "rounded-md border px-2.5 py-1 text-xs leading-snug text-foreground sm:text-sm";

const tagVariants = {
  default: "border-border bg-muted/40",
  /** Soft tint — skill groups (blue / teal / copper). */
  accent: "border-accent/40 bg-accent/15",
  brand: "border-brand/35 bg-brand/12",
  warm: "border-warm/35 bg-warm/12",
  /** Soft tint — project pillar labels (rose / sky / lime; not skill hues). */
  "pillar-fullstack": "border-chip-sky/40 bg-chip-sky/15",
  "pillar-ml": "border-chip-rose/40 bg-chip-rose/15",
  "pillar-scientific": "border-chip-lime/40 bg-chip-lime/15",
} as const;

export type TagVariant = keyof typeof tagVariants;

/** Chip class for a given visual variant (same size; color differs). */
export function tagClassName(variant: TagVariant = "default"): string {
  return `${tagBaseClassName} ${tagVariants[variant]}`;
}

/** Interactive chip classes for linked tags. */
export function tagLinkClassName(variant: TagVariant = "default"): string {
  return `${tagClassName(variant)} block transition-[border-color,background-color,box-shadow] hover:border-foreground/40 hover:bg-background/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`;
}

/** Tag classes for a proof-pillar id on project cards. */
export function pillarTagClassName(pillarId: Pillar): string {
  return tagClassName(pillarTagVariant[pillarId]);
}
