import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TableOfContents,
  extractToc,
} from "@/components/blog/table-of-contents";
import { FadeIn } from "@/components/motion/fade-in";
import { compileBlogPost } from "@/lib/mdx";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return createMetadata({ title: "Post Not Found" });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}/`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await compileBlogPost(post.content);
  const tocItems = extractToc(post.content);

  return (
    <div className="py-20">
      <FadeIn>
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
          <Link href="/blog/">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </FadeIn>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1fr_200px]">
        <article>
          <FadeIn delay={0.1}>
            <header className="mb-10 space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground">{post.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag}/`}>
                    <Badge variant="secondary">{tag}</Badge>
                  </Link>
                ))}
              </div>
            </header>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {content}
            </div>
          </FadeIn>
        </article>

        <aside className="hidden xl:block">
          <div className="sticky top-24">
            <TableOfContents items={tocItems} />
          </div>
        </aside>
      </div>
    </div>
  );
}
