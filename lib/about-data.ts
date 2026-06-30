export type TimelineItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type LearningItem = {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
};

export const experience: TimelineItem[] = [
  {
    year: "2024 — Present",
    title: "Senior Frontend Engineer",
    organization: "Tech Company",
    description:
      "Leading frontend architecture for AI-powered developer tools. Building design systems and improving developer experience across the platform.",
  },
  {
    year: "2022 — 2024",
    title: "Frontend Engineer",
    organization: "Startup Inc.",
    description:
      "Built and shipped customer-facing applications using React and Next.js. Implemented real-time features and optimized performance to achieve 95+ Lighthouse scores.",
  },
  {
    year: "2020 — 2022",
    title: "Software Engineer",
    organization: "Digital Agency",
    description:
      "Developed responsive web applications for enterprise clients. Collaborated with designers to implement pixel-perfect UIs and accessible interfaces.",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend & AI",
    skills: ["Node.js", "Python", "OpenAI API", "LangChain", "PostgreSQL"],
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "Docker", "Cloudflare", "Vercel", "CI/CD"],
  },
];

export const learningJourney: LearningItem[] = [
  {
    title: "AI Agent Architecture",
    description:
      "Building autonomous agents with tool use, memory, and multi-step reasoning.",
    status: "in-progress",
  },
  {
    title: "Advanced TypeScript Patterns",
    description:
      "Deep dive into generics, conditional types, and type-safe API design.",
    status: "completed",
  },
  {
    title: "Web Performance Optimization",
    description:
      "Core Web Vitals, bundle analysis, and edge computing strategies.",
    status: "completed",
  },
  {
    title: "Design Systems at Scale",
    description:
      "Building and maintaining component libraries for large engineering teams.",
    status: "planned",
  },
];
