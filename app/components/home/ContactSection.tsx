import { site } from "@/content";
import { ButtonLink, Heading, Section } from "@/app/components/ui";

/** Contact: mailto, socials, CV, soft consulting line (blueprint 3.7). */
export function ContactSection() {
  const { socialLinks, consultingLine } = site;
  const emailLink = socialLinks.find((link) => link.kind === "email");
  const otherLinks = socialLinks.filter((link) => link.kind !== "email");

  return (
    <Section id="contact">
      <Heading as="h2">Contact</Heading>
      {consultingLine ? (
        <p className="mb-8 max-w-2xl text-base leading-relaxed sm:text-lg">
          <span className="font-medium text-warm">{consultingLine}</span>
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {emailLink ? (
          <ButtonLink href={emailLink.href} variant="primary">
            {emailLink.label === "Email" ? "Email me" : emailLink.label}
          </ButtonLink>
        ) : null}
        {otherLinks.map((link) => (
          <ButtonLink
            key={link.href}
            href={link.href}
            variant="secondary"
            {...(link.kind === "cv" ? { download: true } : {})}
          >
            {link.kind === "cv" ? "Download CV" : link.label}
          </ButtonLink>
        ))}
      </div>
    </Section>
  );
}
