# Offline

Nesta seção, você verá como configurar os nós offline do Leon.

Com esses provedores STT/TTS e esse nó de hotword, tudo estará sendo executado em sua máquina, nada solicita um terceiro.
Para configurá-los todos ao mesmo tempo, basta executar o seguinte comando:

```bash
npm run setup: offline
```

::: warning
- Os nós offline não estão disponíveis no Windows.
- O STT offline e o TTS offline funcionam apenas para a linguagem `en-US`.
:::

## DeepSpeech (STT)

Para o STT offline, Leon usa o [DeepSpeech] (https://github.com/mozilla/DeepSpeech), que é uma implementação do TensforFlow da arquitetura DeepSpeech do Baidu.

Tudo já está pronto para ser usado, você só precisa executar um comando para baixar e configurar o modelo pré-treinado (~ 2 GB).
Se você deseja instalar apenas o STT offline, execute o seguinte comando:

```bash
npm run setup: offline-stt
```

Então, no seu arquivo `.env`, configure` LEON_STT = true` e `LEON_STT_PROVIDER = deepspeech`.

::: tip
O Leon roda a versão CPU por padrão.
Você pode baixar a versão GPU para tornar o reconhecimento mais rápido com: `npm install deepspeech-gpu`.
Para instalá-lo corretamente em sua máquina, você pode seguir [este link](https://medium.com/@taylordenouden/installing-tensorflow-gpu-on-ubuntu-18-04-89a142325138).
Depois de instalado, Leon detecta automaticamente e já executa a versão GPU.
:::

## Flite (TTS)

Para o TTS offline, Leon usa o [CMU Flite] (http://www.festvox.org/flite/), que é um mecanismo de síntese de texto para fala de código aberto pequeno e rápido desenvolvido na CMU (*Carnegie Mellon University*)

Da mesma forma, aqui tudo já está pronto, você só precisa executar um comando para baixar o binário e configurar.
Se você deseja instalar apenas o TTS offline, execute o seguinte comando:

```bash
npm run setup: offline-tts
```

Então, no seu arquivo `.env`, configure` LEON_TTS = true` e `LEON_TTS_PROVIDER = flite`.

::: tip
Essa voz pode ser ... bem engraçada :)
:::

## Hotword

O nó de hotwords é um processo independente do Node.js que permite que o Leon escute a hotword `Leon`. Uma vez que Leon ouve seu nome, ele pode processar seu pedido.

### Configuração

::: danger
O serviço de hotword precisa do **Node.js 8** para ser instalado e executado.
:::

::: tip
Use o [nvm](/how-to/#using-nvm-recommended) para alternar facilmente entre suas versões do Node.js.
:::

Se você deseja instalar apenas o hotword offline, execute o seguinte comando:

```bash
npm run setup: offline-hotword
```

### Uso

Certifique-se de que o servidor do Leon esteja em execução e, a partir da raiz do projeto, execute o seguinte comando:

```bash
npm run wake

# Agora diga "Leon"
```

### Idiomas

O nó de hotword suporta os seguintes idiomas:

- `en-US`
- `fr-FR`

Para mudar o idioma, simplesmente mude o idioma do projeto através da variável de ambiente [`LEON_LANG`] (/configuration.md#environment-variables) e execute novamente o servidor principal e o serviço de hotword.
