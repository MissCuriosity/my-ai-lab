"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const socialLinks = [
    { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
    { href: siteConfig.github, icon: Github, label: "GitHub" },
    { href: siteConfig.twitter, icon: Twitter, label: "Twitter" },
    { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <div className="py-20">
      <PageHeader
        title="Contact"
        description="Have a project in mind or just want to say hello? I'd love to hear from you."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button type="submit" size="lg">
              {status === "sent" ? "Opening email client..." : "Send Message"}
            </Button>
          </form>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-lg font-semibold">Get in touch</h2>
              <p className="text-muted-foreground">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to collaborate.
              </p>
            </div>
            <div className="space-y-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border p-4 text-sm transition-colors hover:bg-accent"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
