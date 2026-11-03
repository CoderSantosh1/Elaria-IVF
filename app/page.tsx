import AboutIntro from "@/components/about/AboutIntro";
import BlogSection from "@/components/blog/BlogSection";
import DoctorsSection from "@/components/doctors/DoctorsSection";
import Hero from "@/components/home/Hero";
import TreatmentShowcase from "@/components/home/TreatmentShowcase";
import TestimonialsSection from "@/components/stories/TestimonialsSection";
import data from "@/data/category.json";
import type { BlogPost } from "@/types";

export default function HomePage() {
  const { Home, About, Doctors, Blog } = data.categories.ElariaIVF.sections;

  return (
    <>
      <Hero hero={Home.hero} />
      <AboutIntro intro={About.intro} stats={data.common.stats} />
      <TreatmentShowcase content={Home.treatments} />
      <DoctorsSection intro={Doctors.intro} doctors={Doctors.items} />
      <TestimonialsSection content={Home.testimonials} />
      <BlogSection intro={Blog.intro} posts={(Blog.items as BlogPost[]).slice(0, 3)} />
    </>
  );
}
