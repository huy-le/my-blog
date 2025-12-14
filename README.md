# My Personal Blog

A modern, clean personal blog built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 📝 Markdown-based blog posts
- 🎨 Clean, responsive design with Tailwind CSS
- 🌓 Dark mode support
- ⚡ Fast performance with Next.js App Router
- 📱 Mobile-friendly
- 🔍 SEO optimized

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your blog.

### Build for Production

```bash
npm run build
npm start
```

## Writing Blog Posts

Create a new markdown file in the `posts/` directory:

```markdown
---
title: "Your Post Title"
date: "2025-12-14"
excerpt: "A brief description of your post"
author: "Your Name"
---

Your post content goes here...
```

The filename (without `.md`) becomes the URL slug.

## Project Structure

```
├── app/                # Next.js app directory
│   ├── blog/          # Blog routes
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── posts/             # Markdown blog posts
├── lib/               # Utility functions
│   └── blog.ts        # Blog post utilities
└── public/            # Static assets
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter and marked

## License

MIT
