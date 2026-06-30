"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StaggerItem } from "@/components/motion/fade-in";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <StaggerItem>
      <Card className="group overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
          <Image
            src={project.screenshots[0] ?? "/projects/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {project.comingSoon && (
            <Badge className="absolute right-4 top-4">Coming Soon</Badge>
          )}
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-xl">{project.title}</CardTitle>
          </div>
          <CardDescription className="line-clamp-2 text-base leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button asChild variant="secondary" size="sm">
              <Link href={`/projects/${project.slug}/`}>View Details</Link>
            </Button>
            {project.liveUrl && (
              <Button asChild variant="ghost" size="sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="ghost" size="sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </StaggerItem>
  );
}

export function ProjectGrid({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) {
  return (
    <div
      className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-2", className)}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
