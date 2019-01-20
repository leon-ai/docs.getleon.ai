
module.exports = {
  selectText: 'Langues',
  label: 'Français',
  editLinkText: 'Éditer cette page sur GitHub',
  nav: require('./nav/nav.fr-FR.js'),
  sidebar: {
    '/fr-FR/how-to/': [
      {
        title: 'Manuel',
        collapsable: false,
        children: [
          ''
        ]
      }
    ],
    '/fr-FR/': [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '',
          'glossary',
          'architecture',
          'configuration',
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
