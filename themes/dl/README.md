# Hexo

Documentation is [here](https://hexo.io/).

## Requirements

Installing Hexo is quite easy. However, you do need to have a couple of other
things installed first:

- [Node.js](http://nodejs.org/)
- [Git](http://git-scm.com/)

### Install Git

- Mac: Install it with [Homebrew](http://mxcl.github.com/homebrew/)

### Install Node.js

Note: you will need to install `wget` first. Run:  
```
brew install wget
```
Now, let's install Node.js.
The best way to do it is with [nvm](https://github.com/creationix/nvm).

```
wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Once nvm is installed, restart the terminal and run the following command to
install Node.js.

```
nvm install 0.12
nvm alias default 0.12
```
The last command will set the 0.12 node version as default on a shell.

### Install Hexo

Once all the requirements are installed, you can install Hexo with npm.

`npm install -g hexo-cli`

## Installation

`npm install -g hexo`

Once you have downloaded the repo, run:

`npm install`

## Create a new post

`hexo new post "my awesome post"` (avoid uppercase here).

## Run in server mode

`hexo server` is used to visualize your work on a local server.

## Build static website

`hexo generate` is used to generate the static pages.

## Deploy

`hexo deploy` is used to deploy you site to your preferred environment (see
CNAME).

# DL theme

@todo

## Favicon

The favicon is located in `dl/source/favicon.png`.  
If necessary, the path can be changed in dl's _config.yml file.

## Compiling CSS

@todo
