"use client";

import { useState, type FormEvent } from "react";
import { MoveRight } from "lucide-react";
import type { ContactContent } from "@/types";
import Eyebrow from "@/components/ui/Eyebrow";
import TwoToneHeading from "@/components/ui/TwoToneHeading";

const inputStyle = "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 font-sans font-normal text-ink outline-none transition placeholder:text-body/70 focus:border-sky focus:ring-2 focus:ring-sky/25";
const labelStyle = "font-heading font-medium text-ink";
const Required = () => <span aria-hidden className="text-red-600"> *</span>;

export default function ContactForm({ form }: { form: ContactContent["form"] }) {
  const [sent, setSent] = useState(false);

  // No backend is connected yet: send the FormData to your API or email service here.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <div id="book" className="scroll-mt-28 rounded-lg bg-frost p-6 sm:p-10">
      <Eyebrow className="mb-4 text-body">{form.eyebrow}</Eyebrow>
      <TwoToneHeading font="serif" title={form.title} className="text-3xl sm:text-5xl" />
      <form onSubmit={handleSubmit} onChange={() => setSent(false)} className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className={labelStyle}>
          Name<Required />
          <input name="name" required autoComplete="name" placeholder="Enter your name" className={inputStyle} />
        </label>
        <label className={labelStyle}>
          Email<Required />
          <input name="email" type="email" required autoComplete="email" placeholder="Enter your email" className={inputStyle} />
        </label>
        <label className={`${labelStyle} sm:col-span-2`}>
          Phone
          <input name="phone" type="tel" autoComplete="tel" placeholder="Enter your number" className={inputStyle} />
        </label>
        <label className={`${labelStyle} sm:col-span-2`}>
          Message
          <textarea name="message" rows={4} placeholder="Enter your message" className={inputStyle} />
        </label>
        <label className="flex items-start gap-3 sm:col-span-2">
          <input name="consent" type="checkbox" required className="mt-0.5 size-5 shrink-0 accent-brand" />
          <span>{form.consent} <span className="text-brand">{form.consentHighlight}</span></span>
        </label>
        <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
          <button type="submit" className="group flex items-center gap-4 rounded-full bg-sky px-10 py-4 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand hover:shadow-lg hover:shadow-brand/30">
            {form.submit}
            <MoveRight aria-hidden className="size-5 transition group-hover:translate-x-1" />
          </button>
          <p role="status" className="font-medium text-brand">{sent && <span className="anim-card-in inline-block">{form.success}</span>}</p>
        </div>
      </form>
    </div>
  );
}
