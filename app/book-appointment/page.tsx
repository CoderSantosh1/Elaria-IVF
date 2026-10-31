import type { Metadata } from "next";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import data from "@/data/category.json";

export const metadata: Metadata = { title: "Book Appointment" };

export default function BookAppointmentPage() {
  const { bookAppointment, treatments } = data;

  return (
    <>
      <PageBanner title={bookAppointment.bannerTitle} />
      <section className="py-16 lg:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <SectionIntro eyebrow={bookAppointment.eyebrow} title={bookAppointment.title} description={bookAppointment.description} doubleLine />
          <Reveal delay={150} className="mt-10">
            <AppointmentForm content={bookAppointment} treatments={treatments.map(({ name }) => name)} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
