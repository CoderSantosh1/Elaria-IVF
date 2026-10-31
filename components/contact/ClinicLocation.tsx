import Image from "next/image";
import type { ContactContent, SiteInfo } from "@/types";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TwoToneHeading from "@/components/ui/TwoToneHeading";

interface ClinicLocationProps {
  location: ContactContent["location"];
  site: SiteInfo;
}

export default function ClinicLocation({ location, site }: ClinicLocationProps) {
  const cards = [
    { title: "Address", lines: site.footerAddress },
    { title: "Working Hours", lines: site.hours },
  ];

  return (
    <section className="py-12 lg:pb-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-5">
        <Reveal variant="left">
          <Eyebrow className="mb-5 text-body">{location.eyebrow}</Eyebrow>
          <TwoToneHeading font="serif" title={location.title} className="text-4xl lg:text-6xl" />
          <p className="mt-5 max-w-md text-lg leading-relaxed">{location.description}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {cards.map((card) => (
              <li key={card.title} className="rounded-lg bg-frost p-6">
                <h3 className="font-heading text-lg font-medium text-ink">{card.title}</h3>
                <p className="mt-1 text-lg leading-relaxed">{card.lines.map((line) => <span key={line} className="block">{line}</span>)}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal variant="right" delay={150} className="relative aspect-[415/330]">
          <Image src={location.image} alt={location.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="rounded-md object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
