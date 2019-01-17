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

::: tip
To enable the Leon's STT and/or Leon's TTS, in your `.env` file, **you need to set `LEON_STT=true` and/or `LEON_TTS=true`**.

Also, **you need to inquire the provider by setting `LEON_STT_PROVIDER={YOUR STT CHOSEN PROVIDER}` and/or `LEON_TTS_PROVIDER={YOUR TTS CHOSEN PROVIDER}`**.
Please see the [environment variables section](/configuration.md#environment-variables) to know the providers values.
:::

### Offline

Please follow [this section](/offline.md).

### Amazon

#### Amazon Polly (TTS)

1. [Create a new IAM user](https://console.aws.amazon.com/iam/home#/users$new?step=details) on the AWS console. Choose a `User name` and in the `Access type` section, check `Programmatic access`. Then click `Next`.
2. In the permissions section, use the `Attach existing policies directly` option and search for `Polly`. Then check the `AmazonPollyFullAccess` item. Then click `Next` (and skip the tag section).
3. Hit the `Create user` button.
4. You can see the `Access key ID` and you can also display the `Secret access key`. Copy both of them and paste them to the `server/src/config/voice/amazon.json`.

### Google Cloud

When using this provider, the credentials are the same for the STT and TTS.

#### Google Cloud STT & Google Cloud TTS

1. [Create or select a project](https://console.cloud.google.com/cloud-resource-manager) on the GCP (Google Cloud Platform).
2. Enable the [STT API](https://console.cloud.google.com/apis/library/speech.googleapis.com) and/or the [TTS API](https://console.cloud.google.com/apis/library/texttospeech.googleapis.com).
3. [Create a service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey).
4. Download the JSON file and copy its content to: `server/src/config/voice/google-cloud.json`.
5. Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to `server/src/config/voice/google-cloud.json`. This path must be absolute on your machine, so it should be something like `/my/root/path/server/src/config/voice/google-cloud.json`.

### Watson

IBM Watson has credentials for each STT service and each TTS service.

#### Watson STT

1. [Click here](https://console.bluemix.net/catalog/services/speech-to-text) to get your credentials.
2. Copy the `URL`, `Username` and `Password` to the following Leon's file: `server/src/config/voice/watson-stt.json`.

#### Watson TTS

1. [Click here](https://console.bluemix.net/catalog/services/text-to-speech) to get your credentials.
2. Copy the `URL`, `Username` and `Password` to the following Leon's file: `server/src/config/voice/watson-tts.json`.

## Synchronizer

After a module has been processed, if the module has this option, you can synchronize your content via different methods.

> E.g. the *YouTube* module of the *[Video Downloader Package](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader)* allows you to synchronize your downloaded videos to your Google Drive account or to your current device.

::: tip
To see if a module has this option, simply check in the Leon's `packages/{PACKAGE NAME}/config/config.json` file.

**Set the `enabled` key of this file to `true`** to enable the synchronizer for this specific module.
:::

| Method              | Description              |
| --------------------|---------------------------
| `direct`            | Synchronize content on your current device. |
| `google-drive`      | Synchronize content on Google Drive. |

### Direct

```json
"synchronization": {
  "enabled": true,
  "method": "direct",
  "email": ""
}
```

### Google Drive

1. [Create or select a project](https://console.cloud.google.com/cloud-resource-manager) on the GCP (Google Cloud Platform).
2. Enable the [Google Drive API](https://console.developers.google.com/apis/library/drive.googleapis.com).
3. [Create a service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey).
4. Download the JSON file and copy its content to: `server/src/config/synchronizer/google-drive.json`.

```json
"synchronization": {
  "enabled": true,
  "method": "google-drive",
  "email": "{YOUR GOOGLE EMAIL ADDRESS}"
}
```

An email will be sent to this email address once the content has been synchronized on your Google Drive.
