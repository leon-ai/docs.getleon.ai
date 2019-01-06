
module.exports = {
  selectText: 'Languages',
  label: 'English',
  editLinkText: 'Edit this page on GitHub',
  nav: require('./nav/nav.en-US.js'),
  sidebar: {
    '/getting-started/': [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          'what-is-leon',
          'demo',
          'motivations',
          'prerequisites',
          'installation'
        ]
      }
    ],
    '/documentation/': [
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
