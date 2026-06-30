import { createMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import { BlogPage } from "@/components/blog/blog-page";

export const metadata = createMetadata({
  title: "Blog",
  description: "Thoughts on frontend engineering, AI, and developer experience.",
  path: "/blog/",
});

export default function Page() {
  const posts = getAllPosts();
  return <BlogPage posts={posts} />;
}
