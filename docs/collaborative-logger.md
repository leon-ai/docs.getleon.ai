# Collaborative Logger

The collaborative logger helps to improve the Leon's understanding. For each query you will submit to Leon, if the collaborative logger is enabled, it sends an HTTP request to an external Leon's server.

Here are the data that Leon store:

- His version number.
- Query (string).
- Language.
- Package that Leon picked up.
- Module that Leon picked up.
- His confidence about his understanding.
- Current timestamp.

The collaborative logger is **enabled by default**. If you wish to disable it, simply set the environment variable `LEON_LOGGER` in your `.env` file to `FALSE` and rerun the server.

::: tip
If you wish to dig into the code, you can find the:

- Part of the code which interacts with the collaborative logger in the [Leon's NLU](https://github.com/leon-ai/leon/blob/develop/server/src/core/nlu.js).
- Collaborative logger source code on [this GitHub repository](https://github.com/leon-ai/leon-logger).
:::
