import type { Publication } from "@/content";
import { PublicationRow } from "./PublicationRow";

type PublicationListProps = {
  publications: Publication[];
  /** When set and `publications` is empty, render this message instead of the list. */
  emptyMessage?: string;
  className?: string;
};

/** Shared publication row list used by home Research and `/research`. */
export function PublicationList({
  publications,
  emptyMessage,
  className = "mt-6 list-none p-0",
}: PublicationListProps) {
  if (publications.length === 0) {
    return emptyMessage ? (
      <p className="mt-6 text-muted-foreground">{emptyMessage}</p>
    ) : null;
  }

  return (
    <ul className={className}>
      {publications.map((publication) => (
        <li key={publication.id}>
          <PublicationRow publication={publication} />
        </li>
      ))}
    </ul>
  );
}
