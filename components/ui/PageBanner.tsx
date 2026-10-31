import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageBanner({ title }: { title: string }) {
  return (
    <section className="relative flex h-64 items-center justify-center overflow-hidden text-center sm:h-80 lg:h-[26rem]">
      <Image src="/images/page-banner.jpg" alt="" fill preload sizes="100vw" className="anim-slow-zoom object-cover" />
      <div className="absolute inset-0 bg-brand/20" />
      <div className="relative px-5 text-white">
        <h1 className="anim-rise font-heading text-5xl font-light tracking-wide sm:text-6xl lg:text-7xl">{title}</h1>
        <nav aria-label="Breadcrumb" className="anim-rise mt-5 flex items-center justify-center gap-3 text-base [animation-delay:200ms]">
          <Link href="/" className="font-medium transition hover:text-mist">Home</Link>
          <ChevronRight aria-hidden className="size-4" />
          <span aria-current="page" className="text-white/80">{title}</span>
        </nav>
      </div>
    </section>
  );
}
