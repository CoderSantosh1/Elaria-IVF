interface EyebrowProps {
  children: string;
  centered?: boolean;
  doubleLine?: boolean;
  className?: string;
}

export default function Eyebrow({ children, centered = false, doubleLine = false, className = "text-brand" }: EyebrowProps) {
  return (
    <p className={`flex items-center gap-4 text-xs font-semibold tracking-[0.22em] uppercase ${centered ? "justify-center" : ""} ${className}`}>
      <span aria-hidden className="h-px w-10 bg-sky" />
      {children}
      {doubleLine && <span aria-hidden className="h-px w-10 bg-sky" />}
    </p>
  );
}
