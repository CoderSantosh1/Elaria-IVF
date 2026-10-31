import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/types";

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Link href={`/treatments/${treatment.slug}`} className="group block h-full overflow-hidden rounded-sm border border-line bg-frost transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10">
      <div className="relative aspect-[441/210] overflow-hidden">
        <Image src={treatment.image} alt={treatment.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex items-center justify-between gap-5 p-6 lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-navy lg:text-3xl">{treatment.name}</h2>
          <p className="mt-2 text-base leading-relaxed lg:text-lg">{treatment.summary}</p>
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#d5e8f7] text-brand transition group-hover:bg-brand group-hover:text-white">
          <ArrowRight aria-hidden className="size-5 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
