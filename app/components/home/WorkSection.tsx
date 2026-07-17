import { featuredProjects } from "@/content";
import { Heading, ProjectGrid, Section, TextLink } from "@/app/components/ui";

/** Selected Work: featured projects from content/projects.ts (blueprint 4.2 / 4.7). */
export function WorkSection() {
  return (
    <Section id="work" tone="brand">
      <Heading as="h2">Selected Work</Heading>
      <ProjectGrid
        projects={featuredProjects}
        emptyMessage="Featured projects coming soon."
      />
      <p className="mt-8">
        <TextLink href="/projects">View all projects</TextLink>
      </p>
    </Section>
  );
}
