import fs from "fs";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content/projects");

export type Project = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  comingSoon?: boolean;
  featured?: boolean;
};

function loadProject(filename: string): Project {
  const filePath = path.join(contentDirectory, filename);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const slug = filename.replace(/\.json$/, "");
  return { slug, ...data };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".json"))
    .map(loadProject);
}

export function getProject(slug: string): Project | undefined {
  const filePath = path.join(contentDirectory, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return undefined;
  }
  return loadProject(`${slug}.json`);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}
