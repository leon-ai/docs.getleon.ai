
module.exports = {
  selectText: 'Langues',
  label: 'Français',
  editLinkText: 'Éditer cette page sur GitHub',
  nav: require('./nav/nav.fr-FR.js'),
  sidebar: {
    '/fr-FR/how-to/': false,
    '/fr-FR/': [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '',
          'glossary',
          'architecture',
          'configuration',
          'deployment',
          'offline',
          'bridges',
          'clients',
          'packages-modules',
          'collaborative-logger',
          'scripts',
          'tests'
        ]
      }
    ]
  }
};
