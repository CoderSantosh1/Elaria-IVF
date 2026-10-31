"use client";

import { useEffect, useState, type FormEvent } from "react";
import { MoveRight } from "lucide-react";
import type { BookAppointmentContent } from "@/types";

interface AppointmentFormProps {
  content: BookAppointmentContent;
  treatments: string[];
}

const inputStyle = "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 font-sans font-normal text-ink outline-none transition placeholder:text-body/70 focus:border-sky focus:ring-2 focus:ring-sky/25";
const labelStyle = "font-heading font-medium text-ink";
const Required = () => <span aria-hidden className="text-red-600"> *</span>;

export default function AppointmentForm({ content, treatments }: AppointmentFormProps) {
  const [sent, setSent] = useState(false);
  const [minDate, setMinDate] = useState<string>();

  // Set after mount so the server-rendered HTML never holds a stale "today"
  useEffect(() => {
    const now = new Date();
    const pad = (value: number) => String(value).padStart(2, "0");
    setMinDate(`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`);
  }, []);

  // No backend is connected yet: send the FormData to your API or email service here.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} onChange={() => setSent(false)} className="grid gap-5 rounded-lg bg-frost p-6 sm:grid-cols-2 sm:p-10">
      <label className={labelStyle}>
        Full Name<Required />
        <input name="name" required autoComplete="name" placeholder="Enter your name" className={inputStyle} />
      </label>
      <label className={labelStyle}>
        Phone<Required />
        <input name="phone" type="tel" required autoComplete="tel" placeholder="Enter your number" className={inputStyle} />
      </label>
      <label className={labelStyle}>
        Email
        <input name="email" type="email" autoComplete="email" placeholder="Enter your email" className={inputStyle} />
      </label>
      <label className={labelStyle}>
        Preferred Date<Required />
        <input name="date" type="date" required min={minDate} className={inputStyle} />
      </label>
      <label className={`${labelStyle} sm:col-span-2`}>
        Treatment
        <select name="treatment" defaultValue="" className={inputStyle}>
          <option value="" disabled>{content.treatmentPlaceholder}</option>
          {treatments.map((treatment) => <option key={treatment}>{treatment}</option>)}
          <option>{content.generalOption}</option>
        </select>
      </label>
      <label className={`${labelStyle} sm:col-span-2`}>
        Message
        <textarea name="message" rows={3} placeholder="Anything you'd like us to know" className={inputStyle} />
      </label>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button type="submit" className="group flex items-center gap-4 rounded-full bg-sky px-10 py-4 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand hover:shadow-lg hover:shadow-brand/30">
          {content.submit}
          <MoveRight aria-hidden className="size-5 transition group-hover:translate-x-1" />
        </button>
        <p role="status" className="font-medium text-brand">{sent && <span className="anim-card-in inline-block">{content.success}</span>}</p>
      </div>
    </form>
  );
}
