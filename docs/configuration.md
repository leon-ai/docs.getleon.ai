# Configuration

This section helps you to configure options such as giving Leon a voice, understand your voice, etc.

::: warning
These files should stay on the machine you are working with, never push them to a remote repository. By default, they are already being ignored thanks to the `.gitignore` file.
:::

## Environment Variables

| Variable                    | Description | Values |
| ----------------------------|-------------|---------|
| `LEON_LANG`                 | Language of Leon and his understanding. **If you change the language**, run: `npm run train expressions`. | `en-US` (default); `fr-FR` |
| `LEON_NODE_ENV`             | Leon environment. | `development` (default); `production`; `testing` |
| `LEON_SERVER_HOST`          | Leon's server host. | `localhost` (default) |
| `LEON_SERVER_PORT`          | Leon's server port. | `1337` (default) |
| `LEON_WEBAPP_HOST`          | Leon's web app host. | `localhost` (default) |
| `LEON_WEBAPP_PORT`          | Leon's web app port. | `4242` (default) |
| `LEON_TIME_ZONE`            | Leon's time zone. | Your current time zone (default); [Moment Timezone](https://momentjs.com/timezone/) |
| `LEON_AFTER_SPEECH`         | Enable/disable auto recording after talk. No need to say `Leon` when you have talked once. | `true`; `false` (default) |
| `LEON_STT`          	      | Enable/disable STT. | `true`; `false` (default) |
| `LEON_STT_PROVIDER`         | STT provider. | `deepspeech` (default); `google-cloud-stt`; `watson-stt` |
| `LEON_TTS`                  | Enable/disable TTS. | `true`; `false` (default) |
| `LEON_TTS_PROVIDER`         | TTS provider. | `flite` (default); `google-cloud-tts`; `amazon-polly`; `watson-tts` |
| `LEON_LOGGER`               | Enable/disable collaborative logger. | `true` (default); `false` |
| `PIPENV_PIPFILE`            | Pipfile path. Do not touch it unless you know what you are doing. | `bridges/python/Pipfile` (default) |
| `PIPENV_VENV_IN_PROJECT`    | Create the virtualenv at the same level as the Pipfile. Do not touch it unless you know what you are doing. | `true` (default) |

## Voice

Leon has multiple providers for his STT and TTS. You can configure one (or several) and choose your favorite.

To enable the Leon's STT and/or Leon's TTS, in your `.env` file, **you need to set `LEON_STT=true` and/or `LEON_TTS=true`**.

Also, **you need to inquire the provider by setting `LEON_STT_PROVIDER={YOUR STT CHOSEN PROVIDER}` and/or `LEON_TTS_PROVIDER={YOUR TTS CHOSEN PROVIDER}`**.
Please see the [environment variables section](/configuration.md#environment-variables) to know the providers values.

### Offline

Please follow [this section](/offline.md).

### Amazon

WIP...

#### Amazon Polly (TTS)

> Located in: `server/src/config/voice/amazon.json`.

WIP...

### Google Cloud

When using this provider, the credentials are the same for the STT and TTS.

#### Google Cloud STT & Google Cloud TTS

1. [Create or select a project](https://console.cloud.google.com/cloud-resource-manager) on the GCP (Google Cloud Platform).
2. Enable the [STT API](https://console.cloud.google.com/apis/library/speech.googleapis.com) and/or the [TTS API](https://console.cloud.google.com/apis/library/texttospeech.googleapis.com).
3. [Create a service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey).
4. Download the JSON file, and copy its content into: `server/src/config/voice/google-cloud.json`.
5. Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to `server/src/config/voice/google-cloud.json`. This path should be absolute on your machine, so it should be something like `/my/root/path/server/src/config/voice/google-cloud.json`.

### Watson

WIP...

#### Watson STT

> Located in: `server/src/config/voice/watson-stt.json`.

WIP...

#### Watson TTS

> Located in: `server/src/config/voice/watson-tts.json`.

WIP...

## Synchronizer

WIP...
