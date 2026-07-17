import { pillars } from "@/content";
import type { Project } from "@/content";
import { doiHref } from "@/app/lib/links";
import { TextLink } from "./TextLink";
import { pillarTagClassName, tagClassName } from "./Tag";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

function primaryHref(project: Project): string | undefined {
  return project.url ?? project.demo ?? project.github;
}

function pillarLabel(id: Project["pillars"][number]): string {
  return pillars.find((p) => p.id === id)?.label ?? id;
}

/** Bordered project list item: title, summary, tech, pillars, optional links. */
export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const href = primaryHref(project);
  const classes = [
    "project-card min-w-0 rounded-md border border-border bg-background/60 p-4 sm:p-6",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const secondaryLinks: { label: string; href: string }[] = [];
  if (project.github && project.github !== href) {
    secondaryLinks.push({ label: "GitHub", href: project.github });
  }
  if (project.demo && project.demo !== href) {
    secondaryLinks.push({ label: "Demo", href: project.demo });
  }
  if (project.doi) {
    secondaryLinks.push({ label: "DOI", href: doiHref(project.doi) });
  }
  if (project.url && project.url !== href) {
    secondaryLinks.push({ label: "Website", href: project.url });
  }

  return (
    <article className={classes}>
      <h3 className="font-serif text-lg font-semibold tracking-tight break-words text-foreground sm:text-xl">
        {href ? (
          <TextLink href={href}>{project.title}</TextLink>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {project.summary}
      </p>
      <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
        {project.pillars.map((pillar) => (
          <li key={pillar} className={pillarTagClassName(pillar)}>
            {pillarLabel(pillar)}
          </li>
        ))}
        {project.tech.map((tag) => (
          <li key={tag} className={tagClassName()}>
            {tag}
          </li>
        ))}
      </ul>
      {secondaryLinks.length > 0 ? (
        <ul className="mt-4 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-sm">
          {secondaryLinks.map((link) => (
            <li key={link.href}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
