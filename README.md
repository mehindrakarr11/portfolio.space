<div align="center">

# Rohan Mehindrakar · Portfolio

**A cinematic, mobile-first developer portfolio** — glass UI, GSAP storytelling, and production‑ready SEO.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge)](https://greensock.com/gsap/)

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new)
[![Node](https://img.shields.io/badge/node-%3E%3D20.9-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-Personal-6E6E6E?style=for-the-badge)](#license)

[Features](#-features) · [Stack](#-tech-stack) · [Quick start](#-quick-start) · [Deploy](#-deploy-to-vercel) · [Customize](#-customization)

</div>

---

## Overview

Personal showcase site for **Rohan Mehindrakar** — CSBS student (Dr. AIT, Bangalore) focused on **Next.js**, **cloud**, and **AI‑driven interfaces**. The experience is tuned for recruiters: clear hierarchy, fast first paint, live GitHub stats, and calm motion that stays performant on real devices.

| Principle | How it shows up here |
|-----------|----------------------|
| **Mobile first** | Touch layouts, `dvh`, progressive enhancement |
| **Editorial type** | Geist + Playfair, shared tokens in `ui-classes` |
| **Motion with intent** | GSAP timelines + ScrollTrigger; reduced‑motion respected |
| **Shippable** | App Router, metadata, `sitemap` / `robots`, error boundaries |

> **Pull requests welcome** if you fork for your own portfolio — keep the license and attribution in mind.

---

## Preview

<div align="center">

| Light | Dark |
|:---:|:---:|
| *Add `docs/preview-light.png` here* | *Add `docs/preview-dark.png` here* |

<sub>Tip: capture at <code>1280×720</code> (or your breakpoints) and drop images into <code>docs/</code>, then replace the rows above with <code>![alt](./docs/preview-light.png)</code>.</sub>

</div>

---

## Features

|  |  |
|--|--|
| **Hero** | Full-viewport gradient field, word-by-word reveals, primary CTAs |
| **About** | Bio in glass panel, scroll-triggered line reveals |
| **Projects** | Placeholder cards ready for real case studies + metrics |
| **GitHub** | Readme Stats + streak cards via `next/image`, dynamic import |
| **Skills** | Grouped stacks with animated confidence bars |
| **LinkedIn & contact** | Glass cards, social pills, mailto + resume link |
| **Theme** | System / light / dark via `next-themes`, persisted |
| **Polish** | Preloader, scroll progress, floating “Ask about me” shell |
| **SEO** | `metadataBase`, Open Graph, Twitter card, canonical, `icon.svg` |

---

## Tech stack

```text
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Next.js 16 │ ──▶ │ React 19     │ ──▶ │ Tailwind 4  │
│  App Router │     │ Server/UI    │     │ PostCSS     │
└─────────────┘     └──────────────┘     └─────────────┘
       │                     │                    │
       ▼                     ▼                    ▼
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│ GSAP 3      │     │ next-themes  │     │ TypeScript  │
│ ScrollTrigger│    │ persistence  │     │ strict      │
└─────────────┘     └──────────────┘     └─────────────┘
```

<details>
<summary><strong>Package highlights</strong></summary>

| Package | Role |
|---------|------|
| `next` | Framework, routing, `Image`, metadata API |
| `react` / `react-dom` | UI |
| `gsap` | Timelines, staggers, scroll-linked motion |
| `next-themes` | Dark / light without flash |
| `tailwindcss` | Tokens, responsive utilities, v4 `@theme` |
| `eslint-config-next` | Lint + Core Web Vitals rules |

</details>

---

## Quick start

**Requirements:** [Node.js](https://nodejs.org/) **≥ 20.9** (see [`.nvmrc`](./.nvmrc))

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO          # folder that contains package.json
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev      # Turbopack dev server
npm run build    # Production build
npm run start    # Serve .next
npm run lint     # ESLint (Next + TypeScript)
```

---

## Environment

Everything works **without** `.env`. Optional:

| Variable | When to set |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Custom domain — canonical URLs for OG + sitemap (`https://…`, no trailing slash) |

On **Vercel**, `VERCEL_URL` is injected at build time; [`src/lib/site-url.ts`](src/lib/site-url.ts) falls back correctly.

---

## Project structure

<details>
<summary><code>src/</code> tree</summary>

```text
src/
├── app/
│   ├── layout.tsx          # Fonts, metadata, providers
│   ├── page.tsx            # Composes sections
│   ├── template.tsx        # Route transitions
│   ├── globals.css         # Design tokens + base styles
│   ├── loading.tsx
│   ├── error.tsx
│   ├── global-error.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── icon.svg
├── components/
│   ├── layout/             # Header, backdrop, preloader, scroll progress
│   ├── providers/          # Theme provider
│   ├── sections/           # Hero … Contact
│   └── ui/                 # GlassPanel, chat shell, …
└── lib/
    ├── constants.ts        # Copy, links, skills
    ├── motion.ts           # GSAP / ScrollTrigger presets
    ├── site-url.ts         # Canonical URL helper
    └── ui-classes.ts       # Typography + spacing utilities
```

</details>

---

## Deploy to Vercel

1. Push to **GitHub** (this directory = repo root, or set **Root Directory** in Vercel).
2. [**New Project**](https://vercel.com/new) → Import repo.
3. Preset **Next.js** — defaults: **Install** `npm install`, **Build** `next build`, **Output** `.next`.
4. (Optional) Add `NEXT_PUBLIC_SITE_URL` for your production hostname.
5. Deploy — **no custom server**, `images.remotePatterns` already allows GitHub stats hosts.

[`next.config.ts`](next.config.ts) pins Turbopack to `process.cwd()` so builds stay reliable in nested workspaces.

---

## Customization

| Goal | File |
|------|------|
| Name, bio, links, GitHub username, email | [`src/lib/constants.ts`](src/lib/constants.ts) |
| Section spacing & type scale | [`src/lib/ui-classes.ts`](src/lib/ui-classes.ts) |
| Easing, scroll thresholds | [`src/lib/motion.ts`](src/lib/motion.ts) |
| Global SEO / title template | [`src/app/layout.tsx`](src/app/layout.tsx) |

---

## Performance

- **Fonts:** `next/font` — no render-blocking stylesheet from a CDN.
- **Images:** Remote stats SVGs via `next/image` + lazy loading.
- **Code splitting:** `GitHubSection` loaded with `next/dynamic` + skeleton UI.
- **Motion:** prefers-reduced-motion honored in hero; prefer transform/opacity.

---

## License

Personal portfolio — **fork and adapt** for your own site. Add a proper `LICENSE` file if you open-source a derivative.

---

<div align="center">

**Built by [Rohan Mehindrakar](https://www.linkedin.com/in/rohan-mehindrakar/)** · Deploy on [Vercel](https://vercel.com/) · Made with [Next.js](https://nextjs.org/)

</div>
