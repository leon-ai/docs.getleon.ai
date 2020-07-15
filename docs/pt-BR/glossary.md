# Glossário

Alguns termos da documentação podem ser desconhecidos para você. Esta seção lhe ajudará a ter um melhor entendimento desses termos e como eles estão relacionados ao Leon.

## API

API (ou *Application Programming Interface*/*Interface de Programação de Aplicação*) é uma interface que permite a comunicação entre nós diferentes de um projeto. Esses nós podem ser um pacote, biblioteca, serviço etc.

Exemplos de API's do Leon:
- A [HTTP API](https://github.com/leon-ai/leon/tree/develop/server/src/api) permite trocar dados entre servidor e cliente.
- A [WebSocket API](https://github.com/leon-ai/leon/blob/develop/server/src/core/server.js) permite ter uma comunicação bidirecional entre servidor e cliente.
- A biblioteca [Python API](https://github.com/leon-ai/leon/blob/develop/bridges/python/utils.py) permite desenvolvedores pegar funções para trabalhar em modulos do Leon.

## ASR

ASR (ou *Automatic Speech Recognition*/*Reconhecimento Automático de Fala*) é o uso de técnicas computacionais e de software para identificar e processar a voz humana.

Leon usa o ASR para que sua voz seja compreensível para ele.

> Anexos:
> - [app/js/main.es6.js](https://github.com/leon-ai/leon/blob/develop/app/js/main.es6.js) *web app ASR*.
> - [server/src/core/asr.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/asr.js) *servidor ASR*.

## Respostas

As respostas são sentenças que o Leon pode lhe entregar.
Cada [pacote](/glossary.md#pacotes) tem seu próprio set de respostas com diferentes traduções.

> Anexo: [packages/checker/data/answers/en.json](https://github.com/leon-ai/leon/blob/develop/packages/checker/data/answers/en.json) *exemplo de respostas em inglês do pacote `Checker`*.

## Cérebro

O Cérebro do Leon é a maior parte do seu núcleo. Aqui é onde ele executa seus [módulos](/glossary.md#modulos), fala escolhe sentenças etc.

> Anexo: [server/src/core/brain.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/brain.js) *Cérebro do Leon*.

## Classificador

Um classificador é um tipo especial de modelo. Uma vez que tenha sido treinado, ele retorna um resultado com base num algoritmo e então esse resultado é usado para tomar decisões.

O Leon usa classificadores para ter um resultado armazenado da fase de treinamento de [expressões](/glossary.md#expressoes).

## Expressões

As expressões são o conjunto de dados que Leon usa para treinar seu aprendizado.
Cada [pacote](/glossary.md#pacotes) tem seu próprio conjunto de dados com as diferentes traduções.

> Anexo: [packages/checker/data/expressions/en.json](https://github.com/leon-ai/leon/blob/develop/packages/checker/data/expressions/en.json) *exemplo das expressões em inglês do pacote `Checker`*.

## Modules

Módulos são as habilidades de Leon. É graças a eles que Leon pode fazer coisas.

::: tip
Quanto mais módulos Leon tem, mais habilidoso ele se torna.
Não deixe de [contribuir](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md)! <3
:::

## NLU

NLU (ou *Natural Language Understanding*/*Entendimento Natural de Linguagem*) ajuda os computadores a entender linguagem humana.

O Leon usa o NLU para carregar o [classificador](/glossary.md#classificador), classificar o que você diz a ele e escolher a classificação correta, tomando decisões que ele julga mais precisas.

> Anexo: [server/src/core/nlu.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/nlu.js) *NLU do Leon*.

## Pacotes

Os pacotes do Leon contêm um ou uma infinidade de [modules](/glossary.md#modulos). Você pode considerar pacotes como uma espécie de módulo. É onde as [respostas](/glossary.md#respostas) e [expressões](/glossary.md#expressions) são armazenadas.

> Anexo: [packages/leon](https://github.com/leon-ai/leon/tree/develop/packages/leon) *exemplo do pacote `Leon` contendo módulos relacionados a ele mesmo*.

::: tip
A lista completa de pacotes está disponível [aqui](https://github.com/leon-ai/leon/tree/develop/packages).
:::

## STT

STT (ou *Speech-To-Text*/*Fala-Para-Texto*) transforma um fluxo de áudio (fala) numa string (texto).

Leon tem vários parsers STT. Você pode escolher um (ou vários) e [configurá-lo](/configuration.md#voz).

> Anexo: [server/src/stt/stt.js](https://github.com/leon-ai/leon/blob/develop/server/src/stt/stt.js) *STT do Leon*.

## Sincronizador

Se o [módulo](/glossary.md#modulos) requisitado lhe oferecer essa escolha, o sincronizador lhe permite sincronizar seu conteúdo de diferentes formas(Google Drive, on your current device, etc).

Você pode [configurar](/configuration.md#sincronizador) seu método favorito para cada módulo que incluir esta funcionalidade.

> Anexo: [server/src/core/synchronizer.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/synchronizer.js) *Sincronizador do Leon*.

## TTS

TTS (ou *Text-To-Speech*/*Texto-Para-Fala*) transforma uma string (texto) em um fluxo de áudio (fala).

Leon tem vários sintetizadores TTS, você pode escolher um (ou vários) e [configurá-los](/ configuration.md # voice).

> Anexo: [server/src/tts/tts.js](https://github.com/leon-ai/leon/blob/develop/server/src/tts/tts.js) *TTS do Leon*.
