import type { ReactNode } from "react";
import { Container } from "./Container";

export type SectionTone = "default" | "brand" | "warm";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /**
   * Soft background wash. Brand = verdigris, warm = copper.
   * Interactive accents stay on `--accent` (blue).
   */
  tone?: SectionTone;
  /**
   * When true, children render edge-to-edge (no inner Container).
   * Use for full-bleed heroes; nest Container yourself where needed.
   */
  fullBleed?: boolean;
};

const toneClassName: Record<SectionTone, string> = {
  default: "",
  brand: "section-tone-brand",
  warm: "section-tone-warm",
};

/** Vertical rhythm wrapper for page sections; contains content by default. */
export function Section({
  children,
  id,
  className = "",
  tone = "default",
  fullBleed = false,
}: SectionProps) {
  const content = fullBleed ? children : <Container>{children}</Container>;

  return (
    <section
      id={id}
      className={`${id ? "scroll-mt-20 md:scroll-mt-24 " : ""}${toneClassName[tone]} py-12 sm:py-16 md:py-20 ${className}`.trim()}
    >
      {content}
    </section>
  );
}
