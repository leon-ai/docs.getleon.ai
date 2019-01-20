# Offline

In this section, you will see how to setup the Leon's offline nodes.

With these STT/TTS providers and this hotword node, everything is running on your machine, nothing get out to request a third-party.
To setup them all at the same time, simply run the following command:

```bash
npm run setup:offline
```

::: warning
- These offline nodes are not available on Windows.
- The offline STT and offline TTS only work for the `en-US` language.
:::

## DeepSpeech (STT)

For the offline STT, Leon uses [DeepSpeech](https://github.com/mozilla/DeepSpeech) which is a TensforFlow implementation of Baidu's DeepSpeech architecture.

Everything is already ready, you just need to run a command to download and setup the pre-trained model (~ 2 GB).
If you wish to only install the offline STT, run the following command:

```bash
npm run setup:offline-stt
```

Then in your `.env` file, set `LEON_STT=true` and `LEON_STT_PROVIDER=deepspeech`.

::: tip
Leon uses the CPU version by default.
You can download the GPU version to make the recognition faster, with: `npm install deepspeech-gpu`.
To install it correctly on your machine, you can follow [this link](https://medium.com/@taylordenouden/installing-tensorflow-gpu-on-ubuntu-18-04-89a142325138).
Once it has been installed, Leon automatically detects it and run with the GPU version.
:::

## Flite (TTS)

For the offline TTS, Leon uses [CMU Flite](http://www.festvox.org/flite/) which is a small, fast runtime open-source text-to-speech synthesis engine developed at CMU (*Carnegie Mellon University*).

Here also, everything is ready, you just need to run a command to download the binary and configure.
If you wish to only install the offline TTS, run the following command:

```bash
npm run setup:offline-tts
```

Then in your `.env` file, set `LEON_TTS=true` and `LEON_TTS_PROVIDER=flite`.

::: tip
This voice is... Quite funny :)
:::

## Hotword

The hotword node is an independent Node.js process which allows you to listen for the `Leon` hotword. Once Leon hears his name, he will listen for your request.

### Setup

::: danger
The hotword process needs **Node.js 8** to be installed and to run.
:::

::: tip
Use [nvm](/how-to/#how-to-install-node-js) to easily switch between your Node.js versions.
:::

If you wish to only install the offline hotword, then run the following command:

```bash
npm install setup:offline-hotword
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

To change the language, simply switch the project language via the [`LEON_LANG` variable environment](/configuration.md#environment-variables) and re-run the main server and the hotword process.
