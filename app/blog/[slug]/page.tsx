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

const posts = data.categories.ElariaIVF.sections.Blog.items as BlogPost[];

const findPost = (slug: string) => posts.find((post) => post.slug === slug);

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
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
      <PageBanner title={data.common.pageHeroes.blogDetails.title} />
      <BlogArticle post={post} />
    </>
  );
}
