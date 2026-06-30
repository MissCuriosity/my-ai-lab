import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";

function CustomLink({
  href,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  const isInternal = href?.startsWith("/") || href?.startsWith("#");

  if (isInternal && href) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function Callout({
  children,
  type = "info",
}: {
  children?: React.ReactNode;
  type?: "info" | "warning" | "tip";
}) {
  return (
    <div
      className={cn(
        "my-6 rounded-xl border p-4 text-sm",
        type === "info" && "border-border bg-secondary/50",
        type === "warning" && "border-yellow-500/30 bg-yellow-500/10",
        type === "tip" && "border-green-500/30 bg-green-500/10",
      )}
    >
      {children}
    </div>
  );
}

export const mdxComponents = {
  h1: ({ children }) => (
    <h1 className="mb-6 mt-10 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2
      id={id}
      className="mb-4 mt-10 scroll-mt-20 text-2xl font-semibold tracking-tight"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3
      id={id}
      className="mb-3 mt-8 scroll-mt-20 text-xl font-semibold tracking-tight"
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-7 text-muted-foreground">{children}</p>
  ),
  a: (props) => (
    <CustomLink {...(props as React.ComponentPropsWithoutRef<"a">)} />
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-border pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
  pre: ({ children }) => <>{children}</>,
  code: ({ children }) => <code>{children}</code>,
  Callout,
} satisfies MDXComponents;
