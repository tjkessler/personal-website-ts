import { buildPageMetadata, seo, site } from "@/content";
import { Heading, Section, TextLink } from "@/app/components/ui";

export const metadata = buildPageMetadata(seo.privacy);

export default function Privacy() {
  return (
    <Section>
      <Heading as="h1">Privacy</Heading>
      <div className="mt-6 max-w-prose space-y-4 text-muted-foreground">
        <p>
          This website does not use cookies, does not run analytics or tracking
          scripts, and does not include a contact form or any form-processing
          backend.
        </p>
        <p>
          Links such as email, GitHub, LinkedIn, Bluesky, and the CV download go
          to those destinations directly. External sites may have their own
          privacy practices.
        </p>
        <p>
          Questions about this site:{" "}
          <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>.
        </p>
      </div>
    </Section>
  );
}
