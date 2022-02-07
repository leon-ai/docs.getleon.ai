---
slug: /offline
sidebar_position: 6
---

# Hors ligne

Dans cette section, vous allez voir comment installer les différents nœuds hors ligne de Léon.

Avec ces fournisseurs STT / TTS et le nœud hotword, tout tourne sur votre machine, rien ne sort pour requêter un service tiers.
Pour tous les installer en même temps, exécutez simplement la commande suivante :

 ```bash	
npm run setup:offline	
```

:::caution Attention
- Le STT hors ligne et le TTS hors ligne fonctionnent seulement avec la langue `en-US`. Plus de langues seront supportées à l'avenir.
:::

## Coqui (STT)

Pour le STT hors ligne, Léon utilise [Coqui STT](https://github.com/coqui-ai/STT) qui est une implémentation de TensorFlow de l'architecture DeepSpeech de Baidu.

Tout est déjà prêt, vous avez juste à lancer une commande pour télécharger et installer le modèle pré-entrainé (~ 1 GB).
Si vous voulez seulement installer le STT hors ligne, exécutez la commande suivante :

```bash
npm run setup:offline-stt
```

Puis dans votre fichier `.env`, initialisez `LEON_STT=true` et `LEON_STT_PROVIDER=coqui-stt`.

## Flite (TTS)


Pour le TTS hors ligne, Léon utilise [CMU Flite](http://www.festvox.org/flite/) qui est un petit et rapide moteur de synthèse vocale open source développé à CMU (*Carnegie Mellon University*).

Ici aussi, tout est prêt, il vous suffit simplement de lancer une commande pour installer le binaire et faire la configuration.
Si vous souhaitez seulement installer le TTS hors ligne, alors exécutez la commande suivante :

```bash
npm run setup:offline-tts
```

Puis dans votre fichier `.env`, initialisez `LEON_TTS=true` et `LEON_TTS_PROVIDER=flite`.

:::tip Astuce
Cette voix est... Intéressante :)
:::

## Hotword

Le nœud hotword est un processus Node.js indépendant qui vous permet d'écouter si le hotword `Léon` a été prononçé. Une fois que Léon a entendu son nom, il sera prêt à écouter votre requête.

### Installation

:::tip Astuce
Utilisez [nvm](/fr-FR/how-to/#en-utilisant-nvm-recommande) pour changer vos versions Node.js facilement.
:::

Si vous voulez seulement installer le hotword hors ligne, alors exécutez la commande suivante :

```bash
npm run setup:offline-hotword
```

### Utilisation

Assurez-vous que le serveur de Léon est lancé, puis depuis la racine du projet, exécutez la commande suivante :

```bash
npm run wake

# Maintenant dites "Léon"
```

### Langues

Le nœud hotword supporte les langues suivantes :

- `en-US`
- `fr-FR`

Pour changer de langue, modifiez la langue du projet via la [variable d'environnement `LEON_LANG`](/fr-FR/configuration#variables-denvironnement) et réexécutez le serveur principal ainsi que le processus hotword.
