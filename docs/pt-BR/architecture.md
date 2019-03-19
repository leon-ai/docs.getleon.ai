# Arquitetura

Assegure-se de ler o [glossário](/pt-BR/glossary.md) para entender melhor esta seção.

## Diagrama Arquitetural de Alto Nível

![Diagrama Arquitetural de Alto Nível do Leon](/assets/img/high-level_architecture_schema.svg "Leon's High-Level Architecture Schema")

## Cenário

Este Cenário descreve os passos do esquema acima. Note que a maior parte das interações são feitas através de WebSockets.

1. Cliente (web app, etc.) faz uma solicitação HTTP GET para buscar alguma informação sobre Leon.
2. A [API HTTP](/pt-BR/glossary.md#api) retorna as informações ao cliente.
3. Usuário fala ao microfone.
4. <i style="opacity: 0;">.</i>
	- a. Se o servidor de [hotwords](/pt-BR/offline.md#hotword) está iniciado, Leon ouve (offline) se o usuário está o chamando ao dizer "`Leon`".
	- b. Se Leon entende o usuário lhe chamando, ele emite a mensagem para o servidor principal usando um WebSocket. Agora Leon está escutando (offline) o usuário.
	- c. O Usuário diz `Hello!` para Leon, o cliente transforma a entrada de áudio em um blob de áudio.
5. O [ASR](/pt-BR/glossary.md#asr) transforma o blob de áudio em um arquivo de ondas (wave).
6. O parser [STT](/pt-BR/glossary.md#stt) transforma o wave em uma string (`Hello`).
7. <i style="opacity: 0;">.</i>
	- a. O usuário recebe o texto, que é encaminhado ao [NLU](/pt-BR/glossary.md#nlu).
	- b. Ou digita `Hello!` com o teclado (ignorando os passos 1. à 7.a.). O texto `Hello!` é encaminhado ao NLU.
8. O NLU classifica o texto e seleciona uma classificação.
9. Se o [logger colaborativo](/pt-BR/collaborative-logger.md) está ativado, a classificação é enviada a ele.
10. O [Cérebro](/pt-BR/glossary.md#cerebro) cria um processo filho e executa o [módulo](/pt-BR/glossary.md#modulos) escolhido.
11. Se o [sincronizador](/pt-BR/glossary.md#sincronizador) está ativado e o módulo tem essa opção, ele sincroniza o conteúdo
12. O Cérebro gera uma [resposta](/pt-BR/glossary.md#respostas) e encaminha ao sintetizador [TTS](/pt-BR/glossary.md#tts).
13. O sintetizador TTS transforma a resposta em texto (e envia a resposta ao usuário como texto) para o buffer de áudio, que é então reproduzido pelo cliente.
