import Image from "next/image";
import type { BlogPost } from "@/types";
import Reveal from "@/components/ui/Reveal";
import TwoToneHeading from "@/components/ui/TwoToneHeading";

export default function BlogArticle({ post }: { post: BlogPost }) {
  const [firstSection, ...otherSections] = post.sections;
  const paragraphStyle = "mt-3 text-lg leading-relaxed";
  const headingStyle = "mt-10 font-heading text-3xl font-bold text-navy";

  return (
    <article className="mx-auto max-w-[920px] px-5 py-14 lg:py-16">
      <Reveal>
        <span className="inline-block rounded-full bg-[#b9dcf7] px-4 py-1 text-xs font-bold tracking-[0.14em] text-navy uppercase">{post.tag}</span>
        <TwoToneHeading as="h2" title={post.headline} className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl" />
        <p className="mt-6 flex flex-wrap gap-x-3">
          <span>By {post.author}</span><span aria-hidden>|</span><span>{post.date}</span><span aria-hidden>|</span><span>{post.comments}</span>
        </p>
      </Reveal>

      <Reveal variant="zoom" delay={150} className="relative mt-8 aspect-[678/396]">
        <Image src={post.heroImage} alt={post.imageAlt} fill preload sizes="(min-width: 960px) 880px, 100vw" className="rounded-md object-cover" />
      </Reveal>

      <Reveal>
        <p className="mt-10 text-lg leading-relaxed first-letter:float-left first-letter:mr-4 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.9] first-letter:text-sky">
          {post.intro}
        </p>

        <h3 className={headingStyle}>{firstSection.heading}</h3>
        <p className={paragraphStyle}>{firstSection.body}</p>
      </Reveal>

      <Reveal as="blockquote" variant="zoom" className="mt-10 flex gap-6 rounded-lg bg-frost p-7 sm:gap-9 sm:px-12 sm:py-9">
        <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-lg bg-[#d5e8f7] font-serif text-5xl leading-none text-brand">
          <span className="translate-y-2.5">“</span>
        </span>
        <div>
          <p className="text-xl leading-relaxed text-navy">&ldquo;{post.quote.text}&rdquo;</p>
          <footer className="mt-4 flex gap-4">
            <span aria-hidden className="mt-3 h-px w-8 bg-sky" />
            <span>
              <span className="block font-heading font-semibold text-navy">{post.quote.author}</span>
              <span className="block text-sm">{post.quote.role}</span>
            </span>
          </footer>
        </div>
      </Reveal>

      {otherSections.map((section) => (
        <section key={section.heading}>
          <Reveal>
            <h3 className={headingStyle}>{section.heading}</h3>
            <p className={paragraphStyle}>{section.body}</p>
          </Reveal>
          {section.image && (
            <Reveal variant="zoom" className="relative mt-8 aspect-[678/298]">
              <Image src={section.image} alt={section.imageAlt ?? ""} fill sizes="(min-width: 960px) 880px, 100vw" className="rounded-md object-cover" />
            </Reveal>
          )}
        </section>
      ))}
    </article>
  );
}
