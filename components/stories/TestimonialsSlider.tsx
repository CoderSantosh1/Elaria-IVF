"use client";

import { useState } from "react";
import Image from "next/image";
import type { Testimonial } from "@/types";
import Reveal from "@/components/ui/Reveal";

export default function TestimonialsSlider({ items }: { items: Testimonial[] }) {
  const [start, setStart] = useState(0);
  const [moved, setMoved] = useState(false);
  const ordered = items.map((_, index) => items[(start + index) % items.length]);
  const show = (index: number) => {
    setMoved(true);
    setStart(index);
  };

  return (
    <Reveal variant="right" delay={150} className="min-w-0">
      <ul className="grid h-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((item, index) => (
          <li
            key={`${item.name}-${start}`}
            style={{ animationDelay: `${index * 70}ms` }}
            className={`flex-col border border-line/70 bg-frost/60 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 ${moved ? "anim-card-in" : ""} ${index >= 2 ? "hidden lg:flex" : index >= 1 ? "hidden sm:flex" : "flex"}`}
          >
            <span aria-hidden className="font-serif text-5xl leading-8 text-sky">“</span>
            <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed">{item.quote}</blockquote>
            <span aria-hidden className="mt-5 block h-px w-7 bg-sky" />
            <div className="mt-4 flex items-center gap-3">
              <Image src={item.avatar} alt="" width={48} height={48} className="size-12 rounded-full object-cover" />
              <div>
                <p className="font-heading font-semibold text-navy">{item.name}</p>
                <p className="text-sm">{item.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-center gap-1 lg:absolute lg:inset-x-0 lg:-bottom-12 lg:mt-0">
        {items.map((item, index) => (
          <button key={item.name} type="button" aria-label={`Show story from ${item.name}`} aria-current={start === index} onClick={() => show(index)} className="grid size-6 place-items-center">
            <span className={`size-2.5 rounded-full transition duration-300 ${start === index ? "scale-125 bg-brand" : "bg-[#c5dcef]"}`} />
          </button>
        ))}
      </div>
    </Reveal>
  );
}
