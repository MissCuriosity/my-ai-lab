import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import { getAllProjects, getProject } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createMetadata({ title: "Project Not Found" });
  }

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}/`,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20">
      <FadeIn>
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
          <Link href="/projects/">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {project.title}
            </h1>
            {project.comingSoon && <Badge>Coming Soon</Badge>}
          </div>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.liveUrl && (
              <Button asChild>
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
              <Button asChild variant="secondary">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="space-y-6">
          {project.screenshots.map((screenshot, index) => (
            <div
              key={screenshot}
              className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-secondary"
            >
              <Image
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
