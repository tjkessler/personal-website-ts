import { site } from "@/content";
import { ButtonLink, Container, Section } from "@/app/components/ui";

/** Home hero: brand, positioning, CTAs, atmosphere (blueprint 3.2 / 3.8). */
export function HeroSection() {
  const { person, heroCtas } = site;
  const titlesLine = person.titles.join(" · ");

  return (
    <Section
      fullBleed
      /* Fills the viewport below the sticky h-18 header; svh tracks resizes
         while the user is at the top without mobile URL-bar jumpiness. */
      className="hero-atmosphere relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden !py-16 sm:!py-24 md:!py-32"
    >
      <div className="hero-atmosphere__wash" aria-hidden="true" />
      <div className="hero-atmosphere__grid" aria-hidden="true" />
      <Container className="relative z-10 min-w-0">
        <h1 className="hero-enter hero-enter--1 mb-4 max-w-4xl font-serif text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {person.name}
        </h1>
        <p className="hero-enter hero-enter--2 mb-5 max-w-2xl text-sm font-medium leading-snug tracking-wide text-foreground/80 sm:mb-6 sm:text-base">
          {titlesLine}
        </p>
        <p className="hero-enter hero-enter--3 mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-xl">
          {person.shortBio}
        </p>
        <div className="hero-enter hero-enter--4 flex flex-wrap gap-3">
          {heroCtas.map((cta, index) => (
            <ButtonLink
              key={cta.href}
              href={cta.href}
              variant={index === 0 ? "primary" : "secondary"}
              {...(cta.href.endsWith(".pdf") ? { download: true } : {})}
            >
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </Container>
    </Section>
  );
}
