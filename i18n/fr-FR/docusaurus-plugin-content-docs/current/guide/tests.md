---
slug: /tests
sidebar_position: 12
---

# Tests

Afin d'assurer la qualité du projet, Léon inclut des tests automatiques. Comme la base du code évolue régulièrement, les tests devraient assurer qu'il n'y ai pas de régression à cause des nouveaux changements.

Léon comprend plusieurs types de tests, découvrons-les dans les parties suivantes. Veuillez noter que tous les tests sont écrits en JavaScript.

## Unitaire

Les logiciels sont faits de morceaux et le but des tests unitaires est de tester ces morceaux du projet.

Léon les utilisent pour tester les morceaux de son noyau.

Les tests unitaires peuvent être :
- Trouvés dans le dossier : `test/unit`.
- Exécutés via : `npm run test:unit`.

## De bout en bout

Les tests de bout en bout ou tests fonctionnels testent le comportement global d'une fonctionnalité spécifique. Ils testent plusieurs morceaux en même temps et attendent un résultat spécifique.

Léon les utilisent pour tester ses modules et sa compréhension.

Les tests fonctionnels peuvent être :
- Trouvés dans le dossier : `test/e2e` et les fichiers : `packages/{PACKAGE NAME}/test/{MODULE NAME}.spec.js`.
- Exécutés via : `npm run test:e2e`.


## JSON

Les tests "JSON" sont simplement associés à Léon et ne font pas parti des tests logiciels en général.

Léon les utilisent afin d'assurer que chaque fichier JSON soit valide et qu'il respecte certaines règles telles que la ponctuation ou non.

Les tests "JSON" peuvent être :
- Trouvés dans le dossier : `test/json`.
- Exécutés via : `npm run test:json`.
