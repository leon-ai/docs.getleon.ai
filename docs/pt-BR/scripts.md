# Scripts

Aqui estão os scripts disponíveis que vc pode encontrar no [package.json](https://github.com/leon-ai/leon/blob/develop/package.json).

Esses scripts **devem ser executados a partir do diretório raiz do projeto**.

## Principais

| Script                                  | Propósito                                              |
| ----------------------------------------|--------------------------------------------------------|
| `npm run wake`                          | Iniciar o processo de hotwords.                        |
| `npm start`                             | Rodar Leon em produção depois da build.                |
| `npm run train expressions en|fr`       | Trainar o entendimento do Leon.                        |
| `npm run check`                         | Verificar o quanto do Leon está instalado/configurado. |

## Configuração

| Script                                  | Propósito                                   |
| ----------------------------------------|---------------------------------------------|
| `npm run setup:offline`                 | Configurar todos os nós offline.            |
| `npm run setup:offline-stt`             | Configurar o STT offline.                   |
| `npm run setup:offline-tts`             | Configurar o TTS offline.                   |
| `npm run setup:offline-hotword`         | Configurar o nó de hotwords.                |
| `npm run preinstall`                    | Acionado antes que `npm install` inicie.    |
| `npm run postinstall`                   | Acionado depois que `npm install` termina.  |

## Build

| Script                                  | Propósito                                     |
| ----------------------------------------|-----------------------------------------------|
| `npm run delete-dist:server`            | Exclir a pasta de distribuição do servidor.   |
| `npm run build`                         | Build Leon (aplicativo da web + servidor).    |
| `npm run build:app`                     | Build o aplicativo da web.                    |
| `npm run build:server`                  | Build o servidor.                             |

## Desenvolvimento

| Script                                     | Propósito                                                                              |
| -------------------------------------------|----------------------------------------------------------------------------------------|
| `npm run dev:app`                          | Executar o aplicativo da web em desenvolvimento.                                       |
| `npm run dev:server`                       | Executar o servidor em desenvolvimento.                                                |
| `npm run prepare-release {VERSION NUMBER}` | Incrememtar a versão de Leon e gerar o changelog de acordo com as mensagens de commit. |
| `npm run commitmsg`                        | Acionado no commit.                                                                    |

## Teste

| Script                                             | Propósito                                                                       |
| ---------------------------------------------------|---------------------------------------------------------------------------------|
| `npm run lint`                                     | Verificar a sintaxe do código do projeto.                                       |
| `npm test`                                         | Executar todos os testes.                                                       |
| `npm run test:unit`                                | Executar testes unitários.                                                      |
| `npm run test:e2e`                                 | Executar todos os tipos de testes end-to-end.                                   |
| `npm run test:e2e:modules`                         | Executar todos os testes de módulos.                                            |
| `npm run test:e2e:nlp-modules`                     | Executar testes para assegurar que todas as expressões sejam compreensíveis.    |
| `npm run test:json`                                | Executar testes para verificar se todos os arquivos JSON estão em conformidade. |
| `npm run test:module {PACKAGE NAME}:{MODULE NAME}` | Executar testes de um determinado módulo.                                       |
