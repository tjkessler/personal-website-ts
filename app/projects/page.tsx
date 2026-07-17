import { buildPageMetadata, mainProjects, seo, sideProjects } from "@/content";
import { Heading, ProjectGrid, Section } from "@/app/components/ui";

export const metadata = buildPageMetadata(seo.projects);

export default function Projects() {
  return (
    <Section>
      <Heading as="h1">Projects</Heading>
      <ProjectGrid projects={mainProjects} />

      {sideProjects.length > 0 ? (
        <div className="mt-12">
          <Heading as="h2">Side projects</Heading>
          <ProjectGrid projects={sideProjects} />
        </div>
      ) : null}
    </Section>
  );
}
