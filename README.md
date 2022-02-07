# Leon Documentation [![Powered by Vercel](https://raw.githubusercontent.com/leon-ai/docs.getleon.ai/master/static/img/powered-by-vercel.svg)](https://vercel.com?utm_source=leon-ai&utm_campaign=oss)

## Overview

This repository contains the main documentation of Leon. It is available on [docs.getleon.ai](https://docs.getleon.ai), built on the top of [Docusaurus](https://docusaurus.io) and proudly powered by [Vercel](https://vercel.com?utm_source=leon-ai&utm_campaign=oss).

## Development

```bash
# Install dependencies
npm install

# Run (dev)
npm start
# Specific language
npm run start -- --locale fr-FR

# Build
npm run build

# Serve locally
npm run serve
```

## Release Version

```bash
npm run docusaurus docs:version {semver}
```
- Then copy `i18n/[...]/current` to `i18n/[...]/version-*`
- Modify `versions.current` in `docusaurus.config.js` with the new version `+dev`
- Same for `i18n/[..]/current.json`
