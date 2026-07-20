# Abraham Cedeno IoT Portfolio

Personal portfolio website for Abraham Cedeno, Embedded Software and IoT Engineer.

The site is built as a fast static website with Astro, Tailwind CSS, TypeScript, SEO metadata, sitemap generation, and Firebase Hosting deployment.

## Live Site

Production URL:

[https://freelancer-1de06.web.app](https://freelancer-1de06.web.app)

## Tech Stack

- Astro 7
- Tailwind CSS v4
- TypeScript
- Content Collections for portfolio projects
- `@astrojs/sitemap` for sitemap generation
- Firebase Hosting
- Volta for pinned Node/npm versions

## Requirements

- Node.js `>=22.12.0`
- npm `11.13.0`
- Firebase CLI, only needed for deploys

This project includes a Volta pin, so if Volta is installed the correct Node and npm versions are selected automatically inside the project folder.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Astro will serve the site at:

```bash
http://localhost:4321
```

## Available Scripts

```bash
npm run dev      # Start local development server
npm run build    # Build the static site into dist/
npm run preview  # Preview the production build locally
npm run deploy   # Build and deploy to Firebase Hosting
```

## Deployment

The project is configured for Firebase Hosting.

Build and deploy:

```bash
npm run deploy
```

If Firebase credentials have expired, reauthenticate first:

```bash
firebase login --reauth
```

Firebase project:

```bash
freelancer-1de06
```

Hosting output directory:

```bash
dist
```

## Project Structure

```text
src/
  components/              Astro UI sections and layout components
  content/projects/        Portfolio project case studies
  data/site.ts             Central site metadata and contact links
  layouts/Layout.astro     Shared page layout
  pages/index.astro        Main one-page portfolio
  pages/privacidad.astro   Privacy/legal page
  styles/global.css        Global styles and Tailwind theme tokens

public/                    Static assets
firebase.json              Firebase Hosting configuration
astro.config.mjs           Astro configuration
```

## Content Notes

Portfolio case studies live in:

```bash
src/content/projects/
```

Each project is a Markdown file with frontmatter for title, summary, tags, cover, and ordering. Client names should stay anonymized.

## Repository Setup

To connect this local project to a GitHub repository:

```bash
git init -b main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<owner>/<repo>.git
git push -u origin main
```

Replace `<owner>` and `<repo>` with the GitHub account and repository name you want to use.
