import { PROJECTS } from "@/lib/projects";
import { Project } from "@/types/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section>
      <h4>Some noteworthy projects</h4>

      <div className="flex flex-col lg:flex-row lg:justify-center gap-10">
        {PROJECTS.map((props: Project) => (
          <ProjectCard key={props.image} {...props} />
        ))}
      </div>
    </section>
  );
}
