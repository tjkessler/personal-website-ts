import type { Metadata } from "next";
import { ButtonLink, Heading, Section } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Section>
      <Heading
        as="h1"
        description="That URL doesn't exist on this site. Try one of these instead."
      >
        Page not found
      </Heading>
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        <ButtonLink href="/" variant="primary">
          Home
        </ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          Projects
        </ButtonLink>
        <ButtonLink href="/#contact" variant="secondary">
          Contact
        </ButtonLink>
      </div>
    </Section>
  );
}
