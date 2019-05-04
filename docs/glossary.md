# Glossary

Some terms in the docs might be unknown to you; this section should help you achieve a better understanding of these words and how they relate to Leon.

## Actions

Actions represent the [modules](/glossary.md#modules) entry points.
        
> Attachment: [packages/calendar/todolist.py](https://github.com/leon-ai/leon/tree/develop/packages/calendar/todolist.py) *example of the `To-Do List` module including actions such as `create_list`, `complete_todo`, etc*.

## API

API stands for *Application Programming Interface* and it allows the communication between different nodes of a project. These nodes can be a server, library, etc.

Examples of Leon APIs:
- The [HTTP API](https://github.com/leon-ai/leon/tree/develop/server/src/api) allows him to exchange data between the server and the client.
- The [WebSocket API](https://github.com/leon-ai/leon/blob/develop/server/src/core/server.js) allows him to open a bidirectional communication channel between the client and the server.
- The [Python library API](https://github.com/leon-ai/leon/blob/develop/bridges/python/utils.py) allows developers to pick up functions to work on Leon's modules.

## ASR

ASR or *Automatic Speech Recognition* is the use of computer hardware and software-based techniques to identify and process human voice.

Leon uses it to make your voice understandable for him.

> Attachments:
> - [app/js/main.es6.js](https://github.com/leon-ai/leon/blob/develop/app/js/main.es6.js) *ASR web app*.
> - [server/src/core/asr.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/asr.js) *ASR server*.

## Answers

Answers are Leon's responses.
Each [package](/glossary.md#packages) has its own set of answers with different translations.

> Attachment: [packages/checker/data/answers/en.json](https://github.com/leon-ai/leon/blob/develop/packages/checker/data/answers/en.json) *example of the `Checker` package English answers*.

## Brain

Leon's brain is a major part of his core. This is where he executes his [modules](/glossary.md#modules), talks, picks up sentences, etc.

> Attachment: [server/src/core/brain.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/brain.js) *Leon's brain*.

## Classifier

A classifier is a type of model. Once trained, it outputs a result via an algorithm.
This result is used to make decisions.

Leon uses it to store the outcomes of his [expressions](/glossary.md#expressions) training phase.

## Expressions

Expressions are the dataset that Leon uses to train his understanding.
Each [package](/glossary.md#packages) has its own dataset with different translations.

> Attachment: [packages/checker/data/expressions/en.json](https://github.com/leon-ai/leon/blob/develop/packages/checker/data/expressions/en.json) *example of the `Checker` package English expressions*.

## Modules

Modules are Leon's skills; thanks to them Leon can work his magic. Modules contain one or an infinity of [actions](/glossary.md#actions).

::: tip
The more modules Leon has, the more skillful he becomes.
Do not hesitate to [contribute](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3
:::

## NLU

NLU (*Natural Language Understanding*) helps computers understand human language.

Leon employs it to load the most appropriate [classifier](/glossary.md#classifier).
> Attachment: [server/src/core/nlu.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/nlu.js) *Leon's NLU*.

## Packages

Leon's packages contain one or an infinity of [modules](/glossary.md#modules). You can consider packages as a category of modules. This is where the [answers](/glossary.md#answers) and [expressions](/glossary.md#expressions) are stored.

> Attachment: [packages/leon](https://github.com/leon-ai/leon/tree/develop/packages/leon) *example of the `Leon` package including modules related to Leon himself*.

::: tip
The full package list is available [here](https://github.com/leon-ai/leon/tree/develop/packages).
:::

## STT

STT, or *Speech-To-Text*, transforms an audio stream (speech) to a string (text).

Leon has multiple STT parsers; you can choose one (or several) to [configure](/configuration.md#voice).

> Attachment: [server/src/stt/stt.js](https://github.com/leon-ai/leon/blob/develop/server/src/stt/stt.js) *Leon's STT*.

## Synchronizer

The synchronizer allows you to synchronize your content via different methods (Google Drive, on your current device, etc.)
restricted by the requested [module](/glossary.md#modules)'s offerings.

You can [configure](/configuration.md#synchronizer) your favorite method for each module that supports this feature.

> Attachment: [server/src/core/synchronizer.js](https://github.com/leon-ai/leon/blob/develop/server/src/core/synchronizer.js) *Leon's synchronizer*.

## TTS

TTS or (*Text-To-Speech*) transforms a string (text) to an audio stream (speech).

Leon has multiple TTS synthesizers; you can choose one (or several) to [configure](/configuration.md#voice).

> Attachment: [server/src/tts/tts.js](https://github.com/leon-ai/leon/blob/develop/server/src/tts/tts.js) *Leon's TTS*.
