import type { Metadata } from "next";
import ClinicLocation from "@/components/contact/ClinicLocation";
import ContactSection from "@/components/contact/ContactSection";
import PageBanner from "@/components/ui/PageBanner";
import data from "@/data/category.json";
import type { SiteInfo } from "@/types";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  const site = data.site as SiteInfo;

  return (
    <>
      <PageBanner title="Contact Us" />
      <ContactSection contact={data.contact} site={site} />
      <ClinicLocation location={data.contact.location} site={site} />
    </>
  );
}
