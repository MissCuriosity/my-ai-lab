import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const socialLinks = [
    { href: siteConfig.github, icon: Github, label: "GitHub" },
    { href: siteConfig.twitter, icon: Twitter, label: "Twitter" },
    { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12">
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        <Separator className="max-w-xs" />

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
