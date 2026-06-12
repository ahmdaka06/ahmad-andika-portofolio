# RULES.md — Ahmad Andika Portfolio

> Auto-generated rules and context for AI agents and contributors.  
> These rules are also available as `.cursor/rules/*.mdc` files for Cursor IDE integration.

---

## 🔧 Code Rules

### Component Architecture

```yaml
rule: server-components-by-default
```
- **Next.js Server Components** for all pages and data-display components.
- Add `"use client"` **only** when the component uses: `useState`, `useEffect`, event handlers (`onClick`, `onChange`), browser APIs, or React context.
- **Never** add `"use client"` to: data files (`src/data/*.ts`), utility files (`src/lib/*.ts`), type definitions (`src/types/*.ts`).

```yaml
rule: no-asChild-shadcn
```
- Shadcn Button does **not** support `asChild` in this version.
- Use `buttonVariants()` + `cn()` on `<Link>` or `<a>` instead:

```tsx
// ✅ Correct
<Link href="/contact" className={cn(buttonVariants({ size: "sm" }))}>Hire Me</Link>

// ❌ Wrong
<Button asChild><Link href="/contact">Hire Me</Link></Button>
```

```yaml
rule: lucide-icon-availability
```
- Lucide React **v1.17** does **not** include `Github` or `Linkedin` icons.
- Use **text monograms** on social/contact components.

---

### 🎨 Styling Rules

```yaml
rule: no-hardcoded-colors
```
Always use CSS variables — never hex codes in components:

```tsx
// ✅ Correct
className="bg-[var(--surface-raised)] text-[var(--accent-copper)]"
className="border-[var(--border-subtle)]"

// ❌ Wrong
className="bg-[#12141A] text-[#D4845A]"
```

```yaml
rule: no-rounded-full
```
- Buttons: `rounded-md` (8px) — **never** `rounded-full`.
- Badges: `rounded-sm` (4px).
- Cards: `rounded-lg` (12px).

```yaml
rule: semantic-html
```
Every page must use landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`.
One `<h1>` per page. Heading hierarchy must be sequential.

```yaml
rule: class-merging
```
Always use `cn()` from `@/lib/utils`:

```tsx
import { cn } from "@/lib/utils";
className={cn("base-class", condition && "conditional-class", className)}
```

---

### 📊 Data Rules

```yaml
rule: all-data-in-src-data
```
- **All content** lives in `src/data/*.ts` — no API, no database, no CMS.
- Data files export **typed constants** — never raw JSON.
- Type definitions in `src/types/index.ts` — never inline.

```yaml
rule: project-categories
```
Valid `ProjectCategory` values (exact strings):
`"Payment Platform"` | `"Ticketing System"` | `"WhatsApp Gateway"` | `"POS"` | `"E-Commerce"` | `"Automation"` | `"SaaS"`

```yaml
rule: project-slugs
```
- **kebab-case**: `vipayment`, `vipayment-v2`, `saytix-ticketing`, `deratopup`, `game-top-up-platform`, `metacandlestick`, `hris-app`, `pakaiwa`, `pos-system`, `e-commerce-platform`
- Must match route: `/projects/[slug]`

```yaml
rule: placeholder-images
```
- Projects without screenshots: `thumbnailPath: "/images/projects/{name}-placeholder.jpg"` + `galleryPaths: []`.
- `ProjectThumbnail` auto-detects `placeholder` in path → gradient fallback.
- **Featured** projects **must** have real screenshots.

```yaml
rule: featured-content
```
- **Featured projects (4):** `vipayment`, `saytix-ticketing`, `notifay`, `deratopup`
- **Featured experiences (3):** `vipayment`, `saytix`, `idevcorner`
- **Featured skills (8):** Laravel, PHP, Node.js, NestJS, MySQL, PostgreSQL, Docker, React
- **Key metrics (3):** 5+ Years, 8+ Experiences, 50+ Clients

```yaml
rule: cross-links
```
Use `relatedSlugs: ["other-slug"]` to connect related projects. Rendered in sidebar "RELATED".
Current pairs: `vipayment` ↔ `vipayment-v2`, `deratopup` ↔ `game-top-up-platform`.

---

### 🖼️ Image Rules

```yaml
rule: project-screenshots
```
- Screenshots go in `/public/portofolio/{name}.png`
- Use `ProjectThumbnail` or `ProjectImagePreview` for display (handles placeholder fallback + lightbox)
- Lightbox: `unoptimized` for full resolution
- Thumbnail quality: `90`
- Always provide `sizes` prop for responsive loading

```yaml
rule: hero-photo
```
- Profile photo: `priority` prop (above-the-fold)
- All other images: lazy-load by default (no `priority`)

---

### 🔍 SEO Rules

```yaml
rule: page-metadata
```
Every page exports metadata via `createPageMetadata()`:
```typescript
export const metadata = createPageMetadata({
  title: "Page | Ahmad Andika Khoirul Amin",
  description: "...",
  path: "/route",
  keywords: [...],
});
```

```yaml
rule: json-ld
```
- Root layout: `Person` + `WebSite` JSON-LD
- Inner pages: `BreadcrumbList` JSON-LD via `<JsonLd data={createBreadcrumbJsonLd([...])} />`

---

### 🌗 Theme Rules

```yaml
rule: theme-toggle
```
- `ThemeProvider` toggles `.dark` on `<html>`
- Preference stored as `portfolio-theme` in `localStorage`
- `ThemeScript` (inline) prevents FOUC
- Dark mode is default; user can switch to light
- Header: theme toggle on desktop (`md+`), inside mobile Sheet on smaller screens

---

## 📁 File Structure

```
public/
├── cv/          → AHMAD_ANDIKA_KHOIRUL_AMIN_FULLSTACK_DEVELOPER.pdf
├── profile/     → profile.png
├── portofolio/  → vipayment.png, vipayment-public.png, saytix.png,
│                  deratopup.png, topup-game.png, metacandlestick.png,
│                  hris-app.png
└── images/      → OG image, legacy placeholders

src/
├── app/         → Routes (8 pages + [slug])
├── components/
│   ├── layout/     → Header, Footer, MobileNav, ThemeToggle, ThemeScript,
│   │                  PageShell, Breadcrumbs
│   ├── sections/   → Hero, Timeline, ProjectCard, ProjectThumbnail,
│   │                  ProjectImageLightbox, SkillGroup, FeaturedSkills,
│   │                  FeaturedProjects, ExperiencePreview, ContactCTA,
│   │                  ContactChannelCard, SectionHeading
│   ├── providers/  → ThemeProvider
│   └── ui/         → Button, Card, Badge, Separator, Sheet
├── data/        → profile.ts, experience.ts, projects.ts,
│                  skills.ts, certifications.ts
├── lib/         → utils.ts, seo.tsx, project-images.ts
├── types/       → index.ts
└── hooks/       → (reserved)
```

---

## 🚫 DO NOT

| Action | Reason |
|--------|--------|
| Add API routes or backend code | Static portfolio — no backend |
| Use `rounded-full` on buttons | Design system uses `rounded-md` |
| Add purple/violet/teal gradients | Copper + phosphor + steel only |
| Create NestJS modules | No NestJS runtime in this project |
| Add `asChild` to Shadcn Button | Not supported in this version |
| Use `Github` or `Linkedin` from Lucide | Unavailable in v1.17 |
| Hardcode hex colors | Use CSS variables |
| Add more than 3 key metrics | Design constraint |
| Add featured projects beyond 4 | Homepage layout fixed at 4 |
| Skip `sizes` prop on `next/image` | Required for responsive optimization |
| Add `"use client"` to data or utils | Keep server-side unless interactive |

---

## ✅ MUST DO

| Action | Why |
|--------|-----|
| Use `cn()` for class merging | Consistent conditional styling |
| Export metadata from every page | SEO |
| Include `generateStaticParams` for `[slug]` | SSG builds all project pages |
| Use `ProjectThumbnail` for project images | Auto lightbox + placeholder fallback |
| Keep components under 200 lines | Readability |
| Test with `pnpm lint && pnpm build` before commit | Zero-tolerance for build failures |
| Use kebab-case for slugs and IDs | URL convention |
| Provide `alt` text on all images | Accessibility |
| Respect `prefers-reduced-motion` | Accessibility |

---

## 📊 Metrics & Targets

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | 95+ | ⏳ |
| Lighthouse Accessibility | 95+ | ✅ |
| Lighthouse Best Practices | 95+ | ✅ |
| Lighthouse SEO | 100 | ✅ |
| Load time | < 2s | ⏳ |
| Static pages | 21 | ✅ |
| CV download | Every page (header) | ✅ |
| JSON-LD | All routes | ✅ |
| Dark/Light toggle | Working | ✅ |
| Mobile responsive | Full | ✅ |

---

## 🔗 Related Docs

- [`AGENTS.md`](./AGENTS.md) — Agent guide (skill routing, conventions)
- [`PRD.md`](./PRD.md) — Product requirements
- [`design.md`](./design.md) — Design specification (Precision Forge)
- [`.cursor/rules/`](./.cursor/rules/) — Cursor IDE rule files