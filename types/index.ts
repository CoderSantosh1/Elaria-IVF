export interface TwoToneTitle {
  line1: string;
  line2: string;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type SocialName = "facebook" | "instagram" | "youtube" | "linkedin";

export interface SocialLink {
  name: SocialName;
  href: string;
}

export interface SiteInfo {
  name: string;
  logo: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  footerAddress: string[];
  hours: string[];
  copyright: string;
  phoneHref: string;
}

export interface PageHero {
  metaTitle?: string;
  title: string;
}

export type PageHeroKey =
  | "about"
  | "treatments"
  | "treatmentDetails"
  | "doctors"
  | "successStories"
  | "blog"
  | "blogDetails"
  | "contact"
  | "bookAppointment";

export interface CommonData {
  site: SiteInfo;
  navigation: NavItem[];
  quickLinks: NavChild[];
  socials: SocialLink[];
  cta: NavChild;
  pageHeroes: Record<PageHeroKey, PageHero>;
  stats: Stat[];
}

export interface HeroContent {
  eyebrow: string;
  title: TwoToneTitle;
  description: string;
  image: string;
  imageAlt: string;
  emergencyLabel: string;
  scheduleLabel: string;
  cta: NavChild;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface AboutIntroContent {
  eyebrow: string;
  title: TwoToneTitle;
  description: string;
  subheading: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface WhyChooseContent {
  eyebrow: string;
  title: TwoToneTitle;
  description: string;
  image: string;
  imageAlt: string;
  features: Feature[];
}

export interface ShowcaseCard {
  title: string;
  description: string;
  href: string;
}

export interface TreatmentShowcaseContent {
  eyebrow: string;
  word: string;
  lead: {
    title: TwoToneTitle;
    description: string;
    href: string;
  };
  cards: ShowcaseCard[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Treatment {
  slug: string;
  name: string;
  title: TwoToneTitle;
  summary: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  heroDescription: string;
  aboutTitle: TwoToneTitle;
  aboutBody: string;
  aboutImage: string;
  benefits: Feature[];
  processTitle: TwoToneTitle;
  process: ProcessStep[];
}

export interface SectionIntro {
  eyebrow?: string;
  title: TwoToneTitle;
  description: string;
}

export interface Doctor {
  slug: string;
  name: string;
  specialty: string;
  qualifications: string[];
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Story {
  quote: string;
  name: string;
  treatment: string;
  image: string;
}

export interface TestimonialsContent extends SectionIntro {
  image: string;
  imageAlt: string;
  items: Testimonial[];
}

export interface BlogSection {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  tag: string;
  title: string;
  headline: TwoToneTitle;
  date: string;
  comments: string;
  author: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  intro: string;
  sections: BlogSection[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface BookAppointmentContent {
  eyebrow: string;
  title: TwoToneTitle;
  description: string;
  treatmentPlaceholder: string;
  generalOption: string;
  submit: string;
  success: string;
}

export interface ContactContent {
  eyebrow: string;
  title: TwoToneTitle;
  description: string;
  detailsHeading: string;
  form: {
    eyebrow: string;
    title: TwoToneTitle;
    consent: string;
    consentHighlight: string;
    submit: string;
    success: string;
  };
  location: {
    eyebrow: string;
    title: TwoToneTitle;
    description: string;
    image: string;
    imageAlt: string;
  };
}

export interface PageBannerContent {
  title: string;
}
