import type { Metadata } from "next";
import ClinicLocation from "@/components/contact/ClinicLocation";
import ContactSection from "@/components/contact/ContactSection";
import PageBanner from "@/components/ui/PageBanner";
import data from "@/data/category.json";
import type { SiteInfo } from "@/types";

const { pageHeroes } = data.common;

export const metadata: Metadata = { title: pageHeroes.contact.metaTitle };

export default function ContactPage() {
  const site = data.common.site as SiteInfo;
  const { Contact } = data.categories.ElariaIVF.sections;

  return (
    <>
      <PageBanner title={pageHeroes.contact.title} />
      <ContactSection contact={Contact} site={site} />
      <ClinicLocation location={Contact.location} site={site} />
    </>
  );
}
