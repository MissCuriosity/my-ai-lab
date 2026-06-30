import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/motion/fade-in";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects().slice(0, 2);

  return (
    <section className="py-20">
      <FadeIn>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-muted-foreground">
              Tools and experiments I&apos;ve been building.
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/projects/">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </FadeIn>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </StaggerContainer>
    </section>
  );
}
