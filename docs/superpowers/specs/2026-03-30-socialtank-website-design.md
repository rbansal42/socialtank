# SocialTank Event Website — Design Spec

## Overview

A single-page, Shark Tank-themed landing website for **SocialTank**, an inter-school social impact pitch competition organized by **Rotaract Club of Delhi Dynamic Leaders**. Army Public School Delhi Cantt is the **venue partner**. Rotary District 3011 and Rotaract District 3011 are parent organizations.

- **Event date**: 17th April 2026
- **Venue**: Army Public School, Delhi Cantonment
- **URL**: socialtank.racddl.com
- **Registration**: Links to racddl.com/form (external)
- **Target audience**: School students (inter-school competition)

## Visual Identity

### Color Palette
- **Primary background**: Deep ocean blue gradient (`#0a1628` to `#1a3a5c`)
- **Accent/CTA**: Gold/yellow (`#F5B841`)
- **Text**: White on dark backgrounds
- **Subtle effects**: Teal/cyan hints for underwater glow

### Visual Style
- Dark underwater/ocean backgrounds with subtle shark silhouettes
- Gradient overlays (deep blue to darker blue)
- Bold uppercase headings — large, impactful typography
- Professional but energetic tone (not cartoonish)
- CSS-based subtle water/particle animations
- Rotaract DDL logo prominently displayed; partner logos with appropriate hierarchy

### Reference
- Poster provided by user: deep blue underwater aesthetic, shark silhouettes, two silhouetted figures, gold text accents
- Taglines: "Turn your empathy into an actionable plan!" / "The sharks are hungry for change"

## Page Sections

### 1. Navbar (sticky)
- Rotaract DDL logo on left
- Nav links: About, Details, Rules, Prizes, FAQ (smooth scroll)
- "Register Now" gold CTA button on right
- Hamburger menu on mobile

### 2. Hero (full viewport)
- Large "SOCIAL TANK" title with underwater aesthetic
- "INTERACT" subtitle branding
- Tagline: "Turn your empathy into an actionable plan!"
- Secondary tagline: "The sharks are hungry for change"
- Event date (17th April 2026) and venue
- Prominent golden "Register Now" CTA button
- Subtle CSS water/particle animation effects

### 3. About
- What is SocialTank — pitch competition format description
- What participants will do and gain
- 3-4 highlight cards with icons (e.g., "Pitch your idea", "Get mentored", "Win prizes", "Make an impact")
- Placeholder content

### 4. Event Details
- Date: 17th April 2026
- Venue: Army Public School, Delhi Cantonment
- Vertical timeline layout for event schedule (placeholder items)
- Team size and eligibility info (placeholder)

### 5. Rules & Guidelines
- Accordion or card-based layout
- Judging criteria (placeholder)
- Eligibility requirements (placeholder)
- Submission guidelines (placeholder)

### 6. Prizes
- Trophy/medal icons for prize tiers
- 1st, 2nd, 3rd place + special mentions
- Placeholder amounts/descriptions
- Visually appealing card layout with gold accents

### 7. Organizers & Partners
- **Organized by**: Rotaract Club of Delhi Dynamic Leaders (prominent, primary)
- **Venue Partner**: Army Public School, Delhi Cantt
- **Parent Organizations**: Rotary District 3011, Rotaract District 3011
- Logo row with appropriate hierarchy
- Brief credit/description line

### 8. FAQ
- Expandable accordion component
- Placeholder Q&A items (6-8 questions)

### 9. Footer
- Repeated "Register Now" CTA
- Contact info / social links
- Copyright line

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: Custom (no component library — single page with unique theming)
- **Database**: None (static landing page)
- **Deployment**: Netlify at socialtank.racddl.com

## Project Structure

```
socialtank/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   ├── page.tsx          # Single page, imports all sections
│   │   └── globals.css       # Tailwind + custom theme variables
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── EventDetails.tsx
│   │   ├── Rules.tsx
│   │   ├── Prizes.tsx
│   │   ├── Organizers.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── assets/              # Logos, background images
├── public/                   # Static files (og-image, favicon)
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## Registration Flow

All "Register Now" buttons link to `https://racddl.com/form` (external link). The form itself is built and hosted within the racddl codebase.

## SEO & Meta

- Page title: "SocialTank — Inter-School Social Impact Pitch Competition"
- OpenGraph image: Event poster graphic
- Meta description: Brief description of the event
- Canonical URL: socialtank.racddl.com

## Verification

1. Run `bun dev` and verify all sections render correctly
2. Test responsive layout on mobile, tablet, desktop
3. Verify all "Register Now" buttons link to racddl.com/form
4. Check smooth scroll navigation works
5. Verify mobile hamburger menu functionality
6. Test SEO meta tags with browser dev tools
7. Use frontend-design skill during implementation for high design quality
