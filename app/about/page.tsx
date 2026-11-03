import type { Metadata } from "next";
import AboutIntro from "@/components/about/AboutIntro";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import PageBanner from "@/components/ui/PageBanner";
import data from "@/data/category.json";

const { pageHeroes } = data.common;

export const metadata: Metadata = { title: pageHeroes.about.metaTitle };

export default function AboutPage() {
  const { About } = data.categories.ElariaIVF.sections;

  return (
    <>
      <PageBanner title={pageHeroes.about.title} />
      <AboutIntro intro={About.intro} stats={data.common.stats} />
      <WhyChooseUs why={About.why} />
    </>
  );
}
