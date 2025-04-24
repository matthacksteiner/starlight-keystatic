# Astro Starlight powered by Keystatic

A modern documentation website built with [Astro](https://astro.build),
[Starlight](https://starlight.astro.build) and
[Keystatic](https://keystatic.com)

## 📚 Overview

This project is a documentation site that leverages Starlight, Astro's official
documentation theme. It provides a fast, accessible, and customizable platform
for creating technical documentation.

Built with:

- [Astro](https://astro.build) v5.7.5
- [Starlight](https://starlight.astro.build) v0.34.0
- [Keystatic Core](https://keystatic.com) v0.5.47
- [Keystatic Astro](https://keystatic.com) v5.0.6

Forked and inspired by:
[Starlight Keystatic](https://github.com/jordangeizer/starlight-keystatic).

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

## 🧩 Components

### Starlight

- Badge - display a customizable badge
- Aside - create stylized asides/callouts
- Card - create stylized content cards
- CardGrid - organize cards in a responsive grid
- Icon - display SVG icons
- FileTree - display file structure
- LinkCard - create a card that links to another page
- LinkButton - create a button that links to another URL
- Tabs - create tabbed content sections
- Steps - create a numbered list of steps

### Custom Astro Components

- ImageUrl - paste an image url with zoom capability
- VideoUrl - paste a video url

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

1. Modify `src/content.config.ts` for Starlight configuration
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
2. Customize the CMS schema in `keystatic.config.tsx`

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

## Add Template

If you want to add this template to your own repository, follow these steps:

1. `git remote add template https://github.com/matthacksteiner/starlight-keystatic`
2. `git fetch --all`
3. `git merge template/main --allow-unrelated-histories`
