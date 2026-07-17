import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3";

type HeadingMark = "brand" | "warm" | false;

type HeadingProps = {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
  /** Optional supporting line under the title. */
  description?: ReactNode;
  /**
   * Colored bar on section titles. Default: brand for h2, off otherwise.
   * Pass false to disable; "warm" for copper.
   */
  mark?: HeadingMark;
};

const levelStyles: Record<HeadingLevel, string> = {
  h1: "font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
  h2: "font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl",
  h3: "font-serif text-lg font-semibold tracking-tight text-foreground sm:text-xl",
};

const levelSpacing: Record<HeadingLevel, string> = {
  h1: "mb-8",
  h2: "mb-6",
  h3: "mb-4",
};

function resolveMark(
  level: HeadingLevel,
  mark: HeadingMark | undefined,
): "brand" | "warm" | null {
  if (mark === false) return null;
  if (mark === "brand" || mark === "warm") return mark;
  return level === "h2" ? "brand" : null;
}

/** Display headings using Source Serif; optional muted description. */
export function Heading({
  as: Tag = "h1",
  children,
  className = "",
  description,
  mark,
}: HeadingProps) {
  const resolved = resolveMark(Tag, mark);
  const markClass =
    resolved === "brand"
      ? "heading-mark"
      : resolved === "warm"
        ? "heading-mark heading-mark--warm"
        : "";

  return (
    <div className={levelSpacing[Tag]}>
      <Tag className={`${levelStyles[Tag]} ${markClass} ${className}`.trim()}>
        {children}
      </Tag>
      {description != null && (
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
