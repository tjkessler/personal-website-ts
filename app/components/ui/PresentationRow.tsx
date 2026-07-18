import { topicLabel } from "@/content";
import type { Presentation } from "@/content";
import { TextLink } from "./TextLink";
import { tagClassName } from "./Tag";

type PresentationRowProps = {
  presentation: Presentation;
  className?: string;
};

/** Bibliography-style row for conference / symposium talks with topic tags. */
export function PresentationRow({
  presentation,
  className = "",
}: PresentationRowProps) {
  const classes = ["border-b border-border py-5 last:border-b-0", className]
    .filter(Boolean)
    .join(" ");
  const topics = presentation.topics ?? [];

  return (
    <article className={classes}>
      <h3 className="font-serif text-base font-semibold tracking-tight break-words text-foreground sm:text-xl">
        {presentation.title}
      </h3>
      <p className="mt-1.5 text-sm break-words text-muted-foreground">
        {presentation.authors}
      </p>
      <p className="mt-1 text-sm text-foreground">
        <span className="italic">{presentation.event}</span>
        <span className="text-muted-foreground"> ({presentation.year})</span>
        {presentation.url ? (
          <>
            <span className="text-muted-foreground"> · </span>
            <TextLink href={presentation.url}>Link</TextLink>
          </>
        ) : null}
      </p>
      {topics.length > 0 ? (
        <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
          {topics.map((topic) => (
            <li key={topic} className={tagClassName()}>
              {topicLabel(topic)}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
