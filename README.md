# Portfolio & AI Lab

A production-ready personal portfolio built with Next.js 15, designed to evolve into an AI Lab.

## Tech Stack

- **Next.js 15** (App Router, static export)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui**
- **Framer Motion** for animations
- **MDX** blog with syntax highlighting
- **Dark / Light mode** via next-themes
- **Cloudflare Pages** compatible

## Getting Started

This project uses [Yarn](https://yarnpkg.com/) for package management.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

If install fails with `SELF_SIGNED_CERT_IN_CHAIN` on a corporate network, set your CA cert in `.yarnrc`:

```
cafile "/path/to/corp-ca.pem"
```

Or export it before installing:

```bash
export NODE_EXTRA_CA_CERTS=/path/to/corp-ca.pem
yarn install
```

## Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build static site to `out/` |
| `yarn lint` | Run ESLint |
| `yarn format` | Format with Prettier |

## Project Structure

```
app/              Pages and routes
components/       Reusable UI components
  ui/             shadcn/ui primitives
  layout/         Navbar, footer, page header
  home/           Home page sections
  projects/       Project cards and grids
  blog/           Blog components and TOC
  mdx/            MDX component overrides
  motion/         Framer Motion wrappers
content/
  blog/           MDX blog posts
  projects/       Project metadata (JSON)
hooks/            Custom React hooks
lib/              Utilities, config, data fetching
public/           Static assets
```

## Adding Content

### New Blog Post

Create `content/blog/my-post.mdx`:

```mdx
---
title: "My Post Title"
description: "A brief description."
date: "2025-06-30"
tags: ["Tag1", "Tag2"]
---

Your content here...
```

### New Project

Create `content/projects/my-project.json`:

```json
{
  "title": "My Project",
  "description": "What it does.",
  "techStack": ["Next.js", "TypeScript"],
  "screenshots": ["/projects/my-project.png"],
  "featured": true
}
```

### Custom AI Demo

For interactive demos, add a dedicated route that overrides the dynamic template:

```
app/projects/my-demo/page.tsx
```

Static routes take precedence over `app/projects/[slug]/page.tsx`.

## Deploy to Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Set build command: `yarn install && yarn build`
3. Set output directory: `out`
4. Deploy

Alternatively, use Wrangler:

```bash
yarn build
npx wrangler pages deploy out
```

## Customization

Edit `lib/site-config.ts` to update your name, bio, and social links.

## License

MIT
