import type { SocialName } from "@/types";

const paths: Record<SocialName, string> = {
  facebook: "M14 8.5V6.8c0-.8.5-1 .9-1H17V2h-3c-3.3 0-4.5 2.5-4.5 4.5v2H7V12h2.5v10H14V12h2.7l.4-3.5H14Z",
  instagram: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  youtube: "M22.5 7.2a3 3 0 0 0-2.1-2.1C18.5 4.6 12 4.6 12 4.6s-6.5 0-8.4.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 1 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-4.8ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z",
  linkedin: "M4.5 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM2.7 9h3.7v12H2.7V9Zm6 0h3.5v1.7c.5-1 1.8-2 3.7-2 3.9 0 4.6 2.6 4.6 5.9V21h-3.7v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H8.7V9Z",
};

export default function SocialIcon({ name, className = "size-4" }: { name: SocialName; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d={paths[name]} />
    </svg>
  );
}
