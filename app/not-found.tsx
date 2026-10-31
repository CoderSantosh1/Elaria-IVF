import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site py-32 text-center">
      <h1 className="font-heading text-5xl font-semibold text-navy">Page not found</h1>
      <p className="mt-4 text-lg">The page you are looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 inline-block rounded-xl bg-brand-dark px-6 py-3 font-medium text-white">Back to Home</Link>
    </section>
  );
}
