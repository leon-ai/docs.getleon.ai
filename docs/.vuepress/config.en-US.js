
module.exports = {
  selectText: 'Languages',
  label: 'English',
  editLinkText: 'Edit this page on GitHub',
  nav: require('./nav/nav.en-US.js'),
  sidebar: {
    '/how-to/': false,
    '/': [
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
