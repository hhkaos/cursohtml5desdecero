# 1.- Conceptos básicos (no definitiva)

En esta primera lección vamos a ver:
* [Qué vamos a necesitar para el curso](#¿qué-vamos-a-necesitar).
* Qué son y cómo funcionan:
    * [Los servidores web y HTTP](#servidores-web-y-http).
    * [Los navegadores web](#navegadores-web).
    * [Las URLs](#¿cómo-funcionan-las-urls).
    * [Peticiones HTTP](#servidores-y-navegadores-web).
* [Primeros pasos con HTML5](#primeros-pasos-con-html5):
    * [Etiquetas y atributos](#etiquetas-y-atributos).
    * [Anidación de etiquetas](#anidación-de-etiquetas).
    * [Estructura básica de una página](#estructura-básica-de-una-página).

Por tanto empezaremos por aprender los **conceptos fundamentales** a la hora de entender el funcionamiento de una página web para adquirir una base que nos permita entender de dónde pueden venir los errores que cometamos en el futuro. 

**Es importante conocer e interiorizar bien estos conceptos y herramientas** ya que los usaremos y nos los encontraremos continuamente tanto en este curso como en cualquier otro recursos de Internet.


## Primeros pasos con HTML5


### Etiquetas y atributos
En el último estándar de HTML (HTML5) existen más de 100 etiquetas. Como comentaba al inicio del curso no las veremos todas, de hecho no es habitual ver a nadie que las conozca todas, ni siquiera los que llevamos tantos años haciendo webs, lo importante es saber dónde buscarlas y saber cómo usarlas.

Por esto vamos a empezar por entender qué pinta tienen. Lo primero es saber que las etiquetas sólo pueden ser de dos tipos:

1) Las que tienen una apertura y un cierre como en el siguiente caso:

```html
<etiqueta atributo="valor">Contenido</etiqueta>
```

Vemos que las etiquetas **siempre** están contenidas entre los símbolos *< >*, y que el cierre contiene se hará usando el nombre de la etiqueta precedido de una barra lateral: */* (p.e. </etiqueta>).

2) Por otro lado están las etiquetas que no se cierran explítictamente:

```html
<etiqueta atributo="valor">
```

Otro detalle importante es que el *atributo* y el *valor* son opcionales.

Vamos a ver algunos ejemplos de etiquetas:
- **etiqueta**: *html*, *head*, *meta*, *title*, *body*... 
- **atributo**: *charset*, *class*, *id*, ...
- **valor**: *UTF-8*, *modal*, ...
 
No te preocupes que en los recursos te he dejado una chuleta con todas las etiquetas y algunos de los atributos que aceptan, pero por ahora lo importante es que entiendas el formato.

Por ejemplo:

```html
<meta charset="UTF-8">
```

En este caso diríamos que esto es: *"una etiqueta **meta** con el atributo **charset** con el valor establecido a **UTF-8**"*. No hace falta que te preocupes aún por el significado, luego haremos incapié en esto.

### Anidación de etiquetas
También es importante saber que unas etiquetas pueden contener a otras (una o varias), o como se suele decir "que se pueden anidar".

Por ejemplo:

```html
<head>
    <title>Título de la página</title>
</head>
```
En este caso vemos que la etiqueta **head** tiene como contenido a otra etiqueta **title**. Si nos fijamos, además, la etiqueta anidada (*title*) está en una nueva línea y con un nivel de [indentación](https://es.wikipedia.org/wiki/Indentaci%C3%B3n)/sangrado mayor. Esto es así por una [convención](http://lema.rae.es/drae/srv/search?id=j5dMxst0MDXX2F43uojM) mundial a la que se ha llegado para que los programadores escribamos código de una manera similar, haciendo así más fácil y comprensible el código cuando lo compartamos entre nosotros (e incluso facilitarnoslo a nosotros mismos).

Me gustaría puntualizar otros dos detalles:
1. No todas las etiquetas son anidables entre sí; por ejemplo: una etiqueta **title** no puede contener una etiqueta **head**, pero esto lo veremos más adelante.
2. En muchos casos nos encontraremos muchos niveles de anidación (etiquetas que contienen etiquetas que a su vez contienen etiquetas, etc), por lo que es importante indentar bien el código.

### Estructura básica de una página

Primero me gustaría hacer una pequeña aclaración sobre terminología que voy a usar, diferenciaremos:
- **Sitio web (o web)**: como el conjunto de todas las páginas en las que podemos navegar dentro de un mismo dominio (p.e: [rauljimenez.info](http://rauljimenez.info), [rauljimenez.info/contacto](http://rauljimenez.info/contacto), etc).
- **Página web**: a una página individual dentro de un sitio web (p.e: [rauljimenez.info/contacto]( view-source:http://rauljimenez.info/contacto))

Dicho esto, toda *página web* que hagamos en HTML5 debe tener una estructura inicial como la siguiente:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Título de la página</title>
</head>
<body></body>
</html>
```

A continuación explicamos la función que cumple cada etiqueta:

* ```<!DOCTYPE html> ... </html>```: indicar al navegador que el código HTML en el que está escrita la página es en la versión 5, osea que es HTML5. [+info](http://www.w3.org/TR/2011/WD-html5-20110525/syntax.html#the-doctype)
* ```<head> ... </head>```: se usa para envolver otras etiquetas que ofrecen información principalmente a: el navegador, a los buscadores y a otras páginas (como pueden ser redes sociales, etc). La información especificada dentro del *head* no se muestra *dentro* de la página web ve el usuario.
* ```<meta charset="UTF-8">```: indica al navegador qué tipo de caracteres contiene la página. Para especificar cuál de [todos los disponibles]() usamos el atributo charset con el valor [UTF-8]() que nos servirá para siempre que trabajemos en español, inglés, ....**(TERMINAR)**
* ```<title> ... </title>```: indica el título de nuetra página. Este se muestra en: la pestaña del navegador, el enlace que indexan los buscadores, etc.
* ```<body> ... </body>```: contiene todo el contenido visible por el usuario *dentro* de nuestra página.

## Etiquetas básicas

Para terminar esta lección vamos a aprender el significado de ocho de las etiquetas que nos encontraremos con mucha frecuencia:

* ```<h1></h1>```: esta etiqueta seutiliza para representar el encabezado de una páginathese elements represent headings for their sections.
* ```<p></p>```: The p element represents a paragraph.
* ```<br>```: The br element represents a line break.
* ```<ul></ul>```: The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.
* ```<li></li>```: The li element represents a list item. If its parent element is an ol, or ul, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.
* ```<ol></ol>```: The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.
* ```<strong></strong>```: The strong element represents strong importance, seriousness, or urgency for its contents.
* ```<em></em>```: The em element represents stress emphasis of its contents.

* ```<!-- -->```: comentarios



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