---
slug: /architecture
sidebar_position: 3
---

# Architecture

Please make sure you read the [glossary](/glossary) to have a better understanding of this section.

## High-Level Architecture Schema

![Leon's High-Level Architecture Schema](/img/guide/high-level_architecture_schema.svg "Leon's High-Level Architecture Schema")

## Scenario

This scenario describes the steps of the above schema. Please note that most interactions are done through WebSockets.

1. Client (web app, etc.) makes an HTTP request to GET some information about Leon.

2. [HTTP API](/glossary#api) responds information to client.

3. User talks with their microphone.

4. <i style={{ opacity: 0 }}>.</i>

   a. If [hotword](/offline#hotword) server is launched, Leon listens (offline) if user is calling him by saying `Leon`.

   b. If Leon understands user is calling him, Leon emits a message to the main server via a WebSocket. Now Leon is listening (offline) to user.

   c. User said `Hello!` to Leon, client transforms the audio input to an audio blob.

5. [ASR](/glossary#asr) transforms audio blob to a wave file.
6. [STT](/glossary#stt) parser transforms wave file to string (`Hello`).
7. <i style={{ opacity: 0 }}>.</i>

   a. User receives string and string is forwarded to [NLU](/glossary#nlu).

   b. Or user type `Hello!` with their keyboard (and ignores steps 1. to 7.a.). `Hello!` string is forwarded to NLU.

8. NLU classifies string and pick up classification.
9. If [collaborative logger](/collaborative-logger) is enabled, classification is sent to collaborative logger.
10. [Brain](/glossary#brain) creates a child process and executes the chosen [module](/glossary#modules).
11. If [synchronizer](/glossary#synchronizer) is enabled and module has this option, it synchronizes content.
12. Brain creates an [answer](/glossary#answers) and forwards it to [TTS](/glossary#tts) synthesizer.
13. TTS synthesizer transforms text answer (and send it to user as text) to audio buffer which is played by client.
