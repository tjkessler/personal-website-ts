import { experience } from "@/content";
import { Heading, Section, TextLink } from "@/app/components/ui";

/** Experience: vertical timeline from content/experience.ts (blueprint 3.4). */
export function ExperienceSection() {
  return (
    <Section id="experience">
      <Heading as="h2">Experience</Heading>
      <ol className="relative m-0 list-none border-l border-brand/25 p-0 pl-6 sm:pl-8">
        {experience.map((entry) => {
          const [startLabel, endLabel] = entry.dates.split(" – ");
          return (
            <li
              key={entry.id}
              className="relative min-w-0 pb-10 last:pb-0 sm:pb-12"
            >
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="relative min-w-0 font-serif text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  <span
                    className="absolute top-1/2 -left-6 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand bg-background sm:-left-8"
                    aria-hidden="true"
                  />
                  {entry.role}
                </h3>
                <span className="text-sm text-muted-foreground">
                  <time dateTime={entry.startDate}>{startLabel}</time>
                  {" – "}
                  {entry.endDate ? (
                    <time dateTime={entry.endDate}>{endLabel}</time>
                  ) : (
                    endLabel
                  )}
                </span>
              </div>
              <p className="mb-3 text-sm font-medium text-foreground/80 sm:mb-4">
                {entry.url ? (
                  <TextLink href={entry.url}>{entry.org}</TextLink>
                ) : (
                  entry.org
                )}
              </p>
              <ul className="m-0 list-disc space-y-2 pl-4 text-sm leading-relaxed break-words text-muted-foreground sm:pl-5">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
