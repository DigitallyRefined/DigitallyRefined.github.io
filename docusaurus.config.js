// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkOembed = require('remark-oembed');

// Reverse the sidebar items ordering (including nested category items)
function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items.map((item) => {
    if (item.type === 'category') {
      return { ...item, items: reverseSidebarItems(item.items) };
    }
    return item;
  });
  // Reverse items at current level
  result.reverse();
  return result;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DigitallyRefined',

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
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/DigitallyRefined/DigitallyRefined.github.io/tree/main/',
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return reverseSidebarItems(sidebarItems);
          },
          remarkPlugins: [remarkOembed],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/DigitallyRefined-banner.jpg',
      navbar: {
        logo: {
          alt: 'DigitallyRefined Logo',
          src: 'img/DigitallyRefined-avatar.jpg',
        },
        title: 'DigitallyRefined',
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
                label: 'Patreon',
                href: 'https://patreon.com/DigitallyRefined',
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
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: [
    {
      src: 'https://app.tinyanalytics.io/pixel/DgTq8YQ6wysFwYDx',
      defer: true,
    },
  ],
};

module.exports = config;
