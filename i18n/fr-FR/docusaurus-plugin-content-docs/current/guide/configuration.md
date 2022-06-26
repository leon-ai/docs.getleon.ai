---
slug: /configuration
sidebar_position: 4
---

# Configuration

Cette section vous aide à configurer les options telles que donner une voix à Léon, qu'il comprenne également votre voix, etc.

:::caution Attention
Ces fichiers doivent rester sur votre machine, ne les pousser pas sur un répertoire distant. Par défaut, ils sont déjà ignorés grâce au fichier `.gitignore`.
:::

## Variables d'environnement

Les variables d'environnement inclues dans le tableau suivant peuvent être trouvées dans le fichier `.env` situé dans le répertoire racine du projet.

| Variable                    | Description | Valeurs |
| ----------------------------|-------------|---------|
| `LEON_LANG`                 | Langue de Léon et de sa compréhension. **Si vous changez de langue**, exéctuez: `npm run train expressions`. | `en-US` (par défaut); `fr-FR` |
| `LEON_NODE_ENV`             | Environnement. | `development` (par défaut); `production`; `testing` |
| `LEON_HOST`                 | Hôte de Léon. Utilisez l'adresse IP de votre machine afin d'accéder à Léon depuis l'extérieur. | `http://localhost` (par défaut) |
| `LEON_PORT`                 | Port de Léon. | `1337` (par défaut) |
| `LEON_TIME_ZONE`            | Time zone de Léon. | Votre time zone actuelle (par défaut); [Moment Timezone](https://momentjs.com/timezone/) |
| `LEON_AFTER_SPEECH`         | Activer / désactiver l'écoute automatique après avoir parlé. Pas besoin de prononçer `Léon` quand vous avez parlé une première fois. | `true`; `false` (par défaut) |
| `LEON_STT`          	      | Activer / désactiver le STT. | `true`; `false` (par défaut) |
| `LEON_STT_PROVIDER`         | Fournisseur STT. | `coqui-stt` (par défaut); `google-cloud-stt`; `watson-stt` |
| `LEON_TTS`                  | Activer / désactiver le TTS. | `true`; `false` (par défaut) |
| `LEON_TTS_PROVIDER`         | Fournisseur TTS. | `flite` (par défaut); `google-cloud-tts`; `amazon-polly`; `watson-tts` |
| `LEON_LOGGER`               | Activer / désactiver le journal collaboratif. | `true` (par défaut); `false` |
| `PIPENV_PIPFILE`            | Chemin du Pipfile. N'y touchez pas si vous ne savez pas ce que vous faites. | `bridges/python/Pipfile` (par défaut) |
| `PIPENV_VENV_IN_PROJECT`    | Créer le virtualenv au même niveau que le Pipfile. N'y touchez pas si vous ne savez pas ce que vous faites. | `true` (par défaut) |


## Voix

Léon a de multiple fournisseurs pour son STT et TTS. Vous pouvez en configurer un (ou plusieurs) et choisir votre favori.

:::tip Astuce
Pour activer le STT de Léon et / ou le TTS de Léon, dans votre fichier `.env`, **vous devez attribuer `LEON_STT=true` et / ou `LEON_TTS=true`**.

Aussi, **vous devez renseigner le fournisseur en paramétrant `LEON_STT_PROVIDER={VOTRE FOURNISSEUR STT}` et / ou `LEON_TTS_PROVIDER={VOTRE FOURNISSEUR TTS}`**.

Merci de consulter la [section variables d'environnement](/fr-FR/configuration#variables-denvironnement) pour connaître les valeurs des fournisseurs.
:::

### Hors ligne

Merci de suivre [cette section](/fr-FR/offline).

### Amazon

#### Amazon Polly (TTS)

1. [Créez un nouvel IAM user](https://console.aws.amazon.com/iam/home#/users$new?step=details) via la console AWS. Choisissez un `User name` et dans la section `Access type`, cochez `Programmatic access`. Puis cliquez sur `Next`.
2. Dans la section permissions, utilisez l'option `Attach existing policies directly` et effectuez une recherche avec le mot clé `Polly`. Puis cochez l'élément `AmazonPollyFullAccess`. Enfin, cliquez sur `Next` (et ignorez la section tag).
3. Pressez le bouton `Create user`.
4. Vous pouvez maintenant voir l'`Access key ID` et vous avez aussi la possibilité d'afficher la `Secret access key`. Copiez-les et collez-les dans le fichier de Léon : `server/src/config/voice/amazon.json`.


### Google Cloud

Avec ce fournisseur, les identifiants sont les mêmes pour le STT et TTS.

#### Google Cloud STT & Google Cloud TTS

1. [Créez ou sélectionnez un projet](https://console.cloud.google.com/cloud-resource-manager) sur la GCP (Google Cloud Platform).
2. Activez l'[API STT](https://console.cloud.google.com/apis/library/speech.googleapis.com) et / ou l'[API TTS](https://console.cloud.google.com/apis/library/texttospeech.googleapis.com).
3. [Créez une clé de compte service](https://console.cloud.google.com/apis/credentials/serviceaccountkey).
4. Téléchargez le fichier JSON et copiez son contenu dans le fichier Léon : `server/src/config/voice/google-cloud.json`.

:::tip Astuce
La variable d'environnement `GOOGLE_APPLICATION_CREDENTIALS` est utilisée par Google pour charger les identifiants.
Léon crée et attribue la valeur de cette variable d'environnement pour vous.
:::

### Watson

IBM Watson a des identifiants pour chaque service STT et chaque service TTS.

#### Watson STT

1. [Cliquez ici](https://console.bluemix.net/catalog/services/speech-to-text) pour récupérer vos identifiants.
2. Cliquez sur `Create` (ou sur `Sign up to Create` si vous n'avez pas encore de compte).
3. Cliquez sur `Manage` dans le menu de gauche, ensuite sur `Show Credentials`.
4. Copiez `API Key` et `URL`, puis collez-les dans le fichier Léon suivant : `server/src/config/voice/watson-stt.json`.

#### Watson TTS

1. [Cliquez ici](https://console.bluemix.net/catalog/services/text-to-speech) pour récupérer vos identifiants.
2. Cliquez sur `Create` (ou sur `Sign up to Create` si vous n'avez pas encore de compte).
3. Cliquez sur `Manage` dans le menu de gauche, ensuite sur `Show Credentials`.
4. Copiez `API Key` et `URL`, puis collez-les dans le fichier Léon suivant : `server/src/config/voice/watson-tts.json`.

## Synchroniseur

Si le module comprend cette option, une fois que le module ait terminé sa tâche, vous pouvez synchroniser votre contenu à l'aide de différentes méthodes.

> Ex. le module *YouTube* du paquet *[Video Downloader Package](https://github.com/leon-ai/leon/tree/master/packages/videodownloader)* vous permet de synchroniser les vidéos téléchargées sur votre compte Google Drive ou sur votre appareil actuel.

:::tip Astuce
Pour déterminer si un module comprend cette option, vérifiez simplement la configuration de celui-ci via ce fichier : `packages/{PACKAGE NAME}/config/config.json`.

**Dans ce fichier, initialisez la clé `enabled` à `true`** afin d'activer le synchroniseur pour un module spécifique.
:::

| Méthode              | Description              |
| ---------------------|---------------------------
| `direct`             | Synchronise le contenu sur votre appareil actuel. |
| `google-drive`       | Synchronise le contenu sur Google Drive. |

### Direct

```json
"synchronization": {
  "enabled": true,
  "method": "direct",
  "email": ""
}
```
> *`packages/{NOM DU PAQUET}/config/config.json`*

### Google Drive

1. [Créez ou sélectionnez un projet](https://console.cloud.google.com/cloud-resource-manager) sur la GCP (Google Cloud Platform).
2. Activez l'[API Google Drive](https://console.developers.google.com/apis/library/drive.googleapis.com).
3. [Créez une clé de compte service](https://console.cloud.google.com/apis/credentials/serviceaccountkey).
4. Téléchargez le fichier JSON et copiez son contenu dans le fichier Léon : `server/src/config/synchronizer/google-drive.json`.

```json
"synchronization": {
  "enabled": true,
  "method": "google-drive",
  "email": "{VOTRE ADDRESSE EMAIL GOOGLE}"
}
```
> *`packages/{NOM DU PAQUET}/config/config.json`*

Un email vous sera envoyé à cette adresse une fois que Léon aura synchronisé votre contenu sur Google Drive.
