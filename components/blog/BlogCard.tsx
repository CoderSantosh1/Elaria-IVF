import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import type { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="h-full">
      <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col bg-frost transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10">
        <div className="relative aspect-[285/165] overflow-hidden">
          <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold tracking-[0.13em] text-brand uppercase">{post.category}</p>
          <h3 className="mt-2 font-blog text-2xl leading-tight font-semibold text-navy transition group-hover:text-brand">{post.title}</h3>
          <p className="mt-3 text-sm">{post.date} <span aria-hidden>·</span> {post.comments}</p>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed">{post.excerpt}</p>
          <MoveRight aria-hidden className="mt-4 size-6 text-brand transition group-hover:translate-x-1" strokeWidth={1.3} />
        </div>
      </Link>
    </article>
  );
}
