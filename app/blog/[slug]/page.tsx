import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog/BlogArticle";
import PageBanner from "@/components/ui/PageBanner";
import data from "@/data/category.json";
import type { BlogPost } from "@/types";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

const findPost = (slug: string) => (data.blogs as BlogPost[]).find((post) => post.slug === slug);

export function generateStaticParams() {
  return data.blogs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  return { title: post?.title, description: post?.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner title="Blogs" />
      <BlogArticle post={post} />
    </>
  );
}
