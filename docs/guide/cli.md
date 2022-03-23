---
slug: /cli
sidebar_position: 5
---

# CLI

CLI stands for *Command-Line Interface*. You can see it as the companion that helps you with your Leon journey.

For the moment, the CLI helps you for the setup of Leon. In the future more commands will be released to improve your comfort and make the use of Leon even smoother.

## Commands

The table below lists all the available commands:

| Command                                 | Description             | Option |
| ----------------------------------------|--------------------|---|
| `leon check`            | Check how the setup went.       | <ul><li>`--name {name}`: name of the Leon instance.</li></ul> |
| `leon create birth`            | Brings Leon to life by checking all the requirements and install them with your approval. | <ul><li>`--develop`: install Leon from the `develop` Git branch.</li><li>`--docker`: install Leon with Docker.</li><li>`--path {path}`: location of your Leon instance.</li><li>`--version {version}`: install a [specific version](https://github.com/leon-ai/leon/releases) of Leon.</li><li>`--name {name}`: give a name to your Leon instance.</li><li>`--no-git`: Install Leon without `git` (by default if possible it installs Leon with `git`)</li><li>`--yes`: skip all questions with a "yes" answer.</li></ul> |
| `leon help`          | List all commands available in the CLI.       | |
| `leon start`          | Start a Leon instance.       | <ul><li>`--port {port}`: run a Leon instance with a specific port.</li><li>`--name {name}`: run a Leon instance with a specific name.</li></ul> |
| `leon info`          | Get basic information about installed Leon instances.       | <ul><li>`--name {name}`: Name of the Leon instance.</li></ul> |
| `leon delete`          | Delete a Leon instance.       | <ul><li>`--name {name}`: Name of the Leon instance.</li><li>`--yes`: skip all questions with a "yes" answer.</li></ul> |
| `leon update`          | Update a Leon instance.       | <ul><li>`--name {name}`: Name of the Leon instance.</li><li>`--develop`: Update Leon to latest `develop` Git branch.</li><li>`--version {version}`: Update to a [specific version](https://github.com/leon-ai/leon/releases) of Leon.</li><li>`--no-git`: Update Leon without `git` (by default if possible it updates Leon with `git`)</li><li>`--yes`: skip all questions with a "yes" answer.</li></ul> |
| `leon run`          | Run a npm script from a Leon Instance (e.g: `leon run train` runs `npm run train` in the leon instance folder).       | <ul><li>`--name {name}`: Name of the Leon instance.</li></ul> |
