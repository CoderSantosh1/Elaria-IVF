import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TreatmentShowcaseContent } from "@/types";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

const Wave = () => (
  <svg aria-hidden viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute right-0 bottom-0 h-1/2 w-3/5 origin-bottom-right text-[#e3f0fb] transition duration-500 group-hover:scale-125">
    <path fill="currentColor" d="M0 100C60 100 90 20 200 0v100H0Z" />
  </svg>
);

export default function TreatmentShowcase({ content }: { content: TreatmentShowcaseContent }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f8fe] to-mist py-14 lg:py-16">
      <div aria-hidden className="absolute -top-24 -right-24 size-64 rounded-full bg-[#dcedfb]" />
      <div className="container-site relative">
        <Reveal>
          <Eyebrow className="mb-4 text-brand">{content.eyebrow}</Eyebrow>
          <p
            aria-hidden
            className="anim-gradient-shift bg-gradient-to-r from-navy via-sky to-navy bg-clip-text font-heading text-[14.5vw] leading-none font-extrabold tracking-tight text-transparent min-[1280px]:text-[10.8rem]"
          >
            {content.word}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1.05fr_1.05fr] lg:grid-rows-2">
          <Reveal variant="left" className="md:col-span-2 lg:col-span-1 lg:row-span-2">
          <Link
            href={content.lead.href}
            className="group relative block h-full overflow-hidden bg-gradient-to-b from-[#1d5a97] to-navy p-8 pb-24 text-white"
          >
            <span className="font-heading text-lg">01</span>
            <span aria-hidden className="mt-1 block h-0.5 w-5 bg-sky" />
            <h2 className="mt-5 font-heading text-3xl leading-tight font-semibold">
              {content.lead.title.line1}
              <br />
              <span className="text-[#a9d4f5]">{content.lead.title.line2}</span>
            </h2>
            <span aria-hidden className="mt-6 block h-px w-10 bg-white/50" />
            <p className="relative z-10 mt-6 leading-relaxed text-white/85">{content.lead.description}</p>
            <ArrowRight aria-hidden className="relative z-10 mt-6 size-5 transition group-hover:translate-x-1 lg:hidden" />
            <svg aria-hidden viewBox="0 0 300 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-20 w-full text-sky/40">
              <path fill="currentColor" d="M0 10c70 0 130 30 150 70H0V10Zm300 0c-70 0-130 30-150 70h150V10Z" />
            </svg>
          </Link>
          </Reveal>

          {content.cards.map((card, index) => (
            <Reveal key={card.title} delay={(index + 1) * 120}>
            <Link href={card.href} className="group relative block h-full overflow-hidden border border-line bg-white/80 p-8 transition duration-300 hover:-translate-y-1.5 hover:border-sky/50 hover:shadow-xl hover:shadow-navy/10">
              <Wave />
              <div className="relative">
                <span className="font-heading text-base font-medium text-brand">{String(index + 2).padStart(2, "0")}</span>
                <span aria-hidden className="mt-1 block h-0.5 w-5 bg-brand" />
                <h3 className="mt-5 font-heading text-2xl font-semibold text-navy transition group-hover:text-brand">{card.title}</h3>
                <p className="mt-4 max-w-xs leading-relaxed">{card.description}</p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
