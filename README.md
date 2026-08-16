# Ehsan Ehrari Portfolio

My personal portfolio website showcasing my experience, selected work, technical skills, education, and contact information.

## Live site

[portfolio-tau-smoky-54.vercel.app](https://portfolio-tau-smoky-54.vercel.app/)

## Tech stack

- React 19
- Next.js 16
- Vinext
- Vite 8
- TypeScript
- Tailwind CSS 4
- Three.js / React Three Fiber
- Lucide React
- Nitro
- Vercel

## Features

- Responsive single-page portfolio
- Interactive 3D hero scene with performance-aware loading
- Experience timeline
- Selected work and skills sections
- Downloadable CV
- Accessible navigation and reduced-motion support
- Optimized mobile experience

## Getting started

### Prerequisites

- Node.js 22.13 or newer
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production build

```bash
npm run build
```

## Project structure

```text
app/
  components/       Interactive UI components
  globals.css       Global styles
  layout.tsx        Root layout and metadata
  page.tsx          Portfolio content
public/
  assets/           Images and downloadable files
vite.config.ts      Vite, Vinext, Tailwind and Nitro configuration
```

## Deployment

The project is deployed on Vercel. Production builds use Nitro and generate the `.output` directory expected by the Vercel deployment configuration.

## License

This project is for my personal portfolio. Please do not reuse personal content, images, or branding without permission.
