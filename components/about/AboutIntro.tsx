import Image from "next/image";
import type { AboutIntroContent } from "@/types";
import CountUp from "@/components/ui/CountUp";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TwoToneHeading from "@/components/ui/TwoToneHeading";

export default function AboutIntro({ intro }: { intro: AboutIntroContent }) {
  return (
    <section className="pt-16 pb-12 lg:pt-24">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal variant="left" className="group relative aspect-[4/3] overflow-hidden">
            <Image src={intro.image} alt={intro.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
          </Reveal>
          <Reveal variant="right" delay={150}>
            <Eyebrow className="mb-5 text-body">{intro.eyebrow}</Eyebrow>
            <TwoToneHeading title={intro.title} className="text-4xl lg:text-5xl" />
            <p className="mt-5 text-lg leading-relaxed">{intro.description}</p>
            <h3 className="mt-8 font-heading text-xl font-semibold text-navy">{intro.subheading}</h3>
            <p className="mt-3 leading-relaxed">{intro.body}</p>
          </Reveal>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {intro.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120} className="flex flex-col-reverse items-center text-center md:border-l md:border-line md:first:border-0">
              <dt className="mt-2 text-base lg:text-lg">{stat.label}</dt>
              <dd className="font-heading text-5xl font-semibold text-navy lg:text-6xl"><CountUp value={stat.value} /></dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
