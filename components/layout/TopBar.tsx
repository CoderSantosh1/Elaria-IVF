import { Mail, MapPin, Phone } from "lucide-react";
import type { CommonData } from "@/types";
import SocialIcon from "@/components/ui/SocialIcon";

export default function TopBar({ common }: { common: CommonData }) {
  const { site } = common;

  return (
    <div className="hidden bg-mist text-[13px] text-ink md:block">
      <div className="container-site flex h-11 items-center justify-between">
        <ul className="flex items-center divide-x divide-line">
          <li className="flex items-center gap-2 pr-5"><MapPin aria-hidden className="size-4 text-brand-dark" />{site.address}</li>
          <li className="px-5">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-brand"><Mail aria-hidden className="size-4 text-brand-dark" />{site.email}</a>
          </li>
          <li className="pl-5">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-brand"><Phone aria-hidden className="size-4 text-brand-dark" />{site.phone}</a>
          </li>
        </ul>
        <ul className="flex items-center divide-x divide-line">
          {common.socials.map((social) => (
            <li key={social.name} className="px-3 last:pr-0">
              <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} className="block text-brand-dark transition hover:text-sky">
                <SocialIcon name={social.name} className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
