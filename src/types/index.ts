export interface Profile {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  yearsExperience: number;
  cvPath: string;
  photoPath: string;
  education: Education[];
  careerJourney: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  startDate: string;
  endDate: string | null;
  responsibilities: string[];
  techStack: string[];
  achievements: string[];
}

export type ProjectCategory =
  | "Payment Platform"
  | "Ticketing System"
  | "WhatsApp Gateway"
  | "POS"
  | "E-Commerce"
  | "Automation"
  | "SaaS"
  | "Top Up Game Platform";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  description: string;
  role: string;
  period: string;
  country: string;
  techStack: string[];
  challenges: string[];
  results: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  responsibilities: string[];
  thumbnailPath: string;
  galleryPaths: string[];
  links: {
    live?: string;
    github?: string;
  };
  relatedSlugs?: string[];
  featured: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
}

export interface Skill {
  name: string;
  proficiency?: 1 | 2 | 3 | 4;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface KeyMetric {
  value: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}
