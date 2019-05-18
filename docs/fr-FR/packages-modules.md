# Paquets & Modules

Les modules sont les compétences de Léon, c'est grâce à eux que Léon est capable de faire des choses en fonction de ce que vous lui demandez. Dans cette section vous allez en savoir plus à ce sujet.

## Paquets

Les paquets contiennent une infinité de modules. Un paquet n'est ni plus ni moins  qu'un **dossier contenant des modules**, vous pouvez les considérer comme étant une catégorie de modules.

> Ex. le paquet *[Checker](https://github.com/leon-ai/leon/tree/develop/packages/checker)* contient des modules tels que le *[Is It Down](https://github.com/leon-ai/leon/blob/develop/packages/checker/isitdown.py)* car ce paquet inclut les modules ayant pour but la "vérification".

La liste complète des paquets est disponible [ici](https://github.com/leon-ai/leon/tree/develop/packages).

### Structure des dossiers

Les paquets sont listés dans le répertoire `packages`. Prenons le paquet [*Video Downloader*](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader) comme exemple.

Notez que le **nom du paquet doit être en minuscule et en anglais**.

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

**Les modules sont les compétences de Léon**. Ils contiennent une ou plusieurs [action(s)](#actions-fonctions-de-module) afin d'accomplir une tâche spécifique.

Quand Léon comprend ce que vous lui dites, il :
1. Appel une action de module.
2. Fait le job.
3. Vous retourne le résultat de l'éxécution.

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

Les expressions sont contenues dans une [action](#actions-fonctions-de-module) de module. C'est comme ça que Léon comprend quelle action il doit faire.

Notez que chaque expression de chaque action de module a sa propre confiance (précision).

> ```json
> {
>   "meaningoflife": {
>     "run": {
>       "expressions": [
>         "Quel est le but de la vie ?",
>         "Quel est l'objectif de la vie ?"
>       ]
>     }
>   }
> }
> ```

> Ex. [les expressions françaises du module *Who Am I*](https://github.com/leon-ai/leon/blob/develop/packages/leon/data/expressions/fr.json) appartiennent au paquet *Leon*. Ces expressions sont contenues dans l'action `run`.

##### Fallbacks

Malgré les expressions que vous avez écrit, il se peut que Léon ne les comprend toujours pas. C'est là que les fallbacks entrent en jeu.

Dans le fichier [core/langs.json](https://github.com/leon-ai/leon/blob/develop/core/langs.json), vous pouvez trouver la liste des langues supportées avec plusieurs propriétés :

- `short`: le code court de la langue.
- `min_confidence`: la confiance (précision) minimum de la compréhension de Léon. Si cette confiance est plus petite que celle définie, alors Léon vous répond qu'il n'est pas sûr de ce que vous lui dites. 
- `fallbacks`: force la sélection d'un module. Utilisez la clé `words` afin de déterminer avec quels mots vous souhaitez que Léon sélectionne un module en particulier. Et utilisez les clés `package`, `module` et `action` pour définir quel action de module devrait être exécuté en fonction des mots donnés.

#### Réponses

Les réponses sont les données utilisées par Léon qui permettent de vous fournir les résultats couplés aux sorties des modules.

> ```json
> {
>   "greeting": {
>     "default": [
>       "Salutations !"
>     ],
>     "morning_good_day": [
>       "Bonjour, j'espère que votre journée sera pleine de joie et de productivité !"
>     ],
>     "morning": [
>       "Bonjour !"
>     ],
>     "too_late": [
>       "Bonsoir ! Je suis honoré que vous me parliez à cette heure tardive, mais vous devriez aller vous coucher maintenant."
>     ]
>   }
> }
> ```

> Ex. une partie des [réponses françaises du module *Greeting*](https://github.com/leon-ai/leon/blob/develop/packages/leon/data/answers/fr.json) appartenant au paquet *Leon*.

##### HTML <Badge text="1.0.0-beta.2+"/>

Il est possible d'utiliser de l'HTML dans vos réponses.

> ```json
> {
>   "github": {
>     "list_element": [
>       "<li>#%rank%. <a href=\"%repository_url%\" target=\"_blank\">%repository_name%</a> créé par <a href=\"%author_url%\" target=\"_blank\">%author_username%</a> avec %stars_nb% nouvelles étoiles.</li>"
>     ]
>   }
> }
> ```

> Ex. une partie des [réponses françaises du module *GitHub*](https://github.com/leon-ai/leon/blob/develop/packages/trend/data/answers/fr.json) appartenant au paquet *Trend*.

## Créer un module

::: tip
- La création d'un module est l'une des meilleures façons de contribuer à Léon ! Avant toute chose, assurez-vous de prendre connaissance de [ce document](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3
- Par exemple, vous pouvez imaginer créer un module to-do liste *(bien que [celui-ci existe déjà](https://github.com/leon-ai/leon/tree/develop/packages/calendar#to-do-list))*. Faites un tour sur la [roadmap](https://roadmap.getleon.ai) pour voir ce qu'il y a de prévu..
- N'hésitez pas à [ouvrir une issue](https://github.com/leon-ai/leon/issues/new/choose) si vous avez la moindre question.
:::

Chaque module est inclus dans un paquet *(ex. `packages/{NOM DU PAQUET}/{NOM DU MODULE}.py`)*.

### Étapes

Voici les étapes basiques pour créer un module. Pour ces étapes, nous prendrons un module tweets grabber en tant qu'exemple.

#### 1. Définir le ou les objectif(s)

- Je veux créer un module tweets grabber. Quand je dis ou lorsque j'écris :
```
Récupère mes derniers tweets
```
- Je veux que léon me donne mes 5 derniers tweets avec les statistiques de chaque.
- Il semblerait que ce module ne correspond pas à un paquet (catégorie) existant. Alors je crée le paquet *Twitter* en créant le dossier `packages/twitter`.
- Pour ce faire, je m'assure de suivre la [structure des dossiers d'un paquet](#structure-des-dossiers) et que cette structure contienne les fichiers requis.

::: tip
Si votre module est plus avancé et doit comprendre plusieurs objectifs, alors n'hésitez pas à créer plusieurs [actions](#actions-fonctions-de-module).
:::

#### 2. Nommer votre module

- Je choisis de nommer mon module `Tweets Grabber`.

#### 3. Écrire le code

- Afin de requêter l'API de Twitter, j'ai besoin des identifiants API. Alors je renseigne les clés de l'API Twitter dans le fichier `packages/twitter/config/config.json` que j'ai précédemment créé à l'étape 1.
- De plus, je crée le fichier `packages/twitter/tweetsgrabber.py`, définis la ou les [action(s)](#actions-fonctions-de-module) de mon module puis j'écris mon code.
- Pendant que j'écris le code, j'[édite `server/src/query-object.sample.json`](#objet-de-demande) depuis le répertoire racine du projet, j'utilise cette commande :
```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py server/src/query-object.sample.json
# Exécute mon module à la volée
```

#### 4. Écrire les tests

- Maintenant que je suis satisfait avec mon module, je crée le fichier `packages/twitter/test/tweetsgrabber.spec.js`.
- J'écris les [tests de mon module](#tester-un-module) dans ce fichier.

#### 5. Expliquer comment utiliser

- Dans le fichier `packages/twitter/README.md`, j'ajoute une courte description expliquant l'objectif de mon module.
- J'explique brièvement comment mon module s'utilise (quelle phrases nous pouvons utiliser, si on doit / peut configurer certaines choses, etc..

#### 6. Partager

- Je partage mon module au monde entier en [contribuant](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md).

### Actions (fonctions de module) <Badge text="1.0.0-beta.3+"/>

Dans le fichier du module, vous devez ajouter une action (fonction) qui sera le point d'entrée de l'exécution. Une action prend la chaîne de caractères d'entrée (query) et les [entités](#entites) comme paramètres.

Quand vous avez seulement une action dans votre module, le nom d'action utilisé est généralement `run` :

```bash
# Exécute l'action "run"
Quel est le but de la vie ?
```

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-

import utils

def meaningoflife(string, entities):
  """Leon says what's the meaning of life"""
  
  # string : Quel est le but de la vie ?
  # entities : Aucune ici

  return utils.output('end', 'meaning_of_life', utils.translate('meaning_of_life'))
```

Quand vous avez plusieurs actions dans votre module :

```bash
# Exécute l'action "create_list"
Créé la liste courses

# Exécute l'action "add_todo"
Ajoute patates à ma liste de courses
```

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-

import utils

def create_list(string, entities):
  """Leon creates a to-do list"""
	
  # Votre super code ici...
  
  return utils.output('end', 'list_created', utils.translate('list_created'))
  
def add_todo(string, entities):
  """Leon add todos to a list"""
	
  # Votre super code ici...
  
  return utils.output('end', 'todo_added', utils.translate('todo_added'))
```

::: tip
N'oubliez pas que Léon sait quelle action il doit exécuter grâce aux [expressions](#expressions) que vous définissez.
:::

### Convention de nommage

- Le nom de fichier d'un module doit uniquement contenir des lettres minuscules et doit être nommé en anglais.
> Ex. le nom de fichier du module *Meaning of Life* : `meaningoflife.py`

- Les noms d'actions doivent utiliser le snake_case (lettres minuscules et `_` seulement) et doit être nommés en anglais.
> Ex. les actions du module *To-Do List* : `create_list`, `add_todo`, `complete_todo`, etc.

### Objet de demande <Badge text="1.0.0-beta.2+"/>

Chaque fois que vous communiquer avec Léon, il va créer un fichier d'objet de demande temporaire avec les propriétés suivantes :

- `lang` : code (court) de la langue utilisée.
- `package` : nom du paquet utilisé.
- `module` : nom du module utilisé.
- `action` : nom de l'action utilisée.
- `query` : votre phrase.
- `entities` : un tableau d'entités que Léon a extrait de votre phrase. Une entité peut être ce que vous voulez en fonction de ce que vous définissez (entité personnalisée) ou elle peut être une entité intégrée comme une durée dans le temps, un nombre, un nom de domaine, etc.

Le fichier [server/src/query-object.sample.json](https://github.com/leon-ai/leon/blob/develop/server/src/query-object.sample.json) est présent pour que vous puissiez exécuter et tester le comportement du code de votre module [à la volée](#a-la-volee) pendant sa création. Modifiez le en fonction des propriétés de votre module.

### Entités <Badge text="1.0.0-beta.2+"/>

Les entités sont des morceaux que Léon extrait des phrases. Ces entités sont partagées à vos actions afin que vous puissiez les manipuler pour donner plus de sens à vos modules.

Il y a différents types d'entités, ceux-ci sont listés ci-dessous :

#### Entités intégrées <Badge text="1.0.0-beta.2+"/>

Les entités intégrées sont celles déjà inclues dans Léon. Léon extrait automatiquement ces entités depuis vos phrases.

La liste complète est disponible [ici](https://github.com/axa-group/nlp.js/blob/master/docs/builtin-entity-extraction.md).

::: tip
N'hésitez pas à consulter des exemples afin de comprendre comment ces entités sont utilisées. Ceux-ci sont des exemples parfaits :

- [packages/checker/isitdown.py](https://github.com/leon-ai/leon/blob/develop/packages/checker/isitdown.py)
- [packages/trend/github.py](https://github.com/leon-ai/leon/blob/develop/packages/trend/github.py)

Comme vous voyez, vous pouvez itérer sur les entités pour récupérer les informations dont vous avez besoin (nom de domaines, dates, vos propres entités, etc.).
:::

#### Entités personnalisées <Badge text="1.0.0-beta.3+"/>

Les entités personnalisées sont celles que vous définissez vous-même en fonction de vos cas d'utilisations. Vous pouvez créer vos propres entités dans les fichiers de langues situés dans : `packages/{NOM DU PAQUET}/data/expressions/{FICHIER DE LANGUE}.json`. Dans ce fichier, les entités personnalisées sont inclues dans les propriétés d'actions au même niveau que les expressions.

Elles sont représentées par un tableau d'objets :
```json
"entities": [
  {
    "type": "",
    "name": "",
    ...
  }
]
```

Comme vous pouvez le voir, une entité personnalisée comprend un `type`, un `name` et plus en fonction de son type.

> Ex. consultez les [entités de l'action *create_list*](https://github.com/leon-ai/leon/blob/develop/packages/calendar/data/expressions/fr.json) du module *To-Do List*.

Les entités personnalisées ont deux types listés ci-dessous :

##### Entités réduites

Les entités réduites vous permettent de tronquer des parties de la phrase pour extraire le texte qui vous intéresse. Ceci se fait à l'aide des conditions :

- `{ "type": "between", "from": "", "to": "" }`
- `{ "type": "after", "from": "" }`
- `{ "type": "after_first", "from": "" }`
- `{ "type": "after_last", "from": "" }`
- `{ "type": "before", "to": "" }`
- `{ "type": "before_first", "to": "" }`
- `{ "type": "before_last", "to": "" }`

Afin d'illustrer tout ça, admettons que nous créons un module *To-Do List*. Pour ce faire, nous allons définir une entité personnalisée `list`.

Lorsque nous avons les phrases suivantes :
```
Crée ma liste de courses
Crée une liste nommée courses
```
Nous voulons extraire le texte `courses` afin de l'associer à notre entité `list`. Nous utilisons la condition `after` pour récupérer ce qu'il y a après `de` ou `nommée` :

```json
"entities": [
	{
    "type": "trim",
    "name": "list",
    "conditions": [
      {
        "type": "after",
        "from": "de"
      },
      {
        "type": "after",
        "from": "nommée"
      }
    ]
  }
]
```

Dans le fichier module `packages/{PACKAGE NAME}/todolist.py` :
```python
def create_list(string, entities):    
  # string: "Crée ma liste de courses"
  # entities: [{'type': 'after', 'start': 18, 'end': 25, 'len': 8, 'accuracy': 0.99, 'sourceText': 'courses', 'utteranceText': 'courses', 'entity': 'list'}]
    
  print('nom de l\'entité :', entities[0]['entity']) # nom de l'entité : list
  print('valeur de l\'entité :', entities[0]['sourceText']) # valeur de l'entité : courses
```

::: tip
Vous pouvez jeter un œil au réel [module *To-Do List*](https://github.com/leon-ai/leon/blob/develop/packages/calendar/todolist.py) du paquet *Calendar*.
:::

##### Entités expressions régulières

Les entités expressions régulières vous permettent de récupérer les parties d'une phrase via des expressions régulières.


Disons que nous créons un module *Color Picker*. Pour ce faire, nous allons définir une entité expression régulière `color`.

Lorsque nous avons la phrase suivante :
```
J'aime les couleurs rouge et bleu
```
Nous voulons extraire les chaînes de caractères `rouge` et `bleu` afin de les associer à des entités `color`. Nous utilisons une expression régulière pour récupérer ces couleurs :

```json
"entities": [
  {
    "type": "regex",
    "name": "color",
    "regex": "bleu|jaune|rouge|rose|vert"
  }
]
```

Dans le fichier module (`packages/{PACKAGE NAME}/colorpicker.py`):
```python
def run(string, entities):    
  # string: "J'aime les couleurs rouge et bleu"
  # entities: [{'start': 20, 'end': 25, 'accuracy': 1, 'sourceText': 'rouge', 'utteranceText': 'rouge', 'entity': 'color'}, {'start': 29, 'end': 33, 'accuracy': 1, 'sourceText': 'bleu', 'utteranceText': 'bleu', 'entity': 'color'}]
  
  print('nom de l\'entité :', entities[0]['entity']) # nom de l'entité : color
  print('valeur de l\'entité :', entities[0]['sourceText']) # valeur de l'entité : rouge
  print('nom de l\'entité :', entities[1]['entity']) # nom de l'entité : color
  print('valeur de l\'entité :', entities[1]['sourceText']) # valeur de l'entité : bleu
```

### Données persistentes

Léon utilise [TinyDB](https://github.com/msiemens/tinydb) pour gérer les bases de données des paquets. Chaque paquet peut voir sa propre base de données et cette base de données est gérée par les modules.

Pour plus d'informations, veuillez vous référer à :
- La fonction [utils.db()](#db-dbtype-tinydb).
- La documentation [TinyDB](https://tinydb.readthedocs.io).
- L'exemple du [module YouTube](https://github.com/leon-ai/leon/blob/develop/packages/videodownloader/youtube.py).

### Installer des paquets Python tiers

Léon tourne dans un environnement virtuel afin d'assurer que les paquets / dépendances du projet ne soient pas en conflit avec ceux installés sur votre système.

Afin d'installer les paquets tiers, veuillez suivre les étapes suivantes :

1. Ouvrez votre terminal au dossier `bridges/python`.
2. Exécutez `pipenv install {NOM DU PAQUET}={VERSION DU PAQUET}`. Notez qu'il doit y avoir une version spécifique du paquet.
3. Importez le nouveau paquet installé dans le fichier du module requis via `import {NOM DU PAQUET}`.  

`{NOM DU PAQUET}` et `{VERSION DU PAQUET}` sont des placeholders. N'oubliez pas de les remplacer par le nom et la version du paquet que vous souhaitez installer.

### Sorties

Tous les modules font quelque chose, et les sorties permettent au noyau de comprendre ce qu'un module a fait et de connaître l'état de l'exécution du module. C'est grâce aux sorties que Léon sait ce qu'il doit faire ensuite.

Le noyau comprend deux types de sorties :
- `inter`, qui sont les sorties intermédiaires. Vous pouvez avoir  **autant de sorties intermédiaires que vous souhaitez**.
- `end`, qui sont les sorties finales.. Vous devez **uniquement avoir une sortie finale**, elle permet à Léon de savoir que l'exécution du module est terminée.

Les sorties sont représentées par la fonction [utils.output()](#output-type-code-speech).

## Tester un module

### À la volée

Pour tester le comportement de votre module pendant que vous êtes en train de le créer, vous pouvez utiliser la commande suivante **depuis le dossier racine du projet** :

```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py server/src/query-object.sample.json
```

Par exemple, pour le module Is It Down le fichier d'[objet de demande](#objet-de-demande) pourrait ressembler à ceci :

```json
{
  "lang": "fr",
  "package": "checker",
  "module": "isitdown",
  "action": "run",
  "query": "Vérifies si github.com et mozilla.org sont en ligne",
  "entities": [
    {
      "sourceText": "github.com",
      "utteranceText": "github.com",
      "entity": "url",
      "resolution": {
        "value": "github.com"
      }
    },
    {
      "sourceText": "mozilla.org",
      "utteranceText": "mozilla.org",
      "entity": "url",
      "resolution": {
        "value": "mozilla.org"
      }
    }
  ]
}
```

::: tip
N'oubliez pas de jeter un œil à [cette liste](https://github.com/axa-group/nlp.js/blob/master/docs/builtin-entity-extraction.md) pour voir comment les entités sont formatées.
:::

### Bout en bout (fonctionnel)

Les modules ont leur propre tests. Ils sont représentés par un fichier unique pour chaque module que vous pouvez trouver ici : `packages/{NOM DU PAQUET}/test/{NOM DU MODULE}.spec.js`.

Comme vous pouvez le constater, JavaScript est utilisé pour tester les modules parce que le noyau est écrit en JavaScript et nous utilisons les tests de bout en bout (fonctionnels) en exécutant une query au NLU. Puis le cerveau de Léon est exécuté et retourne la sortie. C'est cette sortie, particulièrement les codes qui ont été interprétés par votre module que vous devez considérer.

Léon utilise [Jest](https://jestjs.io/) comme framework de test.

Voici deux exemples de tests du module *Is It Down* :

```js
// Vous devez utiliser describe() avec la syntaxe suivante : {PACKAGE NAME}:{MODULE NAME}
describe('checker:isitdown', async () => {  
  // Chaque test doit être représenté par test()
  test('detects invalid domain name', async () => {
    global.nlu.brain.execute = jest.fn()
    // La chaîne de caractères à tester
    await global.nlu.process('Check if github is up')
  
    const [obj] = global.nlu.brain.execute.mock.calls
    await global.brain.execute(obj[0])
  
    // Récupérer les codes accumulés et vérifier qu'ils soient ceux attendus
    expect(global.brain.finalOutput.codes).toIncludeSameMembers(['invalid_domain_name'])
  })

  test('detects down domain name', async () => {
    global.nlu.brain.execute = jest.fn()
    await global.nlu.process('Check if fakedomainnametotestleon.fr is up')
  
    const [obj] = global.nlu.brain.execute.mock.calls
    await global.brain.execute(obj[0])
  
    expect(global.brain.finalOutput.codes).toIncludeSameMembers([
      'checking',
      'down',
      'done'
    ])
  })
})
```
*Ces tests peuvent être trouvés dans [packages/checker/test/isitdown.spec.js](https://github.com/leon-ai/leon/blob/develop/packages/checker/test/isitdown.spec.js)*

Une fois que vous avez terminé d'écrire vos tests, vous pouvez exécuter la commande suivante pour les exécuter :
```bash
npm run test:module {NOM DU PAQUET}:{NOM DU MODULE}

# Ex.
npm run test:module checker:isitdown
```

## Fonctions utiles

Les fonctions utilitaires sont disponibles dans [bridges/python/utils.py](https://github.com/leon-ai/leon/blob/develop/bridges/python/utils.py).

Pour utiliser ces fonctions, n'oubliez pas d'importer le module Python *utils* au début de votre module Léon :

```python
import utils

# utils.myFunc()
```

::: tip
Vous pouvez également [contribuer](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) en améliorant ces fonctions ou en ajoutant de nouvelles afin de rendre la création de modules encore meilleure.
:::

### translate(key, d = { })

Sélectionne aléatoirement une réponse du module depuis le fichier `packages/{PACKAGE NAME}/data/answers/{LANG}.json` grâce à la clé donnée. Aussi, cette fonction permet l'interpolation via l'objet de données donné et retourne la réponse sous forme de chaîne de caractères.

- `key`: clé de réponse du module pour sélectionner la bonne chaîne de caractères.
- `d`: objet de données pour effectuer l'interpolation de chaîne de caractères.

```json
{
  "greeting": {
    "morning_good_day": [
      "Bonjour, passez une agréable journée !",
      "Bonjour, j'espère que votre journée sera pleine de joie et de productivité !"
    ],
    "funny_hello": [
      "%fun_hello%, oui j'essaie d'être drôle là."
    ]
  }
}
```

```python
utils.translate('morning_good_day')

# >> Bonjour, passez une agréable journée !
# OR >> Bonjour, j'espère que votre journée sera pleine de joie et de productivité !
```

```python
fun_hello = 'Booonnjouuur'
utils.translate('funny_hello', { 'fun_hello': fun_hello })

# >> Booonnjouuur, oui j'essaie d'être drôle là.
```

### output(type, code, speech = '')

Communique les données du module vers le noyau.

- `type` (inter|end): type de sortie afin d'informer le noyau si l'exécution du module est terminée ou non. Le type `end` doit apparaître une fois.
- `code`: code de sortie fournissant une information additionnel quant au type de sortie. Habituellement utilisé pour les tests de modules.
- `speech`: réponse sous forme de chaîne de caractères.

```python
utils.output('inter', 'just_a_code', 'Ceci est une réponse intermédiaire.')

# >> <object output>

utils.output('end', 'done', utils.translate('done_answer'))

# >> <object output>
```

### http(method, url, headers = None)

Envoie une requête HTTP avec l'agent utilisateur `Leon/{NUMÉRO DE VERSION}`. La librairie Python [Request](http://docs.python-requests.org) est utilisée.

- `method`: méthode HTTP.
- `url`: URL à requêter.
- `headers`: en-têtes HTTP.

```python
utils.http('GET', 'https://getleon.ai')

# >> cf. http://docs.python-requests.org/en/master/user/advanced/#request-and-response-objects

# Requête avec des en-têtes personnalisés
utils.http('POST', 'https://an-awesome-api.com', { 'Authorization': 'Bearer xxx' })

# >> cf. http://docs.python-requests.org/en/master/user/advanced/#request-and-response-objects
```

### config(key)

Récupére la configuration du module depuis le fichier `packages/{PACKAGE NAME}/config/config.json`.

- `key`:clé de configuration du module.

```json
{
  "anawesomemodule": {
    "api_key": "ma-super-clé-api",
    "options": {}
  }
}
```

```python
utils.config('api_key')

# >> ma-super-clé-api
```

### info()

Retourne les informations de la query actuelle.

```python
utils.info()

# >> { 'lang': 'fr', 'package': 'checker', 'module': 'isitdown' }
```

### createdldir()

Crée le dossier de téléchargements du module courant. Lorsque Léon a besoin de télécharger un contenu, ce dernier est sauvegardé dans : `downloads/{NOM DU PAQUET}/{NOM DU MODULE}`.

```python
utils.createdldir()

# >> <chemin du dossier de téléchargement du module>
```

### db(dbtype = 'tinydb')

Crée une base de données dédiée d'un paquet.

- `dbtype` (tinydb): type de la base de données. Aujourd'hui seulement [TinyDB](https://tinydb.readthedocs.io) est supporté.

```python
utils.db()

# >> { 'db': db_instance, 'query': Query, 'operations': operations }
```
