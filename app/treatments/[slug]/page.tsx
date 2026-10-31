import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TreatmentDetail from "@/components/treatments/TreatmentDetail";
import PageBanner from "@/components/ui/PageBanner";
import data from "@/data/category.json";

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return data.treatments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = data.treatments.find((item) => item.slug === slug);
  return { title: treatment?.name, description: treatment?.summary };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = data.treatments.find((item) => item.slug === slug);
  if (!treatment) notFound();

  return (
    <>
      <PageBanner title="Treatments Details" />
      <TreatmentDetail treatment={treatment} />
    </>
  );
}
