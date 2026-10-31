import Image from "next/image";
import type { Doctor } from "@/types";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="group h-full border border-line/60 bg-white shadow-lg shadow-navy/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/15">
      <div className="relative aspect-[226/293] overflow-hidden">
        <Image src={doctor.image} alt={`Portrait of ${doctor.name}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="min-h-8 text-xs font-semibold tracking-[0.15em] text-brand uppercase">{doctor.specialty}</p>
        <span aria-hidden className="mt-3 block h-px w-8 bg-brand transition-all duration-500 group-hover:w-16" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-navy">{doctor.name}</h3>
        <ul className="mt-2 space-y-1 text-[15px] leading-snug">
          {doctor.qualifications.map((line) => <li key={line}>{line}</li>)}
        </ul>
      </div>
    </article>
  );
}
