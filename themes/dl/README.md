# Hexo

Documentation is [here](https://hexo.io/).

## Requirements

Installing Hexo is quite easy. However, you do need to have a couple of other things installed first:

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

### Install Git

- Windows: Download & install [git](https://git-scm.com/download/win).
- Mac: Install it with [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) or [installer](http://sourceforge.net/projects/git-osx-installer/).
- Linux (Ubuntu, Debian): `sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS): `sudo yum install git-core`

### Install Node.js

The best way to install Node.js is with [nvm](https://github.com/creationix/nvm).

cURL:

``` bash
$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Wget:

``` bash
$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Once nvm is installed, restart the terminal and run the following command to install Node.js.

``` bash
$ nvm install 0.12
```

Alternatively, download and run [the installer](http://nodejs.org/).

### Install Hexo

Once all the requirements are installed, you can install Hexo with npm.

``` bash
$ npm install -g hexo-cli
```

## Installation

`npm install -g hexo`

Once you have downloaded the repo, run:

``` bash
npm install
```

## Create a new post

``` bash
hexo new post "my awesome post"
```

## Run in server mode
``` bash
hexo server
```

## Build static website

``` bash
hexo generate
```

## Deploy

``` bash
hexo deploy
```

# DL theme

@todo

## Compiling CSS

@todo
