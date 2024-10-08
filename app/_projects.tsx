import { PROJECTS } from "@/data/projects";
import { Project } from "@/types/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects">
      <h4 className="tracking-wider py-2">Some noteworthy projects</h4>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {PROJECTS.map((props: Project) => (
          <ProjectCard key={props.image} {...props} />
        ))}
      </div>
    </section>
  );
}
