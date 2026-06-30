/**
 * Template for custom AI demo pages.
 *
 * To add an interactive AI demo:
 * 1. Copy this folder to app/projects/your-demo-name/
 * 2. Create content/projects/your-demo-name.json for listing metadata
 * 3. Build your interactive UI in page.tsx
 *
 * Static routes take precedence over the dynamic [slug] template.
 */

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export default function DemoTemplatePage() {
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
        <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-xl border border-border p-12 text-center">
          <h1 className="text-2xl font-semibold">Your AI Demo</h1>
          <p className="mt-2 max-w-md text-muted-foreground">
            Replace this template with your interactive demo UI.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
