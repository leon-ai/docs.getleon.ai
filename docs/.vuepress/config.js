module.exports = {
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0071F0' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Leon Docs',
      description: 'Leon documentation, your open-source personal assistant'
    },
    '/fr-FR/': {
      lang: 'fr-FR',
      title: 'Léon Docs',
      description: 'Documentation de Léon, votre assistant personnel open source'
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.svg',
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
    '@vuepress/plugin-back-to-top': true
  }
};
