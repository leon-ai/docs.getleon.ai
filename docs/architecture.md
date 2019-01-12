# Architecture

Please make sure you read the [glossary](/glossary.md) to have a better understanding of this section.

## High-Level Architecture Schema

![Leon's High-Level Architecture Schema](/assets/img/high-level_architecture_schema.svg "Leon's High-Level Architecture Schema")

## Scenario

This scenario describes the steps of the schema above. Please note that most of the interactions are done via WebSockets.

1. Client (web app, etc.) makes an HTTP request to GET some information about Leon.
2. [HTTP API](/glossary.md#api) responds information to client.
3. User talks with his microphone.
4. <i style="opacity: 0;">.</i>
	- a. If [hotword](/offline.md#hotword) server is launched, Leon listens (offline) if user is calling him by saying `Leon`.
	- b. If Leon understands user is calling him, Leon emits a message to the main server via a WebSocket. Now Leon is listening (offline) to user.
	- c. User said `Hello!` to Leon, client transforms the audio input to an audio blob.
5. [ASR](/glossary.md#asr) transforms audio blob to a wave file.
6. [STT](/glossary.md#stt) parser transforms wave file to string (`Hello`).
7. <i style="opacity: 0;">.</i>
	- a. User receives string and string is forwarded to [NLU](/glossary.md#nlu).
	- b. Or user type `Hello!` with his keyboard (and ignores steps 1. to 7.a.). `Hello!` string is forwarded to NLU.
8. NLU classifies string and pick-up classification.
9. If [collaborative logger](/collaborative-logger.md) is enabled, classification is sent to collaborative logger.
10. [Brain](/glossary.md#brain) creates a child process and executes the chosen [module](/glossary.md#modules).
11. If [synchronizer](/glossary.md#synchronizer) is enabled and module has this option, it synchronizes content.
12. Brain creates an [answer](/glossary.md#answers) and forwards it to [TTS](/glossary.md#tts) synthesizer.
13. TTS synthesizer transforms text answer (and send it to user as text) to audio buffer which is played by client.
