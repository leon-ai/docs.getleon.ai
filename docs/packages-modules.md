# Packages & Modules

Modules are the skills of Leon, this is thanks to them Leon is able to do things according to what you say. In this section you will have a deeper look into modules.

## Packages

Packages contain an infinity of modules. A package is nothing more than a **folder containing modules**, you can consider them as a category of modules.

> E.g. the *[Checker](https://github.com/leon-ai/leon/tree/develop/packages/checker)* package contains modules such as the *[Is It Down](https://github.com/leon-ai/leon/blob/develop/packages/checker/isitdown.py)* one because this package includes modules related to the "checking" purposes.

The full packages list is available [here](https://github.com/leon-ai/leon/tree/develop/packages).

### Directory Structure

Packages are listed in the `packages` directory. Let's take the [*Video Downloader*](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader) package as example.

Note the **package name must be lowercase and in English**.

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
- `packages/videodownloader/config/config.json`: package configuration. It contains the configuration of each of its module.
- [`packages/videodownloader/config/config.sample.json`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/config/config.sample.json): sample configuration file. This file is copied during the setup to generate the file above.
- [`packages/videodownloader/data/answers`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/data/answers): folder containing answers translations of each module.
- [`packages/videodownloader/data/db`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/data/db): folder containing the package database.
- [`packages/videodownloader/data/expressions`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/data/expressions): folder containing understanding dataset of each module. Those dataset are used to train the understanding model.
- [`packages/videodownloader/test`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/test): folder containing tests of each module.
- [`packages/videodownloader/README.md`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/README.md): file containing package/modules purposes.
- [`packages/videodownloader/__init__.py`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/__init__.py): empty file allowing to load the package as a Python package.
- [`packages/videodownloader/version.txt`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/version.txt): file containing the package version.
- [`packages/videodownloader/youtube.py`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/youtube.py): *YouTube* module.

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

Let's take the [*Video Downloader*](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader) package again as example.
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

In each package configuration file, you can add new keys/value as much as you want while you are creating a module.

In this example, the keys `api_key` and `playlist_id` have been added to the *YouTube* module configuration.
It allows the module to pick the values to request the YouTube API.

To have access to these properties, you can use the [utils.config(key)](#config-key) function.

Options are used when it needs interaction between a module and the core. They can be used for the [synchronizer](/configuration.md#synchronizer) for example.

::: tip
Do not hesitate to take a look at the other modules to have a better understanding.
:::

### Dataset & Translations

To reply and understand you, Leon needs his dataset and translations.
Indeed, his dataset are divided into two parts: [expressions](/glossary.md#expressions) and [answers](/glossary.md#answers).

- Every module has their own expressions and answers.
- Each of these dataset has their own translations.
- Translations are represented by the filename of these dataset, such as `en.json`, `fr.json`, etc.

#### Expressions

Expressions are the data used to train the Leon's understanding. When you execute the [training script](/scripts.md), all of the expressions of each module are browsed to generate the [classifier](/glossary.md#classifier).

Note that each module expression has its own confidence.

> ```json
> {
>   "whoami": [
>     "Who are you?",
>     "How they call you?",
>     "What's your name?",
>     "Tell me who you are",
>     "Introduce yourself"
>   ]
> }
> ```

> E.g. [*Who Am I* module English expressions](https://github.com/leon-ai/leon/blob/develop/packages/leon/data/expressions/en.json) belonging to the *Leon* package.

##### Fallbacks

Despite the expressions you wrote, it might be possible Leon still does not understand some of them. This is where fallbacks jump in the game.

In the [`core/langs.json`](https://github.com/leon-ai/leon/blob/develop/core/langs.json) file, you can find the list of the supported languages with several properties:

- `short`: the short language code.
- `min_confidence`: the minimum confidence of the Leon's comprehension. If the confidence is smaller than the given one, Leon replies you he is not sure about what you said. 
- `fallbacks`: force the module selection. Use the `words` key to determine on which words you want Leon pick up a module. And use the `package` and `module` keys to define which module should be executed on the given words.

#### Answers

Answers are the data used by Leon to provide you results binded with the modules outputs. In addition, answers contains sub properties to have different kind of answers per module.

> ```json
> {
>   "greeting": {
>     "default": [
>       "Hello there!"
>     ],
>     "morning_good_day": [
>       "Good morning, I hope your day will be full of joy and productivity!"
>     ],
>     "morning": [
>       "Good morning!"
>     ],
>     "too_late": [
>       "Hello! I'm feeling grateful you still talk to me, but you should get some sleep now."
>     ]
>   }
> }
> ```

> E.g. part of the [*Greeting* module English answers](https://github.com/leon-ai/leon/blob/develop/packages/leon/data/answers/en.json) belonging to the *Leon* package.

## Create a Module

::: tip
- Creating a module is one of the best way to contribute in Leon! Before doing that, please make sure you review [this document](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3
- For example, you could think about creating a todo list module *(for such module, the Leon's NLP should be improved)*. Check out the [roadmap](https://roadmap.getleon.ai) to see what is in the pipeline.
- Don't hesitate to [open an issue](https://github.com/leon-ai/leon/issues/new/choose) if you have any questions.
:::

Each module is included in a package *(e.g. `packages/{PACKAGE NAME}/{MODULE NAME}.py`)*.

### Steps

Here are the basics steps to create a module. For those steps, we will take a tweets grabber module as example.

#### 1. Define the Purpose

- I want to create a tweets grabber module. When I say or write:
```
Grab my latest tweets
```
- I want Leon tells me my 5 latest tweets with the stats of each.
- It seems this module does not correspond to any existing package (category). So I create the *Twitter* package by creating the `packages/twitter` folder.
- To do so, I make sure it follows the [package directory structure](#directory-structure) and contains the required files mentioned in that structure.

#### 2. Name Your Module

- I choose to name my module `Tweets Grabber`.

#### 3. Write the Code

- To request the Twitter API, I need API credentials. So I set the Twitter API key(s) in the `packages/twitter/config/config.json` file I previously created in the step 1.
- In addition, I create the `packages/twitter/tweetsgrabber.py` file, define my module function and I write the code for my module.
- While I'm writing the code, from the project root directory I use the following command:
```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py en twitter tweetsgrabber "Grab my latest tweets"
# It executes my module on the fly
```

#### 4. Write the Tests

- Now that I'm satisfied with my module, I create the `packages/twitter/test/tweetsgrabber.spec.js` file.
- I write my [module tests](#test-a-module) in that file.

#### 5. Share

- I share my module to the world by [contributing](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md).

### Naming Convention

- The module filename must contains only lowercase alphabetic characters and must use the English language.
> E.g. *Meaning of Life* module filename: `meaningoflife.py`
- The module function name must be the same as the filename.
> E.g. *Meaning of Life* function: `def meaningoflife(string):`

### Module Function

In the module file, you must name the module function by the name of the module. This function takes the input string (query) as parameter.

```
What is the meaning of life?
```

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-

import utils

def meaningoflife(string):
	"""Leon says what's the meaning of life"""
	
	# string: What is the meaning of life?

	return utils.output('end', 'meaning_of_life', utils.translate('meaning_of_life'))
```

### Persistent Data

Leon uses [TinyDB](https://github.com/msiemens/tinydb) to deal with packages databases. Each package can have its own database and the database is managed by modules.

For more information, you can refer to the:
- [utils.db()](#db-dbtype-tinydb) function.
- [TinyDB](https://tinydb.readthedocs.io) documentation.
- [YouTube module](https://github.com/leon-ai/leon/blob/develop/packages/videodownloader/youtube.py) as example.

### Installing Third Party Python Packages

Leon runs in a virtual environment to ensure that the project's packages/dependencies doesn't conflict with the ones installed system wide.

To install third party packages, kindly follow these steps;

1. Open a terminal window at the `bridges/python` directory.
2. Perform `pipenv install {package-name}={package-version}`.
3. Import the newly installed package in the required module file with `import {package-name}`.

Kindly note that `{package-name}` and `{package-version}` are placeholders. They should be replaced with the name and version of the actual package you wish to install.

### Outputs

Every module does something, and the outputs allow the core to understand what the module did and what is the state of its execution.
This is thanks to the outputs that Leon knows what to do next.

The core understands two types of outputs:
- `inter`, which are the intermediate outputs. You can have **as many intermediate outputs as you want**.
- `end`, which is the final output. You must **only have one final output**, that allows Leon to know that the module execution is done.

Outputs are represented by the [utils.output()](#output-type-code-speech) function.

## Test a Module

### End-to-End

Modules come with their own tests. They are represented by a unique file for every module that can be found at: `packages/{PACKAGE NAME}/test/{MODULE NAME}.spec.js`.

As you may noticed, JavaScript is used to test modules because the core is written in JavaScript and we do end-to-end tests by processing a query to the NLU. Then the Leon's brain is executed and returns the output. This is the output, especially the code, that you need to consider.

Leon uses [Jest](https://jestjs.io/) as a testing framework.

Here are two tests examples of the *Is It Down* module:

```js
// You must use describe() with the following name syntax: {PACKAGE NAME}:{MODULE NAME}
describe('checker:isitdown', async () => {
  // Each test must be represented by the test()
  test('detects invalid domain name', async () => {
    global.nlu.brain.execute = jest.fn()
    // The string you want to test
    global.nlu.process('Check if github is up')

    const [obj] = global.nlu.brain.execute.mock.calls
    await global.brain.execute(obj[0])

	// Grab the code and verify if it is the expected one
    expect(global.brain.finalOutput.code).toBe('invalid_domain_name')
  })

  test('detects down domain name', async () => {
    global.nlu.brain.execute = jest.fn()
    global.nlu.process('Check if fakedomainnametotestleon.fr is up')

    const [obj] = global.nlu.brain.execute.mock.calls
    await global.brain.execute(obj[0])

    expect(global.brain.interOutput.code).toBe('down')
    expect(global.brain.finalOutput.code).toBe('done')
  })
})
```
*These tests can be found in [`packages/checker/test/isitdown.spec.js`](https://github.com/leon-ai/leon/blob/develop/packages/checker/test/isitdown.spec.js)*

Once you finished to write your tests, you can execute the following command to run them:

```bash
npm run test:module {PACKAGE NAME}:{MODULE NAME}

# E.g.
npm run test:module checker:isitdown
```

### On The Fly

To test the behavior of your module while you are creating it, you can run this following command **from the project root**:

```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py {LANG} {PACKAGE NAME} {MODULE NAME} "{QUERY}"

# E.g.
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py en checker isitdown "Check github.com is up"
```

## Utils Functions

Utils functions are available in [bridges/python/utils.py](https://github.com/leon-ai/leon/blob/develop/bridges/python/utils.py).

To use the following functions, do not forget to import the Python *utils* module at the beginning of your Leon's module:

```python
import utils

# utils.myFunc()
```

::: tip
You can also [contribute](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) by improving these functions or by adding new ones to make the modules creation even better.
:::

### translate(key, d = { })

Randomly pick up a module answer from the `packages/{PACKAGE NAME}/data/answers/{LANG}.json` file via the given key, do string interpolation via the given data object and return the plain string answer.

- `key`: module answer key to pick up the right string.
- `d`: data object for string interpolation.

```json
{
  "greeting": {
    "morning_good_day": [
      "Good morning, I wish you a very pleasant day!",
      "Good morning, I hope your day will be full of joy and productivity!"
    ],
    "funny_hello": [
      "%fun_hello%, yes I try to be fun here."
    ]
  }
}
```

```python
utils.translate('morning_good_day')

# >> Good morning, I wish you a very pleasant day!
# OR >> Good morning, I hope your day will be full of joy and productivity!
```

```python
fun_hello = 'Heeey'
utils.translate('funny_hello', { 'fun_hello': fun_hello })

# >> Heeey, yes I try to be fun here.
```

### output(type, code, speech = '')

Communicate the module data to the core.

- `type` (inter|end): output type to inform the core if the module execution is done or not. The `end` type must appears one time.
- `code`: output code to provide an additional information about the type of output. Usually used by the modules tests.
- `speech`: plain string answer.

```python
utils.output('inter', 'just_a_code', 'This is an intermediate answer.')

# >> <object output>

utils.output('end', 'done', utils.translate('done_answer'))

# >> <object output>
```

### finddomains(string)

Find one or multiple domain name(s) substring from a string.

- `string`: input string.

```python
utils.finddomains('Go on github.com and mozilla.org please')

# >> ['github.com', 'mozilla.org']
```

### http(method, url)

Send HTTP request with the user-agent `Leon/{VERSION NUMBER}`. It uses the [Request](http://docs.python-requests.org) Python library.

- `method`: HTTP method.
- `url`: URL to request.

```python
utils.http('GET', 'https://getleon.ai')

# >> cf. http://docs.python-requests.org/en/master/user/advanced/#request-and-response-objects
```

### config(key)

Get a module configuration from the `packages/{PACKAGE NAME}/config/config.json` file.

- `key`: module configuration key.

```json
{
  "anawesomemodule": {
    "api_key": "my-super-api-key",
    "options": {}
  }
}
```

```python
utils.config('api_key')

# >> my-super-api-key
```

### info()

Returns information from the current query.

```python
utils.info()

# >> { 'lang': 'en', 'package': 'checker', 'module': 'isitdown' }
```

### createdldir()

Create the downloads folder of the current module. When Leon needs to download something, it is saved into: `downloads/{PACKAGE NAME}/{MODULE NAME}`.

```python
utils.createdldir()

# >> <download module folder path>
```

### db(dbtype = 'tinydb')

Create a new dedicated database for a specific package.

- `dbtype` (tinydb): database type. Only supports [TinyDB](https://tinydb.readthedocs.io) today.

```python
utils.db()

# >> { 'db': db_instance, 'query': Query, 'operations': operations }
```
