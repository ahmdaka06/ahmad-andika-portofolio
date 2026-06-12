import type { Profile } from "@/types";
import { experiences } from "@/data/experience";

export const profile: Profile = {
  name: "Ahmad Andika Khoirul Amin",
  title: "Backend & Full-Stack Developer",
  headline: "Backend & Full-Stack Developer Building Scalable Digital Solutions",
  subheadline:
    "5+ years of experience building payment systems, ticketing platforms, automation tools, and business applications.",
  summary:
    "Informatics Engineering student and backend-focused developer with over 5 years of experience building REST APIs, payment gateway integrations, database-driven applications, and scalable backend systems. Experienced in developing production-ready systems for payment platforms, ticketing systems, WhatsApp gateways, POS, and e-commerce applications.",
  email: "ahmdaka06@gmail.com",
  phone: "+62 81363205735",
  linkedin: "https://www.linkedin.com/in/ahmadandika",
  github: "https://github.com/ahmdaka06",
  location: "Jombang, East Java, Indonesia",
  yearsExperience: 5,
  cvPath: "/cv/AHMAD_ANDIKA_KHOIRUL_AMIN_FULLSTACK_DEVELOPER.pdf",
  photoPath: "/profile/profile.png",
  education: [
    {
      institution: "Universitas Darul 'Ulum Jombang",
      degree: "Informatics Engineering",
      period: "Sep 2022 – Present",
      description:
        "Focused on software development, database systems, programming logic, and web application development.",
    },
  ],
  careerJourney:
    "Started as a freelance full-stack developer in 2018, building custom web applications and payment integrations for clients. Progressed through backend-focused roles at startups and agencies, eventually leading backend services for high-volume payment and ticketing platforms supporting 50,000+ daily transactions.",
};

export const keyMetrics = [
  { value: "5+", label: "Years Experience" },
  { value: `${experiences.length}+`, label: "Work Experiences" },
  { value: "50+", label: "Clients Served" },
] as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
] as const;
