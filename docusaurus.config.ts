import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import { reverseSidebarItems } from './src/utils/reverseSidebarItems';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DigitallyRefined',
  tagline: 'Guides on: Homelab, tech projects, reviews & web development',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://DigitallyRefined.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DigitallyRefined', // Usually your GitHub org/user name.
  projectName: 'DigitallyRefined.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          breadcrumbs: false,
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DigitallyRefined/DigitallyRefined.github.io/tree/main/',
          sidebarItemsGenerator: async ({
            defaultSidebarItemsGenerator,
            ...args
          }) => {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return reverseSidebarItems(sidebarItems);
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/DigitallyRefined-banner.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DigitallyRefined',
      logo: {
        alt: 'DigitallyRefined Logo',
        src: 'img/DigitallyRefined-avatar.jpg',
      },
      items: [
        {
          href: 'https://www.youtube.com/@DigitallyRefined',
          label: 'YouTube',
          position: 'right',
        },
        {
          href: 'https://github.com/DigitallyRefined/DigitallyRefined.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/PnpA7JYf33',
            },
            {
              label: 'Mastodon',
              href: 'https://mastodon.social/@DigitallyRefined',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DigitallyRefine',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@DigitallyRefined',
            },
            {
              label: 'Liberapay',
              href: 'https://liberapay.com/DigitallyRefined/donate',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DigitallyRefined/DigitallyRefined.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright (ISC) © ${new Date().getFullYear()} DigitallyRefined. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json'],
    },
  } satisfies Preset.ThemeConfig,

  scripts: [
    {
      src: 'https://app.tinyanalytics.io/pixel/DgTq8YQ6wysFwYDx',
      defer: true,
    },
  ],
};

export default config;
