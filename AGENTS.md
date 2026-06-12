<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Ahmad Andika Portfolio — Agent Guide

## Project Summary

Static personal portfolio for **Ahmad Andika Khoirul Amin**, a backend and full-stack developer. Built with **Next.js 16** (App Router), TypeScript, Tailwind CSS v4, and Shadcn/UI. All content lives in `src/data/*.ts` — no API, no backend, no database. Deployed to **Vercel**.

**Design source of truth:** [`design.md`](./design.md) (Precision Forge aesthetic, dark default + light toggle)  
**Requirements source:** [`PRD.md`](./PRD.md)  
**Status:** Phase 1 MVP complete — all 8 routes, populated data, theme toggle, mobile nav

## Architecture

| Decision | Choice |
|----------|--------|
| Rendering | React Server Components by default |
| Data | Static TypeScript files in `src/data/` |
| Styling | Tailwind v4 + Shadcn/UI + CSS variables in `globals.css` |
| Icons | Lucide React |
| SEO | `src/lib/seo.tsx` helpers + JSON-LD in root layout |
| Theme | `ThemeProvider` toggles `.dark` on `<html>`; default dark; persisted as `portfolio-theme` in `localStorage` |
| Theme FOUC | Inline `ThemeScript` in `layout.tsx` runs before paint |
| Backend | None (Phase 1). No NestJS runtime in this project. |

## Directory Conventions

| Path | Responsibility |
|------|----------------|
| `src/app/` | Routes and page-level metadata |
| `src/components/layout/` | Header, Footer, PageShell, MobileNav, ThemeToggle, ThemeScript, Breadcrumbs |
| `src/components/providers/` | ThemeProvider (client context) |
| `src/components/sections/` | Page sections (Hero, Timeline, ProjectCard, ProjectThumbnail, etc.) |
| `src/components/ui/` | Shadcn primitives and extensions |
| `src/data/` | Static content (profile, experience, projects, skills, certifications) |
| `src/lib/` | Utilities (`utils.ts`), SEO helpers (`seo.tsx`) |
| `src/types/` | Shared TypeScript interfaces |
| `src/hooks/` | Client-side hooks (use sparingly) |
| `src/assets/` | Imported assets (SVGs, local images) |
| `public/cv/` | Downloadable CV PDF (`AHMAD_ANDIKA_KHOIRUL_AMIN_FULLSTACK_DEVELOPER.pdf`) |
| `public/profile/` | Profile photo (`profile.png`) |
| `public/portofolio/` | Project screenshots (vipayment, vipayment-public, saytix, deratopup, topup-game) |
| `public/images/` | OG image, legacy placeholders |

## Skill Routing

| Task | Skill / Agent |
|------|---------------|
| New UI pages or sections | `frontend-design` + **designer** subagent |
| New features or scope changes | `brainstorming` → update `design.md` → `writing-plans` |
| NestJS content in project case studies | `nestjs-best-practices` (content accuracy only — not app architecture) |
| Implementation after approved spec | `writing-plans` → `subagent-driven-development` |
| Verification before completion | `verification-before-completion` |

## Designer Subagent Triggers

Delegate to the **designer** subagent when:

- Creating new page layouts or section designs
- Redesigning hero, navigation, or footer
- Defining component visual specs (tokens, spacing, motion)
- Resolving typography or color direction changes
- Adding atmosphere effects (grid, grain, glows)

Always align designer output with [`design.md`](./design.md) and update the spec if direction changes.

## Coding Conventions

- **Server Components** default; add `"use client"` only for interactivity (Header, mobile nav Sheet, theme toggle, ThemeProvider)
- **Metadata:** export `metadata` from each page via `createPageMetadata()` from `@/lib/seo`
- **Class merging:** use `cn()` from `@/lib/utils`
- **Semantic HTML:** `header`, `main`, `footer`, `nav`, `section` with landmarks
- **Fonts:** Bricolage Grotesque (headings), IBM Plex Sans (body), IBM Plex Mono (mono) — loaded in `layout.tsx`
- **Buttons:** `rounded-md` (8px), not `rounded-full`
- **Images:** `next/image` via `ProjectThumbnail` for projects; `priority` only on hero photo
- **Shadcn Button:** no `asChild` — use `buttonVariants()` + `cn()` on `<Link>` / `<a>` instead
- **Lucide:** `Github` / `Linkedin` icons unavailable in current version — use text monograms on contact/social
- **Slugs:** kebab-case (e.g., `saytix-ticketing`, `vipayment`, `vipayment-v2`, `deratopup`, `game-top-up-platform`)

## Data & Types

- All interfaces in `src/types/index.ts`
- Data files export typed constants; no raw JSON
- Projects use `slug` field matching `/projects/[slug]` route
- Featured content controlled by `featuredProjectSlugs`, `featuredExperienceIds`, `featuredSkillNames`
- Projects support optional `relatedSlugs[]` for cross-links on detail page sidebar
- Projects include `country` field (displayed on cards and detail)
- `featuredProjectSlugs`: `vipayment`, `saytix-ticketing`, `notifay`, `deratopup`
- Related non-featured: `vipayment-v2` ↔ `vipayment`, `game-top-up-platform` ↔ `deratopup`

## SEO & Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 100 |
| Load time | < 2 seconds |

- CV download link in **Header** on every page
- JSON-LD: Person + WebSite in root layout; BreadcrumbList on inner pages
- Set `NEXT_PUBLIC_SITE_URL` for canonical URLs

## Brainstorming Workflow

For new features or significant changes:

1. Explore project context (PRD, design.md, existing code)
2. Ask clarifying questions (one at a time)
3. Propose 2–3 approaches with trade-offs
4. Present design sections → get user approval
5. Update `design.md` with approved changes
6. Invoke `writing-plans` for implementation plan
7. Do **not** implement until design is approved

## NestJS Scope Note

This portfolio has **no NestJS backend**. Apply `nestjs-best-practices` only when:

- Writing accurate architecture descriptions in project case studies (VIPayment, Saytix, etc.)
- Future Phase 3 if a contact API is added

Do not introduce NestJS into the Phase 1 tech stack.

## Out of Scope (Unless Requested)

**Phase 2:** Blog, expanded case studies, timeline animation, GitHub widget, EN/ID i18n  
**Phase 3:** CMS, analytics, contact form backend, newsletter

**Already implemented:** Dark/light theme toggle, mobile nav, real project screenshots, related project links

## Routes

| Route | Page |
|-------|------|
| `/` | Home (hero → experience → skills → projects → contact CTA) |
| `/about` | Personal introduction, education, career journey |
| `/experience` | Full work history timeline |
| `/projects` | Project showcase with category filters |
| `/projects/[slug]` | Project detail case study |
| `/skills` | Skills grouped by category |
| `/certifications` | Certification cards by issuer |
| `/contact` | Contact info, mailto links (no form) |
