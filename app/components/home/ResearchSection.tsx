import { featuredPublications, homeResearchIntro } from "@/content";
import {
  Heading,
  PublicationList,
  Section,
  TextLink,
} from "@/app/components/ui";

/** Research: featured publications from content/research.ts (blueprint 4.4 / 4.7). */
export function ResearchSection() {
  return (
    <Section id="research" tone="warm">
      <Heading as="h2" mark="warm">
        Research
      </Heading>
      <p className="mb-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {homeResearchIntro}
      </p>
      <PublicationList
        publications={featuredPublications}
        emptyMessage="Publications coming soon."
        className="list-none p-0"
      />
      <p className="mt-8">
        <TextLink href="/research">View all research</TextLink>
      </p>
    </Section>
  );
}
