import { PageHeader } from "@/components/layout/page-header";
import { StaggerContainer } from "@/components/motion/fade-in";
import { ProjectCard } from "@/components/projects/project-card";
import { getAllProjects } from "@/lib/projects";

export function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-20">
      <PageHeader
        title="Projects"
        description="Tools, experiments, and AI projects I've been building."
      />
      <StaggerContainer className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </StaggerContainer>
    </div>
  );
}
