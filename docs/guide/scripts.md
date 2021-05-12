---
slug: /scripts.html
sidebar_position: 10
---

# Scripts

Here are the available npm scripts that you can find in the [package.json](https://github.com/leon-ai/leon/blob/develop/package.json) file.

Those scripts **must be executed from the project root directory**.

## Main

| Script                                 | Purpose             |
| ----------------------------------------|--------------------|
| `npm run wake`            | Launch the hotword process.       |
| `npm start`            | Run Leon in production after build.       |
| `npm run train expressions (en;fr)`          | Train Leon's understanding.       |
| `npm run check`            | Verify how much Leon is installed/configured.       |

## Setup

| Script                                 | Purpose             |
| ----------------------------------------|--------------------|
| `npm run setup:offline`            | Setup all the offline nodes.       |
| `npm run setup:offline-stt`            | Setup the offline STT.       |
| `npm run setup:offline-tts`            | Setup the offline TTS.       |
| `npm run setup:offline-hotword`            | Setup the hotword node.       |
| `npm run preinstall`            | Triggered before `npm install` has started.       |
| `npm run postinstall`            | Triggered after `npm install` has finished.       |

## Build

| Script                                 | Purpose             |
| ----------------------------------------|--------------------|
| `npm run delete-dist:server`            | Delete server distribution folder.       |
| `npm run build`            | Build Leon (web app + server).      |
| `npm run build:app`            | Build web app.       |
| `npm run build:server`            | Build server.       |

## Development

| Script                                 | Purpose             |
| ----------------------------------------|--------------------|
| `npm run dev:app`            | Run the web app in development.       |
| `npm run dev:server`            | Run the server in development.       |
| `npm run prepare-release {VERSION NUMBER}`            | Bump Leon's version and generate changelog according to commit messages.       |

## Testing

| Script                                 | Purpose             |
| ----------------------------------------|--------------------|
| `npm run lint`            | Verify project coding syntax.       |
| `npm test`            | Run all kind of tests.       |
| `npm run test:unit`            | Run unit tests.       |
| `npm run test:e2e`            | Run all kind of end-to-end tests.       |
| `npm run test:e2e:modules`            | Run all modules tests.        |
| `npm run test:e2e:nlp-modules`            | Run tests to ensure every expression is understandable.       |
| `npm run test:json`            | Run tests to verify every JSON file are conform.      |
| `npm run test:module {PACKAGE NAME}:{MODULE NAME}`            | Run tests of a given module.       |

## Docker

| Script                                 | Purpose             |
| ----------------------------------------|--------------------|
| `npm run docker:build`            | Build Leon in Docker.       |
| `npm run docker:run`            | Start Leon in Docker.       |
| `npm run docker:dev`            | Start Leon in development mode within Docker.       |
| `npm run docker:check`            | Verify Leon setup inside Docker.       |
