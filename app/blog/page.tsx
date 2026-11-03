import type { Metadata } from "next";
import BlogSection from "@/components/blog/BlogSection";
import PageBanner from "@/components/ui/PageBanner";
import Pagination from "@/components/ui/Pagination";
import data from "@/data/category.json";
import type { BlogPost } from "@/types";

const { pageHeroes } = data.common;

export const metadata: Metadata = { title: pageHeroes.blog.metaTitle };

interface BlogPageProps {
  searchParams: Promise<{ page?: string | string[] }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const { intro, perPage, items } = data.categories.ElariaIVF.sections.Blog;
  const totalPages = Math.ceil(items.length / perPage);
  const requestedPage = Number(page);
  const currentPage = Number.isInteger(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1;
  const posts = (items as BlogPost[]).slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <>
      <PageBanner title={pageHeroes.blog.title} />
      <BlogSection intro={intro} posts={posts}>
        <Pagination basePath="/blog" currentPage={currentPage} totalPages={totalPages} anchor="#blog-list" />
      </BlogSection>
    </>
  );
}
