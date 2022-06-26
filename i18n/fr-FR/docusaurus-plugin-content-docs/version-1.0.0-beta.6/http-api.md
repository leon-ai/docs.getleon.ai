---
slug: /http-api
sidebar_position: 10
---

# API HTTP

Avec l'API HTTP vous pouvez requêter des [actions](/fr-FR/glossary#actions) via le protocole HTTP et aussi fournir des queries à Léon depuis des services externes.

Vous pouvez donc **facilement communiquer avec Léon depuis n'importe quel service** comme Discord, Signal, Telegram, Messenger et plus...

Exemple de scénario :

1. Vous envoyez une commande sur Discord. Ça pourrait être "!query hello".
2. Votre bot Discord la récupère, et transmet "hello" à votre serveur Léon.
3. Léon exécute le module greeting et retourne la réponse.
4. Vous gérez la réponse et votre bot Discord l'affiche sur Discord.

Léon expose deux types d'endpoints HTTP : **l'endpoint de query** et les **endpoints d'actions**.

:::tip Astuce
Par défault, Léon est exposé via HTTP. Vous pouvez désactiver ceci depuis votre fichier `.env` :
```
LEON_OVER_HTTP=false
```
:::

## Clé de l'API HTTP

Afin de requêter Léon via HTTP, vous devez fournir la clé API HTTP. Cette clé peut être trouvée dans le fichier `.env` avec la variable d'environnement `LEON_HTTP_API_KEY`.

### Générer une nouvelle clé

La clé de l'API HTTP est automatiquement générée pendant la phase d'installation de Léon. Si vous avez besoin d'en générer une nouvelle, veuillez exécuter cette commande :
```bash
npm run generate:http-api-key
```

## L'endpoint de query

Via cette endpoint, Léon gère la chaîne de caractères (query) que vous envoyé, puis il exécute le module ciblé en fonction de ce qu'il a compris.

### Endpoint

| Méthode | URL          | Header                                                       | Body data |
| ------ | ------------ | ------------------------------------------------------------ | --------- |
| `POST` | `/api/query` | - `Content-Type: application/json`<br />- `X-API-Key: {LEON_HTTP_API_KEY}` | `query`   |

#### Exemple

```bash title="Requête"
# Endpoint
POST http://localhost:1337/api/query

# Headers
Content-Type: application/json
X-API-Key: 72aeb5ba824580963114481144385d7199c106fc

# Body data
{ query: "Hello" }
```

```json title="Réponse"
{
  "processingTime": 1891,
  "queryId": "1643801044192-ei4v",
  "lang": "en",
  "query": "Hello",
  "entities": [],
  "classification": {
    "package": "leon",
    "module": "greeting",
    "action": "run",
    "confidence": 1
  },
  "speeches": [
    "Hello there!"
  ],
  "executionTime": 1491,
  "nluProcessingTime": 400,
  "success": true
}
```

## Endpoints d'actions

Par défaut, chaque action de module est exposée via HTTP. Léon traduit automatiquement ces actions en endpoints HTTP en fonction de la configuration des actions.

:::tip Astuce
Vous pouvez trouver les endpoints générés dans le fichier `core/pkgs-endpoints.json`.
:::

### Endpoints

| Méthode                | URL                                  | Header                                                       |
| --------------------- | ------------------------------------ | ------------------------------------------------------------ |
| - `POST`<br />- `GET` | `/api/p/{PACKAGE}/{MODULE}/{ACTION}` | - `Content-Type: application/json`<br />- `X-API-Key: {LEON_HTTP_API_KEY}` |

#### Exemple 1

Essayons un exemple avec l'action "run" du module "greeting".

```bash title="Information"
Paquet: leon
Module: greeting
Action: run
```

```bash title="Requête"
# Endpoint
GET http://localhost:1337/api/p/leon/greeting/run
# La méthode GET est utilisée parce qu'aucune body data n'est requise

# Headers
Content-Type: application/json
X-API-Key: 72aeb5ba824580963114481144385d7199c106fc
```

```json title="Réponse"
{
  "queryId": "1643805643221-7keq",
  "lang": "en",
  "query": "",
  "entities": [],
  "classification": {
    "package": "leon",
    "module": "greeting",
    "action": "run",
    "confidence": 1
  },
  "speeches": [
    "Hi! What's up?!"
  ],
  "executionTime": 1518,
  "success": true
}
```

#### Exemple 2

Maintenant voyons un autre exemple avec une action de module qui nécessite des paramètres / entités pour fonctionner.

Des actions demandent des entrées spécifiques (entités) et les développeurs de ces actions doivent ajouter leur support pour complètement exposer ces actions via HTTP.

Pour savoir quels paramètres il faut renseigner dans le body data, allez dans le fichier `packages/{PACKAGE}/data/expressions/{LANG}.json`.

```bash title="Information"
Package: checker
Module: isitdown
Action: run
```

```bash title="Requête"
# Endpoint
POST http://localhost:1337/api/p/checker/isitdown/run
# La méthode POST est utilisée parce que des paramètres / entités sont nécessaires

# Headers
Content-Type: application/json
X-API-Key: 72aeb5ba824580963114481144385d7199c106fc

# Body data
{ "url": [{ "value": "github.com" }, { "value": "twitch.tv" }] }
```

```json title="Réponse"
{
  "queryId": "1643807089175-tppl",
  "lang": "en",
  "query": "",
  "entities": [
    {
      "entity": "url",
      "resolution": {
        "value": "github.com"
      }
    },
    {
      "entity": "url",
      "resolution": {
        "value": "twitch.tv"
      }
    }
  ],
  "classification": {
    "package": "checker",
    "module": "isitdown",
    "action": "run",
    "confidence": 1
  },
  "speeches": [
    "I am now requesting Github.",
    "Github is up.",
    "I'm checking Twitch state.",
    "Twitch is up.",
    ""
  ],
  "executionTime": 4388,
  "success": true
}
```

## Configuration

### Options

Ces options peuvent être configurées au niveau des actions dans le fichier `packages/{PACKAGE}/data/expressions/{LANG}.json`.

| Clé                 | Description                                                | Défaut                                               |
| ------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| `http_api.method`   | La méthode HTTP de l'action.                                 | `GET` if no entity<br />`POST` if an entity is needed |
| `http_api.timeout`  | Le temps d'exécution avec le timeout (en ms).                     | `60000`                                               |
| `http_api.disabled` | Désactiver une action spécifique.                                 | `false`                                               |
| `http_api.entities` | Les entités qui peuvent être passées en tant que paramètres dans le body data | `[]`                                                  |

:::tip Astuce
- Pour les entités, vous pouvez prendre exemple sur : [`packages/trend/data/expressions/en.json`](https://github.com/leon-ai/leon/blob/master/packages/trend/data/expressions/en.json).
- Pour une liste complète du format des entités, veuillez [regarder ici](https://github.com/axa-group/nlp.js/blob/master/docs/v3/builtin-entity-extraction.md).
:::
