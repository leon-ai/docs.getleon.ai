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

### Créer un module

::: tip
- La création d'un module est l'une des meilleures façons de contribuer à Léon ! Avant toute chose, assurez-vous de prendre connaissance de [ce document](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md) <3
- Par exemple, vous pouvez imaginer créer un module todo liste *(pour un tel module, le NLP de Léon doit être amélioré)*. Faites un tour sur la [roadmap](https://roadmap.getleon.ai) pour voir ce qu'il y a de prévu..
- N'hésitez pas à [ouvrir une issue](https://github.com/leon-ai/leon/issues/new/choose) si vous avez la moindre question.
:::

Chaque module est inclus dans un paquet *(ex. `packages/{NOM DU PAQUET}/{NOM DU MODULE}.py`)*.

### Étapes

Voici les étapes basiques pour créer un module. Pour ces étapes, nous prendrons un module tweets grabber en tant qu'exemple.

#### 1. Définir l'objectif

- Je veux créer un module tweets grabber. Quand je dis ou lorsque j'écris :
```
Récupère mes derniers tweets
```
- Je veux que léon me donne mes 5 derniers tweets avec les statistiques de chaque.
- Il semblerait que ce module ne correspond pas à un paquet (catégorie) existant. Alors je crée le paquet *Twitter* en créant le dossier `packages/twitter`.
- Pour ce faire, je m'assure de suivre la [structure des dossiers d'un paquet](#structure-des-dossiers) et que cette structure contienne les fichiers requis.

#### 2. Nommer votre module

- Je choisis de nommer mon module `Tweets Grabber`.

#### 3. Écrire le code

- Afin de requêter l'API de Twitter, j'ai besoin des identifiants API. Alors je renseigne les clés de l'API Twitter dans le fichier `packages/twitter/config/config.json` que j'ai précédemment créé à l'étape 1.
- De plus, je crée le fichier `packages/twitter/tweetsgrabber.py`, définis la fonction de mon module puis j'écris mon code.
- Pendant que j'écris le code, depuis le répertoire racine du projet, j'utilise cette commande :
```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py en twitter tweetsgrabber "Grab my latest tweets"
# Exécute mon module à la volée
```

#### 4. Écrire les tests

- Maintenant que je suis satisfait avec mon module, je crée le fichier `packages/twitter/test/tweetsgrabber.spec.js`.
- J'écris les [tests de mon module](#tester-un-module) dans ce fichier.

#### 5. Partager

- Je partage mon module au monde entier en [contribuant](https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md).

### Convention de nommage

- Le nom de fichier d'un module doit uniquement contenir des lettres minuscules et doit être nommé en anglais.
> Ex. le nom de fichier du module *Meaning of Life* : `meaningoflife.py`
- Le nom de fonction d'un module doit être le même que le nom du fichier.
> Ex. le nom de fonction du module *Meaning of Life* : `def meaningoflife(string):`

### Fonction du module

Dans le fichier du module, vous devez nommer la fonction par le nom du module. Cette fonction prend la chaîne de caractères d'entrée (query) en paramètre.

```
Quel est le but de la vie ?
```

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-

import utils

def meaningoflife(string):
	"""Leon says what's the meaning of life"""
	
	# string: Quel est le but de la vie ?

	return utils.output('end', 'meaning_of_life', utils.translate('meaning_of_life'))
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

### Bout en bout (fonctionnel)

Les modules ont leur propre tests. Ils sont représentés par un fichier unique pour chaque module que vous pouvez trouver ici : `packages/{NOM DU PAQUET}/test/{NOM DU MODULE}.spec.js`.

Comme vous pouvez le constater, JavaScript est utilisé pour tester les modules parce que le noyau est écrit en JavaScript et nous utilisons les tests de bout en bout (fonctionnels) en exécutant une query au NLU. Puis le cerveau de Léon est exécuté et retourne la sortie. C'est cette sortie, particulièrement le code de celle-ci que vous devez considérer.

Léon utilise [Jest](https://jestjs.io/) comme framework de test.

Voici deux exemples de tests du module *Is It Down* :

```js
// Vous devez utiliser describe() avec la syntaxe suivante : {PACKAGE NAME}:{MODULE NAME}
describe('checker:isitdown', async () => {
  // Chaque test doit être représenté par test()
  test('detects invalid domain name', async () => {
    global.nlu.brain.execute = jest.fn()
    // La chaîne de caractères à tester
    global.nlu.process('Vérifies si github est en ligne')

    const [obj] = global.nlu.brain.execute.mock.calls
    await global.brain.execute(obj[0])

	// Récupérer le code et vérifier qu'il est celui attendu
    expect(global.brain.finalOutput.code).toBe('invalid_domain_name')
  })

  test('detects down domain name', async () => {
    global.nlu.brain.execute = jest.fn()
    global.nlu.process('Vérifies si fakedomainnametotestleon.fr est en ligne')

    const [obj] = global.nlu.brain.execute.mock.calls
    await global.brain.execute(obj[0])

    expect(global.brain.interOutput.code).toBe('down')
    expect(global.brain.finalOutput.code).toBe('done')
  })
})
```
*Ces tests peuvent être trouvés dans [`packages/checker/test/isitdown.spec.js`](https://github.com/leon-ai/leon/blob/develop/packages/checker/test/isitdown.spec.js)*

Une fois que vous avez terminé d'écrire vos tests, vous pouvez exécuter la commande suivante pour les exécuter :
```bash
npm run test:module {NOM DU PAQUET}:{NOM DU MODULE}

# Ex.
npm run test:module checker:isitdown
```

### À la volée

Pour tester le comportement de votre module pendant que vous êtes en train de le créer, vous pouvez utiliser la commande suivante **depuis le dossier racine du projet** :

```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py {LANGUE} {NOM DU PAQUET} {NOM DU MODULE} "{QUERY}"

# Ex.
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py fr checker isitdown "Vérifies si github.com est en ligne"
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

### finddomains(string)

Trouve un ou plusieurs nom(s) de domaine à partir d'une chaîne de caractères.

- `string`: chaîne de caractères d'entrée.

```python
utils.finddomains('Visite github.com et mozilla.org s\'il te plaît')

# >> ['github.com', 'mozilla.org']
```

### http(method, url)

Envoie une requête HTTP avec l'agent utilisateur `Leon/{NUMÉRO DE VERSION}`. La librairie Python [Request](http://docs.python-requests.org) est utilisée.

- `method`: méthode HTTP.
- `url`: URL à requêter.

```python
utils.http('GET', 'https://getleon.ai')

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
