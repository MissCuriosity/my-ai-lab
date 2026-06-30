import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/blog";
import { BlogPage } from "@/components/blog/blog-page";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props) {
  const { tag } = await params;
  return createMetadata({
    title: `Posts tagged "${tag}"`,
    description: `Blog posts tagged with ${tag}.`,
    path: `/blog/tag/${tag}/`,
  });
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);

  if (posts.length === 0) {
    notFound();
  }

  return <BlogPage posts={posts} activeTag={decodedTag} />;
}
