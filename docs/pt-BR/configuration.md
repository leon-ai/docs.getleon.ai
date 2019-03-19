# Configuração

Esta seção deve ajudá-lo a configurar opções como dar uma voz ao Leon, entender a sua voz etc.

::: warning
Estes arquivos devem ficar na sua máquina. Nunca os envie para um repositório remoto. Por padrão, eles já estão sendo ignorados graças ao `.gitignore`.
:::

## Variáveis de Ambiente

| Variável                    | Descrição   | Valores |
| ----------------------------|-------------|---------|
| `LEON_LANG`                 | Idioma de fala e de entendimento do Leon. **Se você mudar o idioma**, rode: `npm run train expressions`. | `en-US` (padrão); `fr-FR` |
| `LEON_NODE_ENV`             | Ambiente. | `development` (padrão); `production`; `testing` |
| `LEON_SERVER_HOST`          | host do Server. | `localhost` (padrão) |
| `LEON_SERVER_PORT`          | porta do Server. | `1337` (padrão) |
| `LEON_WEBAPP_HOST`          | host do Web app. | `localhost` (padrão) |
| `LEON_WEBAPP_PORT`          | porta do Web app. | `4242` (padrão) |
| `LEON_TIME_ZONE`            | Fuso horário do Leon. | Seu fuso horário atual (padrão); [Moment Timezone](https://momentjs.com/timezone/) |
| `LEON_AFTER_SPEECH`         | Ativar/Desativar escuta automática depois de falar. Torna desnecessário dizer `Leon` para dar outro comando quando você já falou uma vez. | `true`; `false` (padrão) |
| `LEON_STT`          	      | Ativar/Desativar STT. | `true`; `false` (padrão) |
| `LEON_STT_PROVIDER`         | Provedor STT. | `deepspeech` (padrão); `google-cloud-stt`; `watson-stt` |
| `LEON_TTS`                  | Ativar/Desativar TTS. | `true`; `false` (padrão) |
| `LEON_TTS_PROVIDER`         | Provedor TTS. | `flite` (padrão); `google-cloud-tts`; `amazon-polly`; `watson-tts` |
| `LEON_LOGGER`               | Ativar/Desativar logger colaborativo. | `true` (padrão); `false` |
| `PIPENV_PIPFILE`            | Caminho do Pipfile. Não mude, à menos que você saiba o que está fazendo. | `bridges/python/Pipfile` (padrão) |
| `PIPENV_VENV_IN_PROJECT`    | Cria o virtualenv no mesmo nível que o Pipfile. Não mude, à menos que você saiba o que está fazendo. | `true` (padrão) |

## Voz

O Leon tem vários provedores para o seu STT e TTS. Você pode configurar um (ou vários) e escolher o seu favorito.

::: tip
Para ativar o STT e/ou o TTS do Leon, no seu arquivo `.env`, **você deve configurar `LEON_STT=true` e/ou `LEON_TTS=true`**

Também, **você também precisa inquirir o provedor, configurando `LEON_STT_PROVIDER={SUA ESCOLHA DE PROVEDOR STT}` and/or `LEON_TTS_PROVIDER={SUA ESCOLHA DE PROVEDOR TTS}`**.
Cheque a seção [variáveis de ambiente](/configuration.md#variaveis-de-ambiente) para saber os valores para os provedores.
:::

### Offline

Confira [esta seção](/offline.md).

### Amazon

#### Amazon Polly (TTS)

1. [Um um novo usuário IAM](https://console.aws.amazon.com/iam/home#/users$new?step=details) no console AWS. Escolha um `User name`, na seção `Access type`, marque `Programmatic access` e entao clique `Next`.
2. Na seção de permissões, escolha `Attach existing policies directly` e procure por `Polly`. Então, marque o item `AmazonPollyFullAccess`. Clique `Next` (e pule a seção 'tag').
3. Clique no botão `Create user`.
4. Você deverá ver um `Access key ID` e um  `Secret access key`. Copie Ambos e cole no arquivo `server/src/config/voice/amazon.json` do Leon.

### Google Cloud

Usando esse provedor, as credenciais são as mesmas para STT e TTS

#### Google Cloud STT & Google Cloud TTS

1. [Crie ou selecione um projeto](https://console.cloud.google.com/cloud-resource-manager) no GCP (Google Cloud Platform).
2. Ative a [STT API](https://console.cloud.google.com/apis/library/speech.googleapis.com) e/ou a [TTS API](https://console.cloud.google.com/apis/library/texttospeech.googleapis.com).
3. [Crie uma service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey).
4. Faça o Download do arquivo JSON e copie seu conteúdo para o arquivo `server/src/config/voice/google-cloud.json`.

::: tip
A variável de ambiente `GOOGLE_APPLICATION_CREDENTIALS` é usada pelo Google para carregar as credenciais.
O Leon cria e configura o valor desta variável para você.
:::

### Watson

O IBM Watson tem credenciais para cada serviço STT e TTS.

#### Watson STT

1. [Clique aqui](https://console.bluemix.net/catalog/services/speech-to-text) para obter suas credenciais.
2. Clique em `Create` (ou `Sign up to Create` se você ainda não tiver uma conta).
3. Clique em `Manage` no menu da esquerda, e então em `Show Credentials`.
4. Copie `API Key` e `URL`, e então cole no arquivo `server/src/config/voice/watson-stt.json`.

#### Watson TTS

1. [Click here](https://console.bluemix.net/catalog/services/text-to-speech) to get your credentials.
2. Click on `Create` (or `Sign up to Create` if you do not have an account yet).
3. Click on `Manage` in the left menu, then on `Show Credentials`.
4. Copy `API Key` and `URL`, then paste them to the following Leon's file: `server/src/config/voice/watson-tts.json`.

## Synchronizer

Se um módulo tem essa opção, assim que um módulo tiver sido processado, você pode sincronizar seu conteúdo através de diferentes métodos.

> Por exemplo, o módulo *YouTube* do pacote *[Video Downloader Package](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader)* lhe permite sincronizar seus vídeos baixados na sua conta do Google Drive ou no seu dispositivo.

::: tip
Para determinar se um módulo inclui esta opção, simplesmente verifique sua configuração usando este arquivo: `packages/{PACKAGE NAME}/config/config.json`.

**Neste arquivo, defina a chave `enabled` como `true`** para ativar o sincronizador para um módulo específico.
:::

| Método              | Descrição                |
| --------------------|---------------------------
| `direct`            | Sincronizar conteúdo com o seu dispositivo atual. |
| `google-drive`      | Sincronizar conteúdo com o Google Drive. |

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

1. [Crie ou Selecione um projeto](https://console.cloud.google.com/cloud-resource-manager) no GCP (Google Cloud Platform).
2. Ative a [Google Drive API](https://console.developers.google.com/apis/library/drive.googleapis.com).
3. [Crie uma service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey).
4. Faça o Download do arquivo JSON e copie seu conteúdo para o arquivo `server/src/config/synchronizer/google-drive.json`.

```json
"synchronization": {
  "enabled": true,
  "method": "google-drive",
  "email": "{YOUR GOOGLE EMAIL ADDRESS}"
}
```
> *`packages/{PACKAGE NAME}/config/config.json`*

Um email é enviado para este endereço, uma vez que o Leon tenha sincronizado seu conteúdo com o Google Drive.
