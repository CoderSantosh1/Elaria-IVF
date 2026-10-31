import type { Metadata } from "next";
import DoctorsSection from "@/components/doctors/DoctorsSection";
import PageBanner from "@/components/ui/PageBanner";
import data from "@/data/category.json";

export const metadata: Metadata = { title: "Doctors" };

export default function DoctorsPage() {
  return (
    <>
      <PageBanner title="Doctors" />
      <DoctorsSection intro={data.doctorsSection} doctors={data.doctors} />
    </>
  );
}
