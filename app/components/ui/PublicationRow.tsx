import { topicLabel } from "@/content";
import type { Publication } from "@/content";
import { doiHref } from "@/app/lib/links";
import { TextLink } from "./TextLink";
import { tagClassName } from "./Tag";

type PublicationRowProps = {
  publication: Publication;
  className?: string;
};

/** Bibliography-style row: title, authors, venue/year, DOI, topic tags. */
export function PublicationRow({
  publication,
  className = "",
}: PublicationRowProps) {
  const classes = ["border-b border-border py-5 last:border-b-0", className]
    .filter(Boolean)
    .join(" ");
  const topics = publication.topics ?? [];

  return (
    <article className={classes}>
      <h3 className="font-serif text-base font-semibold tracking-tight break-words text-foreground sm:text-xl">
        {publication.title}
      </h3>
      <p className="mt-1.5 text-sm break-words text-muted-foreground">
        {publication.authors}
      </p>
      <p className="mt-1 text-sm text-foreground">
        <span className="italic">{publication.venue}</span>
        <span className="text-muted-foreground"> ({publication.year})</span>
      </p>
      {publication.doi ? (
        <p className="mt-2 text-sm">
          <TextLink href={doiHref(publication.doi)}>DOI</TextLink>
        </p>
      ) : publication.url ? (
        <p className="mt-2 text-sm">
          <TextLink href={publication.url}>Link</TextLink>
        </p>
      ) : null}
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
