import { skillGroupTagVariant, skillGroups } from "@/content";
import { Heading, Section, tagClassName } from "@/app/components/ui";

/** Skills: categorized bordered chips from content/skills.ts (blueprint 3.5). */
export function SkillsSection() {
  return (
    <Section id="skills" tone="warm">
      <Heading as="h2" mark="warm">
        Skills
      </Heading>
      <ul className="grid list-none gap-8 p-0 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
        {skillGroups.map((group) => {
          const variant = skillGroupTagVariant[group.id] ?? "default";
          return (
            <li key={group.id} className="min-w-0">
              <h3 className="mb-3 font-serif text-base font-semibold tracking-tight text-foreground sm:mb-4 sm:text-lg">
                {group.label}
              </h3>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {group.skills.map((skill) => (
                  <li key={skill} className={tagClassName(variant)}>
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
