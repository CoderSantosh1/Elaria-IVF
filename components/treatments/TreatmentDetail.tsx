import Image from "next/image";
import type { Treatment } from "@/types";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TwoToneHeading from "@/components/ui/TwoToneHeading";

export default function TreatmentDetail({ treatment }: { treatment: Treatment }) {
  return (
    <>
      <section className="grid items-center gap-8 pt-14 lg:grid-cols-[0.76fr_1fr] lg:pt-16">
        <Reveal variant="left" className="px-5 lg:pl-[max(2.5rem,calc((100vw-1200px)/2))]">
          <Eyebrow className="mb-5 text-body">Our Treatments</Eyebrow>
          <TwoToneHeading as="h2" font="serif" title={treatment.title} className="text-5xl lg:text-7xl" />
          <p className="mt-5 max-w-md text-lg leading-relaxed">{treatment.heroDescription}</p>
        </Reveal>
        <Reveal variant="right" delay={150} className="relative aspect-[567/320]">
          <Image src={treatment.heroImage} alt={treatment.imageAlt} fill preload sizes="(min-width: 1024px) 57vw, 100vw" className="object-cover lg:rounded-l-md" />
        </Reveal>
      </section>

      <div className="container-site">
        <section className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <Reveal variant="left" className="relative aspect-[437/284]">
            <Image src={treatment.aboutImage} alt="Expectant mother resting her hands on her belly" fill sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-md object-cover" />
          </Reveal>
          <Reveal variant="right" delay={150}>
            <Eyebrow className="mb-4 text-body">About Treatment</Eyebrow>
            <TwoToneHeading font="serif" title={treatment.aboutTitle} className="text-4xl lg:text-5xl" />
            <p className="mt-5 text-lg leading-relaxed">{treatment.aboutBody}</p>
          </Reveal>
        </section>

        <Reveal as="section" className="rounded-lg bg-frost p-6 lg:p-9">
          <Eyebrow className="mb-3 text-body">Key Benefits</Eyebrow>
          <h2 className="font-serif text-4xl text-navy lg:text-5xl">Key Benefits</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {treatment.benefits.map((benefit, index) => (
              <Reveal as="li" key={benefit.title} variant="zoom" delay={index * 120}>
                <div className="h-full rounded-md bg-mist px-6 py-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10">
                  <h3 className="font-heading text-xl font-semibold text-navy">{benefit.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <section className="py-14 lg:pb-24">
          <Reveal>
            <Eyebrow className="mb-4 text-body">The Process</Eyebrow>
            <TwoToneHeading font="serif" inline title={treatment.processTitle} className="text-4xl lg:text-5xl" />
          </Reveal>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {treatment.process.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 180} className="group relative text-center">
                {index < treatment.process.length - 1 && (
                  <span aria-hidden className="reveal-line absolute top-8 left-[calc(50%+3.5rem)] hidden h-px w-[calc(100%-7rem)] bg-[#9ccbee] lg:block" />
                )}
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-mist font-serif text-2xl text-brand transition duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-52 leading-relaxed">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
