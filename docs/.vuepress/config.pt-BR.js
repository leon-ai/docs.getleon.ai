
module.exports = {
  selectText: 'Idiomas',
  label: 'Português (BR)',
  editLinkText: 'Edite esta página no GitHub',
  nav: require('./nav/nav.pt-BR.js'),
  sidebar: {
    '/pt-BR/how-to/': [
      {
        title: 'Manual',
        collapsable: false,
        children: [
          ''
        ]
      }
    ],
    '/pt-BR/': [
      {
        title: 'Guia',
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
