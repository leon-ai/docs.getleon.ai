# Bridges

Bridges are a part of Leon that allow to make the connection between his core and his modules. You can think of them as connectors too. The bridges also execute the Leon's modules.
Actually, the core creates a [Node.js child process](https://nodejs.org/api/child_process.html) which executes the given module.

In the future, we would like to have the possibility to write Leon's modules in other languages and not only Python.

::: tip
Bridges can be found in the `bridges` folder.
:::

## Python

The Python bridge is the reason why Leon needs Python to work today. Because there is only one bridge available until now.

If you wish to execute a Python module standalone, without a child process, run the following command from the project root directory:
```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py {LANG} {PACKAGE} {MODULE} "{STRING}"
```
