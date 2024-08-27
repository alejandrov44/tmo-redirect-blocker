# Bloqueador de redirecciones de TuMangaOnline

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/alejandrov44/tmo-redirect-blocker/blob/master/README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/alejandrov44/tmo-redirect-blocker/blob/master/README.es.md)

## Tabla de contenidos

- [Descripción](#descripción)
- [Requisitos previos](#requisitos-previos)
- [Cómo generar la extensión descomprimida](#cómo-generar-la-extensión-descomprimida)
- [Agregar la extensión a navegadores Chromium](#agregar-la-extensión-a-navegadores-chromium)

## Descripción

Una extensión para navegadores Chromium construida con Node.js para cambiar la URL del visor de TuMangaOnline cuando se redirige a una página externa.

## Requisitos previos

Estos son los requisitos previos para poder utilizar el proyecto:

1- Descarga o clona el repositorio.

2a- Asegúrate de tener [Docker](https://www.docker.com/products/docker-desktop/) instalado en tu máquina.

O

2b- Asegúrate de tener [Node.js](https://nodejs.org/en/download/) instalado en tu máquina.

## Cómo generar la extensión descomprimida

### Generar la extensión con Docker

1- Asegúrate de que Docker esté en funcionamiento.

2- Ejecuta estos dos comandos en la terminal bash en la raíz del proyecto:

```bash
# Crear la imagen
docker-compose build

# Ejecutar la imagen
docker-compose up
```

3- Espera hasta que puedas ver la carpeta `dist` en la raíz del proyecto, esta es la extensión que deseas instalar en navegadores Chromium.

### Generar la extensión con Node.js

1- Asegúrate de tener Node.js instalado.

2- Ejecuta estos dos comandos en la terminal bash en la raíz del proyecto:

```bash
# Instalar todos los paquetes del proyecto
npm i --save

# Ejecutar el proyecto
npm run generate_extension
```

3- Espera hasta que puedas ver la carpeta `dist` en la raíz del proyecto, esta es la extensión que quieres instalar en tu navegador Chromium.

## Agregar la extensión a navegadores Chromium

1- Ve a tu navegador y busca `chrome://extensions/`.

2- Activa la casilla `Modo desarrollador`.

3- Haz clic en `Cargar descomprimida` y selecciona la carpeta `dist` generada en la raíz del proyecto.

### Resultado 🎉

Si hiciste todo correctamente, deberías ver la extensión instalada en tu navegador.
 
## ¡Dale una estrella al repositorio! ⭐

Si pude ayudarte, por favor dale una estrella al repositorio. Esto me ayudará en futuros trabajos.

## Contáctame:
 
[Discord](https://discord.gg/yGMknyc9)
