# Collaborative Logger

O Logger Colaborativo ajuda a a melhorar o entendimento do Leon. Para cada consulta que você submete ao Leon, ele envia uma solicitação HTTP para um servidor Leon externo, se o Logger Colaborativo estiver habilitado.

Aqui estão as informações que o Leon armazena:

- Sua Versão (número).
- Colculta (texto).
- Idioma.
- Pacote que o Leon usou.
- Módulo que o Leon usou.
- Sua confiança sobre seu entendimento.
- Timestamp atual.

O logger colaborativo está **ativado por padrão**. Se você deseja desativá-lo, simplesmente configure a variável de ambiente `LEON_LOGGER` no seu arquivo `.env` para `FALSE` e reinicie o servidor.

::: tip
Se você está curioso sobre o código, você pode encontrar:

- Parte do código que interage com o logger na [NLU do Leon](https://github.com/leon-ai/leon/blob/develop/server/src/core/nlu.js).
- O código fonte do Logger Colaborativo no seu [repositório no GitHub](https://github.com/leon-ai/leon-logger).
:::
