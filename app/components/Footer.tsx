import { site } from "@/content";
import { Container, TextLink } from "./ui";

/** Site-wide footer: copyright + contact/social links (blueprint 6.3). */
export function Footer() {
  const year = new Date().getFullYear();
  const { person, socialLinks } = site;

  return (
    <footer className="border-t border-border py-8 text-sm text-muted-foreground">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="m-0">
            © {year} {person.name}
          </p>
          <p className="m-0 text-xs text-muted-foreground/80">
            Fonts: Source Sans 3 and Source Serif 4 (SIL OFL)
          </p>
          <p className="m-0">
            <TextLink href="/privacy" className="text-xs">
              Privacy
            </TextLink>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
          {socialLinks.map((link) => (
            <TextLink
              key={link.href}
              href={link.href}
              className="text-sm"
              {...(link.kind === "cv" ? { download: true } : {})}
            >
              {link.label}
            </TextLink>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
