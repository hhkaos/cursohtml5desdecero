# 1.- Conceptos básicos (no definitiva)

En esta primera lección vamos a ver:
* Qué vamos a necesitar para el curso
* Qué son y cómo funcionan:
    * Los servidores web y HTTP
    * Los navegadores web
    * Las URLs
    * Peticiones HTTP
* Primeros pasos con HTML5
    * Etiquetas y atributos
    * Anidación de etiquetas
    * Estructura básica de una página

Por tanto empezaremos por aprender los **conceptos fundamentales** a la hora de entender el funcionamiento de una página web para adquirir una base que nos permita entender de dónde pueden venir los errores que cometamos en el futuro. 

**Es importante conocer e interiorizar bien estos conceptos y herramientas** ya que los usaremos y nos los encontraremos continuamente tanto en este curso como en cualquier otro recursos de Internet.


## Recursos
Te dejo dos tipos de recursos, los avanzados te recomiendo que los mires sólo si ya tenías un conocimiento previo de programación web (XHTML, HTML4, etc) o... si no le tienes miedo a nada ;D:

* Básicos:
    * [Chuleta de etiquetas HTML5](images/html5-cheat-sheet.png)
    * [Artículo: ¿Qué puede ocurrir si realizamos mal la anidación de etiquetas?](http://www.impressivewebs.com/dom-improperly-nested/)
* Avanzados:
    * [Organización sin ánimo de lucro responsable de gestionar los dominios a nivel mundial: ICANN - Wikipedia](https://en.wikipedia.org/wiki/ICANN)
    * [The Web Hypertext Application Technology Working Group](https://html.spec.whatwg.org/multipage/)


## Ejercicio

En esta primera lección sólo quiero que hagas un ejercicio tipo test para que puedas comprobar que has entendido todos los conceptos (por cierto, podrás repetirlo tantas veces como quieras).

[Empezar ejercicio tipo test de autoevaluación.](http://www.cursohtml5desdecero.com/tests/leccion1.html)

Si hay algo que no te haya quedado claro puedes preguntar cualquier duda en los [issues del proyecto en Github](https://github.com/hhkaos/introduccion-a-html5/issues).

## Extra (opcional)

Aunque **no es importante para el objetivo del curso**, que es aprender a programar en HTML5, los siguientes conceptos si puede serte útil si quieres aprender a alojar un sitio web en un servidor tuyo propio.

### Dominios y subdominios

**En este curso no aprenderemos a comprar y configurar un dominio** ya que *no* se ha considerado importante para los objetivos planteados. 

Dicho esto creo que es interesante conocer qué es un dominio y qué es un subdominio:
- **Dominios**: podemos hacer una analogía entre los dominios y los *Accesos directos* de Windows. Para identificar unívocamente una carpeta en nuestro disco duro necesitamos saber la ruta (*p.e: C:\Archivos de programa\Google Chrome\bin\chrome.exe*), para idenfiticar nuestros servidores web necesitamos saber su [dirección IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP) (p.e: 213.242.93.227). Como recordar todos estos dígitos es muy complejo se inventaron los dominios (p.e: google.com, rauljimenez.info, etc.) que no son más que un "*acceso directo*" o *alias* que es más fácil de recordar para un humano. Nota: los dominios se pueden alquilar por Internet y los precios normalmente varían desde los pocos € o $ hasta cien € o $. 
- **Subdominos**: un subdominio es un prefijo que le ponemos al dominio, por ejemplo: mail.google.com, y se puede usar para apuntar a distintas IPs. Así por ejemplo www sería también un subdominio.

El [ICANN](https://www.icann.org/) es la organización que gestiona los dominios a nivel mundial.

### Servidores web
Como hemos mencionado anteriormente un servidor web no es más que un ordenador* donde guardamos los ficheros que contienen nuestro sitio web.

Nota: **En este curso usaremos nuestra máquina si ningún servidor HTTP ya que no nos hará falta de momento**.

Estos ordenadores no tienen por qué tener nada en especial, nuestra máquina puede hacer de servidor web, pero dado que (entre otras muchas cosas), una web se espera que funcione 24 horas, 7 días a la semana y que nuestra máquina la tenemos que apagar de vez en cuando, normalmente se alquila parte de una máquina (o una máquina completa) a una empresa que se dedica exclusivamente a esto: empresas de [hosting o alojamiento web](https://es.wikipedia.org/wiki/Alojamiento_web).

Se puede acceder y gestionar estas máquinas que alquilamos en remoto de diferentes maneras: usando gestiores FTPs/SFTPs, paneles de control web, conexiones SSH, etc.

### Servidores HTTP
Existen multitud de servidores HTTP, entre ellos los más conocidos son: [Apache](http://www.apache.org/), [Nginx](http://nginx.org/) y [Microsoft Internet Information Server (IIS)](https://www.iis.net/):

![Fuente: monitis.com](https://git.gitbook.com/raw/hhkaos/introduccion-a-html5/master/images/Alexa_top-servers.png?token=aGhrYW9zOmNjZWEzYzUwLTdlNWItNGVjOC05MzA0LTkxZDdhMWUxOGZhOA%3D%3D)

### TCP
**Ignora este apartado si no has estudiado nada relacionado con informática o telecomunicaciones**. Simplemente quería hacer referencia que tanto los protocolos HTTP, como FTP, SSH, IMAP, DNS, POP, SMTP, etc. están implementados sobre TCP [(+ìnfo)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol).