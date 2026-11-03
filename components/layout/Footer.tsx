import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { CommonData } from "@/types";
import Reveal from "@/components/ui/Reveal";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import SocialIcon from "@/components/ui/SocialIcon";

const iconCircle = "grid size-10 shrink-0 place-items-center rounded-full bg-[#d5e8f7] text-brand-dark";
const columnTitle = "font-heading text-xl font-semibold text-ink";

export default function Footer({ common }: { common: CommonData }) {
  const { site } = common;

  return (
    <footer className="bg-gradient-to-b from-[#eff7fe] to-mist">
      <div className="container-site grid gap-10 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.8fr_0.8fr] lg:gap-14 lg:pt-20">
        <Reveal>
          <Image src={site.logo} alt={site.name} width={640} height={234} className="h-24 w-auto" />
          <p className="mt-5 max-w-sm leading-relaxed">{site.tagline}</p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className={columnTitle}>Contact</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 hover:text-brand">
                <span className={iconCircle}><Mail aria-hidden className="size-4" /></span>
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className={iconCircle}><MapPin aria-hidden className="size-4" /></span>
              <span>{site.footerAddress.map((line) => <span key={line} className="block">{line}</span>)}</span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-4 hover:text-brand">
                <span className={iconCircle}><Phone aria-hidden className="size-4" /></span>
                {site.phone}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <h2 className={columnTitle}>Quick Links</h2>
          <ul className="mt-5 space-y-2">
            {common.quickLinks.map((link) => (
              <li key={link.label}><Link href={link.href} className="inline-block transition hover:translate-x-1 hover:text-brand">{link.label}</Link></li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300}>
          <h2 className={columnTitle}>Follow Us</h2>
          <ul className="mt-5 flex gap-3">
            {common.socials.map((social) => (
              <li key={social.name}>
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} className={`${iconCircle} transition duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white`}>
                  <SocialIcon name={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="container-site">
        <div className="flex items-center justify-between border-t border-[#bcd9ef] py-5 text-sm">
          <p>{site.copyright}</p>
          <ScrollTopButton />
        </div>
      </div>
    </footer>
  );
}
