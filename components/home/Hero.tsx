import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Headphones } from "lucide-react";
import type { HeroContent } from "@/types";
import Eyebrow from "@/components/ui/Eyebrow";
import TwoToneHeading from "@/components/ui/TwoToneHeading";

export default function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section>
      <div className="flex items-center py-12 lg:min-h-[31.4vw] lg:py-0">
        <div className="w-full px-5 lg:max-w-[64%] lg:pl-[6.5vw]">
          <Eyebrow className="anim-rise mb-6 text-sky">{hero.eyebrow}</Eyebrow>
          <TwoToneHeading as="h1" title={hero.title} className="anim-rise text-[2.75rem] [animation-delay:150ms] sm:text-6xl lg:text-[clamp(3.5rem,6.2vw,7rem)]" />
          <p className="anim-rise mt-5 max-w-xl [animation-delay:300ms] text-lg leading-snug text-ink/80 sm:text-xl lg:max-w-[46vw] lg:text-[clamp(1.25rem,1.9vw,1.75rem)]">{hero.description}</p>
        </div>
      </div>

      {/* The bar and card are placed in vw so they keep covering the same part of the full-bleed photo */}
      <div className="relative">
        <div className="anim-slide-left mx-5 flex items-center gap-5 bg-mist p-6 [animation-delay:450ms] sm:mx-0 lg:absolute lg:bottom-[calc(100%+4.5vw)] lg:left-[66.5%] lg:mx-0 lg:block lg:w-[25.7vw] lg:p-[2.6vw]">
          <span className="anim-pulse-ring grid size-14 shrink-0 place-items-center rounded-full bg-[#d5e8f7] text-navy lg:size-[5vw]">
            <Headphones aria-hidden className="size-7 lg:size-[2.6vw]" />
          </span>
          <p className="font-heading text-2xl leading-tight text-navy lg:mt-[1.4vw] lg:text-[clamp(1.25rem,2.5vw,3rem)]">{hero.emergencyLabel}</p>
        </div>

        <div className="anim-slide-left mx-5 flex flex-wrap items-center justify-between gap-4 bg-brand p-5 text-white [animation-delay:600ms] sm:mx-0 lg:absolute lg:top-[-4.5vw] lg:right-0 lg:left-[66.5%] lg:z-10 lg:mx-0 lg:h-[9.4vw] lg:flex-nowrap lg:px-[2.4vw] lg:py-0">
          <div className="flex items-center gap-4 lg:border-r lg:border-white/30 lg:pr-[1.8vw]">
            <CalendarDays aria-hidden className="size-8 shrink-0" strokeWidth={1.4} />
            <span className="max-w-24 text-[15px] leading-snug">{hero.scheduleLabel}</span>
          </div>
          <Link href={hero.cta.href} className="group flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium whitespace-nowrap text-navy transition hover:bg-mist">
            {hero.cta.label}
            <ArrowRight aria-hidden className="size-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-[1349/398]">
          <Image src={hero.image} alt={hero.imageAlt} fill preload sizes="100vw" className="anim-slow-zoom object-cover object-[42%_50%] sm:object-[27%_50%] lg:object-center" />
        </div>
      </div>
    </section>
  );
}
