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

- [`packages/videodownloader`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader): package name.
- `packages/videodownloader/config/config.json`: package configuration. It contains the configuration for each module.
- [`packages/videodownloader/config/config.sample.json`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/config/config.sample.json): sample configuration file. This file is copied during the setup to generate the file above.
- [`packages/videodownloader/data/answers`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/data/answers): folder containing answers translations of each module.
- [`packages/videodownloader/data/db`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/data/db): folder containing the package database.
- [`packages/videodownloader/data/expressions`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/data/expressions): folder containing understanding dataset of each module. Those dataset are used to train the understanding model.
- [`packages/videodownloader/test`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/test): folder containing unit tests of each module.
- [`packages/videodownloader/README.md`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/README.md): file containing package/modules purposes.
- [`packages/videodownloader/__init__.py`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/__init__.py): empty file allowing to load the package as a Python package.
- [`packages/videodownloader/version.txt`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/version.txt): file containing the package version.
- [`packages/videodownloader/youtube.py`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/youtube.py): YouTube module.

Each package:
- Has its own version.
- Has its own configuration (for each module).
- Has its own dataset (for each module).
- Has its own tests (for each module).

### Versioning

- Leon's packages follow the [SemVer](https://semver.org).
- Each new module increases the *MINOR* version number of a package *(e.g. 1.0.0 -> 1.1.0)*.
- Each time a *MAJOR* or *MINOR* version number of a package is increased, then increase the *MINOR* one of the whole project *(e.g. 1.0.0 -> 2.0.0 | 1.1.0 -> 1.1.0)*.
- Each time a *PATCH* version number of a package is increased, then increase the *PATCH* version number of the whole project *(e.g. 1.0.0 -> 1.0.1 -> 1.0.1)*.

## Modules

**Modules are the skills of Leon**.

When Leon understands what you told him, he:
1. Triggers a module.
2. Do the module job.
3. Returns you the output of that module.

Each module has its own purpose and its own configuration. Do not hesitate to browse the [packages list](https://github.com/leon-ai/leon/tree/develop/packages) to understand their goals.

Today, modules are written in Python but in the future they could also support other languages thanks to the [bridges](/bridges.md).

### Configuration

Let's take the [*Video Downloader* package](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader) again as example.
```json
{
  "youtube": {
    "api_key": "YOUR_GOOGLE_API_KEY",
    "playlist_id": "PLAYLIST_ID",
    "options": {
      "synchronization": {
        "enabled": true,
        "method": "direct",
        "email": ""
      }
  	}
  }
}
```
> *`packages/videodownloader/config/config.json`*

In each package configuration file, you can add new keys/value as much as you want.

In this example, they keys `api_key` and `playlist_id` have been added to the *YouTube* module configuration.
It allows the module to pick the values to request the YouTube API.

You can add any new key/value you want when you create a module. To have access to this file, you can use the [utils.config(key)](https://github.com/leon-ai/leon/blob/develop/bridges/python/utils.py) function to access them.

::: tip
Do not hesitate to take a look at the other modules.
:::

### Dataset

WIP...

### Translations

Each translation has its own confidence, etc.

- Expressions, WIP...
- Answers, WIP..

## Create a Module

::: tip
Creating a module is one of the best way to contribute in Leon! Before doing that, please make sure you review [this document](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3

Don't hesitate to [open an issue](https://github.com/leon-ai/leon/issues/new/choose) if you have any questions.
:::

Each module is included in a package *(e.g. `packages/{PACKAGE NAME}/{MODULE NAME}.py`)*.

If your module does not correspond to an existing package, then feel free to create a new package.
To do so, choose a package name and make sure it follows the [package directory structure](#directory-structure).

### Naming Convention

WIP...

### Persistent Data

Leon uses [TinyDB](https://github.com/msiemens/tinydb) to deal with package databases. Each package can have its own database and the database can be managed by modules.

WIP...

### Utils

Utils functions are available in [bridges/python/utils.py](https://github.com/leon-ai/leon/blob/develop/bridges/python/utils.py).

To use the following functions, do not forget to import the Python utils module at the beginning of your Leon's module:

```python
import utils

# utils.myFunc()
```

#### translate(code, d = { })

Description...

- `code`: WIP...
- `d`: WIP...

```python
utils.translate(.....)
```

#### WIP...

List all the functions here with a description + usage.


Access config file, db

WIP...

::: tip
You can also contribute by adding new functions here to make the module creation even better.
:::

### Outputs

WIP...

## Test a Module

Mention about inline command (execution) and how to write a unit test for the module.

WIP...
