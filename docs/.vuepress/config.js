module.exports = {
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://getleon.ai/img/favicon.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Leon Docs' }],
    ['meta', { name: 'og:description', content: 'Leon Documentation - Your Open-Source Personal Assistant.' }],
    ['meta', { name: 'og:image', content: 'https://getleon.ai/img/logo_t.png' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Leon Docs' }],
    ['meta', { name: 'twitter:description', content: 'Leon Documentation - Your Open-Source Personal Assistant.' }],
    ['meta', { name: 'twitter:image', content: 'https://getleon.ai/img/logo_t.png' }],
    ['meta', { name: 'theme-color', content: '#1C75DB' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Leon Docs',
      description: 'Leon Documentation - Your Open-Source Personal Assistant.'
    },
    '/fr-FR/': {
      lang: 'fr-FR',
      title: 'Léon Docs',
      description: 'Documentation de Léon - Votre assistant personnel open source.'
    }
  },
  themeConfig: {
    logo: 'https://getleon.ai/img/logo.svg',
    repo: 'leon-ai/leon',
    docsRepo: 'leon-ai/docs.getleon.ai',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': require('./config.en-US'),
      '/fr-FR/': require('./config.fr-FR')
    }
  },
  plugins: {
    '@vuepress/plugin-back-to-top': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/plugin-google-analytics': {
      ga: 'UA-131760989-1'
    }
  }
};
