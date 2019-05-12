# Introduction

## Qu'est-ce que Léon ?

Léon est un **assistant personnel open source** qui peut vivre sur votre serveur.

Il fait des choses lorsque vous lui demandez.

Vous pouvez lui parler et il peut vous parler.
Vous pouvez lui écrire et il peut également vous écrire.
Si vous le voulez, Léon peut communiquer avec vous en étant hors ligne afin de protéger votre vie privée.

Vous pouvez l'imaginer comme étant un deuxième cerveau.

::: tip
Léon est encore très jeune aujourd'hui. Si vous le souhaitez, vous pouvez aider en [contributant](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3
:::

## Démo

Une vidéo est disponible [ici](http://www.youtube.com/watch?v=kXiOD6J0WIk).

## Motivations

1. En tant que développeurs (ou pas), nous **aimons créer** des choses, d'autant plus lorsqu'il s'agit d'**améliorer** notre **quotidien**. Alors plutôt que de construire un projet dédié pour chacune de ces idées, Léon peut nous aider grâce à sa structure de **paquets / modules** (compétences). Nous pensons que c'est toujours mieux que de laisser vos idées prendre la poussière pour toujours, n'est-ce pas ?
2. Grâce à cette structure générique, **tout le monde** peut **créer** ses propres **modules** et les **partager**. De cette façon il y a seulement un noyau (pour les gouverner tous).
3. Léon utilise des **concepts** d'**IA**, plutôt cool.
4. La **vie privée** est **importante**, vous pouvez configurer Léon pour discuter avec lui **hors ligne**. Vous pouvez déjà correspondre avec lui par **message écrit** sans **aucun service tiers**.
5. Et enfin parce que l'**open source** c'est génial.

## Prérequis

- **[Node.js](https://nodejs.org/) 10 ou 11**
> Le noyau de Léon est développé avec le runtime JavaScript Node.js.
- **npm >= 5**
> npm est le gestionnaire de paquets de Node.js. Léon en a besoin pour l'arbre de dépendances de son noyau.
- **[Python](https://www.python.org/downloads/) 3.6.x**
> Aujourd'hui, les modules de Léon sont écrits en Python.
- **[Pipenv](https://docs.pipenv.org)**
> Pipenv permet aux modules de Léon d'être exécutés dans un environnement dédié. Pipenv embarque également un gestionnaire de paquets Python pour l'arbre de dépendances des modules de Léon.
- **OS supportés: Linux, macOS et Windows**
> Devons-nous expliquer celui-ci ? :)

::: tip
Vous pouvez suivre le [manuel](/fr-FR/how-to/) pour installer ces prérequis.
:::

## Installation

### Télécharger

Deux possibilités s'offrent à vous pour télécharger Léon :

#### 1. Git

Vous pouvez cloner le [répertoire GitHub](https://github.com/leon-ai/leon) depuis différentes branches.

##### Branche master

La branche `master` est une copie de la dernière mise à jour :

```bash
git clone -b master https://github.com/leon-ai/leon.git leon
```

##### Branche develop

La branche `develop` est la branche par défaut, c'est sur celle-ci que les derniers changements sont fusionnés. Via cette branche vous obtienderai les toutes dernières mises à jour, en revanche elle ne sera pas aussi stable que la `master` :

```bash
git clone https://github.com/leon-ai/leon.git leon
```

#### 2. Archives

Ou vous pouvez télécharger la dernière mise à jour en suivant [ce lien](https://github.com/leon-ai/leon/releases/latest).

### Installer

Une fois que les prérequis sont installés et que Léon est téléchargé, vous pouvez installer :

```bash
# Aller à la racine du projet
cd leon

# Installer
npm install
```

## Utilisation

Veuillez vous assurer que l'installation s'est correctement déroulée à l'aide de cette commande :

```bash
npm run check
```

Cette commande vous donne un rapport qui vous permet de voir à quel point Léon est installé / configuré. Ne vous inquiétez pas si vous voyez des avertissements dans le rapport, c'est simplement parce que vous n'avez probablement pas encore [configuré Léon](/fr-FR/configuration.md).

Si le rapport mentionne que *Leon peut fonctionner correctement*, alors vous pouvez construire et lancer Léon :

```bash
# Construire
npm run build

# Lancer
npm start

# Allez sur http://localhost:1337
# Hourra ! Léon fonctionne
```

À ce stade vous pouvez déjà correspondre avec Léon par écrit et lui demander des choses.

::: tip
Pour voir ce qu'il peut faire, merci de vous référer à la [liste des paquets](https://github.com/leon-ai/leon/tree/develop/packages).
:::

## Installer avec Docker <Badge text="1.0.0-beta.1+"/>

Vous pouvez aussi utiliser Docker pour installer et exécuter Léon.

```bash
# Construire
npm run docker:build

# Lancer sous Linux ou macOS
npm run docker:run

# Lancer sous Windows (vous pouvez remplacer "UTC" par votre fuseau horaire)
docker run -e TZ=UTC -p 1337:1337 -it leonai/leon

# Allez sur http://localhost:1337
# Hourra ! Léon fonctionne
```
