import type { ReactNode } from "react";
import type { BlogPost, SectionIntro as SectionIntroContent } from "@/types";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import BlogCard from "./BlogCard";

interface BlogSectionProps {
  intro: SectionIntroContent;
  posts: BlogPost[];
  children?: ReactNode;
}

export default function BlogSection({ intro, posts, children }: BlogSectionProps) {
  return (
    <section className="pt-16 pb-20 lg:pb-24">
      <div className="container-site">
        <SectionIntro title={intro.title} description={intro.description} font="blog" />
        <ul id="blog-list" className="mx-auto mt-8 grid max-w-[1200px] scroll-mt-32 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal as="li" key={post.slug} delay={(index % 3) * 130}><BlogCard post={post} /></Reveal>
          ))}
        </ul>
        {children}
      </div>
    </section>
  );
}
