/** @type {import('@docusaurus/types').DocusaurusConfig} */

const title = 'Leon Docs'
const description = 'Leon Documentation - Main documentation of your open-source personal assistant Leon.'
const url = process.env.NODE_ENV !== 'development' ? 'https://docs.getleon.ai' : 'http://localhost:3000'

module.exports = {
  title,
  url,
  tagline: '',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'leon-ai', // Usually your GitHub org/user name.
  projectName: 'docs.getleon.ai', // Usually your repo name.
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'fr-FR'],
    localeConfigs: {
      'en-US': {
        label: 'English',
        direction: 'ltr'
      },
      'fr-FR': {
        label: 'Français',
        direction: 'ltr'
      }
    }
  },
  themeConfig: {
    colorMode: {
      disableSwitch: false,
      defaultMode: 'dark',
      respectPrefersColorScheme: true
    },
    metadatas: [
      { name: 'description', content: description },
      { name: 'og:title', content: title },
      { name: 'og:type', content: 'website' },
      { name: 'og:description', content: description },
      { name: 'og:image', content: `${url}/img/og_social_card.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${url}/img/twitter_social_card.png` }
    ],
    /*announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#1C75DB', // Defaults to `#fff`.
      textColor: '#FFF', // Defaults to `#000`.
      isCloseable: false
    },*/
    navbar: {
      title: 'Leon Docs',
      logo: {
        alt: 'Leon logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'guide/introduction',
          position: 'left',
          label: 'Guide',
        },
        {
          type: 'doc',
          docId: 'how-to/how-to',
          position: 'left',
          label: 'How To'
        },
        {
          href: 'https://blog.getleon.ai',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'http://roadmap.getleon.ai',
          label: 'Roadmap',
          position: 'left'
        },
        {
          href: 'https://discord.gg/MNQqqKg',
          label: 'Discord',
          position: 'left'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right'
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/leon-ai/leon',
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'http://sponsor.getleon.ai',
          label: 'Sponsor',
          position: 'right'
        },
        {
          type: 'search',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Powered by Vercel',
        src: 'img/powered-by-vercel.svg',
        href: 'https://vercel.com?utm_source=leon-ai&utm_campaign=oss'
      },
      links: [
        {
          title: 'Stay Tuned',
          items: [
            {
              label: 'Newsletter',
              href: 'http://newsletter.getleon.ai'
            },
            {
              label: 'Blog',
              href: 'https://blog.getleon.ai/'
            },
            {
              label: 'Roadmap',
              href: 'http://roadmap.getleon.ai/'
            },
            {
              label: 'Changelog',
              href: 'http://changelog.getleon.ai/'
            },
            {
              label: '#LeonAI',
              href: 'https://twitter.com/search?f=live&q=%23LeonAI%20(from%3Agrenlouis%20OR%20from%3Alouistiti_fr)&src=typed_query'
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
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/leon-ai/leon'
            },
            {
              label: 'Website',
              href: 'https://getleon.ai'
            },
            {
              label: 'Contribute',
              href: 'https://github.com/leon-ai/leon/blob/master/.github/CONTRIBUTING.md'
            },
            {
              label: 'Help',
              href: 'https://github.com/leon-ai/leon/issues'
            },
            {
              label: 'Sponsor',
              href: 'http://sponsor.getleon.ai'
            }
          ]
        }
      ]
    },
    algolia: {
      apiKey: '79bbb0639d3e63e39d32ef387cc540f3',
      indexName: 'getleon',
      contextualSearch: true,
      debug: false
    },
    googleAnalytics: {
      trackingID: 'UA-131760989-1',
      anonymizeIP: true
    }
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        /**
         * Legacy docs was using .html ext,
         * this will redirect/trim .html tentative to the new correct path
         */
        toExtensions: ['html']
      }
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          disableVersioning: false,
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.0.0-beta.7+dev'
            }
          },
          editUrl: ({ locale, version, versionDocsDirPath, docPath }) => {
            version = version === 'current' ? version : `version-${version}`

            const urls = {
              'en-US': `https://github.com/leon-ai/docs.getleon.ai/edit/master/${versionDocsDirPath}/${docPath}`,
              'fr-FR': `https://github.com/leon-ai/docs.getleon.ai/edit/master/i18n/${locale}/docusaurus-plugin-content-docs/${version}/${docPath}`
            }

            return urls[locale]
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};
