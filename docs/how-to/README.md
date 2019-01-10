# How to Install Node.js  
  
## Using nvm (recommended)  
  
[nvm](https://github.com/creationix/nvm) (Node Version Manager) allows you to download, install and manage your Node.js versions. With nvm you can easily switch between different versions installed on your system. You can download it with the following links:  
  
- For [Linux/macOS](https://github.com/creationix/nvm#install-script)  
- For [Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)  
  
## Using the Traditional Way  
  
Otherwise, you can download the Node.js installer corresponding to your system [here](https://nodejs.org/en/download/).  
  
## Is Node.js installed?  
  
Ensure Node.js is installed with the following command:  
  
```sh  
node --version  
```  
  
# How to Install Python  
  
::: tip  
Python is maybe already installed on your system. You can check it with `python --version` or `python3 --version`.  
:::  
  
## Using pyenv (recommended)  
  
[pyenv](https://github.com/pyenv/pyenv) is a simple Python version manager which allows you to do the same as what nvm does for Node.js.  
  
- For [Linux](https://github.com/pyenv/pyenv-installer#installation--update--uninstallation)  
- For [macOS](https://github.com/pyenv/pyenv#homebrew-on-macos)  
  
## Using the Traditional Way  
  
Otherwise, you can download the Python installer corresponding to your system [here](https://www.python.org/downloads/).  
Once you run the installer, check `Add Python to PATH`, then install.  
  
## Is Python installed?  
  
Ensure Python is installed with the following command:  
  
```sh  
python --version  
```  
Or  
```sh  
python3 --version  
```  
  
# How to Install Pipenv  
  
::: warning  
Before installing Pipenv, make sure you have Python installed.  
:::  

## Using pip (Linux/Windows)

[pip](https://pip.pypa.io/en/stable/installing/) is a packages manager for Python, it will allow you to download and install Python packages easily. We can use it here to install Pipenv thanks to the command below:

```sh
pip install pipenv --user
```

## Using Homebrew (macOS)

[Homebrew](https://brew.sh/) is a packages manager for macOS. You can easily install packages with it. To install Pipenv, simply execute the following command:

```sh
brew install pipenv
```

## Using the Traditional Way

Well, there is no much to say here, just follow [this guide](https://pipenv.readthedocs.io/en/latest/install/).  
  
## Is Pipenv installed?
  
Ensure Pipenv is installed with the following command:  
  
```sh  
pipenv --version  
```
