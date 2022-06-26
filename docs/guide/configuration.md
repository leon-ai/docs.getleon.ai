---
slug: /configuration
sidebar_position: 4
---

# Configuration

This section helps you to configure options such as giving Leon a voice, understand your voice, etc.

:::caution Warning
These files should stay on your machine, never push them to a remote repository. By default, they are already being ignored thanks to the `.gitignore` file.
:::

## Environment Variables

The environment variables included in the following table can be found in the `.env` file located at the project root directory.

| Variable                    | Description | Values |
| ----------------------------|-------------|---------|
| `LEON_LANG`                 | Leon's language and his understanding. **If you change the language**, run: `npm run train expressions`. | `en-US` (default); `fr-FR` |
| `LEON_NODE_ENV`             | Environment. | `development` (default); `production`; `testing` |
| `LEON_HOST`                 | Leon's host. Use your machine IP address to access Leon from the outside. | `http://localhost` (default) |
| `LEON_PORT`                 | Leon's port. | `1337` (default) |
| `LEON_TIME_ZONE`            | Leon's time zone. | Your current time zone (default); [Moment Timezone](https://momentjs.com/timezone/) |
| `LEON_AFTER_SPEECH`         | Enable/disable auto listening after talking. No need to say `Leon` when you have talked once. | `true`; `false` (default) |
| `LEON_STT`          	      | Enable/disable STT. | `true`; `false` (default) |
| `LEON_STT_PROVIDER`         | STT provider. | `coqui-stt` (default); `google-cloud-stt`; `watson-stt` |
| `LEON_TTS`                  | Enable/disable TTS. | `true`; `false` (default) |
| `LEON_TTS_PROVIDER`         | TTS provider. | `flite` (default); `google-cloud-tts`; `amazon-polly`; `watson-tts` |
| `LEON_LOGGER`               | Enable/disable collaborative logger. | `true` (default); `false` |
| `PIPENV_PIPFILE`            | Pipfile path. Do not touch it unless you know what you are doing. | `bridges/python/Pipfile` (default) |
| `PIPENV_VENV_IN_PROJECT`    | Create the virtualenv at the same level as the Pipfile. Do not touch it unless you know what you are doing. | `true` (default) |

## Voice

Leon has multiple providers for his STT and TTS. You can configure one (or several) and choose your favorite.

:::tip Tip
To enable the Leon's STT and/or Leon's TTS, in your `.env` file, **you need to set `LEON_STT=true` and/or `LEON_TTS=true`**.

Also, **you need to inquire the provider by setting `LEON_STT_PROVIDER={YOUR STT CHOSEN PROVIDER}` and/or `LEON_TTS_PROVIDER={YOUR TTS CHOSEN PROVIDER}`**.
Please see the [environment variables section](/configuration#environment-variables) to know the providers values.
:::

### Offline

Please follow [this section](/offline).

### Amazon

#### Amazon Polly (TTS)

1. [Create a new IAM user](https://console.aws.amazon.com/iam/home#/users$new?step=details) on the AWS console. Choose a `User name` and in the `Access type` section, check `Programmatic access`. Then click `Next`.
2. In the permissions section, use the `Attach existing policies directly` option and search for `Polly`. Then check the `AmazonPollyFullAccess` item. Then click `Next` (and skip the tag section).
3. Hit the `Create user` button.
4. You can see the `Access key ID` and you can also display the `Secret access key`. Copy both of them and paste them to the `server/src/config/voice/amazon.json` Leon's file.

### Google Cloud

When using this provider, the credentials are the same for the STT and TTS.

#### Google Cloud STT & Google Cloud TTS

1. [Create or select a project](https://console.cloud.google.com/cloud-resource-manager) on the GCP (Google Cloud Platform).
2. Enable the [STT API](https://console.cloud.google.com/apis/library/speech.googleapis.com) and/or the [TTS API](https://console.cloud.google.com/apis/library/texttospeech.googleapis.com).
3. [Create a service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey).
4. Download the JSON file and copy its content to the: `server/src/config/voice/google-cloud.json` Leon's file.

:::tip Tip
The `GOOGLE_APPLICATION_CREDENTIALS` environment variable is used by Google to load the credentials.
Leon creates and set the value of this environment variable for you.
:::

### Watson

IBM Watson has credentials for each STT service and each TTS service.

#### Watson STT

1. [Click here](https://console.bluemix.net/catalog/services/speech-to-text) to create a Speech to Text service.
2. Click on `Create` (or `Sign up to Create` if you do not have an account yet).
3. Click on `Service credentials` in the left menu, then expand the generated service credential or create a new one.
4. Copy `apikey` and `url`, then paste them to the following Leon's file: `server/src/config/voice/watson-stt.json`.

#### Watson TTS

1. [Click here](https://console.bluemix.net/catalog/services/text-to-speech) to create a Text to Speech service.
2. Click on `Create` (or `Sign up to Create` if you do not have an account yet).
3. Click on `Service credentials` in the left menu, then expand the generated service credential or create a new one.
4. Copy `API Key` and `URL`, then paste them to the following Leon's file: `server/src/config/voice/watson-tts.json`.

:::tip Tip
If you are using a version **below** `1.0.0-beta.4`, from the step 3. do: Click on `Manage` in the left menu, then on `Show Credentials`; copy `API Key` and `URL`, then paste them to the respected Leon's files: `server/src/config/voice/watson-stt.json` and `server/src/config/voice/watson-tts.json`.
:::

## Synchronizer

If a module has this option, once the module has been processed, you can synchronize your content via different methods.

> E.g. the *YouTube* module of the *[Video Downloader Package](https://github.com/leon-ai/leon/tree/master/packages/videodownloader)* allows you to synchronize your downloaded videos on your Google Drive account or on your current device.

:::tip Tip
To see if a module has this option, simply check the settings via this file: `packages/{PACKAGE NAME}/config/config.json`.

**In that file, set the `enabled` key to `true`** to enable the synchronizer for this specific module.
:::

| Method              | Description              |
| --------------------|---------------------------|
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
> *`packages/{PACKAGE NAME}/config/config.json`*

### Google Drive

1. [Create or select a project](https://console.cloud.google.com/cloud-resource-manager) on the GCP (Google Cloud Platform).
2. Enable the [Google Drive API](https://console.developers.google.com/apis/library/drive.googleapis.com).
3. [Create a service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey).
4. Download the JSON file and copy its content to the: `server/src/config/synchronizer/google-drive.json` Leon's file.

```json
"synchronization": {
  "enabled": true,
  "method": "google-drive",
  "email": "{YOUR GOOGLE EMAIL ADDRESS}"
}
```
> *`packages/{PACKAGE NAME}/config/config.json`*

An email is sent to this email address once Leon has synchronized your content on your Google Drive.
