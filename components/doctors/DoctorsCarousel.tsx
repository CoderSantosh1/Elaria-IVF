
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Doctor } from "@/types";
import Reveal from "@/components/ui/Reveal";
import DoctorCard from "./DoctorCard";

export default function DoctorsCarousel({ doctors }: { doctors: Doctor[] }) {
  const [start, setStart] = useState(0);
  const [moved, setMoved] = useState(false);

  if (!doctors.length) return null;

  const ordered = doctors.map(
    (_, index) => doctors[(start + index) % doctors.length]
  );

  const move = (step: number) => {
    setMoved(true);
    setStart((prev) => (prev + step + doctors.length) % doctors.length);
  };

  return (
    <Reveal>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ordered.map((doctor, index) => (
          <li
            key={doctor.slug}
            style={{ animationDelay: `${index * 70}ms` }}
            className={`${
              moved ? "anim-card-in" : ""
            } ${
              index >= 2
                ? "hidden lg:block"
                : index >= 1
                ? "hidden sm:block"
                : ""
            }`}
          >
            <DoctorCard doctor={doctor} />
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="mt-10 flex items-center justify-center gap-4">

        {/* Previous */}
        <button
          type="button"
          aria-label="Previous doctor"
          onClick={() => move(-1)}
          className="
            group grid size-12 place-items-center
            rounded-full border border-brand/20
            bg-white text-brand
            shadow-sm
            transition-all duration-300 ease-out
            hover:-translate-x-1
            hover:border-brand
            hover:bg-brand
            hover:text-white
            hover:shadow-lg hover:shadow-brand/20
            active:scale-90
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-brand
            focus-visible:ring-offset-2
          "
        >
          <ChevronLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>

      
        {/* Next */}
        <button
          type="button"
          aria-label="Next doctor"
          onClick={() => move(1)}
          className="
            group grid size-12 place-items-center
            rounded-full border border-brand/20
            bg-white text-brand
            shadow-sm
            transition-all duration-300 ease-out
            hover:translate-x-1
            hover:border-brand
            hover:bg-brand
            hover:text-white
            hover:shadow-lg hover:shadow-brand/20
            active:scale-90
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-brand
            focus-visible:ring-offset-2
          "
        >
          <ChevronRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>

      </div>
    </Reveal>
  );
}
