import {
  education,
  featuredAwards,
  otherAwards,
  pillarAccent,
  pillars,
  site,
  type Award,
  type PillarAccent,
} from "@/content";
import { Heading, Section } from "@/app/components/ui";

const accentBarClass: Record<PillarAccent, string> = {
  brand: "bg-brand",
  warm: "bg-warm",
  accent: "bg-accent",
};

function AwardList({ items }: { items: Award[] }) {
  return (
    <ul className="m-0 list-none space-y-4 p-0">
      {items.map((award) => (
        <li key={award.id}>
          <p className="text-sm font-medium break-words text-foreground">
            {award.title}
          </p>
          <p className="text-sm text-muted-foreground">
            {award.year}
            {award.org ? (
              <span className="text-muted-foreground/70"> · {award.org}</span>
            ) : null}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** About: short narrative + three proof pillars + light education/awards strip. */
export function AboutSection() {
  const { aboutNarrative } = site.person;

  return (
    <Section id="about" tone="brand">
      <Heading as="h2">About</Heading>
      <p className="mb-10 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {aboutNarrative}
      </p>
      <ul className="mb-10 grid list-none gap-6 p-0 sm:mb-12 sm:grid-cols-3 sm:gap-6">
        {pillars.map((pillar) => {
          const accent = pillarAccent[pillar.id];
          return (
            <li key={pillar.id} className="relative min-w-0 pl-3.5">
              <span
                className={`absolute top-1 bottom-1 left-0 w-0.5 rounded-full ${accentBarClass[accent]}`}
                aria-hidden="true"
              />
              <h3 className="mb-2 font-serif text-base font-semibold tracking-tight text-foreground sm:text-lg">
                {pillar.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.summary}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 sm:gap-10 sm:pt-10">
        <div className="min-w-0">
          <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Education
          </h3>
          <ul className="m-0 list-none space-y-4 p-0">
            {education.map((entry) => (
              <li key={entry.id}>
                <p className="text-sm font-medium break-words text-foreground">
                  {entry.degree}
                </p>
                <p className="text-sm break-words text-muted-foreground">
                  {entry.institution}
                  <span className="text-muted-foreground/70">
                    {" "}
                    · {entry.dates}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Awards
          </h3>
          <AwardList items={featuredAwards} />
          {otherAwards.length > 0 ? (
            <details className="group mt-4">
              <summary className="cursor-pointer list-none text-sm text-muted-foreground underline-offset-2 outline-none hover:text-foreground hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                More honors
              </summary>
              <div className="mt-4">
                <AwardList items={otherAwards} />
              </div>
            </details>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
