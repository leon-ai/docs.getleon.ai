# Introdução

## O que é Leon?

Leon é um **assistente pessoal de código aberto** que vive no seu servidor.

Ele faz coisas quando você pedir.

Você pode falar com ele e ele pode falar com você.
Você também pode lhe mandar mensagens e ele também, a você.
Se você quiser, Leon pode se comunicar com você offline, para proteger sua privacidade.

Você pode pensar nele como um segundo cérebro.

::: tip
Leon ainda é um jovem. Se você desejar, pode ajudar [contribuindo](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3
:::

## Demo

O Vídeo está disponível [aqui](http://www.youtube.com/watch?v=p7GRGiicO1c).

## Motivações


1. Como desenvolvedores (ou não), nós **amamos criar** coisas, especialmente aquelas que podem **ajudar** na sua **vida diária**. Então, ao invés de construir um projeto dedicado para cada coisa, Leon pode nos ajudar através da sua estrutura de **packages/modules** (skills). Nós cremos que é melhor que manter suas ideias em backlog pra sempre, certo?
2. Com sua estrutura genérica, **todo mundo** pode **criar** seu próprio **módulo** e **compartilhá-lo**. Assim, há apenas um núcleo (to rule them all).
3. Leon usa **conceitos de IA**, o que é legal.
4. **Privacidade é importante**, então você pode configurar Leon para falar com ele **offline**. Você já pode lhe enviar **textos**, **sem** nenhum **serviço de terceiros**.
5. Por último, mas não menos importante: **código aberto** é ótimo!

## Prerequisitos

- **[Node.js](https://nodejs.org/) >= 10**
> O núcleo do Leon é desenvolvido usando o Node.js
- **npm >= 5**
> o npm é o gerenciador de pacotes do Node.js. Leon precisa dele para as dependências do seu núcleo.
- **[Python](https://www.python.org/downloads/) 3.6.x**
> Hoje em dia, os módulos do Leon são escritos exclusivamente em Python.
- **[Pipenv](https://docs.pipenv.org)**
> Pipenv permite que os módulos sejam executados num ambiente dedicado. Ele também já traz um gerenciador de pacotes embutido para as dependencias dos seus módulos.
- **SO's Suportados: Linux, macOS and Windows**
> Precisa explicação? :)

::: tip
Você pode ler a página de [Como Fazer...](/how-to/) para instalar os pré-requisitos.
:::

## Installation

### Download

Você tem duas opções principais para baixar o Leon:

#### 1. Git

Você pode clonar o [repositório do GitHub](https://github.com/leon-ai/leon) de diferentes branches.

##### Master Branch

A branch `master` é usada como um snapshot da última release:

```bash
git clone -b master https://github.com/leon-ai/leon.git leon
```

##### Develop Branch

A branch `develop` é a branch padrão. Aqui é onde as últimas modificações são combinadas. O que significa que nessa branch você vai ter acesso às últimas modificações antecipadamente, mas tenha em mente que não serão tão estáveis quanto a `master`:

```bash
git clone https://github.com/leon-ai/leon.git leon
```

#### 2. Arquivos de Release

Você também pode baixar a última versão seguindo [este link](https://github.com/leon-ai/leon/releases/latest).

### Install

Depois de ter instalado todos os pré-requisitos, e ter baixado o Leon, você pode instalar assim:

```bash
# Go to the project root
cd leon

# Install
npm install
```

## Uso

Assegure-se que todo o processo ocorreu bem com o comando:

```bash
npm run check
```

Isto deve lhe retornar um relatório sobre o quanto Leon está instalado/configurado. Não se preocupe se você tiver alguns avisos no relatório. Possivelmente, isto é porque você ainda não [configurou o Leon](/configuration.md)

Se o relatório mencionar que *Leon can run correctly*, então você pode montar e iniciar o Leon 

```bash
# Build
npm run build

# Run
npm start

# Go to http://localhost:1337
# Hooray! Leon is running
```

Nessa altura, você já pode comunicar-se com ele por texto e pedir a ele para fazer coisas.

::: tip
Para ver o que ele pode fazer, cheque a [lista de pacotes](https://github.com/leon-ai/leon/tree/develop/packages).
:::
