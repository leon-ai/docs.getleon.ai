
module.exports = {
  selectText: 'Langues',
  label: 'Français',
  editLinkText: 'Éditer cette page sur GitHub',
  nav: require('./nav/nav.fr-FR.js'),
  sidebar: {
    '/fr-FR/getting-started/': [
      {
        title: 'Débuter',
        collapsable: false,
        children: [
          'what-is-leon',
          'demo',
          'motivations',
          'prerequisites',
          'installation',
          'usage'
        ]
      }
    ],
    '/fr-FR/documentation/': [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          'architecture',
          'glossary',
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
