import Image from "next/image";
import type { TestimonialsContent } from "@/types";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import TestimonialsSlider from "./TestimonialsSlider";

export default function TestimonialsSection({ content }: { content: TestimonialsContent }) {
  return (
    <section className="pb-20 lg:pb-32">
      <div className="container-site">
        <SectionIntro eyebrow={content.eyebrow} title={content.title} description={content.description} doubleLine />
        <div className="relative mt-8 grid gap-3 lg:grid-cols-[1fr_3fr]">
          <Reveal variant="left" className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto">
            <Image src={content.image} alt={content.imageAlt} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
          </Reveal>
          <TestimonialsSlider items={content.items} />
        </div>
      </div>
    </section>
  );
}
