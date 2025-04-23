// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import AutoImport from 'astro-auto-import';
import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://eb-docs.atp.ag',
  integrations: [
    starlight({
      title: 'ATP EB Guidelines',
      customCss: ['./src/styles/global.css', './src/fonts/font-face.css'],
      components: {
        Header: './src/components/CustomHeader.astro',
        Pagination: './src/components/CustomPagination.astro',
      },
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
        replacesTitle: true,
      },
      social: [
        {
          label: 'LinkedIn',
          icon: 'linkedin',
          href: 'https://at.linkedin.com/company/atp-architekten-ingenieure',
        },
        {
          label: 'Instagram',
          icon: 'instagram',
          href: 'https://www.instagram.com/atparchitekteningenieure',
        },
        {
          label: 'YouTube',
          icon: 'youtube',
          href: 'https://www.youtube.com/@ATParchitekteningenieure',
        },
      ],
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de',
        },
      },
      markdown: {
        headingLinks: true,
      },
      head: [
        {
          tag: 'link',
          attrs: { rel: 'icon', href: '/favicon.ico' },
        },
        {
          tag: 'link',
          attrs: { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        },
      ],
      sidebar: [
        {
          slug: 'index',
        },
        {
          label: 'Einleitung',
          autogenerate: { directory: 'einleitung' },
          collapsed: false,
        },
        {
          label: 'Abschluss',
          autogenerate: { directory: 'abschluss' },
          collapsed: false,
        },
      ],
    }),

    keystatic(),
    react(),
    AutoImport({
      imports: [
        './src/components/ImageUrl.astro',
        './src/components/VideoUrl.astro',
        {
          '@astrojs/starlight/components': [
            'Aside',
            'Badge',
            'Card',
            'CardGrid',
            'FileTree',
            'Icon',
            'LinkButton',
            'LinkCard',
            'Steps',
            'TabItem',
            'Tabs',
          ],
        },
      ],
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify({
    imageCDN: false,
  }),
  redirects: {
    '/admin': '/keystatic',
  },
});
