"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  variant?: "up" | "left" | "right" | "zoom";
  delay?: number;
  className?: string;
  children: ReactNode;
}

export default function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.visible = "true";
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-reveal={variant} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties} className={className}>
      {children}
    </Tag>
  );
}
