import type { Project } from "@/content";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  /** When set and `projects` is empty, render this message instead of the list. */
  emptyMessage?: string;
  className?: string;
};

/** Shared project card list used by home Selected Work and `/projects`. */
export function ProjectGrid({
  projects,
  emptyMessage,
  className = "mt-6 grid list-none gap-6 p-0",
}: ProjectGridProps) {
  if (projects.length === 0) {
    return emptyMessage ? (
      <p className="mt-6 text-muted-foreground">{emptyMessage}</p>
    ) : null;
  }

  return (
    <ul className={className}>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
