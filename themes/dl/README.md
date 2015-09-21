# Hexo

Documentation is [here](https://hexo.io/).

## Requirements

Installing Hexo is quite easy. However, you do need to have a couple of other things installed first:

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

### Install Git

- Mac: Install it with [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) or [installer](http://sourceforge.net/projects/git-osx-installer/).

### Install Node.js

The best way to install Node.js is with [nvm](https://github.com/creationix/nvm).

cURL:

```
$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Wget:

```
$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Once nvm is installed, restart the terminal and run the following command to install Node.js.

```
$ nvm install 0.12
```

Alternatively, download and run [the installer](http://nodejs.org/).

### Install Hexo

Once all the requirements are installed, you can install Hexo with npm.

`npm install -g hexo-cli`

## Installation

`npm install -g hexo`

Once you have downloaded the repo, run:

`npm install`

## Create a new post

`hexo new post "my awesome post"`

## Run in server mode

`hexo server`

## Build static website

`hexo generate`

## Deploy

`hexo deploy`

# DL theme

@todo

## Favicon

The favicon is located in `dl/source/favicon.png`.  
If necessary, the path can be changed in dl's _config.yml file.

## Compiling CSS

@todo
