module.exports = [
  {
    text: 'Guide',
    link: '/'
  },
  {
    text: 'How To',
    link: '/how-to/'
  },
  {
    text: 'Links',
    items: [
      { text: 'Website', link: 'https://getleon.ai' },
      { text: 'Stay Tuned', items: [
          { text: 'Blog', link: 'https://blog.getleon.ai' },
          { text: 'Roadmap', link: 'https://roadmap.getleon.ai' },
          { text: 'Changelog', link: 'https://changelog.getleon.ai' },
          { text: '#LeonAI', link: 'https://twitter.com/hashtag/LeonAI' }
        ]
      },
      { text: 'Contributing', items: [
          { text: 'Contribute', link: 'https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md' },
          { text: 'Donate', link: 'https://donate.getleon.ai' }
        ]
      },
      { text: 'Help', items: [
          { text: 'Issues', link: 'https://github.com/leon-ai/leon/issues' }
        ]
      }
    ]
  }
];
