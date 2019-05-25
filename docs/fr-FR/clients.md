# Clients

Les clients sont ce que l'utilisateur final voit et utilise explicitement. C'est grâce aux client que vous pouvez intéragir avec Léon.

## App web

![App web de Léon](/assets/img/web-app_client_fr.png "App web de Léon")

L'app web est le seul client aujourd'hui. Elle permet d'intéragir avec Léon à travers le navigateur.

::: tip
Depuis le fichier `.env`, vous pouvez éditer la variable d'environnement `LEON_HOST` par l'adresse IP de votre machine afin d'accéder à Léon depuis l'extérieur.
:::

Une fois Léon installé, vous pouvez accèder à ce client en suivant une des sections suivantes.

### Développement

```bash
# Lancer le serveur en mode développement
npm run dev:server

# Lancer l'app web en mode développement
npm run dev:app

# Allez sur http://localhost:4242
# Hourra ! Léon fonctionne
```

### Production

```bash
# Construire
npm run build

# Lancer
npm start

# Allez sur http://localhost:1337
# Hourra ! Léon fonctionne
```
