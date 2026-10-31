"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, CalendarDays, Menu, X } from "lucide-react";
import type { NavItem, SiteInfo } from "@/types";

const isActive = (pathname: string, item: NavItem) =>
  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

export default function Header({ site }: { site: SiteInfo }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Two thresholds stop the shrinking header from flickering around one scroll position
    const onScroll = () => setScrolled((current) => (current ? window.scrollY > 20 : window.scrollY > 120));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLink = (item: NavItem) =>
    `border-b-2 py-2 text-[15px] font-medium whitespace-nowrap transition hover:text-brand ${isActive(pathname, item) ? "border-brand text-brand-dark" : "border-transparent text-ink"}`;

  return (
    <header className={`sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-navy/10" : ""}`}>
      <span aria-hidden className="scroll-progress" />
      <div className={`container-site flex items-center justify-between gap-6 transition-[height] duration-300 ${scrolled ? "h-16 lg:h-20" : "h-20 lg:h-[6.25rem]"}`}>
        <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
          <Image src={site.logo} alt={site.name} width={640} height={234} preload className={`w-auto transition-[height] duration-300 ${scrolled ? "h-12 lg:h-14" : "h-14 lg:h-[4.5rem]"}`} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 xl:flex ">
          {site.navigation.map((item) => (
            <Link key={item.label} href={item.href} className={desktopLink(item)}>{item.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={site.cta.href}
            className="group hidden items-center gap-3 rounded-xl bg-gradient-to-b from-brand to-brand-dark px-5 py-3.5 text-sm font-medium whitespace-nowrap text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40 sm:flex"
          >
            <CalendarDays aria-hidden className="size-5" />
            {site.cta.label}
            <ArrowRight aria-hidden className="size-4 transition group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-11 place-items-center rounded-lg bg-mist text-brand-dark xl:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile" className="anim-drop max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-white xl:hidden">
          <ul className="container-site py-3">
            {site.navigation.map((item) => (
              <li key={item.label} className="border-b border-line/60 last:border-0">
                <Link href={item.href} onClick={() => setMenuOpen(false)} className="block py-3 font-medium text-ink">{item.label}</Link>
              </li>
            ))}
            <li className="pt-3 sm:hidden">
              <Link href={site.cta.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-sm font-medium text-white">
                {site.cta.label}
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
