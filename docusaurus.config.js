/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'leon-ai', // Usually your GitHub org/user name.
  projectName: 'docs.getleon.ai', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Leon Docs',
      logo: {
        alt: 'Leon logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Guide',
        },
        {
          to: '/how-to/',
          label: 'How To',
          position: 'left'
        },
        {
          href: 'https://github.com/leon-ai/leon',
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'https://discord.gg/MNQqqKg',
          label: 'Discord',
          position: 'right'
        },
        {
          href: 'https://donate.getleon.ai',
          label: 'Donate',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Stay Tuned',
          items: [
            {
              label: 'Newsletter',
              href: 'https://getleon.ai/'
            },
            {
              label: 'Blog',
              href: 'https://blog.getleon.ai/'
            },
            {
              label: 'Roadmap',
              href: 'https://roadmap.getleon.ai/'
            },
            {
              label: 'Changelog',
              href: 'https://changelog.getleon.ai/'
            },
            {
              label: '#LeonAI',
              href: 'https://twitter.com/hashtag/LeonAI'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/MNQqqKg'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/leon-ai/leon'
            },
            {
              label: 'Contribute',
              href: 'https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md'
            },
            {
              label: 'Help',
              href: 'https://github.com/leon-ai/leon/issues'
            },
            {
              label: 'Donate',
              href: 'https://donate.getleon.ai'
            }
          ]
        }
      ]
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/leon-ai/docs.getleon.ai/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};
