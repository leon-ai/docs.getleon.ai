# Como Fazer...

## Como Instalar o Node.js

### Usando nvm (recomendado)

[nvm](https://github.com/creationix/nvm) (Node Version Manager) lhe permite baixar, instalar e gerenciar versões do Node.js. Com nvm, você pode facilmente trocar entre diferentes versões instaladas no seu sistema. Você pode obtê-lo nos seguintes links:

- Para [Linux/macOS](https://github.com/creationix/nvm#install-script)
- Para [Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)

### Forma Tradicional

De outra forma, você pode obter o instalador do Node.js correspondente ao seu sistema [aqui](https://nodejs.org/en/download/).

### O Node.js está instalado?

Confira se o Node.js está corretamente instalado com o seguinte comando:

```bash
node --version
```

## Como Instalar o Python

::: tip
O Python já pode estar instalado no seu sistema. Você pode checar com `python --version` ou `python3 --version`.
:::

### Usando pyenv (recomendado)

[pyenv](https://github.com/pyenv/pyenv) é um gerenciador de versões simples, que permite fazer praticamente o mesmo que o nvm faz para o Node.js.

- Para [Linux](https://github.com/pyenv/pyenv-installer#installation--update--uninstallation)
- Para [macOS](https://github.com/pyenv/pyenv#homebrew-on-macos)

### Forma Tradicional

De outra forma, você pode obter o instalador do Python correspondente ao seu sistema [aqui](https://www.python.org/downloads/).
Depois de rodar o instalador, marque `Add Python to PATH`, e então instale.

### O Python está instalado?

Certifique-se que o Python está instalado com o seguinte comando:

```bash
python --version
```
ou
```bash
python3 --version
```

## Como Instalar o Pipenv

::: warning
Antes de instalar o Pipenv, certifique-se de ter o Python instalado.
:::

### Usando o pip (Linux/Windows)

[pip](https://pip.pypa.io/en/stable/installing/) é um gerenciador de pacotes para Python. Ele permite baixar e instalar pacotes Python packages com facilidade. Nós podemos usar o pip para instalar o Pipenv graças ao comando abaixo:

```bash
pip install pipenv --user
```

### Usando Homebrew (macOS)

[Homebrew](https://brew.sh/) é um gerenciador de pacotes para macOS. Você pode facilmente instalar pacotes com ele. Para instalar o Pipenv, simplesmente execute o seguinte comando:

```bash
brew install pipenv
```

### Forma Tradicional

Bem, não há muito a ser dito aqui. Siga [este guia](https://pipenv.readthedocs.io/en/latest/install/).

### Is Pipenv installed?

Certifique-se que o Pipenv está instalado com este comando:

```bash
pipenv --version
```
