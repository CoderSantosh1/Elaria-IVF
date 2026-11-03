import type { ContactContent, SiteInfo } from "@/types";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TwoToneHeading from "@/components/ui/TwoToneHeading";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
  contact: ContactContent;
  site: SiteInfo;
}

export default function ContactSection({ contact, site }: ContactSectionProps) {
  const details = [
    { label: "Address", value: site.footerAddress.join(" ") },
    { label: "Phone", value: site.phone, href: site.phoneHref },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <section className="pt-14 lg:pt-20">
      <div className="container-site">
        <Reveal>
          <Eyebrow className="mb-6 text-body">{contact.eyebrow}</Eyebrow>
          <TwoToneHeading font="serif" title={contact.title} className="text-5xl lg:text-7xl" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed lg:text-xl">{contact.description}</p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2.25fr] lg:gap-8">
          <Reveal variant="left" className="lg:pt-14">
            <h2 className="text-sm font-medium tracking-[0.1em] uppercase">{contact.detailsHeading}</h2>
            <dl className="mt-6 divide-y divide-line">
              {details.map((detail) => (
                <div key={detail.label} className="py-5 first:pt-0">
                  <dt className="font-heading text-lg font-medium text-ink">{detail.label}</dt>
                  <dd className="mt-1 text-lg">
                    {detail.href ? <a href={detail.href} className="transition hover:text-brand">{detail.value}</a> : detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal variant="right" delay={150}>
            <ContactForm form={contact.form} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
