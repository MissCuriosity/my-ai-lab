import { createMetadata } from "@/lib/metadata";
import { ProjectsPage } from "@/components/projects/projects-page";

export const metadata = createMetadata({
  title: "Projects",
  description: "A collection of tools, experiments, and AI projects I've built.",
  path: "/projects/",
});

export default function Page() {
  return <ProjectsPage />;
}
