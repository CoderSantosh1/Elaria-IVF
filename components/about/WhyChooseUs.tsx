import Image from "next/image";
import type { WhyChooseContent } from "@/types";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TwoToneHeading from "@/components/ui/TwoToneHeading";

export default function WhyChooseUs({ why }: { why: WhyChooseContent }) {
  return (
    <section className="grid items-center gap-10 pt-10 pb-16 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:pb-24">
      <div className="px-5 lg:pl-[max(2.5rem,calc((100vw-1200px)/2))]">
        <Reveal variant="left">
          <Eyebrow className="mb-5 text-body">{why.eyebrow}</Eyebrow>
          <TwoToneHeading title={why.title} className="text-4xl lg:text-5xl" />
          <p className="mt-5 max-w-xl text-lg leading-relaxed">{why.description}</p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {why.features.map((feature, index) => (
            <Reveal as="li" key={feature.title} variant="zoom" delay={index * 100}>
              <div className="h-full bg-frost p-6 transition duration-300 hover:-translate-y-1 hover:bg-mist hover:shadow-lg hover:shadow-navy/10">
                <h3 className="font-heading text-lg font-semibold text-navy">{feature.title}</h3>
                <p className="mt-1 leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
      <Reveal variant="right" className="relative aspect-[5/6]">
        <Image src={why.image} alt={why.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
      </Reveal>
    </section>
  );
}
