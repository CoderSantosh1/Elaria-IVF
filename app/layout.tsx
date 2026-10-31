import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Outfit, Raleway } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import data from "@/data/category.json";
import type { SiteInfo } from "@/types";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-dm-serif" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: { default: "Elaria IVF | Fertility & Reproductive Care", template: "%s | Elaria IVF" },
  description: data.site.tagline,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const site = data.site as SiteInfo;

  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable} ${dmSerif.variable} ${raleway.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <noscript><style>{"[data-reveal]{opacity:1;transform:none}"}</style></noscript>
        <TopBar site={site} />
        <Header site={site} />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer site={site} />
      </body>
    </html>
  );
}
