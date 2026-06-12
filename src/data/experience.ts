import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "vipayment",
    company: "PT Vipayment Digital Solution",
    position: "Full Stack Developer",
    period: "Sep 2022 – Oct 2025",
    startDate: "2022-09-01",
    endDate: "2025-10-01",
    responsibilities: [
      "Designed and maintained backend services and H2H APIs for the VIPayment platform.",
      "Integrated multiple payment gateway providers for secure digital transactions.",
      "Optimized database queries, API responses, and backend workflows for high-volume processing.",
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Node.js", "Express.js", "REST API", "H2H API"],
    achievements: [
      "Supported 50,000+ daily transactions with 99.9% uptime.",
      "Reduced system latency through query and API optimization.",
    ],
  },
  {
    id: "saytix",
    company: "Saytix.id",
    position: "Full Stack Developer – Backend Focused",
    period: "Apr 2025 – Sep 2025",
    startDate: "2025-04-01",
    endDate: "2025-09-01",
    responsibilities: [
      "Built core backend architecture and RESTful APIs for an online ticketing and event management platform.",
      "Designed organizer dashboards for event management, sales analytics, and ticket validation.",
      "Optimized backend payment processes, order validation, and transaction status handling.",
    ],
    techStack: ["Laravel", "MySQL", "REST API", "Payment Gateway"],
    achievements: [
      "Enabled scalable event, ticket, and transaction management for multiple organizers.",
      "Improved ticket purchasing flow through backend payment optimization.",
    ],
  },
  {
    id: "idevcorner",
    company: "IDEVCORNER",
    position: "Part-Time Full Stack Web Developer",
    period: "Aug 2022 – Oct 2023",
    startDate: "2022-08-01",
    endDate: "2023-10-01",
    responsibilities: [
      "Developed membership, subscription, and referral modules for a cryptocurrency analytics platform.",
      "Integrated internal APIs to display crypto market data and analytics features.",
      "Implemented caching, lazy loading, and query optimization strategies.",
    ],
    techStack: ["Laravel", "Livewire", "Alpine.js", "MySQL"],
    achievements: ["Improved application performance by 40% through caching and query optimization."],
  },
  {
    id: "bigmedia",
    company: "PT Bigmedia Yoke Group",
    position: "Full Stack Developer",
    period: "Jan 2023 – Jun 2023",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    responsibilities: [
      "Developed and optimized the company's main website backend and frontend components.",
      "Improved database queries and backend functionality.",
      "Collaborated with cross-functional teams on business requirements.",
    ],
    techStack: ["PHP", "MySQL", "JavaScript"],
    achievements: ["Aligned web development output with business and operational requirements."],
  },
  {
    id: "afindo",
    company: "Afindo Informatika",
    position: "Web Developer",
    period: "Aug 2021 – Apr 2022",
    startDate: "2021-08-01",
    endDate: "2022-04-01",
    responsibilities: [
      "Built and launched Pakaiwa.com, a WhatsApp Gateway platform for business messaging.",
      "Conducted security audits and fixed vulnerabilities on government and business applications.",
      "Developed scalable web applications for business clients.",
    ],
    techStack: ["CodeIgniter", "Laravel", "Node.js", "MySQL", "WhatsApp Gateway"],
    achievements: [
      "Launched Pakaiwa.com serving automated business and notification messaging.",
      "Improved web application security through vulnerability remediation.",
    ],
  },
  {
    id: "xai-syndicate",
    company: "PT Xai Syndicate Internasional",
    position: "Back End Developer",
    period: "Jun 2021 – Aug 2021",
    startDate: "2021-06-01",
    endDate: "2021-08-01",
    responsibilities: [
      "Developed backend features and REST API services using Laravel.",
      "Built Python-based scripts and backend automation tools.",
      "Optimized backend logic and database queries.",
    ],
    techStack: ["Laravel", "Python", "MySQL", "REST API"],
    achievements: ["Improved application performance and reliable system integration."],
  },
  {
    id: "freelance",
    company: "Freelance",
    position: "Backend-Focused Full Stack Web Developer",
    period: "Dec 2018 – Mar 2021",
    startDate: "2018-12-01",
    endDate: "2021-03-01",
    responsibilities: [
      "Delivered custom web applications for e-commerce, service platforms, and transaction-based systems.",
      "Built REST API integrations and payment gateway workflows.",
      "Managed deployment, hosting, maintenance, and performance optimization.",
    ],
    techStack: ["PHP", "Laravel", "JavaScript", "MySQL", "REST API", "Payment Gateway"],
    achievements: [
      "Served 50+ business clients with custom backend solutions.",
      "Built 10+ automated game top-up platforms.",
    ],
  },
  {
    id: "argia",
    company: "CV Argia Teknologi Nusantara",
    position: "Website Developer (Internship)",
    period: "Aug 2018 – Oct 2018",
    startDate: "2018-08-01",
    endDate: "2018-10-01",
    responsibilities: [
      "Supported frontend and backend development of company web systems.",
      "Assisted in testing, maintenance, and responsive interface improvements.",
    ],
    techStack: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    achievements: ["Ensured website stability through testing and maintenance."],
  },
];

export const featuredExperienceIds = ["vipayment", "saytix", "idevcorner"];

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((exp) => exp.id === id);
}
