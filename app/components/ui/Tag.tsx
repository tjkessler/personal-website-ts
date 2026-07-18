import { pillarTagVariant } from "@/content";
import type { Pillar } from "@/content/types";

/** Shared chip styles for skills, tech, pillars, and topic tags. */
const tagBaseClassName =
  "rounded-md border px-2.5 py-1 text-xs leading-snug text-foreground sm:text-sm";

const tagVariants = {
  default: "border-border bg-muted/40 light:bg-muted/70",
  /** Soft tint — skill groups (blue / teal / copper). */
  accent:
    "border-accent/40 bg-accent/15 light:border-accent/60 light:bg-accent/25",
  brand: "border-brand/35 bg-brand/12 light:border-brand/55 light:bg-brand/20",
  warm: "border-warm/35 bg-warm/12 light:border-warm/55 light:bg-warm/20",
  /** Soft tint — project pillar labels (rose / sky / lime; not skill hues). */
  "pillar-fullstack":
    "border-chip-sky/40 bg-chip-sky/15 light:border-chip-sky/60 light:bg-chip-sky/25",
  "pillar-ml":
    "border-chip-rose/40 bg-chip-rose/15 light:border-chip-rose/60 light:bg-chip-rose/25",
  "pillar-scientific":
    "border-chip-lime/40 bg-chip-lime/15 light:border-chip-lime/60 light:bg-chip-lime/25",
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
