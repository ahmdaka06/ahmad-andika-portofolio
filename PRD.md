# PRD - Personal Portfolio Website

## Project Overview

Build a modern, responsive, SEO-friendly personal portfolio website for Ahmad Andika Khoirul Amin.

The website will serve as a professional online portfolio to showcase:

* Professional profile
* Technical skills
* Work experience
* Featured projects
* Certifications
* Contact information
* Downloadable CV

The portfolio should be optimized for recruiters, hiring managers, clients, and freelance opportunities.

---

# Objectives

## Business Goals

* Increase professional credibility.
* Provide a centralized online portfolio.
* Showcase backend and full-stack development expertise.
* Support job applications and freelance opportunities.
* Improve discoverability through SEO.

## User Goals

Visitors should be able to:

* Understand who Ahmad Andika is.
* Review professional experience.
* Explore technical skills.
* View featured projects.
* Download CV.
* Contact directly.

---

# Tech Stack

## Frontend

* Next.js 16 (App Router)
* TypeScript
* TailwindCSS
* Shadcn/UI
* Lucide Icons

## Deployment

* Vercel

## Data Source

Static content only.

No API integration.

Data stored in:

```bash
/src/data/profile.ts
/src/data/experience.ts
/src/data/projects.ts
/src/data/certifications.ts
/src/data/skills.ts
```

---

# Design Direction

## Theme

**Precision Forge** aesthetic (see [`design.md`](./design.md))

Style:

* Clean, modern, industrial-editorial
* Dark mode default with **light/dark theme toggle** (persisted in `localStorage`)
* Copper + phosphor accents on warm charcoal base

Inspired by:

* Linear (grid discipline)
* Raycast (warm dark)
* Vercel (typographic hierarchy)

---

# Sitemap

## Home

/

Landing page.

Contains:

* Hero Section
* Key Statistics
* Featured Projects
* Work Experience Highlights
* CTA

---

## About

/about

Contains:

* Personal Introduction
* Professional Summary
* Education
* Career Journey

---

## Experience

/experience

Contains complete work history.

Timeline style.

Each company includes:

* Company Name
* Position
* Period
* Responsibilities
* Tech Stack
* Key Achievements

---

## Projects

/projects

Portfolio showcase.

Each project contains:

* Project Name
* Description
* Role
* Period
* Country
* Tech Stack
* Challenges
* Results
* Overview, Problem, Solution, Architecture
* Responsibilities
* Screenshots (`/public/portofolio/`)
* Related projects (cross-links where applicable)
* Links (if available)

### Project Portfolio Structure

**Featured on homepage** (4):

* **VIPayment** — B2B reseller platform (`vipayment.png`)
* **Saytix** — Ticketing, 25,000+ tickets sold (`saytix.png`)
* **Notifay** — WhatsApp Gateway
* **Deratopup** — Game top-up flagship, $3M+ USD (`deratopup.png`)

**Related / non-featured:**

* **VIPayment v2** — Public B2C storefront (`vipayment-public.png`), linked to VIPayment
* **Game Top-Up Platform Suite** — 10+ white-label platforms, client handover (`topup-game.png`), linked to Deratopup

Categories:

* Payment Platform
* Ticketing System
* WhatsApp Gateway
* POS
* E-Commerce
* Automation
* SaaS

---

## Skills

/skills

Grouped by category:

### Backend

* PHP
* Laravel
* Node.js
* NestJS
* ExpressJS
* AdonisJS
* Golang

### Frontend

* React
* Vue
* Livewire
* AlpineJS
* TailwindCSS

### Database

* MySQL
* PostgreSQL
* MongoDB

### DevOps

* Docker
* Linux
* Nginx
* Apache
* CI/CD
* GitHub Actions

---

## Certifications

/certifications

Display:

* Dicoding
* SantriKoding
* Udemy
* HackerRank
* SoloLearn
* SMKDEV

---

## Contact

/contact

Split layout with contact channel cards:

* Email, Phone, Location
* LinkedIn, GitHub (text/monogram icons — Lucide brand icons unavailable)
* Hire Me + Download CV

No backend form. Use `mailto:` and external links.

---

# Homepage Structure

Section order (after Hero):

1. **Hero** — headline, subheadline, profile photo (specimen frame), CTAs, **3 key metrics** in metrics rail
2. **Experience Preview** — VIPayment, Saytix, IDEVCORNER
3. **Featured Skills** — top technology chips
4. **Featured Projects** — 4 featured case studies with real screenshots
5. **Contact CTA**

Testimonials section: hidden until real data exists.

---

## Section 1 — Hero

Headline:

"Backend & Full-Stack Developer Building Scalable Digital Solutions"

Subheadline:

5+ years of experience building payment systems, ticketing platforms, automation tools, and business applications.

CTA:

* View Projects
* Download CV

Profile Photo (`/profile/profile.png`)

**Key Metrics** (merged into hero rail, 3 items):

* 5+ Years Experience
* 8+ Work Experiences
* 50+ Clients Served

---

## Section 2 — Experience Preview

Latest experiences:

* VIPayment
* Saytix
* IDEVCORNER

Button: View Full Experience

---

## Section 3 — Featured Skills

Top technologies:

* Laravel, PHP, Node.js, NestJS, MySQL, PostgreSQL, Docker, React

---

## Section 4 — Featured Projects

| Project | Highlight |
|---------|-----------|
| VIPayment | B2B reseller, $4.1M+ USD, 50k+ daily transactions |
| Saytix | 25,000+ tickets sold |
| Notifay | 50+ business clients |
| Deratopup | $3M+ USD game top-up |

Non-featured related: VIPayment v2 (public storefront), Game Top-Up Platform Suite (10+ sites).

---

## Section 5 — Contact CTA

"Let's Build Something Great Together"

Buttons:

* Email Me
* LinkedIn

---

# Project Detail Page

Route:

/projects/[slug]

Example:

/projects/saytix-ticketing

Sections:

* Overview
* Problem
* Solution
* Architecture (screenshot when available, gradient placeholder otherwise)
* Responsibilities
* Results
* Sidebar: Country, Tech Stack, Challenges, **Related projects**
* Prev/Next navigation

---

# SEO Requirements

## Metadata

Every page must have:

* title
* description
* keywords
* Open Graph
* Twitter Card

---

## Structured Data

Implement JSON-LD:

* Person
* WebSite
* Breadcrumb

---

# Performance Requirements

Target Lighthouse:

* Performance: 95+
* Accessibility: 95+
* Best Practices: 95+
* SEO: 100

---

# Navigation & Responsive

* **Desktop (`md+`):** Horizontal nav, Download CV + Hire Me, theme toggle
* **Mobile (`< md`):** Hamburger → Shadcn Sheet (320px) with nav links, theme toggle, CTAs
* **Theme toggle:** Sun/Moon button; preference stored as `portfolio-theme` in `localStorage`

---

# Accessibility

* Keyboard Navigation
* Semantic HTML
* Proper Heading Structure
* Alt Text on project screenshots
* Contrast Compliance (dark and light modes)
* `prefers-reduced-motion` respected

---

# Folder Structure

```bash
src/
├── app/
├── components/
│   ├── sections/
│   ├── ui/
│   └── layout/
├── data/
├── lib/
├── types/
├── hooks/
└── assets/
```

---

# Future Enhancements

**Implemented (beyond original Phase 1):**

* Dark/Light theme toggle with FOUC prevention script
* Mobile navigation (Sheet)
* Real project screenshots in `/public/portofolio/`
* Related project cross-links on detail pages

Phase 2:

* Blog
* Expanded project case studies
* Resume Timeline Animation
* GitHub Contribution Widget
* Multi Language (EN / ID)

Phase 3:

* CMS Integration
* Analytics Dashboard
* Contact Form Backend
* Newsletter

---

# Success Metrics

* Portfolio loads under 2 seconds.
* Lighthouse score above 95.
* Mobile-first responsive design.
* Recruiters can understand experience within 30 seconds.
* CV downloadable from every page.
* Easy deployment on Vercel.
