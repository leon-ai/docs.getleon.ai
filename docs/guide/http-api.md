---
slug: /http-api
sidebar_position: 9
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

| Method | URL               | Header                                                       | Body data |
| ------ | ----------------- | ------------------------------------------------------------ | --------- |
| `POST` | `/api/core/query` | - `Content-Type: application/json`<br />- `x-api-key: {LEON_HTTP_API_KEY}` | `query`   |

#### Example

```bash title="Request"
# Endpoint
POST http://localhost:1337/api/core/query

# Headers
Content-Type: application/json
x-api-key: 72aeb5ba824580963114481144385d7199c106fc

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

By default, every module action is exposed over HTTP. Leon automatically translates actions to HTTP endpoints.

:::tip Tip
You can find the generated endpoints in the `core/pkgs-endpoints.json` file.

:::

... by default every module will be exposed over HTTP. However if a module requires some specific inputs, module developers need to support it...

### Endpoints

...

## For Modules Developers

