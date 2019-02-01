# Paquets & Modules

Les modules sont les compétences de Léon, c'est grâce à eux que Léon est capable de faire des choses en fonction de ce que vous lui demandez. Dans cette section vous allez en savoir plus à ce sujet.

## Paquets

Les paquets contiennent une infinité de modules. Un paquet n'est ni plus ni moins  qu'un **dossier contenant des modules**, vous pouvez les considérer comme étant une catégorie de modules.

> Ex. le paquet *[Checker](https://github.com/leon-ai/leon/tree/develop/packages/checker)* contient des modules tels que le *[Is It Down](https://github.com/leon-ai/leon/blob/develop/packages/checker/isitdown.py)* car ce paquet inclut les modules ayant pour but la "vérification".

La liste complète des paquets est disponible [ici](https://github.com/leon-ai/leon/tree/develop/packages).

### Structure des dossiers

Les paquets sont listés dans le répertoire `packages`. Prenons le paquet [*Video Downloader*](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader) comme exemple.

Notez que le **nom du paquet doit être en minuscule**.

::: vue
videodownloader
├── `config`
│   ├── config.json
│   └── config.sample.json
├── `data`
│   ├── answers
│   │   ├── en.json
│   │   └── fr.json
│   ├── db
│   └── expressions
│       ├── en.json
│       └── fr.json
├── `test`
│   └── youtube.spec.js
├── README.md
├── \_\_init\_\_.py
├── version.txt
└── youtube.py
:::

- [`packages/videodownloader`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader) : nom du paquet.
- `packages/videodownloader/config/config.json` : configuration du paquet. Il contient la configuration de tous ses modules.
- [`packages/videodownloader/config/config.sample.json`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/config/config.sample.json) : exemple de fichier de configuration. Ce fichier est copié pendant l'installation afin de générer le fichier ci-dessus.
- [`packages/videodownloader/data/answers`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/data/answers) : dossier contenant la traduction des réponses de chaque module.
- [`packages/videodownloader/data/db`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/data/db) : dossier contenant la base de donnée du paquet.
- [`packages/videodownloader/data/expressions`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/data/expressions) : dossier contenant le jeux de données de compréhension de chaque module. Ces jeux de données sont utilisés pour entraîner le modèle de compréhension.
- [`packages/videodownloader/test`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/test) : dossier contenant les tests de chaque module.
- [`packages/videodownloader/README.md`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/README.md) : fichier contenant les objectifs du paquet et de ses modules.
- [`packages/videodownloader/__init__.py`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/__init__.py) : fichier vide permettant de charger le paquet comme un paquet Python.
- [`packages/videodownloader/version.txt`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/version.txt) : fichier contenant la version du paquet.
- [`packages/videodownloader/youtube.py`](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader/youtube.py) : module *YouTube*.

Chaque paquet :
- À sa propre version.
- À sa propre configuration (pour chaque module).
- À son propre jeux de données (pour chaque module).
- À ses propres tests (pour chaque module).

### Gestion des versions

- Les paquets de Léon respectent le [SemVer](https://semver.org).
- Chaque nouveau module incrémente le nombre de version *MINEUR* du paquet *(ex. 1.0.0 -> 1.1.0)*.
- À chaque fois qu'un nombre de version *MAJEUR* ou *MINEUR* est incrémenté, alors le nombre *MINEUR* de la version du projet est incrémenté également *(ex. 1.0.0 -> 2.0.0 | 1.1.0 -> 1.1.0)*.
- À chaque fois qu'un nombre de version *CORRECTIF* d'un paquet est incrémenté, alors le nombre *CORRECTIF* du projet est incrémenté également *(ex. 1.0.0 -> 1.0.1 -> 1.0.1)*.

## Modules

**Les modules sont les compétences de Léon**.

Quand Léon comprend ce que vous lui dites, il :
1. Appel un module.
2. Fait le job du module.
3. Vous retourne le résultat du module.

Chaque module à son propre objectif et sa propre configuration. N'hésitez pas à parcourir la [liste des paquets](https://github.com/leon-ai/leon/tree/develop/packages) afin de comprendre leur buts.

Aujourd'hui, les modules sont écrits en Python mais à l'avenir ils pourraient supportés d'autres langages grâce aux [connecteurs](/fr-FR/bridges.md).

### Configuration

Prenons à nouveau le paquet [*Video Downloader*](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader) comme exemple.
```json
{
  "youtube": {
    "api_key": "YOUR_GOOGLE_API_KEY",
    "playlist_id": "PLAYLIST_ID",
    "options": {
      "synchronization": {
        "enabled": true,
        "method": "direct",
        "email": ""
      }
  	}
  }
}
```
> *`packages/videodownloader/config/config.json`*

Dans chaque fichier de configuration de paquet, vous pouvez ajouter autant de nouvelles clés / valeur que vous souhaitez lors de la création d'un module.

Dans cette exemple, les clés `api_key` et `playlist_id` ont été ajoutées à la configuration du module *YouTube*.
Ceci permet au module de sélectionner ces valeurs dans le but de requêter l'API YouTube.

Pour accèder à ces propriétés, vous pouvez utiliser la fonction [utils.config(key)](#config-key).

Les options sont utilisées lorsqu'il y a besoin d'une intéraction entre un module et le noyau. 

Options are used when it needs interaction between a module and the core. Elles peuvent par exemple être utilisées pour le [synchroniseur](/fr-FR/configuration.md#synchroniseur).

::: tip
N'hésitez pas à jeter un œil aux autres modules afin d'avoir une meilleure compréhension.
:::

### Jeux de données et traductions

Pour vous répondre et vous comprendre, Léon a besoin de ses jeux de données et traductions.

En effet, ses jeux de données sont divisés en deux parties : les [expressions](/fr-FR/glossary.md#expressions) et les [réponses](/fr-FR/glossary.md#reponses).

- Chaque module a ses propres expressions et réponses.
- Chacun de ces jeux de données a ses propres traductions.
- Les traductions sont représentées par le nom de fichier de ces jeux de données, tels que `en.json`, `fr.json`, etc.

#### Expressions

Les expressions sont les données utilisées afin d'entraîner la compréhension de Léon. Lorsque vous exécutez le [script d'entraînement](/fr-FR/scripts.md), toutes les expressions de chaque module sont parcourues et génèrent le [classifieur](/fr-FR/glossary.md#classifieur).

Notez que chaque expression de module a sa propre confiance (précision).

> ```json
> {
>   "whoami": [
>     "Qui es-tu ?",
>     "Comment t'appelles-tu ?",
>     "Comment tu t'appelles ?",
>     "Dis-moi qui tu es",
>     "Présente-toi"
>   ]
> }
> ```

> Ex. [les expressions françaises du module *Who Am I*](https://github.com/leon-ai/leon/blob/develop/packages/leon/data/expressions/fr.json) appartiennent au paquet *Leon*.

##### Fallbacks

Malgré les expressions que vous avez écrit, il se peut que Léon ne les comprend toujours pas. C'est là que les fallbacks entrent en jeu.

Dans le fichier [`core/langs.json`](https://github.com/leon-ai/leon/blob/develop/core/langs.json), vous pouvez trouver la liste des langues supportées avec plusieurs propriétés :

- `short`: le code court de la langue.
- `min_confidence`: la confiance (précision) minimum de la compréhension de Léon. Si cette confiance est plus petite que celle définie, alors Léon vous répond qu'il n'est pas sûr de ce que vous lui dites. 
- `fallbacks`: force la sélection d'un module. Utilisez la clé `words` afin de déterminer avec quels mots vous souhaitez que Léon sélectionne un module en particulier. Et utilisez les clés `package` et `module` pour définir quel module devrait être exécuté en fonction des mots donnés.

#### Réponses

WIP...

### Créer un module

::: tip
La création d'un module est l'une des meilleures façons de contribuer à Léon ! Avant toute chose, assurez-vous de prendre connaissance de [ce document](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3
:::

WIP...

### Étapes

WIP...

#### 1. Définir l'objectif

WIP...

#### 2. Nommer votre module

WIP...

#### 3. Écrire le code

WIP...

#### 4. Écrire les tests

WIP...

#### 5. Partager

WIP...

### Convention de nommage

WIP...

### Fonction du module

WIP...

### Données persistentes

WIP...

### Sorties

WIP...

## Tester un module

WIP...

### Bout en bout

WIP...

### À la volée

WIP...

## Fonctions utiles

WIP...

### translate(key, d = { })

WIP...

### output(type, code, speech = '')

WIP...

### finddomains(string)

WIP...

### http(method, url)

WIP...

### config(key)

WIP...

### info()

WIP...

### createdldir()

WIP...

### db(dbtype = 'tinydb')

WIP...
