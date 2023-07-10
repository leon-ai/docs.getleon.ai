---
slug: /http-api
sidebar_position: 11
---

# HTTP API

With the HTTP API, you can request [actions](glossary#actions) over the HTTP protocol and also provide queries to Leon from external services.

That means you can **easily communicate with Leon from any third-party** such as Discord, Signal, Telegram, Messenger and so on...

Example of scenario:

1. You send a command on Discord. It could be "!query hello".
2. Your Discord bot catches it and forward "hello" to your Leon server.
3. Leon executes the greeting module and returns the response.
4. You handle the response and your Discord bot displays it on Discord.

Leon exposes two types of HTTP endpoints: **the query endpoint** and **actions endpoint**.

:::tip Tip
By default, Leon is exposed over HTTP. You can disable it from the  `.env` file:

```
LEON_OVER_HTTP=false
```

:::

## HTTP API Key

To request Leon over HTTP, you need to provide the HTTP API key. This key can be found in the `.env` file with the environment variable `LEON_HTTP_API_KEY`.

### Generate a New Key

The HTTP API key is automatically generated during the setup of Leon. If you need to generate a new key, please run the following command:

```bash
npm run generate:http-api-key
```

## The Query Endpoint

Via this endpoint, Leon handles the string you send (query) and then executes the targeted module based on his understanding.

### Endpoint

| Method | URL          | Header                                                       | Body data |
| ------ | ------------ | ------------------------------------------------------------ | --------- |
| `POST` | `/api/query` | - `Content-Type: application/json`<br />- `X-API-Key: {LEON_HTTP_API_KEY}` | `query`   |

#### Example

```bash title="Request"
# Endpoint
POST http://localhost:1337/api/query

# Headers
Content-Type: application/json
X-API-Key: 72aeb5ba824580963114481144385d7199c106fc

# Body data
{ query: "Hello" }
```

```json title="Response"
{
  "processingTime": 1891,
  "queryId": "1643801044192-ei4v",
  "lang": "en",
  "query": "Hello",
  "entities": [],
  "classification": {
    "package": "leon",
    "module": "greeting",
    "action": "run",
    "confidence": 1
  },
  "speeches": [
    "Hello there!"
  ],
  "executionTime": 1491,
  "nluProcessingTime": 400,
  "success": true
}
```

## Actions Endpoints

By default, every module action is exposed over HTTP. Leon automatically translates actions into HTTP endpoints based on the configuration.

:::tip Tip
You can find the generated endpoints in the `core/pkgs-endpoints.json` file.

:::

### Endpoints

| Method                | URL                                  | Header                                                       |
| --------------------- | ------------------------------------ | ------------------------------------------------------------ |
| - `POST`<br />- `GET` | `/api/p/{PACKAGE}/{MODULE}/{ACTION}` | - `Content-Type: application/json`<br />- `X-API-Key: {LEON_HTTP_API_KEY}` |

#### Example 1

Let's try an example with the "run" action of the "greeting" module.

```bash title="Information"
Package: leon
Module: greeting
Action: run
```

```bash title="Request"
# Endpoint
GET http://localhost:1337/api/p/leon/greeting/run
# The GET method is used because no body data is required

# Headers
Content-Type: application/json
X-API-Key: 72aeb5ba824580963114481144385d7199c106fc
```

```json title="Response"
{
  "queryId": "1643805643221-7keq",
  "lang": "en",
  "query": "",
  "entities": [],
  "classification": {
    "package": "leon",
    "module": "greeting",
    "action": "run",
    "confidence": 1
  },
  "speeches": [
    "Hi! What's up?!"
  ],
  "executionTime": 1518,
  "success": true
}
```

#### Example 2

Now let's try another example with an action module that requires parameters/entities to work.

Some actions require specific inputs (entities) and developers of these actions should add support to fully expose them over HTTP.

To know what parameters to put in the body data, go to the `packages/{PACKAGE}/data/expressions/{LANG}.json` file.

```bash title="Information"
Package: checker
Module: isitdown
Action: run
```

```bash title="Request"
# Endpoint
POST http://localhost:1337/api/p/checker/isitdown/run
# The POST method is used because parameters/entities are needed

# Headers
Content-Type: application/json
X-API-Key: 72aeb5ba824580963114481144385d7199c106fc

# Body data
{ "url": [{ "value": "github.com" }, { "value": "twitch.tv" }] }
```

```json title="Response"
{
  "queryId": "1643807089175-tppl",
  "lang": "en",
  "query": "",
  "entities": [
    {
      "entity": "url",
      "resolution": {
        "value": "github.com"
      }
    },
    {
      "entity": "url",
      "resolution": {
        "value": "twitch.tv"
      }
    }
  ],
  "classification": {
    "package": "checker",
    "module": "isitdown",
    "action": "run",
    "confidence": 1
  },
  "speeches": [
    "I am now requesting Github.",
    "Github is up.",
    "I'm checking Twitch state.",
    "Twitch is up.",
    ""
  ],
  "executionTime": 4388,
  "success": true
}
```

## Configuration

### Options

These options can be configured at the action level in the `packages/{PACKAGE}/data/expressions/{LANG}.json` file.

| Key                 | Description                                                | Default                                               |
| ------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| `http_api.method`   | HTTP method of the action.                                 | `GET` if no entity<br />`POST` if an entity is needed |
| `http_api.timeout`  | Execution time before timeout (in ms).                     | `60000`                                               |
| `http_api.disabled` | Disable a specific action.                                 | `false`                                               |
| `http_api.entities` | Entities that can be passed as parameters in the body data | `[]`                                                  |

:::tip Tip

- For entities, you can take example on [`packages/trend/data/expressions/en.json`](https://github.com/leon-ai/leon/blob/master/packages/trend/data/expressions/en.json).
- For a full list of the entities format, please [check here](https://github.com/axa-group/nlp.js/blob/master/docs/v3/builtin-entity-extraction.md).

:::
