---
slug: /package-directory
sidebar_position: 10
---

# Package Directory

Modules are the skills of Leon, this is thanks to them Leon is able to do things according to what you say. In this section you will have a deeper look into modules.

## Packages

### [Leon](https://github.com/leon-ai/leon/tree/develop/packages/leon)

#### Bye:

Functionality: Leon says good bye.

Usage:

```
(en-US) "Bye"

(fr-FR) "Au revoir"
```

#### Greeting:

Functionality: Leon greets you.

Usage:

```
(en-US) "Hello"

(fr-FR) "Salut"
```

#### Joke:

Functionality: Leon says some jokes.

Usage:

```
(en-US) "Tell me a joke"

(fr-FR) "Raconte-moi une blague"
```

#### Meaning of Life:

Functionality: Leon says what's the meaning of life.

Usage:

```
(en-US) "What is the meaning of life?"

(fr-FR) "Quel est le but de la vie ?"
```

#### Partner Assistant:

Functionality: Leon tells you about other personal assistants.

Usage:

```
(en-US) "Do you have something to say about Alexa?"

(fr-FR) "Connais-tu quelque chose sur Alexa ?"
```

#### Random Number:

Functionality: Leon gives you a random number.

Usage:

```
(en-US) "Give me a random number"

(fr-FR) "Donne-moi un nombre aléatoire"
```

#### Welcome:

Functionality: Leon welcomes you.

Usage:

```
(en-US) "Thank you"

(fr-FR) "Merci"
```

#### Who Am I:

Functionality: Leon introduces himself.

Usage:

```
(en-US) "Who are you?"

(fr-FR) "Qui es-tu ?"
```

### [Calendar](https://github.com/leon-ai/leon/tree/develop/packages/calendar)

#### To-Do List:

Functionality: Manage your to-do lists:

<ul>
<li>Create a list</li>
<li>View your lists</li>
<li>View a specific list</li>
<li>Rename a list</li>
<li>Delete a list</li>
<li>Add todos</li>
<li>Complete todos</li>
<li>Uncheck todos</li>
</ul>
Usage:

```
(en-US) "Show all my lists"
(en-US) "Add 7 potatoes, 1kg of rice, bread to the shopping list"
(en-US) "Complete rice from my shopping list"
(en-US) "Check bread from the shopping list"
(en-US) "What is in my shopping list?"
(en-US) "Create a movies list"
(en-US) "Add Captain America: Civil War to my movies list"
(en-US) "What are my lists?"
(en-US) "Rename the movies list to cinema"
(en-US) "Check Captain America from the cinema list"
(en-US) "What is in my cinema list?"
(en-US) "Uncheck Captain America from my cinema list"
(en-US) "Please tell me what is in my cinema list"
(en-US) "Delete my cinema list"
(en-US) "Show my lists"

(fr-FR) "Show my lists"
(fr-FR) "Ajoute 7 pommes de terre, 1kg de riz, pain à la liste courses"
(fr-FR) "Complète riz de la liste courses"
(fr-FR) "Coche pain de la liste courses"
(fr-FR) "Qu'est-ce qu'il y a dans ma liste courses ?"
(fr-FR) "Crée une liste films"
(fr-FR) "Ajoute Captain America : Guerre Civile à ma liste films"
(fr-FR) "Quelles sont mes listes ?"
(fr-FR) "Renomme la liste films en cinéma"
(fr-FR) "Qu'est-ce qu'il y a dans ma liste cinéma ?"
(fr-FR) "Décoche Captain America de ma liste cinéma"
(fr-FR) "Montre ma liste cinéma"
(fr-FR) "Supprime ma liste cinéma"
(fr-FR) "Montre mes listes"
```

### [Checker](https://github.com/leon-ai/leon/tree/develop/packages/checker)

#### Is it Down:

Functionality: Ping domain names and give you the online state.

Usage:

```
(en-US) "Are github.com, an-awesome-domain-name.net and twitter.com down?"

(fr-FR) "Vérifies si github.com, un-super-nom-de-domaine.fr et twitter.com sont en ligne"
```

#### Have I Been Pwned:

Functionality: Verify if one or several email addresses have been pwned (thanks to [Have I Been Pwned](https://haveibeenpwned.com/)).

Usage:

Since the API v3, you must [claim your API key](https://haveibeenpwned.com/API/Key).

Then paste it in packages/checker/config/config.json at the haveibeenpwned.api_key key.

```
(en-US) "Has louis.grenard@gmail.com been pwned?"
(en-US) "Have iifeoluwa.ao@gmail.com, louis.grenard@gmail.com, and supercleanemail@test.com been pwned?"

(fr-FR) "Est-ce que louis.grenard@gmail.com est compromis ?"
(fr-FR) "Est-ce que iifeoluwa.ao@gmail.com, louis.grenard@gmail.com, et supercleanemail@test.com ont été compromis ?"
```

You can also predefine one or several email addresses in the packages/checker/config/config.json file at the haveibeenpwned.emails key.

If you do, then you can use such sentences:

```
(en-US) "Have my email addresses been pwned?"

(fr-FR) "Est-ce que mes adresses email ont été compromises ?"

```

### [Network](https://github.com/leon-ai/leon/tree/develop/packages/network)

#### Speed Test:

Functionality: The Speed Test package gives you information about your network speed.

<ul>
<li>Ping</li>
<li>Download speed</li>
<li>Speed Upload</li>
</ul>

Based on the the package [speedtest-cli](https://github.com/sivel/speedtest-cli).

Usage:

```
(en-US) "What is my current Internet speed?"
(en-US) "Can you do a speedtest?"
(en-US) "Do a speedtest"
(en-US) "Start a speed test"
(en-US) "Is my Internet network good?"
(en-US) "Is my Internet connection good?"

(fr-FR) "Quelle est ma vitesse Internet actuelle?"
(fr-FR) "Peux-tu me faire un speedtest ?"
(fr-FR) "Fais un speedtest"
(fr-FR) "Lance-moi un test de vitesse"
(fr-FR) "Mon réseau Internet est-il bon ?"
(fr-FR) "Ma connexion Internet est-elle bonne ?"
```

### [Trend](https://github.com/leon-ai/leon/tree/develop/packages/trend)

#### GitHub:

Functionality: Grab the GitHub trends repositories according to several options.

Usage:

```
(en-US) "What's trending on GitHub?"
(en-US) "Give me the 4 GitHub trends of this week for the JavaScript language"
(en-US) "What's the three GitHub trends of this month?"

(fr-FR) "Quelles sont les tendances sur GitHub ?"
(fr-FR) "Donne-moi les 4 tendances GitHub de cette semaine pour le langage JavaScript"
(fr-FR) "Donne-moi les trois tendances GitHub de ce mois"
```

#### Product Hunt:

Functionality: Grab the Product Hunt trends.

Usage:

1. log in to your [Product Hunt](https://www.producthunt.com/) account.
2. Add a [new application](https://www.producthunt.com/v1/oauth/applications) (E.g. name: Leon; Redirect URI: [https://localhost](https://localhost)).
3. Once your application is created, click Create Token.
4. Copy the Developer Token and paste it in packages/trend/config/config.json at the producthunt.developer_token key.

```
(en-US) "What's trending on Product Hunt?"
(en-US) "What were the four first Product Hunt trends on the 7th of October 2018?"
(en-US) "What were the Product Hunt trends of yesterday?"

(fr-FR) "Quelles sont les tendances sur Product Hunt ?"
(fr-FR) "Donne-moi les 4 tendances Product Hunt du 7 octobre 2018"
```

### [Video Downloader](https://github.com/leon-ai/leon/tree/develop/packages/videodownloader)

#### YouTube:

Functionality: Download new video(s) from a YouTube playlist.

Usage:

1. Save the YouTube video(s) in a YouTube playlist via [youtube.com](https://www.youtube.com/).
2. If you do not have a Google API key yet, please follow [these steps](https://developers.google.com/youtube/v3/getting-started).
3. Provide the Google API key & YouTube playlist ID in packages/videodownloader/config/config.json.

```
(en-US) "Download new videos from YouTube"

(fr-FR) "Télécharges les nouvelles vidéos depuis YouTube"
```