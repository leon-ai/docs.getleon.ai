# Glossary

Some terms of the documentation are maybe unknown for you. This section helps you to have a better understanding about these words and how they are related to Leon.

## API

API for (*Application Programming Interface*) is an interface allowing the communication between different nodes of a project. These nodes can be a server, library, etc.

Examples of Leon's APIs:
- The [HTTP API](https://github.com/leon-ai/leon/tree/develop/server/src/api) allows him to exchange data between the server and client.
- The [WebSocket API](https://github.com/leon-ai/leon/blob/develop/server/src/core/server.js) allows him to have a bidirectional communication between the client and the server.
- The [Python library API](https://github.com/leon-ai/leon/blob/develop/bridges/python/utils.py) allows developers to pick-up functions to work on Leon's modules.

## ASR

ASR for (*Automatic Speech Recognition*) is the use of computer hardware and software-based techniques to identify and process human voice.

Leon uses it to make your voice understandable for him.

> Attachments:
> - [app/js/main.es6.js](https://github.com/leon-ai/leon/blob/develop/app/js/main.es6.js) *ASR web app*.
> - [server/src/core/asr.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/asr.js) *ASR server*.

## Answers

The answers are the sentences that Leon may replies you.
Each [package](/glossary.md#packages) has their own set of answers with the different translations.

> Attachment: [packages/checker/data/answers/en.json](https://github.com/leon-ai/leon/blob/develop/packages/checker/data/answers/en.json) *example of the `Checker` package English answers*.

## Brain

The Leon's brain is a major part of his core. This is where he executes his [modules](/glossary.md#modules), talk, pick-up sentences, etc.

> Attachment: [server/src/core/brain.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/brain.js) *Leon's brain*.

## Classifier

A classifier is a specific type of model. Once it has been train, it outputs a result via an algorithm.
This result will then be used to make decisions.

Leon uses it to have a stored result of his [expressions](/glossary.md#expressions) training phase.

## Expressions

The expressions are the dataset that Leon uses to train his understanding.
Each [package](/glossary.md#packages) has its own dataset with the different translations.

> Attachment: [packages/checker/data/expressions/en.json](https://github.com/leon-ai/leon/blob/develop/packages/checker/data/expressions/en.json) *example of the `Checker` package English expressions*.

## Modules

Modules are the skills of Leon. This is thanks to them that Leon can do things.

::: tip
The more modules Leon has, the more skillful he becomes.
Do not hesitate to [contribute](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3
:::

## NLP

NLP for (*Natural Language Processing*) helps computers understand, interpret and manipulate human language.

Leon uses it to load the [classifier](/glossary.md#classifier), classify what you tell him and pick-up the right classification by taking decisions he judges are the most accurate.

> Attachment: [server/src/core/nlp.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/nlp.js) *Leon's NLP*.

## Packages

The Leon's packages contain one or an infinity of [modules](/glossary.md#modules). You can consider packages as a category of modules. This is where the [answers](/glossary.md#answers) and [expressions](/glossary.md#expressions) are stored.

> Attachment: [packages/leon](https://github.com/leon-ai/leon/tree/develop/packages/leon) *example of the `Leon` package including modules related to Leon himself*.

::: tip
The full packages list is available [here](https://github.com/leon-ai/leon/tree/develop/packages).
:::

## STT

STT for (*Speech-To-Text*) transforms an audio stream (speech) to a string (text).

Leon has several STT parsers, you can choose one (or several) and [configure](/configuration.md#stt) it.

> Attachment: [server/src/stt/stt.js](https://github.com/leon-ai/leon/blob/develop/server/src/stt/stt.js) *Leon's STT*.

## Synchronizer

If the requested [module](/glossary.md#modules) offers you that choice, the synchronizer allows you to synchronize your content via different methods (Google Drive, on your current device, etc.).

For each module that includes this feature, you can [configure](/configuration.md#synchronizer) your favorite method.

> Attachment: [server/src/core/synchronizer.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/synchronizer.js) *Leon's synchronizer*.

## TTS

TTS for (*Text-To-Speech*) transforms a string (text) to an audio stream (speech).

Leon has several TTS synthesizers, you can choose one (or several) and [configure](/configuration.md#tts) it.

> Attachment: [server/src/tts/tts.js](https://github.com/leon-ai/leon/blob/develop/server/src/tts/tts.js) *Leon's TTS*.
