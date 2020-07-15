# Testes

Para garantir a qualidade do projeto, Leon tem testes automatizados. Como a codebase muda regularmente, os testes devem garantir que não haja regressão por causa dessas novas alterações.

No Leon, existem vários tipos de testes, vamos mostrá-los nas próximas seções. Note que todos os testes são escritos em JavaScript.

## Unidade

Softwares são feitos de pequenas partes e a finalidade desses testes é assegurar o funcionamento dessas partes do projeto.

Leon usa testes unitários para testar as partes do seu núcleo.

Testes unitários podem ser:
- Encontrados na pasta `test/unit`.
- Executados via: `npm run test:unit`.

## End-to-End

Testes de end-to-end ou testes de integração asseguram o correto funcionamento de todo o comportamento de um recurso dedicado. Ele testa várias partes de uma só vez e espera por um resultado específico.

Leon usa testes de end-to-end para testar seus módulos e sua PNL.

Testes de ponta a ponta podem ser:
- Encontrados na pasta `test/e2e` e no arquivo `packages/{NOME DO PACOTE}/test/{NOME DO MÓDULO}.spec.js`.
- Executados via: `npm run test:e2e`.

## JSON

Os testes "JSON" estão relacionados à estrutura do Leon e não são necessariamente para softwares em geral.

Leon os utiliza para garantir que todos os arquivos JSON sejam válidos e respeitem regras específicas, como sintaxe, pontuação etc.

Os testes "JSON" podem ser:
- Encontrados na pasta `test/json`.
- Executados via: `npm run test:json`.
