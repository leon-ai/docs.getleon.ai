---
slug: /packages-modules
sidebar_position: 9
---

# Packages & Modules

Modules are the skills of Leon, this is thanks to them Leon is able to do things according to what you say. In this section you will have a deeper look into modules.

## Packages

Packages contain an infinity of modules. A package is nothing more than a **folder containing modules**, you can consider them as a category of modules.

> E.g. the *[Checker](https://github.com/leon-ai/leon/tree/develop/packages/checker)* package contains modules such as the *[Is It Down](https://github.com/leon-ai/leon/blob/develop/packages/checker/isitdown.py)* one because this package includes modules related to the "checking" purposes.

The full packages list is available [here](https://github.com/leon-ai/leon/tree/develop/packages).

### Directory Structure

Packages are listed in the `packages` directory. Let's take the [*Video Downloader*](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader) package as example.

Note the **package name must be lowercase and in English**.

```
videodownloader
├── config
│   ├── config.json
│   └── config.sample.json
├── data
│   ├── answers
│   │   ├── en.json
│   │   └── fr.json
│   ├── db
│   └── expressions
│       ├── en.json
│       └── fr.json
├── test
│   └── youtube.spec.js
├── README.md
├── __init__.py
├── version.txt
└── youtube.py
```

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

**Modules are the skills of Leon**. They contain one or several [action(s)](#actions-module-functions) to be able to accomplish specific job(s).

When Leon understands what you told him, he:
1. Triggers a module action.
2. Do the job.
3. Returns you the output of that execution.

Each module has its own purpose and its own configuration. Do not hesitate to browse the [packages list](https://github.com/leon-ai/leon/tree/develop/packages) to understand their goals.

Today, modules are written in Python but in the future they could also support other languages thanks to the [bridges](/bridges).

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

Options are used when it needs interaction between a module and the core. They can be used for the [synchronizer](/configuration#synchronizer) for example.

:::tip Tip
Do not hesitate to take a look at the other modules to have a better understanding.
:::

### Dataset & Translations

To reply and understand you, Leon needs his dataset and translations.
Indeed, his dataset are divided into two parts: [expressions](/glossary#expressions) and [answers](/glossary#answers).

- Every module has their own expressions and answers.
- Each of these dataset has their own translations.
- Translations are represented by the filename of these dataset, such as `en.json`, `fr.json`, etc.

#### Expressions

Expressions are the data used to train the Leon's understanding. When you execute the [training script](/scripts), all of the expressions of each module are browsed to generate the [classifier](/glossary#classifier).

Expressions are wrapped inside a module [action](#actions-module-functions). This is how Leon understands which action he needs to do.

Note that each expression of each module action has its own confidence.

> ```json
> {
>   "meaningoflife": {
>     "run": {
>       "expressions": [
>         "What is the meaning of life?",
>         "Tell me what is the meaning of life"
>       ]
>     }
>   }
> }
> ```

> E.g. [*Who Am I* module English expressions](https://github.com/leon-ai/leon/blob/develop/packages/leon/data/expressions/en.json) belonging to the *Leon* package. These expressions are wrapped inside the `run` action.

##### Fallbacks

Despite the expressions you wrote, it might be possible Leon still does not understand some of them. This is where fallbacks jump in the game.

In the [core/langs.json](https://github.com/leon-ai/leon/blob/develop/core/langs.json) file, you can find the list of the supported languages with several properties:

- `short`: the short language code.
- `min_confidence`: the minimum confidence of the Leon's comprehension. If the confidence is smaller than the given one, Leon replies you he is not sure about what you said.
- `fallbacks`: force the module selection. Use the `words` key to determine on which words you want Leon pick up a module. And use the `package`, `module` and `action` keys to define which module action should be executed on the given words.

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

##### HTML

It is possible to use HTML in your answers.

> ```json
> {
>   "github": {
>     "list_element": [
>       "<li>#%rank%. <a href=\"%repository_url%\" target=\"_blank\">%repository_name%</a> created by <a href=\"%author_url%\" target=\"_blank\">%author_username%</a> with %stars_nb% new stars.</li>"
>     ]
>   }
> }
> ```

> E.g. part of the [*GitHub* module English answers](https://github.com/leon-ai/leon/blob/develop/packages/trend/data/answers/en.json) belonging to the *Trend* package.

## Create a Module

:::tip Tip
- Creating a module is one of the best way to contribute in Leon! Before doing that, please make sure you review [this document](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) ❤️
- For example, you could think of creating a To-Do List module *(although [this one already exists](https://github.com/leon-ai/leon/tree/develop/packages/calendar#to-do-list))*. Check out the [roadmap](https://roadmap.getleon.ai) to see what is in the pipeline.
- Don't hesitate to [open an issue](https://github.com/leon-ai/leon/issues/new/choose) if you have any questions.
:::

Each module is included in a package *(e.g. `packages/{PACKAGE NAME}/{MODULE NAME}.py`)*.

### Steps

Here are the basics steps to create a module. For those steps, we will take a tweets grabber module as example.

#### 1. Define the Purpose(s)

- I want to create a tweets grabber module. When I say or write:
```
Grab my latest tweets
```
- I want Leon tells me my 5 latest tweets with the stats of each.
- It seems this module does not correspond to any existing package (category). So I create the *Twitter* package by creating the `packages/twitter` folder.
- To do so, I make sure it follows the [package directory structure](#directory-structure) and contains the required files mentioned in that structure.

:::tip Tip
If your module is more advanced and must contain multiple purposes, do not hesitate to create several [actions](#actions-module-functions).
:::

#### 2. Name Your Module

- I choose to name my module `Tweets Grabber`.

#### 3. Write the Code

- To request the Twitter API, I need API credentials. So I set the Twitter API key(s) in the `packages/twitter/config/config.json` file I previously created in the step 1.
- In addition, I create the `packages/twitter/tweetsgrabber.py` file, define my [action(s)](#actions-module-functions) and I write the code of my module.
- While I'm writing the code, I [edit `server/src/query-object.sample.json`](#query-object) and from the project root directory I use the following command:
```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py server/src/query-object.sample.json
# It executes my module on the fly
```

#### 4. Write the Tests

- Now that I'm satisfied with my module, I create the `packages/twitter/test/tweetsgrabber.spec.js` file.
- I write my [module tests](#test-a-module) in that file.

#### 5. Shortly Explain How To Use

- In the `packages/twitter/README.md` file, I add a short description of the purpose of my module.
- I briefly explain how to use the module (which kind of sentences can we say, if there is any configuration to do, etc.).

#### 6. Share

- I share my module to the world by [contributing](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md).

### Actions (Module Functions)

In the module file, you must add an action (function) that will be the entry point of the execution. An action takes the input string (query) and the [entities](#entities) as parameters.

When you have only one action in your module, the usual action name is `run`:

```bash
# Query the "run" action
What is the meaning of life?
```

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-

import utils

def run(string, entities):
  """Leon says what's the meaning of life"""
	
  # string: What is the meaning of life?
  # entities: There is none here

  return utils.output('end', 'meaning_of_life', utils.translate('meaning_of_life'))
```

When you have several actions in your modules:

```bash
# Query the "create_list" action
Create the shopping list

# Query the "add_todo" action
Add potatoes to my shopping list
```

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-

import utils

def create_list(string, entities):
  """Leon creates a to-do list"""
	
  # Your awesome code here...
  
  return utils.output('end', 'list_created', utils.translate('list_created'))
  
def add_todo(string, entities):
  """Leon add todos to a list"""
	
  # Your awesome code here...
  
  return utils.output('end', 'todo_added', utils.translate('todo_added'))
```

:::tip Tip
Don't forget that Leon knows which action he must execute thanks to the [expressions](#expressions) you define.
:::

### Naming Convention

- The module filename must contain only lowercase alphabetic characters and must use the English language.
> E.g. *Meaning of Life* module filename: `meaningoflife.py`
- Actions names must use snake_case (lowercase alphabetic characters and `_` only) and must use the English language.
> E.g. *To-Do List* module actions: `create_list`, `add_todo`, `complete_todo`, etc.

### Query Object

Every time you communicate to Leon, he will creates a temporary query object JSON file with the following properties:
- `lang`: short code of the used language.
- `package`: used package name.
- `module`: used module name.
- `action`: used action name.
- `query`: your sentence.
- `entities`: an array of the entities Leon has extracted from your sentence. An entity can be whatever you define as an entity (custom entity) or it can be a built-in entity such as a date duration, a number, a domain name, etc.

The [server/src/query-object.sample.json](https://github.com/leon-ai/leon/blob/develop/server/src/query-object.sample.json) file is here to let you execute and test the behavior of your module code [on the fly](#on-the-fly) during its creation. Edit it according to your module properties.

### Entities

Entities are chunks that Leon extracts from your sentences. These entities are shared to your actions so you can manipulate them to give more sense to your modules.

There are different types of entities that are listed below:

#### Built-In Entities

Built-in entities are the ones already included in Leon. Leon extracts entities from queries automatically.

The full list is available [here](https://github.com/axa-group/nlp.js/blob/master/docs/v3/builtin-entity-extraction.md).

:::tip Tip
Feel free to see some examples to understand how built-in entities are used. Those are perfect examples:

- [packages/checker/isitdown.py](https://github.com/leon-ai/leon/blob/develop/packages/checker/isitdown.py)
- [packages/trend/github.py](https://github.com/leon-ai/leon/blob/develop/packages/trend/github.py)

As you can see, you can iterate over the entities to grab the information you need (domain names, dates, etc.).
:::

#### Custom Entities

Custom entities are the ones you define yourself according to specific use cases. You can create your own entities in the translations files located in: `packages/{PACKAGE NAME}/data/expressions/{LANG FILE}.json`. In that file, custom entities are included in the actions properties at the same level as the expressions.

They are represented by an array of objects:
```json
"entities": [
  {
    "type": "",
    "name": "",
    ...
  }
]
```

As you can see, a custom entity is made of a `type`, a `name` and more depending of its type.

> E.g. see the [*create_list* action entities](https://github.com/leon-ai/leon/blob/develop/packages/calendar/data/expressions/en.json) of the *To-Do List* module.

Custom entities have two types listed below:

##### Trim Entities

Trim entities allow you to cut/trim parts of the query to extract only the text you want. This is done thanks to these conditions:

- `{ "type": "between", "from": "", "to": "" }`
- `{ "type": "after", "from": "" }`
- `{ "type": "after_first", "from": "" }`
- `{ "type": "after_last", "from": "" }`
- `{ "type": "before", "to": "" }`
- `{ "type": "before_first", "to": "" }`
- `{ "type": "before_last", "to": "" }`

To illustrate that, let's say we are creating a *To-Do List* module. To do so, we will define a custom entity `list`.

When we have the following queries:
```
Create a shopping list
Create my shopping list
```
We want to extract the text `shopping` to associate it as a `list` entity. We use the `between` condition to catch what is between `a` or `my` and `list`:

```json
"entities": [
	{
    "type": "trim",
    "name": "list",
    "conditions": [
      {
        "type": "between",
        "from": "a",
        "to": "list"
      },
      {
        "type": "between",
        "from": "my",
        "to": "list"
      }
    ]
  }
]
```

In the module file `packages/{PACKAGE NAME}/todolist.py`:
```python
def create_list(string, entities):    
  # string: "Create a shopping list"
  # entities: [{'type': 'between', 'start': 9, 'end': 16, 'len': 8, 'accuracy': 1, 'sourceText': 'shopping', 'utteranceText': 'shopping', 'entity': 'list'}]
    
  print('entity name:', entities[0]['entity']) # entity name: list
  print('entity value:', entities[0]['sourceText']) # entity value: shopping
```

:::tip Tip
You can take a look at the real [*To-Do List* module](https://github.com/leon-ai/leon/blob/develop/packages/calendar/todolist.py) of the *Calendar* package.
:::

##### Regex Entities

Regex entities allow you to grab parts of the query via a regular expression.

Let's say we create a *Color Picker* module. To do so, we will define a regex entity `color`.

When we have the following query:
```
I like red and blue colors
```
We want to extract the strings `red` and `blue` to associate it as `color` entities. We use a regex to catch these colors:

```json
"entities": [
  {
    "type": "regex",
    "name": "color",
    "regex": "blue|yellow|red|pink|green"
  }
]
```

In the module file (`packages/{PACKAGE NAME}/colorpicker.py`):
```python
def run(string, entities):    
  # string: "I like red and blue colors"
  # entities: [{'start': 7, 'end': 10, 'accuracy': 1, 'sourceText': 'red', 'utteranceText': 'red', 'entity': 'color'}, {'start': 15, 'end': 19, 'accuracy': 1, 'sourceText': 'blue', 'utteranceText': 'blue', 'entity': 'color'}]
  
  print('entity name:', entities[0]['entity']) # entity name: color
  print('entity value:', entities[0]['sourceText']) # entity value: red
  print('entity name:', entities[1]['entity']) # entity name: color
  print('entity value:', entities[1]['sourceText']) # entity value: blue
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
2. Perform `pipenv install {PACKAGE NAME}=={PACKAGE VERSION}`. Note that it must use a specific package version.
3. Import the newly installed package in the required module file with `import {PACKAGE NAME}`.

Kindly note that `{PACKAGE NAME}` and `{PACKAGE VERSION}` are placeholders. They should be replaced with the name and version of the actual package you wish to install.

### Outputs

Every module does something, and the outputs allow the core to understand what the module did and what is the state of its execution.
This is thanks to the outputs that Leon knows what to do next.

The core understands two types of outputs:
- `inter`, which are the intermediate outputs. You can have **as many intermediate outputs as you want**.
- `end`, which is the final output. You must **only have one final output**, that allows Leon to know that the module execution is done.

Outputs are represented by the [utils.output()](#output-type-code-speech) function.

## Test a Module

### On The Fly

To test the behavior of your module while you are creating it, you can run this following command **from the project root**:

```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py server/src/query-object.sample.json
```

For example, for the Is It Down module the [query object](#query-object) file could look like that:

```json
{
  "lang": "en",
  "package": "checker",
  "module": "isitdown",
  "action": "run",
  "query": "Check if github.com and mozilla.org are up",
  "entities": [
    {
      "sourceText": "github.com",
      "utteranceText": "github.com",
      "entity": "url",
      "resolution": {
        "value": "github.com"
      }
    },
    {
      "sourceText": "mozilla.org",
      "utteranceText": "mozilla.org",
      "entity": "url",
      "resolution": {
        "value": "mozilla.org"
      }
    }
  ]
}
```

:::tip Tip
Don't forget to take a look at [this list](https://github.com/axa-group/nlp.js/blob/master/docs/v3/builtin-entity-extraction.md) to see how entities are formatted.
:::

### End-to-End

Modules come with their own tests. They are represented by a unique file for every module that can be found at: `packages/{PACKAGE NAME}/test/{MODULE NAME}.spec.js`.

As you may noticed, JavaScript is used to test modules because the core is written in JavaScript and we do end-to-end tests by processing a query to the NLU. Then the Leon's brain is executed and returns the output. This is the output, especially the codes that have been interpreted by your module that you need to consider.

Leon uses [Jest](https://jestjs.io/) as a testing framework.

Here are two tests examples of the *Is It Down* module:

```js
// You must use describe() with the following name syntax: {PACKAGE NAME}:{MODULE NAME}
describe('checker:isitdown', async () => {
  // Each test must be represented by the test()
  test('detects invalid domain name', async () => {
  	global.nlu.brain.execute = jest.fn()
  	// The string you want to test
  	await global.nlu.process('Check if github is up')
  
  	const [obj] = global.nlu.brain.execute.mock.calls
  	await global.brain.execute(obj[0])
  
    // Grab the accumulated codes and verify if they are the expected ones
  	expect(global.brain.finalOutput.codes).toIncludeSameMembers(['invalid_domain_name'])
  })

  test('detects down domain name', async () => {
  	global.nlu.brain.execute = jest.fn()
  	await global.nlu.process('Check if fakedomainnametotestleon.fr is up')
  
  	const [obj] = global.nlu.brain.execute.mock.calls
  	await global.brain.execute(obj[0])
  
  	expect(global.brain.finalOutput.codes).toIncludeSameMembers([
  	  'checking',
  	  'down',
  	  'done'
  	])
  })
})
```
*These tests can be found in [packages/checker/test/isitdown.spec.js](https://github.com/leon-ai/leon/blob/develop/packages/checker/test/isitdown.spec.js)*

Once you finished to write your tests, you can execute the following command to run them:

```bash
npm run test:module {PACKAGE NAME}:{MODULE NAME}

# E.g.
npm run test:module checker:isitdown
```

## Utils Functions

Utils functions are available in [bridges/python/utils.py](https://github.com/leon-ai/leon/blob/develop/bridges/python/utils.py).

To use the following functions, do not forget to import the Python *utils* module at the beginning of your Leon's module:

```python
import utils

# utils.myFunc()
```

:::tip Tip
You can also [contribute](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) by improving these functions or by adding new ones to make the modules creation even better.
:::

### getqueryobj()

Returns the query object.

```python
utils.getqueryobj()

# >> { 'id': '1560037280351-8cbc', 'lang': 'en', 'package': 'leon', 'module': 'whoami', 'action': 'run', 'query': 'Who are you?', 'entities': [] }
```

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

### http(method, url, headers = None)

Send HTTP request with the user-agent `Leon/{VERSION NUMBER}`. It uses the [Request](http://docs.python-requests.org) Python library.

- `method`: HTTP method.
- `url`: URL to request.
- `headers`: HTTP headers.

```python
utils.http('GET', 'https://getleon.ai')

# >> cf. https://docs.python-requests.org/en/master/user/advanced/#request-and-response-objects

# Request with custom headers
utils.http('POST', 'https://an-awesome-api.com', { 'Authorization': 'Bearer xxx' })

# >> cf. https://docs.python-requests.org/en/master/user/advanced/#request-and-response-objects
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
