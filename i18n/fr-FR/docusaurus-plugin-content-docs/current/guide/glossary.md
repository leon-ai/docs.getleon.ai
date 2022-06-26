---
slug: /glossary
sidebar_position: 2
---

# Glossaire

Certains termes de la documentation peuvent vous parraître inconnus. Cette section vous aide à avoir une meilleure compréhension de ces mots et de comprendre comment ils sont en liens avec Léon.

## Actions

Les actions représentent les points d'entrée des [modules](/fr-FR/glossary#modules).

> Pièce jointe : [packages/calendar/todolist.py](https://github.com/leon-ai/leon/tree/master/packages/calendar/todolist.py) *exemple du module `To-Do List` incluant des actions comme `create_list`, `complete_todo`, etc.*.

## API

API pour (*Application Programming Interface* ou *Interface de programmation d'applications*) est une interface permettant la communication entre différents nœuds d'un projet. Ces nœuds peuvent être un serveur, une librairie, etc.

Exemples d'APIs de Léon :
- L'[API HTTP](https://github.com/leon-ai/leon/tree/master/server/src/api) lui permet d'échanger des données entre le serveur et le client.
- L'[API WebSocket](https://github.com/leon-ai/leon/blob/master/server/src/core/server.js) lui permet d'avoir une communication bidirectionnelle entre le client et le serveur.
- L'[API de la librairie Python](https://github.com/leon-ai/leon/blob/master/bridges/python/utils.py) permet aux développeurs de sélectionner des fonctions pour travailler sur les modules de Léon.

## ASR

ASR pour (*Automatic Speech Recognition* ou *Reconnaissance automatique de la parole*) est l'utilisation du matériel physique d'un ordinateur et de techniques logicielles pour identifier et interpréter une voix humaine.

Léon l'utilise pour rendre votre voix compréhensible pour lui.

> Pièce jointes :
> - [app/src/js/main.js](https://github.com/leon-ai/leon/blob/master/app/src/js/main.js) *partie app web ASR*.
> - [server/src/core/asr.js](https://github.com/leon-ai/leon/blob/master/server/src/core/asr.js) *partie serveur ASR*.

## Cerveau

Le cerveau de Léon est une partie majeure de son noyau. C'est là qu'il exécute ces [modules](/fr-FR/glossary#modules), parle, sélectionne ses phrases, etc.

> Pièce jointe : [server/src/core/brain.js](https://github.com/leon-ai/leon/blob/master/server/src/core/brain.js) *Cerveau de Léon*.

## Classifieur

Un classifieur est un type de modèle. Une fois celui-ci entraîné, il retourne un résultat via un algorithme.
Ce résultat va ensuite être utilisé pour prendre des décisions.

Léon l'utilise pour avoir une sauvegarde de la phase d'entraînement de ses [expressions](/fr-FR/glossary#expressions).

## CLI

CLI signifie *Command-Line Interface* ou *interface en ligne de commande* en français. Vous pouvez la voir comme un outil qui va vous aider dans votre aventure avec Léon.
La liste des commandes est disponible dans la [section CLI](/fr-FR/cli).

## Expressions

Les expressions sont les ensembles de données que Léon utilise pour entraîner sa compréhension.
Chaque [paquet](/fr-FR/glossary#paquets) a son propre ensemble de données avec les différentes traductions.

> Pièce jointe : [packages/checker/data/expressions/fr.json](https://github.com/leon-ai/leon/blob/master/packages/checker/data/expressions/fr.json) *exemple des expressions françaises du paquet `Checker`*.

## Modules

Les modules sont les compétences de Léon. C'est grâce à eux que Léon peut faire des choses. Les modules contiennent une ou plusieurs [actions](/fr-FR/glossary#actions).

:::tip Astuce
Plus Léon a de modules, plus il devient compétent.
N'hésitez pas à [contributer](https://github.com/leon-ai/leon/blob/master/.github/CONTRIBUTING.md) ❤️
:::

## NLU

NLU pour (*Natural Language Processing* ou *Compréhension du langage naturel*) aide les machines à comprendre le langage humain.

Léon l'utilise pour charger le [classifieur](/fr-FR/glossary#classifieur), classifier ce que vous lui dites et sélectionner la bonne classification en prenant les décisions qu'il juge être les plus exactes.

> Pièce jointe : [server/src/core/nlu.js](https://github.com/leon-ai/leon/blob/master/server/src/core/nlu.js) *NLU de Léon*.

## Paquets

Les paquets de Léon contiennent un ou une infinité de [modules](/fr-FR/glossary#modules). Vous pouvez considérer les paquets comme étant une catégorie de modules. C'est dans ces paquets que les [réponses](/fr-FR/glossary#reponses) et [expressions](/fr-FR/glossary#expressions) sont stockées.

Aussi, les paquets sont en fait ce que l'on appelle des "domaines" dans le milieu de l'NLP (*Natural Language Processing* ou *Traitement du langage naturel*). La méthode de classification de domaines permet de structurer / labeller des données pour une meilleure scalabilité. Ça aide Léon à prendre des décisions sur ce qu'il doit comprendre et améliore sa précision.

> Pièce jointe : [packages/leon](https://github.com/leon-ai/leon/tree/master/packages/leon) *exemple du paquet `Leon` incluant les modules propres à lui-même*.

:::tip Astuce
La liste complète des paquets est disponible [ici](https://github.com/leon-ai/leon/tree/master/packages).
:::

## Réponses

Les réponses sont les phrases que Léon peut vous répondre.
Chaque [paquet](/fr-FR/glossary#paquets) a son propre ensemble de réponses avec les différentes traductions.

> Pièce jointe : [packages/checker/data/answers/fr.json](https://github.com/leon-ai/leon/blob/master/packages/checker/data/answers/fr.json) *exemple des réponses françaises du paquet `Checker`*.

## STT

STT pour (*Speech-To-Text* ou *Reconnaissance vocale*) transforme un flux audio en chaîne de caractères.

Léon a plusieurs parseurs, vous pouvez en choisir un (ou plusieurs) et le [configurer](/fr-FR/configuration#voix).

> Pièce jointe : [server/src/stt/stt.js](https://github.com/leon-ai/leon/blob/master/server/src/stt/stt.js) *STT de Léon*.

## Synchroniseur

Si le [module](/fr-FR/glossary#modules) requêté vous offre le choix, le synchroniseur vous permet de synchroniser votre contenu via différentes méthodes (Google Drive, votre appareil courant, etc.).

Pour chaque module qui inclut cette fonctionnalité, vous pouvez [configurer](/fr-FR/configuration#synchroniseur) votre méthode préférée.

> Pièce jointe : [server/src/core/synchronizer.js](https://github.com/leon-ai/leon/blob/master/server/src/core/synchronizer.js) *Synchroniseur de Léon*.

## TTS

TTS pour (*Text-To-Speech* ou *Synthèse vocale*) transforme une chaîne de caractères en flux audio.

Léon a plusieurs synthétiseurs de synthèse vocale, vous pouvez en choisir un (ou plusieurs) et le [configurer](/fr-FR/configuration#voix).

> Pièce jointe : [server/src/tts/tts.js](https://github.com/leon-ai/leon/blob/master/server/src/tts/tts.js) *TTS de Léon*.
