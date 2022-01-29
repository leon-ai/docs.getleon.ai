---
slug: /http-api
sidebar_position: 9
---

# HTTP API

With the HTTP API, you can request [actions](glossary#actions) over the HTTP protocol and also provide queries to Leon from external services.

That means you can **easily communicate with Leon from any third-party** such as Discord, Signal, Telegram, Messenger and so on...

Example of scenario:

1. You send a command on Discord. It could be "!query hello".
2. Your Discord bot catch it and forward "hello" to your Leon server.
3. Leon executes the greeting module and returns the response.
4. You handle the response and your Discord bot display it on Discord.

Leon exposes two types of HTTP endpoints: the query endpoint and actions endpoint.

## The Query Endpoint

Via this endpoint, Leon handles the string you send (query) and then executes the targeted module based on his understanding.

### Endpoint

TABLE endpoint...
POST /query params
Output example...

### Options

## Actions Endpoints

... by default every module will be exposed over HTTP. However if a module requires some specific inputs, module developers need to support it...

### Endpoints

### Options
