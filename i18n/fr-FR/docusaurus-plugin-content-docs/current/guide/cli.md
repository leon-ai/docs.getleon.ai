---
slug: /cli
sidebar_position: 5
---

# CLI

CLI signifie *Command-Line Interface* ou *interface en ligne de commande* en français. Vous pouvez la voir comme un outil qui vous aidera dans votre aventure avec Léon.

Pour le moment, la CLI vous aide à installer Léon. À l'avenir plus de commandes seront disponibles afin d'améliorer votre confort et rendre l'utilisation de Léon encore plus fluide.

## Commandes

Le tableau ci-dessous liste toutes les commandes disponibles :

| Commande                                 | Description             | Option |
| ----------------------------------------|--------------------|---|
| `leon check`            | Vérifie comment l'installation s'est déroulée.       | <ul><li>`--name`: nom d'une instance Léon.</li></ul> |
| `leon create birth`            | Donne vie à Léon en vérifiant tous les prérequis et en les installant avec votre accord si ces derniers ne sont pas déjà installés. | <ul><li>`--develop`: installe Léon depuis la branche Git `develop`.</li><li>`--docker`: installe Léon avec Docker.</li><li>`--path {path}`: chemin de votre instance Léon.</li><li>`--version {version}`: installe une [version spécifique](https://github.com/leon-ai/leon/releases) de Léon.</li><li>`--name {name}`: donne un nom à votre instance Léon.</li><li>`--yes`: passe toutes les questions en réponsant "oui".</li></ul> |
| `leon help`          | Liste toutes les commandes disponibles de la CLI.       | |
| `leon start`          | Lance une instance de Léon.       | <ul><li>`--port {port}`: lance une instance de Léon sur un port spécifique.</li><li>`--name {name}`: lance une instance de Léon avec un nom spécifique.</li></ul> |
