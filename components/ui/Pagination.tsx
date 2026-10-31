import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  basePath: string;
  currentPage: number;
  totalPages: number;
  anchor?: string;
}

const itemStyle = "grid size-12 place-items-center rounded-full font-heading font-medium transition duration-300";
const idleStyle = "bg-mist text-brand hover:-translate-y-0.5 hover:bg-brand hover:text-white";
const disabledStyle = "bg-mist/60 text-brand/35";

export default function Pagination({ basePath, currentPage, totalPages, anchor = "" }: PaginationProps) {
  if (totalPages <= 1) return null;

  const hrefFor = (page: number) => `${basePath}${page > 1 ? `?page=${page}` : ""}${anchor}`;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="mt-12">
      <ul className="flex flex-wrap items-center justify-center gap-3">
        <li>
          {currentPage > 1 ? (
            <Link href={hrefFor(currentPage - 1)} aria-label="Previous page" className={`${itemStyle} ${idleStyle}`}>
              <ChevronLeft aria-hidden className="size-5" />
            </Link>
          ) : (
            <span aria-hidden className={`${itemStyle} ${disabledStyle}`}><ChevronLeft className="size-5" /></span>
          )}
        </li>
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={hrefFor(page)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              className={`${itemStyle} ${page === currentPage ? "bg-brand text-white shadow-lg shadow-brand/30" : idleStyle}`}
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          {currentPage < totalPages ? (
            <Link href={hrefFor(currentPage + 1)} aria-label="Next page" className={`${itemStyle} ${idleStyle}`}>
              <ChevronRight aria-hidden className="size-5" />
            </Link>
          ) : (
            <span aria-hidden className={`${itemStyle} ${disabledStyle}`}><ChevronRight className="size-5" /></span>
          )}
        </li>
      </ul>
    </nav>
  );
}
