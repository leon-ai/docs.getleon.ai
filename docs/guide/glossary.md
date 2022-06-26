---
slug: /glossary
sidebar_position: 2
---

# Glossary

Some terms in the docs might be unknown to you; this section should help you achieve a better understanding of these words and how they relate to Leon.

## Actions

Actions represent the [modules](/glossary#modules) entry points.
> Attachment: [packages/calendar/todolist.py](https://github.com/leon-ai/leon/tree/master/packages/calendar/todolist.py) *example of the `To-Do List` module including actions such as `create_list`, `complete_todo`, etc*.

## Answers

Answers are Leon's responses.
Each [package](/glossary#packages) has its own set of answers with different translations.

> Attachment: [packages/checker/data/answers/en.json](https://github.com/leon-ai/leon/blob/master/packages/checker/data/answers/en.json) *example of the `Checker` package English answers*.

## API

API stands for *Application Programming Interface* and it allows the communication between different nodes of a project. These nodes can be a server, library, etc.

Examples of Leon APIs:
- The [HTTP API](https://github.com/leon-ai/leon/tree/master/server/src/api) allows him to exchange data between the server and the client.
- The [WebSocket API](https://github.com/leon-ai/leon/blob/master/server/src/core/server.js) allows him to open a bidirectional communication channel between the client and the server.
- The [Python library API](https://github.com/leon-ai/leon/blob/master/bridges/python/utils.py) allows developers to pick up functions to work on Leon's modules.

## ASR

ASR or *Automatic Speech Recognition* is the use of computer hardware and software-based techniques to identify and process human voice.

Leon uses it to make your voice understandable for him.

> Attachments:
> - [app/src/js/main.js](https://github.com/leon-ai/leon/blob/master/app/src/js/main.js) *ASR web app*.
> - [server/src/core/asr.js](https://github.com/leon-ai/leon/blob/master/server/src/core/asr.js) *ASR server*.

## Brain

Leon's brain is a major part of his core. This is where he executes his [modules](/glossary#modules), talks, picks up sentences, etc.

> Attachment: [server/src/core/brain.js](https://github.com/leon-ai/leon/blob/master/server/src/core/brain.js) *Leon's brain*.

## Classifier

A classifier is a type of model. Once trained, it outputs a result via an algorithm.
This result is used to make decisions.

Leon uses it to store the outcomes of his [expressions](/glossary#expressions) training phase.

## CLI

CLI stands for *Command-Line Interface*. You can see it as a tool to help you with your Leon journey.
All the commands list are described in the [CLI section](/cli).

## Expressions

Expressions are the dataset that Leon uses to train his understanding.
Each [package](/glossary#packages) has its own dataset with different translations.

> Attachment: [packages/checker/data/expressions/en.json](https://github.com/leon-ai/leon/blob/master/packages/checker/data/expressions/en.json) *example of the `Checker` package English expressions*.

## Modules

Modules are Leon's skills; thanks to them Leon can work his magic. Modules contain one or an infinity of [actions](/glossary#actions).

:::tip Tip

The more modules Leon has, the more skillful he becomes.
Do not hesitate to [contribute](https://github.com/leon-ai/leon/blob/master/.github/CONTRIBUTING.md) ❤️

:::

## NLU

NLU (*Natural Language Understanding*) helps computers understand human language.

Leon employs it to load the most appropriate [classifier](/glossary#classifier).
> Attachment: [server/src/core/nlu.js](https://github.com/leon-ai/leon/blob/master/server/src/core/nlu.js) *Leon's NLU*.

## Packages

Leon's packages contain one or an infinity of [modules](/glossary#modules). You can consider packages as a category of modules. This is where the [answers](/glossary#answers) and [expressions](/glossary#expressions) are stored.

Alternatively, packages are what we call "domains" in the NLP (*Natural Language Processing*) field. Domain classification is a way to structure/label data for a better scalability. It helps Leon to make decisions on what to understand and improve his accuracy.

> Attachment: [packages/leon](https://github.com/leon-ai/leon/tree/master/packages/leon) *example of the `Leon` package including modules related to Leon himself*.

:::tip Tip

The full package list is available [here](https://github.com/leon-ai/leon/tree/master/packages).

:::

## STT

STT, or *Speech-To-Text*, transforms an audio stream (speech) to a string (text).

Leon has multiple STT parsers; you can choose one (or several) to [configure](/configuration#voice).

> Attachment: [server/src/stt/stt.js](https://github.com/leon-ai/leon/blob/master/server/src/stt/stt.js) *Leon's STT*.

## Synchronizer

The synchronizer allows you to synchronize your content via different methods (Google Drive, on your current device, etc.)
restricted by the requested [module](/glossary#modules)'s offerings.

You can [configure](/configuration#synchronizer) your favorite method for each module that supports this feature.

> Attachment: [server/src/core/synchronizer.js](https://github.com/leon-ai/leon/blob/master/server/src/core/synchronizer.js) *Leon's synchronizer*.

## TTS

TTS or (*Text-To-Speech*) transforms a string (text) to an audio stream (speech).

Leon has multiple TTS synthesizers; you can choose one (or several) to [configure](/configuration#voice).

> Attachment: [server/src/tts/tts.js](https://github.com/leon-ai/leon/blob/master/server/src/tts/tts.js) *Leon's TTS*.
