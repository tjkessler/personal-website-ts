import { buildPageMetadata, presentations, publications, seo } from "@/content";
import {
  Heading,
  PresentationRow,
  PublicationList,
  Section,
  TextLink,
} from "@/app/components/ui";

export const metadata = buildPageMetadata(seo.research);

export default function Research() {
  return (
    <Section>
      <Heading as="h1">Published Works</Heading>
      <p className="mt-3 text-muted-foreground">
        Full publication list. Featured works also appear on the{" "}
        <TextLink href="/#research">home Research</TextLink> section.
      </p>
      <PublicationList
        publications={publications}
        emptyMessage="Publications coming soon."
      />

      <div className="mt-12">
        <Heading as="h2">Presentations</Heading>
        {presentations.length > 0 ? (
          <ul className="mt-2 list-none p-0">
            {presentations.map((presentation) => (
              <li key={presentation.id}>
                <PresentationRow presentation={presentation} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-muted-foreground">
            Presentations coming soon.
          </p>
        )}
      </div>
    </Section>
  );
}
