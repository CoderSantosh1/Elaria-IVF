import type { Metadata } from "next";
import DoctorsSection from "@/components/doctors/DoctorsSection";
import PageBanner from "@/components/ui/PageBanner";
import data from "@/data/category.json";

const { pageHeroes } = data.common;

export const metadata: Metadata = { title: pageHeroes.doctors.metaTitle };

export default function DoctorsPage() {
  return (
    <>
      <PageBanner title={pageHeroes.doctors.title} />
      <DoctorsSection intro={data.categories.ElariaIVF.sections.Doctors.intro} doctors={data.categories.ElariaIVF.sections.Doctors.items} />
    </>
  );
}
