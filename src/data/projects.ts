import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "vipayment",
    name: "VIPayment - B2B Reseller Platform for Digital Products",
    category: "Payment Platform",
    description:
      "Reseller platform for digital products (pulsa, games, e-money) with H2H APIs, $4.1M+ USD in handled volume, and 50,000+ daily transactions.",
    role: "Full Stack Developer",
    period: "2022 – 2025",
    country: "Indonesia",
    techStack: [
      "PHP",
      "Express.js",
      "Alpine.js",
      "MySQL",
      "Redis",
      "Payment Gateway",
    ],
    challenges: [
      "Scaling reseller transaction flows with balance management, tiered pricing, and multi-gateway routing.",
      "Maintaining 99.9% uptime under peak load across thousands of reseller accounts.",
    ],
    results: [
      "Handled transactions totaling $4,100,000+ USD in cumulative volume.",
      "Supported 50,000+ daily transactions.",
      "Reduced system latency through query optimization and Redis caching.",
    ],
    overview:
      "VIPayment is a B2B reseller platform for digital products — pulsa, games, e-money, streaming, and vouchers. Resellers manage balance, pricing, and transactions through a dashboard while integrating via H2H APIs to automate sales at scale. The public B2C storefront is VIPayment v2.",
    problem:
      "Digital product resellers needed a reliable platform with wallet balance, tiered membership, price lists, transaction reporting, and H2H APIs to resell pulsa, games, and e-money services.",
    solution:
      "Built a reseller-centric platform with PHP and Express.js backends, Alpine.js dashboards for balance and order management, Redis caching, and multi payment gateway integration with public API documentation.",
    architecture:
      "PHP reseller portal with Express.js services for real-time order processing, Alpine.js dashboard UI (balance, deposits, price lists, transaction reports), MySQL persistence, Redis caching, and H2H API layer for reseller automation.",
    responsibilities: [
      "Designed and maintained reseller backend services and H2H APIs.",
      "Built reseller dashboard features — balance, deposits, pricing, and transaction reporting with Alpine.js.",
      "Optimized MySQL queries, Redis caching, and API response times for high-volume reseller traffic.",
    ],
    thumbnailPath: "/portofolio/vipayment.png",
    galleryPaths: ["/portofolio/vipayment.png"],
    links: {},
    relatedSlugs: ["vipayment-v2"],
    featured: true,
  },
  {
    slug: "vipayment-v2",
    name: "VIPayment V2 - Public B2C Storefront for Digital Products",
    category: "Payment Platform",
    description:
      "Public-facing game top-up and digital voucher storefront where end users transact directly — the B2C companion to the VIPayment reseller platform.",
    role: "Full Stack Developer",
    period: "2022 – 2025",
    country: "Indonesia",
    techStack: [
      "Laravel",
      "Inertia.js",
      "React.js",
      "Redis",
      "MySQL",
      "Multi Payment Gateway",
    ],
    challenges: [
      "Delivering a fast, consumer-friendly checkout experience across a large multi-game catalog.",
      "Routing public orders through shared supplier and payment infrastructure at scale.",
    ],
    results: [
      "Launched public storefront for direct consumer top-up transactions.",
      "Built multi-game catalog with category filters for top-up, entertainment, and vouchers.",
      "Integrated multi payment gateways with Redis-backed order processing.",
    ],
    overview:
      "VIPayment v2 is the public B2C storefront for VIPayment — end users browse popular games, filter by category, and complete top-up transactions directly without a reseller account. It complements the B2B reseller platform (see VIPayment).",
    problem:
      "Consumers needed a direct way to top up games and digital vouchers without going through a reseller — with the same reliability and payment options as the underlying platform.",
    solution:
      "Built a modern public storefront with Laravel, Inertia.js, and React.js — multi-game catalog, transaction tracking, Redis caching, and multi payment gateway checkout.",
    architecture:
      "Laravel backend with Inertia.js and React.js frontend, MySQL persistence, Redis caching, and multi payment gateway integration. Public order flows connect to the same supplier and transaction pipeline as the reseller platform.",
    responsibilities: [
      "Developed the public storefront end-to-end with Laravel, Inertia.js, and React.js.",
      "Built game catalog, category navigation, and consumer checkout flows.",
      "Integrated multi payment gateways and Redis-backed transaction processing.",
    ],
    thumbnailPath: "/portofolio/vipayment-public.png",
    galleryPaths: ["/portofolio/vipayment-public.png"],
    links: {},
    relatedSlugs: ["vipayment"],
    featured: false,
  },
  {
    slug: "saytix-ticketing",
    name: "Saytix.id - Multi-Vendor Event Ticketing Platform",
    category: "Ticketing System",
    description:
      "Indonesian online ticketing and event management platform — 25,000+ tickets sold for concerts, festivals, seminars, workshops, sports, and more.",
    role: "Full Stack Developer",
    period: "2025",
    country: "Indonesia",
    techStack: [
      "Docker",
      "Laravel",
      "NestJS",
      "Redis",
      "PostgreSQL",
      "React.js",
      "REST API",
      "Laravel Horizon",
      "Multi Payment Gateway",
    ],
    challenges: [
      "Handling thousands of concurrent users during high-demand ticket sales.",
      "Building organizer tooling for event management, analytics, and ticket validation at scale.",
    ],
    results: [
      "Sold 25,000+ tickets across concerts, festivals, seminars, workshops, and sports events.",
      "Delivered organizer features for event management, sales analytics, and ticket validation.",
      "Built scalable full-stack platform with RBAC, multi-vendor support, and real-time payments.",
    ],
    overview:
      "Saytix is an Indonesian online ticketing and event management platform (saytix.id) for selling tickets to concerts, seminars, workshops, festivals, sports matches, and other events. Beyond ticket sales, Saytix provides organizers with tools to manage events, view sales analytics, validate tickets, and run day-of operations.",
    problem:
      "Indonesian event organizers needed an all-in-one platform for public ticket sales and back-office operations — from high-concurrency checkout to analytics, validation, and multi-vendor event management.",
    solution:
      "Engineered a full-stack platform with Laravel and NestJS services, React.js frontend, organizer dashboards, Redis caching, ticket validation flows, and multi payment gateway integration.",
    architecture:
      "Dockerized Laravel and NestJS services with React.js frontend, PostgreSQL, Redis, and Laravel Horizon for queue processing. Modular domains for events, tickets, transactions, organizer analytics, and ticket validation with multi payment gateway integration.",
    responsibilities: [
      "Built full-stack architecture across Laravel, NestJS, and React.js.",
      "Developed organizer dashboards for event management, sales analytics, and ticket validation.",
      "Integrated multi payment gateways and optimized transaction processing with Laravel Horizon.",
    ],
    thumbnailPath: "/portofolio/saytix.png",
    galleryPaths: ["/portofolio/saytix.png"],
    links: {},
    featured: true,
  },
  {
    slug: "notifay",
    name: "Notifay - WhatsApp Notification Platform for Business Clients",
    category: "WhatsApp Gateway",
    description:
      "WhatsApp notification gateway serving 50+ business clients with encrypted message delivery.",
    role: "Full Stack Developer",
    period: "2024 – 2025",
    country: "Indonesia",
    techStack: ["Laravel", "Node.js", "MySQL", "WhatsApp API"],
    challenges: [
      "Reliable message delivery with status tracking for business clients.",
      "Cost optimization for high-volume notification traffic.",
    ],
    results: [
      "Served 50+ active business clients.",
      "Reduced notification costs by 40% with open-source integration framework.",
    ],
    overview:
      "Notifay is a WhatsApp-based notification platform enabling businesses to send automated messages with token-based authentication and delivery tracking.",
    problem:
      "Businesses needed an affordable, reliable WhatsApp notification system with delivery status tracking.",
    solution:
      "Developed encrypted message delivery platform with token-based auth, status tracking, and cost-optimized open-source integration.",
    architecture:
      "Laravel backend with WhatsApp API integration layer. Token-based authentication and message queue for reliable delivery.",
    responsibilities: [
      "Developed the WhatsApp notification platform end-to-end.",
      "Implemented encrypted message delivery and status tracking.",
      "Built cost-optimization framework for notification routing.",
    ],
    thumbnailPath: "/images/projects/notifay-placeholder.jpg",
    galleryPaths: [],
    links: {},
    featured: true,
  },
  {
    slug: "deratopup",
    name: "Deratopup - Game Top-Up and Digital Voucher Platform",
    category: "Payment Platform",
    description:
      "Game top-up and digital voucher platform with real-time transaction processing and $3M+ USD in handled volume.",
    role: "Full Stack Developer",
    period: "2022 – 2025",
    country: "Indonesia",
    techStack: [
      "Laravel",
      "Inertia.js",
      "React.js",
      "MySQL",
      "Redis",
      "REST API",
      "Multi Payment Gateway",
    ],
    challenges: [
      "Processing high-volume game top-up transactions across multiple titles and payment channels.",
      "Maintaining 24/7 uptime with real-time supplier API integrations.",
    ],
    results: [
      "Handled transactions totaling $3,000,000+ USD in cumulative volume.",
      "Built automated top-up flows for Mobile Legends, Free Fire, PUBG Mobile, and other popular titles.",
      "Maintained reliable 24/7 real-time transaction processing.",
    ],
    overview:
      "Deratopup is a game top-up and digital voucher platform for Indonesian gamers — instant transactions, a multi-game catalog, and trusted payment integrations. It is one of 10+ similar platforms delivered during the freelance period (see Game Top-Up Platform Suite).",
    problem:
      "Gamers needed a fast, reliable, and competitively priced top-up platform supporting multiple game titles and payment methods.",
    solution:
      "Built a full-stack platform with Laravel, Inertia.js, and React.js — multi-game catalog, supplier API integrations, Redis caching, and multi payment gateway workflows.",
    architecture:
      "Laravel monolith with Inertia.js and React.js frontend, MySQL persistence, Redis caching, and multi payment gateway integration. 24/7 real-time transaction pipeline with order status tracking.",
    responsibilities: [
      "Developed the platform end-to-end with Laravel, Inertia.js, and React.js.",
      "Integrated game supplier APIs and multi payment gateways for automated delivery.",
      "Handled Redis-backed transaction processing and monitoring at scale.",
    ],
    thumbnailPath: "/portofolio/deratopup.png",
    galleryPaths: ["/portofolio/deratopup.png"],
    links: {},
    relatedSlugs: ["game-top-up-platform"],
    featured: true,
  },
  {
    slug: "game-top-up-platform",
    name: "Top-Up Game Platform - 10+ White-Label Platforms for Indonesian Clients",
    category: "Payment Platform",
    description:
      "Delivered 10+ white-label game top-up platforms for predominantly Indonesian clients — built, handed over, and no longer under my maintenance.",
    role: "Full Stack Developer",
    period: "2022 – Now",
    country: "Indonesia",
    techStack: [
      "Laravel",
      "Livewire",
      "Alpine.js",
      "jQuery",
      "MySQL",
      "Redis",
      "Payment Gateway",
      "Multi API Aggregation Platform",
    ],
    challenges: [
      "Delivering reusable top-up architectures across multiple client brands with varying requirements.",
      "Integrating and aggregating APIs from multiple global game and payment suppliers.",
      "Maintaining 24/7 uptime for real-time transactions before client handover.",
    ],
    results: [
      "Delivered 10+ automated top-up websites for Indonesian clients.",
      "Built multi API aggregation layers for supplier and payment gateway routing.",
      "Achieved 99.8% uptime through performance optimization prior to handover.",
    ],
    overview:
      "A portfolio of 10+ white-label game top-up platforms built for Indonesian clients during the freelance period. Each platform was developed end-to-end, delivered to the client, and handed over — including Deratopup as a representative flagship example.",
    problem:
      "Indonesian businesses needed turnkey game top-up platforms with multi-game catalogs, payment integrations, and supplier API connectivity — delivered ready to operate independently.",
    solution:
      "Built repeatable Laravel-based top-up systems with Livewire and Alpine.js interfaces, Redis caching, multi payment gateway support, and a multi API aggregation layer for supplier routing.",
    architecture:
      "Laravel monoliths with Livewire and Alpine.js frontends, jQuery for legacy UI components, MySQL persistence, Redis caching, and a multi API aggregation platform abstracting game supplier and payment gateway integrations.",
    responsibilities: [
      "Developed 10+ top-up websites end-to-end and handed them over to clients.",
      "Designed multi API aggregation and payment gateway integration patterns.",
      "Implemented 24/7 real-time transaction processing and performance optimization.",
    ],
    thumbnailPath: "/portofolio/topup-game.png",
    galleryPaths: ["/portofolio/topup-game.png"],
    links: {},
    relatedSlugs: ["deratopup"],
    featured: false,
  },
  {
    slug: "metacandlestick",
    name: "Meta Candlestick",
    category: "SaaS",
    description:
      "Crypto trading signal platform with tiered membership subscriptions and Binance API payment gateway integration.",
    role: "Full Stack Developer",
    period: "2022 – 2023",
    country: "Indonesia",
    techStack: ["Laravel", "Livewire", "Alpine.js", "MySQL", "Binance API"],
    challenges: [
      "Building membership tiers with subscription billing and feature gating across signal products.",
      "Integrating cryptocurrency payments via Binance API alongside traditional transfer options.",
    ],
    results: [
      "Launched membership plans with multi-tier signal access and payment checkout flows.",
      "Integrated Binance API for crypto payment gateway processing.",
      "Improved application performance by 40% through caching and query optimization.",
    ],
    overview:
      "Meta Candlestick is a crypto signal provider platform offering official and partner trading signals, market metrics, and member-only tools. Users subscribe through tiered membership plans with checkout powered by Binance API and bank transfer options.",
    problem:
      "Crypto traders needed a centralized platform for reliable trading signals with flexible membership plans and secure payment options including cryptocurrency.",
    solution:
      "Built a Laravel platform with Livewire and Alpine.js — subscription management, signal dashboards, membership gating, and Binance API payment gateway integration.",
    architecture:
      "Laravel monolith with Livewire components and Alpine.js interactions, MySQL for users and subscriptions, modular membership and payment domains with Binance API integration for crypto checkout.",
    responsibilities: [
      "Developed membership, subscription, and referral modules for the crypto analytics platform.",
      "Built payment flows with Binance API and integrated signal delivery features.",
      "Optimized caching, lazy loading, and database queries for dashboard performance.",
    ],
    thumbnailPath: "/portofolio/metacandlestick.png",
    galleryPaths: ["/portofolio/metacandlestick.png"],
    links: {},
    featured: false,
  },
  {
    slug: "hris-app",
    name: "HR App",
    category: "SaaS",
    description:
      "Human Resource Information System (HRIS) for employee management, RBAC, master data, and attendance control.",
    role: "Full Stack Developer",
    period: "Freelance",
    country: "Indonesia",
    techStack: ["Laravel", "MySQL", "Redis"],
    challenges: [
      "Designing modular HR domains — users, employees, divisions, positions, shifts, and attendance.",
      "Implementing role-based access control with granular permissions across admin modules.",
    ],
    results: [
      "Built end-to-end HRIS with dashboard metrics for users, employees, and organizational master data.",
      "Delivered RBAC with roles and permissions for secure multi-user administration.",
      "Implemented attendance control with shift and barcode support.",
    ],
    overview:
      "HR App is a web-based HRIS for managing employees, organizational structure, and attendance. The platform provides a central dashboard with live counts, user and employee records, role-based access control, and modules for divisions, education levels, positions, shifts, and barcode-based attendance.",
    problem:
      "Organizations needed a unified system to manage employee data, organizational hierarchy, access control, and attendance — replacing fragmented spreadsheets and manual processes.",
    solution:
      "Built a Laravel HRIS with Redis caching — modular admin dashboard, RBAC, master data management, and attendance tracking with shift and barcode configuration.",
    architecture:
      "Laravel monolith with MySQL persistence and Redis caching. Domain modules for users, employees, roles/permissions, master data (divisions, education, positions, shifts, barcodes), and attendance control with a live-metrics dashboard.",
    responsibilities: [
      "Developed the HRIS dashboard and core employee management modules.",
      "Implemented RBAC with roles and permissions across admin features.",
      "Built master data and attendance control with Redis-backed performance optimization.",
    ],
    thumbnailPath: "/portofolio/hris-app.png",
    galleryPaths: ["/portofolio/hris-app.png"],
    links: {},
    featured: false,
  },
  {
    slug: "pakaiwa",
    name: "Pakaiwa.com - WhatsApp Gateway for Business Clients",
    category: "WhatsApp Gateway",
    description: "WhatsApp Gateway platform for automated business and notification messaging.",
    role: "Full Stack Developer",
    period: "2021 – 2022",
    country: "Indonesia",
    techStack: ["Codeigniter", "Express.js", "MySQL", "WhatsApp Gateway"],
    challenges: ["Building reliable automated messaging for business clients."],
    results: ["Launched platform serving business messaging needs in Jombang."],
    overview: "WhatsApp Gateway platform enabling businesses to automate customer notifications.",
    problem: "Local businesses needed affordable WhatsApp automation for customer communication.",
    solution: "Built full-stack gateway with message scheduling and delivery tracking.",
    architecture: "Laravel backend with WhatsApp API integration and message queue.",
    responsibilities: ["Built and launched the platform end-to-end."],
    thumbnailPath: "/images/projects/pakaiwa-placeholder.jpg",
    galleryPaths: [],
    links: {},
    featured: false,
  },
  {
    slug: "alkautsar-ngoro-pos",
    name: "Point Of Sale - Al Kautsar Ngoro",
    category: "POS",
    description:
      "Point of Sale system for Al Kautsar Ngoro with real-time product, stock, and price management, barcode scanner integration, receipt printing, and automated daily, weekly, and monthly sales reporting.",
    role: "Full Stack Developer",
    period: "Freelance",
    country: "Indonesia",
    techStack: [
      "Laravel",
      "Livewire",
      "Filament",
      "Alpine.js",
      "MySQL",
    ],
    challenges: [
      "Real-time inventory and stock synchronization across POS terminals during checkout.",
      "Integrating barcode scanners and receipt printers for seamless retail operations.",
    ],
    results: [
      "Delivered a full POS system with real-time product, stock, and price management.",
      "Integrated barcode scanners and receipt printers for seamless checkout operations.",
      "Built automated daily, weekly, and monthly sales reporting for business insights.",
    ],
    overview:
      "A complete Point of Sale system built for Al Kautsar Ngoro (alkautsar-ngoro) — real-time product and stock management, barcode scanner and receipt printer integration, and automated sales reporting. Built with Laravel, Livewire, Filament admin panel, Alpine.js, and MySQL.",
    problem:
      "Al Kautsar Ngoro needed an integrated POS system with real-time stock tracking, hardware integration (barcode scanners, receipt printers), and automated reporting to replace manual spreadsheets and paper-based operations.",
    solution:
      "Designed a modern POS with Laravel and Filament admin panel, Livewire for reactive UI, barcode scanner and receipt printer integration, and automated sales reporting pipelines.",
    architecture:
      "Laravel backend with Filament admin panel for management, Livewire components for reactive POS checkout UI, Alpine.js for frontend interactions, MySQL persistence, and hardware integration layer for barcode scanners and receipt printers with automated reporting schedules.",
    responsibilities: [
      "Built the complete POS system end-to-end with Laravel, Livewire, and Filament.",
      "Integrated barcode scanners and receipt printers for seamless retail checkout.",
      "Developed automated daily, weekly, and monthly sales reporting features.",
    ],
    thumbnailPath: "/portofolio/point-of-sale.png",
    galleryPaths: ["/portofolio/point-of-sale.png"],
    links: {},
    featured: false,
  },
  {
    slug: "alkautsar-ngoro-spp",
    name: "SPP Payment - Al Kautsar Ngoro",
    category: "Payment Platform",
    description:
      "Web-based tuition payment (SPP) platform for Al Kautsar Ngoro with automated billing based on education level, payment monitoring, and student data management.",
    role: "Full Stack Developer",
    period: "Freelance",
    country: "Indonesia",
    techStack: ["Laravel", "jQuery", "MySQL"],
    challenges: [
      "Automating monthly billing based on education level and class enrollment.",
      "Building an admin dashboard for payment status monitoring and report generation.",
    ],
    results: [
      "Delivered a web-based SPP payment platform for parents to pay online easily.",
      "Implemented automated billing by education level and current month.",
      "Built admin dashboard to monitor payment status, generate reports, and manage student data.",
    ],
    overview:
      "A web-based tuition payment (SPP) platform built for Al Kautsar Ngoro — parents can pay tuition online, while the admin dashboard handles automated billing, payment monitoring, student data management, and report generation. Built with Laravel, jQuery, and MySQL.",
    problem:
      "Al Kautsar Ngoro needed a digital system for parents to pay tuition online and for administrators to manage billing, track payment status, and generate reports — replacing manual cash-based collection.",
    solution:
      "Built a Laravel-based SPP platform with jQuery frontend and MySQL — automated monthly billing, online payment flows, admin dashboard for monitoring and reporting, and student data management.",
    architecture:
      "Laravel backend with jQuery frontend, MySQL persistence. Automated billing scheduler, payment status tracking, admin dashboard with student, class, and billing management modules.",
    responsibilities: [
      "Developed the SPP payment platform end-to-end with Laravel and jQuery.",
      "Implemented automated billing logic based on education level and enrollment.",
      "Built admin dashboard with payment monitoring, reporting, and student management.",
    ],
    thumbnailPath: "/portofolio/spp.png",
    galleryPaths: ["/portofolio/spp.png"],
    links: {},
    featured: false,
  },
  {
    slug: "e-commerce-platform",
    name: "E-Commerce Platform - Online Store with Payment Processing",
    category: "E-Commerce",
    description: "Complete e-commerce platform with cart, checkout, and admin dashboard.",
    role: "Full Stack Developer",
    period: "Freelance",
    country: "Indonesia",
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript"],
    challenges: ["Secure payment integration and inventory management."],
    results: ["Built responsive admin dashboard for order and inventory monitoring."],
    overview: "Full e-commerce solution with product management and secure payments.",
    problem: "Businesses needed online storefronts with integrated payment processing.",
    solution: "Built modular e-commerce with bank transfer and e-wallet payment options.",
    architecture: "Laravel MVC with separate admin and storefront modules.",
    responsibilities: ["Designed and developed the complete platform."],
    thumbnailPath: "/images/projects/ecommerce-placeholder.jpg",
    galleryPaths: [],
    links: {},
    featured: false,
  },
];

export const featuredProjectSlugs = [
  "vipayment",
  "saytix-ticketing",
  "notifay",
  "deratopup",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getFeaturedProjects(): Project[] {
  return featuredProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined);
}
