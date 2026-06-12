import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "PHP", proficiency: 4 },
      { name: "CodeIgniter", proficiency: 3 },
      { name: "Laravel", proficiency: 4 },
      { name: "Filament", proficiency: 3 },
      { name: "Node.js", proficiency: 4 },
      { name: "NestJS", proficiency: 3 },
      { name: "Express.js", proficiency: 4 },
      { name: "AdonisJS", proficiency: 3 },
      { name: "Golang", proficiency: 2 },
      { name: "Gin", proficiency: 2 },
      { name: "Python", proficiency: 2 },
      { name: "Livewire", proficiency: 3 },
      { name: "Fastify", proficiency: 2 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", proficiency: 3 },
      { name: "Vue", proficiency: 3 },
      { name: "Next.js", proficiency: 3 },
      { name: "Nuxt.js", proficiency: 2 },
      { name: "Alpine.js", proficiency: 3 },
      { name: "TailwindCSS", proficiency: 4 },
      { name: "Shadcn/UI", proficiency: 3 },
      { name: "JavaScript", proficiency: 4 },
      { name: "HTML/CSS", proficiency: 4 },
    ],
  },
  {
    id: "database",
    name: "Database",
    skills: [
      { name: "MySQL", proficiency: 4 },
      { name: "PostgreSQL", proficiency: 3 },
      { name: "MongoDB", proficiency: 2 },
      { name: "Redis", proficiency: 2 },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    skills: [
      { name: "Docker", proficiency: 3 },
      { name: "Linux", proficiency: 4 },
      { name: "Nginx", proficiency: 3 },
      { name: "Apache", proficiency: 3 },
      { name: "CI/CD", proficiency: 3 },
      { name: "GitHub Actions", proficiency: 3 },
      { name: "Git", proficiency: 4 },
    ],
  },
  {
    id: "soft-skills",
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving & Analytical Thinking" },
      { name: "Communication & Collaboration" },
      { name: "Project Management & Prioritization" },
      { name: "Leadership & Team Coordination" },
      { name: "Adaptability & Continuous Learning" },
    ],
  },
];

export const featuredSkillNames = [
  "Laravel",
  "PHP",
  "Node.js",
  "NestJS",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "React",
];
