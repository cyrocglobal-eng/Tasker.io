# Zanich General Traders — Premium Landing Page (Concept)

A premium, production-quality landing page concept for **Zanich General Traders**, a Nairobi-based
printing, branding & promotional products firm. Built to demonstrate the value of a full corporate
website before scoping the complete project.

> Tagline: **"Over and above ink on paper"**

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom brand design system)
- **Framer Motion** (scroll & entrance animations)
- **lucide-react** (icons)
- Self-hosted variable fonts — **Sora** (display) + **Inter** (body) via `@fontsource-variable`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Editing business content

**All business-specific copy, contact details, services, clients and testimonials live in one file:**

```
src/content/site.ts
```

Change values there and the whole page updates. Items commented `PLACEHOLDER` are editable
guesses/fillers (e.g. stats, opening hours, domain) — replace them with verified facts before launch.

## Structure

```
src/
├── app/
│   ├── layout.tsx        # SEO metadata, fonts, JSON-LD structured data
│   ├── page.tsx          # Section composition
│   └── globals.css       # Design tokens & component classes
├── content/site.ts       # ← SINGLE SOURCE OF BUSINESS CONTENT (edit here)
└── components/           # Navbar, Hero, About, Services, WhyUs, Portfolio,
                          # Clients, Testimonials, Contact, Footer, etc.
public/images/            # Hero, studio, portfolio & background imagery
```

## Sections

Hero · Tagline strip · About · Services · Why Choose Us · Portfolio · Clients ·
Testimonials · Contact (with quote form) · Footer

## Notes for handoff

- **Contact form** currently shows a success state on submit (no backend). Wire it to email
  (e.g. Resend / Formspree) or a CRM to receive live leads.
- **Imagery** is AI-generated placeholder art on-brand with the profile. Swap in real photos of
  Zanich's work and client logos for production.
- **Domain / OG URL** placeholder is in `src/app/layout.tsx` (`siteUrl`).
- Fully responsive, accessible (skip link, focus states, reduced-motion support) and SEO-ready
  (metadata, Open Graph, Twitter cards, LocalBusiness JSON-LD).
