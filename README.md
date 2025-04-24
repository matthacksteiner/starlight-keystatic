# Astro Starlight powered by Keystatic

A modern documentation website built with [Astro](https://astro.build),
[Starlight](https://starlight.astro.build) and
[Keystatic](https://keystatic.com)

## 📚 Overview

This project is a documentation site that leverages Starlight (v0.34.0), Astro's
official documentation theme. It provides a fast, accessible, and customizable
platform for creating technical documentation.

Built with:

- [Astro](https://astro.build) v5.7.5
- [Starlight](https://starlight.astro.build) v0.34.0
- [Keystatic](https://keystatic.com) v5.0.0

Forked and inspired by:
[Starlight Keystatic](https://github.com/keystatic/starlight-keystatic).

## ✨ Features

- 📱 Responsive design
- 🔍 Full-text search
- 🌙 Dark/Light mode
- 🎨 Easy customization
- 🚀 Fast performance
- 📝 Markdown & MDX support
- 🔧 TypeScript ready
- 📊 Keystatic CMS Integration
- ☁️ Keystatic Cloud Ready
- 📅 Last Deployment Date
- 🔍 Medium Zoom Image

## 🚀 Project Structure

```
.
├── public/            # Static assets (favicons, images, etc.)
├── src/
│   ├── assets/        # Project images and media files
│   ├── components/    # React/Astro components
│   ├── content/       # Documentation content (markdown/MDX)
│   ├── data/          # Data files and configurations
│   ├── fonts/         # Custom fonts
│   ├── styles/        # Global styles and CSS
│   ├── content.config.ts  # Starlight configuration
│   └── env.d.ts       # TypeScript declarations
├── keystatic.config.tsx  # Keystatic CMS configuration
├── astro.config.mjs   # Astro configuration
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── .prettierrc.json   # Prettier configuration
├── .prettierignore    # Prettier ignore rules
├── .gitignore        # Git ignore rules
└── .nvmrc            # Node version specification
```

## 🎨 Resources

### Typography

- **Used Font**: Inter
  - A modern, clean sans-serif typeface designed for optimal readability
  - [More Information](https://fonts.google.com/specimen/Inter)

### Brand Assets

- **Logo**: Lorem Ipsum Logo
- [More Information](https://logoipsum.com)

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

Use an external service to upload media files like Cloudinary and paste the code
inside the component blocks.
