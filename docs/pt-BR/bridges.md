# Bridges

Bridges são uma parte do Leon que permite fazer conexões entre seu core e seus módulos. Você pode pensar neles como conectores também. As bridges também executam os módulos do Leon.
Na verdade, o core cria um [processo filho do Node.js](https://nodejs.org/api/child_process.html) que executa o módulo em questão.

No futuro, nós gostaríamos da possibilidade de escrever módulos para o Leon um outras linguagens e não somente em Python.

::: tip
As Bridges podem ser encontradas na pasta `bridges`.
:::

## Python

A bridge de Python é a razão pela qual Leon precisa do Python para funcionar hoje. Pois há somente uma bridge disponível até agora.

Se você deseja executar um módulo separadamente, sem um processo filho, execute o seguinte comando partindo do diretório raiz do projeto:
```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py {LANG} {PACKAGE} {MODULE} "{STRING}"
```
