# TuMangaOnline redirect blocker

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/alejandrov44/tmo-redirect-blocker/blob/master/README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/alejandrov44/tmo-redirect-blocker/blob/master/README.es.md)

## Table of contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [How to generate the uncompressed extension](#how-to-generate-the-uncompressed-extension)
- [Add the extension to Chromium browsers](#add-the-extension-to-chromium-browsers)

## Description

A Chromium extension built with Node.js to change the url of tmo viewer when redirects to an external page.

## Prerequisites

This are the prerequisites to be able to use the project:

1- Download or clone the repository.

2a- Ensure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your machine.

Or

2b- Ensure you have [Node.js](https://nodejs.org/en/download/) installed on your machine.


## How to generate the uncompressed extension

### Generate the extension with docker

1- Ensure that you have docker running.

2- Execute this two commands on the bash terminal on the root of the project:

```bash
# Create the image
docker-compose build

# Run the image
docker-compose up
```

3- Wait until you can see the `dist` folder on the root of the project, this is the extension you want to install con Chromium browsers.

### Generate the extension with node.js

1- Ensure you have installed node.

2- Execute this two commands on the bash terminal on the root of the project:

```bash
# Install all project packages
npm i --save

# Run the project
npm run generate_extension
```

3- Wait until you can see the `dist` folder on the root of the project, this is the extension you want to install con Chromium browsers.


## Add the extension to Chromium browsers

1- Go to your browser and search for `chrome://extensions/`.

2- Activate the `Developer Mode` check.

3- Click on `Load unpacked` and select the `dist` folder generated on the root of the project.

### Result 🎉
 
If you did everything correctly, you should see the extension installed on your browser.
 
## Star the repo!!! ⭐
 
If I was able to help you, please star the repository. This will help me in my further work.

## Contact Me:
 
[Discord](https://discord.gg/yGMknyc9)
