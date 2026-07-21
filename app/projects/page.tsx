import {
  buildPageMetadata,
  industryProjects,
  packageProjects,
  seo,
} from "@/content";
import { Heading, ProjectGrid, Section } from "@/app/components/ui";

export const metadata = buildPageMetadata(seo.projects);

export default function Projects() {
  return (
    <Section>
      <Heading as="h1">Projects</Heading>

      <div className="mt-8">
        <Heading as="h2">Industry & applied work</Heading>
        <ProjectGrid
          projects={industryProjects}
          emptyMessage="Industry projects coming soon."
        />
      </div>

      {packageProjects.length > 0 ? (
        <div className="mt-12">
          <Heading as="h2">Software repositories</Heading>
          <ProjectGrid projects={packageProjects} />
        </div>
      ) : null}
    </Section>
  );
}
