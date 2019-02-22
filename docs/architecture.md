# Architecture

Please make sure you read the [glossary](/glossary.md) to have a better understanding of this section.

## High-Level Architecture Schema

![Leon's High-Level Architecture Schema](/assets/img/high-level_architecture_schema.svg "Leon's High-Level Architecture Schema")

## Scenario

This scenario describes the steps of the above displayed schema. Please note that most interactions are done through the help of [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

1. The Client (web app, etc.) makes an HTTP request to GET some information from Leon.
2. The [HTTP API](/glossary.md#api) responds with information to client.
3. The user talks using their microphone.
4. <i style="opacity: 0;">.</i>
	- a. If [hotword](/offline.md#hotword) server is launched, Leon listens (offline) if the user is calling him by saying `Leon`.
	- b. If Leon understands that the user is calling him, Leon emits a message to the main server via a WebSocket. Now Leon is listening (offline) to user.
	- c. The User says `Hello!` to Leon, client transforms the audio input to an audio blob.
5. [ASR](/glossary.md#asr) transforms audio blob to a wave file.
6. [STT](/glossary.md#stt) parser transforms wave file to string (`Hello`).
7. <i style="opacity: 0;">.</i>
	- a. The user receives the string and string is forwarded to [NLU](/glossary.md#nlu).
	- b. Or the user types `Hello!` with their keyboard (and ignores steps 1. to 7.a.). The `Hello!` string is forwarded to the NLU.
8. The NLU classifies string and pick up the classification.
9. If [collaborative logger](/collaborative-logger.md) is enabled, classification is sent to collaborative logger.
10. The [Brain](/glossary.md#brain) creates a child process and executes the chosen [module](/glossary.md#modules).
11. If the [synchronizer](/glossary.md#synchronizer) is enabled and module has this option, it synchronizes the content.
12. Brain creates an [answer](/glossary.md#answers) and forwards it to the [TTS](/glossary.md#tts) synthesizer.
13. TTS synthesizer transforms the text answer (and sends it to the user as text) to audio buffer which is played by client.
