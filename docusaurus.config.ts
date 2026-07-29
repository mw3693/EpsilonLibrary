import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Epsilon Library',
  tagline: 'Cybersecurity Knowledge Base',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages
  url: 'https://mw3693.github.io',
  baseUrl: '/EpsilonLibrary/',

  organizationName: 'mw3693',
  projectName: 'EpsilonLibrary',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        language: ['en'],
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Epsilon Library',
      logo: {
        alt: 'Epsilon Library',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://github.com/mw3693/EpsilonLibrary',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Epsilon Library. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
