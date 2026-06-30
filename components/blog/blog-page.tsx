import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { StaggerContainer } from "@/components/motion/fade-in";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/lib/blog";
import { getAllTags } from "@/lib/blog";

type BlogPageProps = {
  posts: BlogPostMeta[];
  activeTag?: string;
};

export function BlogPage({ posts, activeTag }: BlogPageProps) {
  const tags = getAllTags();

  return (
    <div className="py-20">
      <PageHeader
        title="Blog"
        description="Thoughts on frontend engineering, AI, and developer experience."
      />

      {tags.length > 0 && (
        <div className="mb-10 flex flex-wrap gap-2">
          <Link href="/blog/">
            <Badge variant={!activeTag ? "default" : "secondary"}>All</Badge>
          </Link>
          {tags.map((tag) => (
            <Link key={tag} href={`/blog/tag/${tag}/`}>
              <Badge variant={activeTag === tag ? "default" : "secondary"}>
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
      )}

      <StaggerContainer>
        {posts.length > 0 ? (
          posts.map((post) => <BlogPostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-muted-foreground">No posts yet. Check back soon.</p>
        )}
      </StaggerContainer>
    </div>
  );
}
