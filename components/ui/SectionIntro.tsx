import type { TwoToneTitle } from "@/types";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import TwoToneHeading from "./TwoToneHeading";

interface SectionIntroProps {
  eyebrow?: string;
  title: TwoToneTitle;
  description: string;
  font?: "heading" | "serif" | "blog";
  doubleLine?: boolean;
}

export default function SectionIntro({ eyebrow, title, description, font = "heading", doubleLine = false }: SectionIntroProps) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow && <Eyebrow centered doubleLine={doubleLine} className="mb-5 text-brand">{eyebrow}</Eyebrow>}
      <TwoToneHeading title={title} font={font} className="text-4xl sm:text-5xl lg:text-6xl" />
      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">{description}</p>
    </Reveal>
  );
}
