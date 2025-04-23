# Documentation Site

A modern documentation website built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build).

## 📚 Overview

This project is a documentation site that leverages Starlight, Astro's official
documentation theme. It provides a fast, accessible, and customizable platform
for creating technical documentation.

## ✨ Features

- 📱 Responsive design
- 🔍 Full-text search
- 🌙 Dark/Light mode
- 🎨 Easy customization
- 🚀 Fast performance
- 📝 Markdown & MDX support
- 🔧 TypeScript ready
- 📊 Keystatic CMS Integration
- 🌟 All components of Starlight are available

## 🚀 Project Structure

```
.
├── public/             # Static assets (favicons, images, etc.)
├── src/
│   ├── assets/         # Project images and media files
│   │   ├── docs/       # Documentation pages (markdown/MDX)
│   │   └── config.ts   # Starlight configuration
│   └── env.d.ts        # TypeScript declarations
├── keystatic.config.ts # Keystatic CMS configuration
├── astro.config.mjs    # Astro configuration
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

To customize your documentation:

1. Modify `src/content/config.ts` for Starlight configuration
2. Update `astro.config.mjs` for Astro configuration
3. Add custom styles and components as needed

## 📚 Resources

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Keystatic Documentation](https://keystatic.com/docs)
- [Astro Discord Community](https://astro.build/chat)

## 📝 Content Management

This project uses [Keystatic](https://keystatic.com) as its Content Management
System. Keystatic provides a user-friendly interface for managing documentation
content.

### Accessing the CMS

1. Navigate to `localhost:4321/keystatic` in your browser to access the CMS
   dashboard
2. Customize the CMS schema in `keystatic.config.ts`

### Features of Keystatic Integration

- 📝 Visual Markdown/MDX editing
- 🗂️ Structured content management
- 🔄 Git-based content storage
- 👥 Collaborative editing
- 🔒 Role-based access control
- 📱 Mobile-friendly interface

### Media Upload

The Media is uploaded to Cloudinary.
