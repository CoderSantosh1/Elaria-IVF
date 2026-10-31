import type { Metadata } from "next";
import StoryCard from "@/components/stories/StoryCard";
import PageBanner from "@/components/ui/PageBanner";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import data from "@/data/category.json";

export const metadata: Metadata = { title: "Success Stories" };

export default function SuccessStoriesPage() {
  const { eyebrow, title, description, items } = data.storiesPage;

  return (
    <>
      <PageBanner title="Success Stories" />
      <section className="py-16 lg:pt-24 lg:pb-28">
        <div className="container-site">
          <SectionIntro eyebrow={eyebrow} title={title} description={description} font="serif" />
          <ul className="mt-10 grid gap-5 lg:grid-cols-2">
            {items.map((story, index) => (
              <Reveal as="li" key={story.name} delay={(index % 2) * 150}><StoryCard story={story} /></Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
