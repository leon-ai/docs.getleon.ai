# Scripts

Dans cette section vous prendrez connaissance des scripts npm disponibles. Ils sont situés dans le fichier [package.json](https://github.com/leon-ai/leon/blob/develop/package.json).

Ces scripts **doivent être exécutés à partir du répertoire racine du projet**.

## Principaux

| Script                                 | Objectif             |
| ----------------------------------------|--------------------|
| `npm run wake`            | Exécute le processus hotword.       |
| `npm start`            | Lance Léon en production après sa construction.       |
| `npm run train expressions en|fr`            | Entraîne la compréhension de Léon.       |
| `npm run check`            | Vérifie les installations et configurations de Léon.       |

## Installation

| Script                                 | Objectif             |
| ----------------------------------------|--------------------|
| `npm run setup:offline-stt`            | Installe l'STT hors ligne.       |
| `npm run setup:offline-tts`            | Installe le TTS hors ligne.       |
| `npm run setup:offline-hotword`            | Installe le nœud hotword.       |
| `npm run preinstall`            | Appelé avant le début d'un `npm install`.       |
| `npm run postinstall`            | Appelé après la fin d'un `npm install`.       |

## Construction

| Script                                 | Objectif             |
| ----------------------------------------|--------------------|
| `npm run delete-dist:server`            | Supprime le dossier de distribution du serveur.       |
| `npm run build`            | Construit Léon (app web + serveur).      |
| `npm run build:app`            | Construit l'app web.       |
| `npm run build:server`            | Construit le serveur.       |

## Développement

| Script                                 | Objectif             |
| ----------------------------------------|--------------------|
| `npm run dev:app`            | Exécute l'app web en mode développement.       |
| `npm run dev:server`            | Exécute le serveur en mode développement.       |
| `npm run prepare-release {VERSION NUMBER}`            | Met à jour la version de Léon et génère le changelog à l'aide des messages de commit.       |
| `npm run commitmsg`            | Appelé sur un commit.       |


## Test

| Script                                 | Objectif             |
| ----------------------------------------|--------------------|
| `npm run lint`            | Vérifie la syntaxe du code.       |
| `npm test`            | Exécute toutes les sortes de tests.       |
| `npm run test:unit`            | Exécute les tests unitaires.       |
| `npm run test:e2e`            | Exécute toutes les sortes de tests de bout en bout.       |
| `npm run test:e2e:modules`            | Exécute les tests des modules.        |
| `npm run test:e2e:nlp-modules`            | Exécute les tests assurant que chaque expression soit compréhensible.       |
| `npm run test:json`            | Exécute les tests vérifiant que chaque fichier JSON soit conforme.      |
| `npm run test:module {PACKAGE NAME}:{MODULE NAME}`            | Exécute les tests d'un module donné.       |
