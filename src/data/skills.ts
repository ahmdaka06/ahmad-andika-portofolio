import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "PHP", proficiency: 4 },
      { name: "Laravel", proficiency: 4 },
      { name: "Node.js", proficiency: 4 },
      { name: "NestJS", proficiency: 3 },
      { name: "Express.js", proficiency: 4 },
      { name: "AdonisJS", proficiency: 3 },
      { name: "Golang", proficiency: 2 },
      { name: "Livewire", proficiency: 3 },
      { name: "CodeIgniter", proficiency: 3 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", proficiency: 3 },
      { name: "Vue", proficiency: 3 },
      { name: "Livewire", proficiency: 3 },
      { name: "Alpine.js", proficiency: 3 },
      { name: "TailwindCSS", proficiency: 4 },
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
      { name: "Query Optimization", proficiency: 4 },
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
