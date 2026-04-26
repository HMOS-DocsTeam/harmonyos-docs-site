// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HarmonyOS 开发者文档镜像',
  tagline: 'HarmonyOS Application Development Guide',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://hmos-docsteam.github.io',
  baseUrl: '/harmonyos-docs-site/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'md',
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: true,
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ref',
        path: 'docs-ref',
        routeBasePath: 'ref',
        sidebarPath: require.resolve('./sidebars-ref.js'),
        sidebarCollapsed: true,
        sidebarCollapsible: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          sidebarCollapsed: true,
          sidebarCollapsible: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'HarmonyOS Docs',
        items: [
          {
            type: 'doc',
            docId: 'application-dev-guide/application-dev-guide',
            position: 'left',
            label: '开发指南',
          },
          {
            type: 'doc',
            docId: 'development-intro-api/development-intro-api',
            docsPluginId: 'ref',
            position: 'left',
            label: 'API参考',
          },
          {
            href: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide',
            label: '官网',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开发指南',
                to: '/application-dev-guide',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '华为开发者',
                href: 'https://developer.huawei.com',
              },
            ],
          },
        ],
        copyright: `HarmonyOS 开发者文档镜像 · 数据来源：华为开发者官网 · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
