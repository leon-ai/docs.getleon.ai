---
slug: /
sidebar_position: 1
---

# Introduction

## What is Leon?

Leon is an **open-source personal assistant** who can live on your server.

He does stuff when you ask him to.

You can talk to him and he can talk to you.
You can also text him and he can also text you.
If you want to, Leon can communicate with you by being offline to protect your privacy.

You can think of him as a second brain.

:::tip Tip

Leon is still pretty young today. If you wish, you can help by [contributing](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) ❤️

:::

## Demo

A video is available [here](https://www.youtube.com/watch?v=p7GRGiicO1c).

## Motivations

1. As developers (or not), we **love creating** things, even more when those things can **help** in our **daily life**. So instead of building a dedicated project for each of those things, Leon can help us with his **packages/modules** (skills) structure. We believe it's better than keeping your awesome ideas in backlog forever, right?
2. With this generic structure, **everyone** can **create** their own **modules** and **share them**. Therefore there is only one core (to rule them all).
3. Leon uses **AI concepts**, which is cool.
4. **Privacy matters**, you can configure Leon to talk with him **offline**. You can already **interact** with him **without** any **third party** services.
5. Last but not least: **open source** is great.

## Try with a Single-Click

Gitpod will automatically setup an environment and run an instance for you.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/leon-ai/leon)

## Prerequisites

- **[Node.js](https://nodejs.org/) >= 14**
> Leon's core is developed on the top of the Node.js JavaScript runtime.
- **[npm](https://npmjs.com/) >= 5**
> npm is the packages manager of Node.js, Leon needs it for his core's dependencies tree.
- **[Python](https://www.python.org/downloads/) >= 3**
> Today, Leon's modules are only written in Python.
- **[Pipenv](https://docs.pipenv.org) >= 2020.11.15**
> Pipenv allows Leon's modules to be executed in a dedicated environment. It also embeds a Python packages manager for the dependencies tree of his modules.
- **Supported OSes: Linux, macOS and Windows**
> Should we explain that one? :)

:::tip Tip

You can read the [How To](/how-to/) section to install these prerequisites.

:::

## Installation

### Download

You have two main options to download Leon:

#### 1. Git

You can clone the [GitHub repository](https://github.com/leon-ai/leon) from different branches.

##### Master Branch

The `master` branch is actually used as a snapshot of the latest release:

```bash
git clone -b master https://github.com/leon-ai/leon.git leon
```

##### Develop Branch

The `develop` branch is the default one, this is where the latest changes are merged. Which means on this branch you will get the latest changes in advance but be aware that it will not be as stable as the `master` one:

```bash
git clone https://github.com/leon-ai/leon.git leon
```

#### 2. Release Archives

Or you can download the latest release by following [this link](https://github.com/leon-ai/leon/releases/latest).

### Install

Once you have installed the prerequisites and downloaded Leon, you can install:

```bash
# Go to the project root
cd leon

# Install
npm install
```

## Usage

Please ensure the whole setup went well with the following command:

```bash
npm run check
```

This command gives you a report about how much Leon is installed/configured. Do not worry if you have some warnings in the report, this is because you probably did not [configure Leon](/configuration.html) yet.

If the report mentions that *Leon can run correctly*, then you can build and start Leon:

```bash
# Build
npm run build

# Run
npm start

# Go to http://localhost:1337
# Hooray! Leon is running
```

Basically on that level you can already communicate with him by text and ask him to do things.

:::tip Tip

To see what he can do, please refer to the [packages list](https://github.com/leon-ai/leon/tree/develop/packages).

:::

## Docker Installation

You can also use Docker to install and run Leon:

```bash
# Build
npm run docker:build

# Run
npm run docker:run

# Go to http://localhost:1337
# Hooray! Leon is running
```
