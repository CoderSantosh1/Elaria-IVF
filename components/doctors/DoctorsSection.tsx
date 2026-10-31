import type { Doctor, SectionIntro as SectionIntroContent } from "@/types";
import SectionIntro from "@/components/ui/SectionIntro";
import DoctorsCarousel from "./DoctorsCarousel";

interface DoctorsSectionProps {
  intro: SectionIntroContent;
  doctors: Doctor[];
}

export default function DoctorsSection({ intro, doctors }: DoctorsSectionProps) {
  return (
    <section className="py-16 lg:py-16">
      <div className="container-site">
        <SectionIntro eyebrow={intro.eyebrow} title={intro.title} description={intro.description} />
        <DoctorsCarousel doctors={doctors} />
      </div>
    </section>
  );
}
