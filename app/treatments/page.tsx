import type { Metadata } from "next";
import TreatmentCard from "@/components/treatments/TreatmentCard";
import PageBanner from "@/components/ui/PageBanner";
import Pagination from "@/components/ui/Pagination";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import data from "@/data/category.json";

export const metadata: Metadata = { title: "Treatments" };

interface TreatmentsPageProps {
  searchParams: Promise<{ page?: string | string[] }>;
}

export default async function TreatmentsPage({ searchParams }: TreatmentsPageProps) {
  const { page } = await searchParams;
  const { perPage } = data.treatmentsPage;
  const totalPages = Math.ceil(data.treatments.length / perPage);
  const requestedPage = Number(page);
  const currentPage = Number.isInteger(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1;
  const treatments = data.treatments.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <>
      <PageBanner title="Treatments" />
      <section className="py-16 lg:pt-24 lg:pb-28">
        <div className="container-site">
          <SectionIntro title={data.treatmentsPage.title} description={data.treatmentsPage.description} />
          <ul id="treatments-list" className="mt-10 grid scroll-mt-32 gap-6 md:grid-cols-2">
            {treatments.map((treatment, index) => (
              <Reveal as="li" key={treatment.slug} delay={(index % 2) * 150}><TreatmentCard treatment={treatment} /></Reveal>
            ))}
          </ul>
          <Pagination basePath="/treatments" currentPage={currentPage} totalPages={totalPages} anchor="#treatments-list" />
        </div>
      </section>
    </>
  );
}
