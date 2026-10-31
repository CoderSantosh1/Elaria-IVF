import type { TwoToneTitle } from "@/types";

interface TwoToneHeadingProps {
  title: TwoToneTitle;
  font?: "heading" | "serif" | "blog";
  as?: "h1" | "h2" | "h3";
  className?: string;
  inline?: boolean;
}

const fonts = {
  heading: "font-heading font-semibold",
  serif: "font-serif font-normal",
  blog: "font-blog font-semibold",
};

export default function TwoToneHeading({ title, font = "heading", as: Tag = "h2", className = "", inline = false }: TwoToneHeadingProps) {
  return (
    <Tag className={`${fonts[font]} leading-[1.1] tracking-tight text-navy ${className}`}>
      {title.line1}
      {inline ? " " : <br />}
      <span className="text-sky">{title.line2}</span>
    </Tag>
  );
}
