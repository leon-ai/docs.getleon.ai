---
slug: /collaborative-logger
sidebar_position: 9
---

# Journal collaboratif

Le journal collaboratif aide à améliorer la compréhension de Léon. Pour chaque requête que vous allez soumettre à Léon, si le journal collaboratif est activé, il va envoyer une requête HTTP à un serveur externe.

Voici les données que Léon stocke :

- Sa version.
- Requête (chaîne de caractères).
- Langue.
- Paquet choisi par Léon.
- Module choisi par Léon.
- Action choisi par Léon.
- Sa confiance à propos de sa compréhension (précision).
- Timestamp actuel.

Le journal collaboratif est **activé par défaut**. Si vous souhaitez le désactiver, éditez simplement la variable d'environnement `LEON_LOGGER` via votre fichier `.env` à `FALSE`, puis relancez le serveur.

:::tip Astuce
Pour en savoir plus concernant le code, veuillez vous référer aux ressources suivantes :

- La partie du code qui intéragit avec le journal collaboratif se strouve dans l'[NLU de Léon](https://github.com/leon-ai/leon/blob/master/server/src/core/nlu.js).
- Le code source du journal collaboratif est disponible sur [ce répertoire GitHub](https://github.com/leon-ai/leon-logger).
:::
