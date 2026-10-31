"use client";

import { ChevronUp } from "lucide-react";

export default function ScrollTopButton() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="grid size-10 place-items-center rounded-full bg-[#d5e8f7] text-brand transition duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white"
    >
      <ChevronUp className="size-4" />
    </button>
  );
}
