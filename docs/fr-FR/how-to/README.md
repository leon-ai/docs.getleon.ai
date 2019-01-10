
# Comment installer Node.js 
  
## En utilisant nvm (recommandé)
  
[nvm](https://github.com/creationix/nvm) (Node Version Manager) vous permet de télécharger, installer et gérer vos versions Node.js. Avec nvm vous pouvez facilement jongler entre les différentes versions installées sur votre système. Vous pouvez le télécharger via les liens suivants :  
  
- Pour [Linux / macOS](https://github.com/creationix/nvm#install-script)  
- Pour [Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)  
  
## En utilisant la solution traditionnelle
  
Autrement, vous pouvez télécharger le fichier d'installation de Node.js corresponsant à votre système [ici](https://nodejs.org/en/download/).  
  
## Est-ce que Node.js est installé ?
  
Assurez-vous que Node.js est bien installé en exécutant la commande suivante :

```bash  
node --version  
```  
  
# Comment installer Python
  
::: tip  
Python est peut-être déjà installé sur votre système, pouvez le vérifier avec : `python --version` ou `python3 --version`.  
:::
  
## En utilisant pyenv (recommandé)
  
[pyenv](https://github.com/pyenv/pyenv) est un simple gestionnaire de versions qui vous permet de faire la même chose que ce que vous offre nvm pour Node.js.
  
- Pour [Linux](https://github.com/pyenv/pyenv-installer#installation--update--uninstallation)  
- Pour [macOS](https://github.com/pyenv/pyenv#homebrew-on-macos)  
  
## En utilisant la solution traditionnelle
  
Autrement, vous pouvez télécharger le fichier d'installation de Python corresponsant à votre système [ici](https://www.python.org/downloads/).  
Une fois le fichier d'installation exécuté, cochez `Ajouter Python au PATH`, puis installez.
  
## Est-ce que Python est installé ?
  
Assurez-vous que Python est correctement installé à l'aide de la commande suivante :

```bash
python --version
```  
Ou 
```bash  
python3 --version  
```

# Comment installer Pipenv

::: warning  
Avant d'installer Pipenv, vérifiez que Python est installé.
:::

## En utilisant pip (Linux / Windows)

[pip](https://pip.pypa.io/en/stable/installing/) est un gestionnaire de paquets pour Python, il permet de télécharger et d'installer les paquets Python. Nous pouvons l'utiliser ici pour installer Pipenv grâce à la commande ci-dessous :

```bash
pip install pipenv --user
```

## En utilisant Homebrew (macOS)

[Homebrew](https://brew.sh/) est un gestionnaire de paquets pour macOS. Il est facile d'installer vos paquets via cet outil. Pour installer Pipenv, exécutez simplement la commande suivante :

```bash
brew install pipenv
```

## En utilisant la solution traditionnelle
  
À vrai dire, il n'y a pas grand chose à ajouter ici, suivez simplement [ce guide](https://pipenv.readthedocs.io/en/latest/install/).  
  
## Est-ce que Pipenv est installé ?  
  
Assurez-vous que Pipenv est proprement installé via la commande suivante :  
  
```bash  
pipenv --version  
```
