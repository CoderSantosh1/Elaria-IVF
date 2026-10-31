import Image from "next/image";
import type { Story } from "@/types";

export default function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group grid h-full overflow-hidden rounded-sm border border-line bg-frost transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 sm:grid-cols-[0.95fr_1fr]">
      <div className="relative aspect-[5/4] overflow-hidden sm:aspect-auto sm:min-h-80">
        <Image src={story.image} alt={`${story.name} with their family`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-7">
        <span aria-hidden className="grid size-12 place-items-center rounded-full bg-[#d5e8f7] font-serif text-4xl leading-none text-brand">
          <span className="translate-y-2">“</span>
        </span>
        <blockquote className="mt-4 leading-relaxed">{story.quote}</blockquote>
        <span aria-hidden className="mt-6 block h-0.5 w-9 bg-sky" />
        <p className="mt-4 font-heading text-xl font-semibold text-navy">{story.name}</p>
        <p className="mt-0.5">{story.treatment}</p>
      </div>
    </article>
  );
}
