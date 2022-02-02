---
slug: /offline
sidebar_position: 6
---

# Offline

In this section, you will see how to setup the Leon's offline nodes.

With these STT/TTS providers and this hotword node, everything is running on your machine, nothing get out to request a third-party.
To setup them all at the same time, simply run the following command:

```bash
npm run setup:offline
```

:::caution Warning
- The offline STT and offline TTS only work for the `en-US` language. More languages will come later.
:::

## Coqui (STT)

For the offline STT, Leon uses [Coqui STT](https://github.com/coqui-ai/STT) which is a TensorFlow implementation of Baidu's DeepSpeech architecture.

Everything is already ready, you just need to run a command to download and setup the pre-trained model (~ 1 GB).
If you wish to only install the offline STT, run the following command:

```bash
npm run setup:offline-stt
```

Then in your `.env` file, set `LEON_STT=true` and `LEON_STT_PROVIDER=coqui-stt`.

## Flite (TTS)

For the offline TTS, Leon uses [CMU Flite](http://www.festvox.org/flite/) which is a small, fast runtime open-source text-to-speech synthesis engine developed at CMU (*Carnegie Mellon University*).

Here also, everything is ready, you just need to run a command to download the binary and configure.
If you wish to only install the offline TTS, run the following command:

```bash
npm run setup:offline-tts
```

Then in your `.env` file, set `LEON_TTS=true` and `LEON_TTS_PROVIDER=flite`.

:::tip Tip
This voice is... Quite funny :)
:::

## Hotword

The hotword node is an independent Node.js process which allows you to listen for the `Leon` hotword. Once Leon hears his name, he listens for your request.

### Setup

:::tip Tip
Use [nvm](/how-to/#using-nvm-recommended) to easily switch between your Node.js versions.
:::

If you wish to only install the offline hotword, then run the following command:

```bash
npm run setup:offline-hotword
```

### Usage

Ensure the Leon's server is running, then from the project root, execute the following command:

```bash
npm run wake

# Now say "Leon"
```

### Languages

The hotword node supports the following languages:

- `en-US`
- `fr-FR`

To change the language, simply switch the project language via the [`LEON_LANG` variable environment](/configuration#environment-variables) and re-run the main server and the hotword process.
