% Conceptos básicos
% Lección 1
% www.cursohtml5desdecero.com

# Introducción

## Contenidos

Qué son y cómo funcionan:

* Alojamiento y servidores HTTP
* Los navegadores
* Las URLs
* Peticiones HTTP

# Alojamiento y servidores HTTP

## Definiciones

- **[Servidor web HTTP](https://es.wikipedia.org/wiki/Servidor_web)** (o simplemente: *servidor web* o *servidor HTTP*): es programa que se encarga principalmente de las comunicaciones con el navegador.

- Un **[alojamiento web](https://es.wikipedia.org/wiki/Alojamiento_web)** (*web hosting* o *hosting*): es un ordenador conectado a Internet. Comúnmente también se le llama: **servidor**.

## Servidores web y empresas de hosting

* Empresas de hosting: 1and1, AWS, Linode, etc. ([ver más](http://hostarting.es/hostings/))

* Servidores web: [Apache](http://www.apache.org/), [Nginx](http://nginx.org/) y [IIS](https://www.iis.net/), etc. ([ver más](https://es.wikipedia.org/wiki/Servidor_web#Software))

## Ranking de servidores
![](https://hhkaos.gitbooks.io/introduccion-a-html5/content/images/ranking_servers.png)<br>
Fuente: [w3techs - 6 de Enero de 2016](http://w3techs.com/technologies/overview/web_server/all)

# Navegadores

## Definición

Un navegador es un programa **complejo** que entiende y transforma el código que recibe desde un servidor en algo entendible para un humano (una página web, imágenes, etc).

## Responsabilidades

* **Integridad**

* **Seguridad**

* **Optimización**

## Ranking de navegadores

![](https://hhkaos.gitbooks.io/introduccion-a-html5/content/images/quota_navegadores.png)<br>
Fuente: [StatCounter](http://gs.statcounter.com/#browser-ww-monthly-201411-201601-bar)

# URLs

## Formato

```
scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]
```

Ejemplos:

```
https://hhkaos.gitbooks.io/introduccion-a-html5/chapter1.html#introduccion
```

```
http://www.google.es/webhp?q=pandoc+reveal.js
```

```
https://hhkaos:mipass@rauljimenez.info:8080/privado
```

```
file:///Users/hhkaos/index.html
```
# Peticiones HTTP

## Tipos de peticiones

* **GET**: para solicitar información.

* **POST**: para enviar información.

## Mensajes de respuesta

* **200**: se ha encontrado correctamente el fichero/recurso.

* **403**: no tenemos permiso para acceder al fichero/recurso.

* **404**: el fichero/recurso que le hemos solicitado no se ha podido encontrar.

## Esquema simplificado

![Arquitectura](https://hhkaos.gitbooks.io/cursohtml5desdecero/content/images/client-server.png)