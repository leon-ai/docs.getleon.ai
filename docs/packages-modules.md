# Packages & Modules

Modules are the skills of Leon, this is thanks to them Leon is able to do things according to what you say. In this section you will have a deeper look into modules.

## Packages

Packages contain an infinity of modules. A package is nothing more than a **folder containing modules**, you can consider them as a category of modules.

> E.g. the *[Checker](https://github.com/leon-ai/leon/tree/develop/packages/checker)* package contains modules such as the *[Is It Down](https://github.com/leon-ai/leon/blob/develop/packages/checker/isitdown.py)* one because this package includes modules related to the "checking" purposes.

The full packages list is available [here](https://github.com/leon-ai/leon/tree/develop/packages).

### Directory Structure

Packages are listed in the `packages` directory. We will take the *Video Downloader* package as example.

Note the **package name must be lowercase**.

::: vue
videodownloader
├── `config`
│   ├── config.json
│   └── config.sample.json
├── `data`
│   ├── answers
│   │   ├── en.json
│   │   └── fr.json
│   ├── db
│   └── expressions
│       ├── en.json
│       └── fr.json
├── `test`
│   └── youtube.spec.js
├── README.md
├── \_\_init\_\_.py
├── version.txt
└── youtube.py
:::

- `packages/videodownloader/config/config.json`: WIP...
- `packages/videodownloader/config/config.sample.json`: WIP...
- `packages/videodownloader/data`: WIP...

WIP...

## Modules

**Modules are the skills of Leon**. When Leon understands what you told him, he triggers a module and returns you the output of that module.
Each module has its own purpose and its own configuration. Do not hesitate to browse the [packages list](https://github.com/leon-ai/leon/tree/develop/packages) to understand their goals.

Today, modules are written in Python but in the future they could also support other languages thanks to the [bridges](/bridges.md).

### Create a Module

::: tip
Creating a module is one of the best way to contribute in Leon! Before doing that, please make sure you review [this document](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3
:::

Each module:
- Is included in a package (e.g. `packages/{PACKAGE NAME}/{MODULE NAME}.py`).
- Has its own version (e.g. WIP...).
- Has its own configuration (e.g. WIP...).
- Has its own dataset (e.g. WIP...).
- Has its own test (e.g. WIP...).

If your module does not correspond to an existing package, then feel free to create a new package.
To do so, choose a package name and make sure it follows the [package directory structure](#directory-structure).

#### Naming Convention

WIP...

#### Database

WIP...

#### Utils

WIP...

#### Outputs

WIP...

### Test a Module

Mention about inline command (execution) and how to write a unit test for the module.

WIP...

## Translations

Each translation has its own confidence, etc.

- Expressions, WIP...
- Answers, WIP..
