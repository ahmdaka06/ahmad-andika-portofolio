/**
 * Skill icon mapping using simple-icons.
 * Each skill name maps to its simple-icons slug for color-accurate brand SVG.
 */
export const skillIconMap = new Map<string, string>([
  // Backend
  ["PHP", "php"],
  ["Laravel", "laravel"],
  ["Filament", "filament"],
  ["Node.js", "nodedotjs"],
  ["NestJS", "nestjs"],
  ["Express.js", "express"],
  ["AdonisJS", "adonisjs"],
  ["Golang", "go"],
  ["CodeIgniter", "codeigniter"],
  ["Python", "python"],
  ["Fastify", "fastify"],
  ["Fiber", "gofiber"],
  ["Gin", "gin"],
  ["Gorm", "gorm"],

  // Frontend
  ["React", "react"],
  ["Vue", "vuedotjs"],
  ["Next.js", "nextdotjs"],
  ["Nuxt.js", "nuxt"],
  ["Alpine.js", "alpinedotjs"],
  ["TailwindCSS", "tailwindcss"],
  ["JavaScript", "javascript"],
  ["HTML/CSS", "html5"],
  ["Livewire", "livewire"],
  ["Shadcn/UI", "shadcnui"],

  // Database
  ["MySQL", "mysql"],
  ["PostgreSQL", "postgresql"],
  ["MongoDB", "mongodb"],
  ["Redis", "redis"],

  // DevOps
  ["Docker", "docker"],
  ["Linux", "linux"],
  ["Nginx", "nginx"],
  ["Apache", "apache"],
  ["CI/CD", "githubactions"],
  ["GitHub Actions", "githubactions"],
  ["Git", "git"],
]);

export function getSkillIconSlug(name: string): string | undefined {
  return skillIconMap.get(name);
}