import AboutIntro from "@/components/about/AboutIntro";
import BlogSection from "@/components/blog/BlogSection";
import DoctorsSection from "@/components/doctors/DoctorsSection";
import Hero from "@/components/home/Hero";
import TreatmentShowcase from "@/components/home/TreatmentShowcase";
import TestimonialsSection from "@/components/stories/TestimonialsSection";
import data from "@/data/category.json";
import type { BlogPost } from "@/types";

export default function HomePage() {
  return (
    <>
      <Hero hero={data.home.hero} />
      <AboutIntro intro={data.about.intro} />
      <TreatmentShowcase content={data.home.treatments} />
      <DoctorsSection intro={data.doctorsSection} doctors={data.doctors} />
      <TestimonialsSection content={data.home.testimonials} />
      <BlogSection intro={data.blogSection} posts={(data.blogs as BlogPost[]).slice(0, 3)} />
    </>
  );
}
