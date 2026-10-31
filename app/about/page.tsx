import type { Metadata } from "next";
import AboutIntro from "@/components/about/AboutIntro";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import PageBanner from "@/components/ui/PageBanner";
import data from "@/data/category.json";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About" />
      <AboutIntro intro={data.about.intro} />
      <WhyChooseUs why={data.about.why} />
    </>
  );
}
