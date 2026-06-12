import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "dicoding",
    title: "Backend & Frontend Development",
    issuer: "Dicoding",
    date: "2020 – 2022",
    description:
      "Structured projects focused on API integration, database management, and scalable web architecture.",
  },
  {
    id: "santrikoding",
    title: "Laravel, Livewire & Alpine.js",
    issuer: "SantriKoding",
    date: "2021 – 2022",
    description:
      "Practical experience in modern PHP frameworks for efficient full-stack development.",
  },
  {
    id: "smkdev",
    title: "Software Engineering Practices",
    issuer: "SMKDEV",
    date: "2021",
    description:
      "Version control, code review, and collaborative development workflows.",
  },
  {
    id: "udemy",
    title: "JavaScript, Node.js & RESTful API Design",
    issuer: "Udemy",
    date: "2020 – 2021",
    description: "Hands-on coding and project-based learning for backend development.",
  },
  {
    id: "sololearn",
    title: "Programming Fundamentals",
    issuer: "SoloLearn",
    date: "2019 – 2020",
    description: "Foundation in HTML, CSS, JavaScript, and Python.",
  },
  {
    id: "hackerrank",
    title: "Problem Solving & Algorithms",
    issuer: "HackerRank",
    date: "2019 – 2020",
    description: "Coding challenges and competitive programming exercises.",
  },
];

export const certificationIssuers = [
  "Dicoding",
  "SantriKoding",
  "Udemy",
  "HackerRank",
  "SoloLearn",
  "SMKDEV",
] as const;
