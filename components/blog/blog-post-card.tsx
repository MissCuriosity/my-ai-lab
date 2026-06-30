import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StaggerItem } from "@/components/motion/fade-in";
import type { BlogPostMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";

type BlogPostCardProps = {
  post: BlogPostMeta;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <StaggerItem>
      <Link href={`/blog/${post.slug}/`} className="block h-full">
        <Card className="h-full transition-shadow hover:shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>
            <CardTitle className="text-xl">{post.title}</CardTitle>
            <CardDescription className="line-clamp-2 text-base leading-relaxed">
              {post.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </StaggerItem>
  );
}

export function BlogPostGrid({
  posts,
  className,
}: {
  posts: BlogPostMeta[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6", className)}>
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
