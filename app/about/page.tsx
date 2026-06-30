import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  experience,
  skills,
  learningJourney,
} from "@/lib/about-data";
import { siteConfig } from "@/lib/site-config";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "About",
  description: `Learn more about ${siteConfig.name} — experience, skills, and learning journey.`,
  path: "/about/",
});

const statusStyles = {
  completed: "bg-green-500/10 text-green-700 dark:text-green-400",
  "in-progress": "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  planned: "bg-secondary text-muted-foreground",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <PageHeader
        title="About"
        description={`I'm ${siteConfig.author}, the creator of ${siteConfig.name}. ${siteConfig.title} based in ${siteConfig.location}.`}
      />

      <div className="space-y-20">
        <section>
          <FadeIn>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">
              Experience
            </h2>
          </FadeIn>
          <StaggerContainer className="space-y-0">
            {experience.map((item, index) => (
              <StaggerItem key={item.title}>
                <div className="grid gap-4 pb-10 md:grid-cols-[140px_1fr]">
                  <p className="text-sm text-muted-foreground">{item.year}</p>
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.organization}
                      </p>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    {index < experience.length - 1 && (
                      <Separator className="mt-6" />
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <section>
          <FadeIn>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">
              Skills
            </h2>
          </FadeIn>
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((category) => (
              <StaggerItem key={category.name}>
                <div className="rounded-xl border border-border p-6">
                  <h3 className="mb-4 font-semibold">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <section>
          <FadeIn>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">
              Learning Journey
            </h2>
          </FadeIn>
          <StaggerContainer className="space-y-4">
            {learningJourney.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-xl border border-border p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                        statusStyles[item.status],
                      )}
                    >
                      {item.status.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </div>
  );
}
