# Connecteurs

Les connecteurs sont une partie de Léon qui permettent d'avoir une connexion entre son noyau et ses modules. Les connecteurs exécutent les modules de Léon. En effet, le noyau créé un [processus enfant Node.js](https://nodejs.org/api/child_process.html) qui exécute le module donné.

À l'avenir, nous aimerions avoir la possibilité d'écrire des modules Léon avec d'autres langages et pas seulement avec Python.

::: tip
Les connecteurs peuvent être trouvés dans le dossier : `bridges`.
:::

## Python

Le connecteur Python est la raison pour laquelle Léon a besoin de fonctionner aujourd'hui. Parce qu'il est le seul connecteur disponible pour le moment.

Si vous souhaitez exécuter un module Python seul, sans l'aide du processus enfant, vous pouvez lancer la commande suivante à partir du répertoire racine du projet :
```bash
PIPENV_PIPFILE=bridges/python/Pipfile pipenv run python bridges/python/main.py {LANGUE} {PAQUET} {MODULE} "{CHAÎNE DE CARACTÈRES}"
```
