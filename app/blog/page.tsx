import type { Metadata } from "next";
import BlogSection from "@/components/blog/BlogSection";
import PageBanner from "@/components/ui/PageBanner";
import Pagination from "@/components/ui/Pagination";
import data from "@/data/category.json";
import type { BlogPost } from "@/types";

export const metadata: Metadata = { title: "Blog" };

interface BlogPageProps {
  searchParams: Promise<{ page?: string | string[] }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const { perPage } = data.blogSection;
  const totalPages = Math.ceil(data.blogs.length / perPage);
  const requestedPage = Number(page);
  const currentPage = Number.isInteger(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1;
  const posts = (data.blogs as BlogPost[]).slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <>
      <PageBanner title="Blogs" />
      <BlogSection intro={data.blogSection} posts={posts}>
        <Pagination basePath="/blog" currentPage={currentPage} totalPages={totalPages} anchor="#blog-list" />
      </BlogSection>
    </>
  );
}
