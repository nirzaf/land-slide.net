# LandSlide Trading & Contracting — Astro Website

A modern, high-performance static website for **LandSlide Trading and Contracting Company** (Doha, Qatar), converted from WordPress to [Astro](https://astro.build/).

## 🚀 Features

- **Blazing Fast**: Static generation with Astro 5, delivering sub-second load times and zero client-side JavaScript bloat.
- **Enterprise Design System**: Tailored corporate engineering styling with responsive layouts, modern typography, and branded navy & gold aesthetics.
- **Participated Projects Showcase**: Interactive catalog featuring 9 flagship capital megaprojects in Qatar:
  - *Qatar Petroleum District* (Oil & Gas)
  - *Doha Metro* (Construction)
  - *Msheireb Downtown Doha* (Construction)
  - *Doha Souq Development* (Construction)
  - *Place Vendôme Mall* (Construction)
  - *Doha Festival City* (Construction)
  - *North Gate Mall* (Construction)
  - *Lusail City Development* (Marine & Infrastructure)
  - *Salwa Beach Resort* (Marine & Hospitality)
- **100% Backward Compatible Permalinks**: Preserves original WordPress URL paths and permalinks.
- **Interactive Forms**: Responsive Contact and Careers / Resume submission forms.
- **Mobile First**: Fluid navigation with a slide-out mobile drawer menu.

## 🛠️ Project Structure

```text
├── public/                 # Static assets (logo, favicon, project media)
├── src/
│   ├── components/         # Header, Footer, ProjectCard
│   ├── layouts/            # Base Layout with SEO, OpenGraph & meta tags
│   ├── pages/              # Astro pages (Home, About, Projects, Careers, Contact)
│   ├── data/               # Structured site info & project data
│   └── styles/             # Global CSS design tokens & utilities
├── astro.config.mjs        # Astro configuration
└── package.json            # Scripts and dependencies
```

## 📦 Getting Started

### Prerequisites

- Node.js `v18.14.1` or higher (recommended: Node 20+)
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to view the site.

### Production Build

```bash
npm run build
```

Build artifacts will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.

### Preview Build

```bash
npm run preview
```

## 📄 License

Proprietary — LandSlide Trading and Contracting.
