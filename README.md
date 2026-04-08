# Midpoint Innovations Nigeria Limited

<p align="center">
  <strong>Humanity & Creativity Leads to Progress</strong><br/>
  Driving socioeconomic advancement in Nigeria and Africa through innovation, creativity, and strategic partnerships.
</p>

---

## 🌐 Live Website

**[midpointinnovations.com.ng](https://midpointinnovations.com.ng)**

## 📖 About

Midpoint Innovations Nigeria Limited is dedicated to advancing socioeconomic development across Nigeria and Africa. We work at the intersection of government, businesses, and NGOs to deliver impactful solutions through innovation and strategic partnerships.

Founded on **November 3, 2022**, by Prof. Emeka Aniagolu, the organization focuses on creating measurable impact across multiple sectors.

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript 5](https://www.typescriptlang.org) | Type-safe JavaScript |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Component library |
| [React Router](https://reactrouter.com) | Client-side routing |
| [Framer Motion](https://www.framer.com/motion) | Animations |
| [React Helmet Async](https://github.com/staylor/react-helmet-async) | SEO meta management |
| [Lucide React](https://lucide.dev) | Icon library |
| [TanStack React Query](https://tanstack.com/query) | Data fetching |

## 📁 Project Structure

```
src/
├── assets/          # Images, SVGs, and static assets
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui base components
│   ├── Navbar.tsx   # Site navigation
│   ├── Hero.tsx     # Hero section
│   ├── Footer.tsx   # Site footer
│   ├── SEO.tsx      # Meta tags & structured data
│   ├── Services.tsx # Services showcase
│   ├── Impact.tsx   # Impact metrics
│   ├── Team.tsx     # Team member profiles
│   ├── CookieNotice.tsx  # GDPR cookie consent
│   ├── PlexusBackground.tsx # Animated background
│   └── ...
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── pages/           # Route-level page components
    ├── Index.tsx     # Homepage
    ├── About.tsx     # About page
    ├── Products.tsx  # Products & services
    ├── Contact.tsx   # Contact form
    └── NotFound.tsx  # 404 page
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher)
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd midpoint-innovations

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

## 🎨 Design System

The project uses a custom design system built on Tailwind CSS with semantic tokens defined in `src/index.css`:

- **Primary**: Vibrant orange-yellow (`hsl(36, 100%, 50%)`)
- **Secondary**: Professional blue (`hsl(207, 90%, 54%)`)
- **Accent**: Teal accent (`hsl(174, 72%, 56%)`)
- Full dark mode support

All colors use HSL format and are referenced via CSS custom properties for consistency.

## 🔍 SEO

- Dynamic meta tags via `react-helmet-async`
- Open Graph & Twitter Card support
- JSON-LD structured data on all pages
- Semantic HTML with proper heading hierarchy
- XML sitemap at `/sitemap.xml`
- `robots.txt` for crawler guidance
- Lazy-loaded images with descriptive alt text
- Google Search Console verified

## 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, vision/mission, services, impact metrics |
| `/about` | About | Company story, team profiles, values |
| `/products` | Products | Products and service offerings |
| `/contact` | Contact | Contact form and company info |

## 🚢 Deployment

The project is configured for deployment on **Netlify** with configuration in `netlify.toml`. It can also be deployed to any static hosting provider that supports single-page applications.

```bash
# Build for production
npm run build

# Output is in the dist/ directory
```

## 📜 License

© 2022–2026 Midpoint Innovations Nigeria Limited. All rights reserved.
