# 1.- Conceptos básicos (no definitiva)

En esta primera lección vamos a ver:
* [Qué vamos a necesitar para el curso.](#¿qué-vamos-a-necesitar)
* Qué son y cómo funcionan:
    * [Los servidores web y HTTP](#servidores-web-y-http).
    * [Los navegadores web](#navegadores-web)
    * [Las URLs.](#¿cómo-funcionan-las-urls)    
    * [Peticiones HTTP](#servidores-y-navegadores-web).
* [Primeros pasos con HTML5](#primeros-pasos-con-html5): 
    * [Etiquetas y atributos.](#etiquetas-y-atributos)
    * [Anidación de etiquetas.](#anidación-de-etiquetas) 
    * [Estructura básica de una página.](#estructura-básica-de-una-página)

Por tanto empezaremos por aprender los **conceptos fundamentales** a la hora de entender el funcionamiento de una página web para adquirir una base que nos permita entender de dónde pueden venir los errores que cometamos en el futuro. 

**Es importante conocer e interiorizar bien estos conceptos y herramientas** ya que los usaremos y nos los encontraremos continuamente tanto en este curso como en cualquier otro recursos de Internet.

## ¿Qué vamos a necesitar?
Un **navegador y un editor de código** (o editor de texto), en este curso vamos a recomendar usar [Google Chrome](https://www.google.com/chrome/) porque incluye ambas herramientas (navegador y editor), además de porque **considero que es más didáctico** y nos ayudará a asimilar mejor los conceptos. 

Es habitual encontrar profesionales que usen otros programas como: [Sublime Text](http://www.sublimetext.com/3), [Atom.io](https://atom.io/), [Brackets](http://brackets.io/), [WebStorm](https://www.jetbrains.com/webstorm/), [IntelliJ](https://www.jetbrains.com/idea/), ... pero nosotros de momento no usaremos ninguno de ellos.

**Nota**: Es posible que hayas oído hablar de Dreamweaver, Frontpage, Aptana, etc. Personalmente no te recomiendo ninguno de ellos, no porque los dos primeros sean de pago, sino porque incluyen botones que introducen código (cosa que muchas veces nos incita a introducir código innecesario). El tercero no lo recomiendo porque considero que como decimos habitualmente en España: *es matar moscas a cañonazos*; además de ser un programa que consume bastantes recursos.

## Servidores web y HTTP
Los que nos interesa saber para este curso sobre qué son estos servidores, nos vale con las siguientes definiciones informales:
- Un **servidor HTTP**: programa que se encarga (entre otras cosas) de enviar archivos desde el disco duro del ordenador donde está instalado a los navegadores web que los soliciten.
- Un **servidor web** al ordenador donde tenemos instalado entre otros programas, el servidor HTTP.  

Posteriormente en esta lección veremos más en detalle cómo se comunican un servidor web que tiene instalado un servidor HTTP con nuestro navegador.

## Navegadores web

Es un programa que recibe, entiende y transforma este código que recibe a través de la red en algo entendible para un humano (una página web).

Entre algunas de las responsabilidades que debe garantizar un navegador se encuentran:

* **Integridad**: para transmitir páginas web se utiliza una forma de comunicación llamada HTTP (o protocolo [HTTP](http://www.w3.org/Protocols/)). Este protocolo es el lenguaje común entre el servidor y el navegador web. 

* **Seguridad**: dado que los navegadores reciben código escrito por otras personas, la seguridad en Internet se define a diferentes niveles de seguridad: durante el envío ([HTTPS](https://en.wikipedia.org/wiki/HTTPS)), al ejecutarse en el navegador ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)), etc.

* **Optimización**: al mismo tiempo que reciben la información integran mecanismos para acelerar la carga y mejorar la experiencia del usuario como es utilizar la memoria caché (memoria de almacenamiento temporal).
etc.

Aunque existen multitud de [navegadores](https://es.wikipedia.org/wiki/Navegador_web#Ejemplos_de_navegadores_web) y de [servidores web](https://es.wikipedia.org/wiki/Servidor_web#Software) en los módulos de HTML5 y CSS3 usaremos principalmente Google Chrome y no usaremos de momento ningún servidor web.

### ¿Cómo funcionan las URLs?

Para acceder a un fichero/recurso a través de un navegador usamos la URL (Uniform Resource Locator) que sigue el siguiente formato:

```
scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]
```

Vamos a hacer un pequeño repaso a cada una de las partes de la URL:

* **scheme (obligatorio)**: este suele ser http o https normalmente, aunque podría ser también: file, ftp, mailto, skype, etc.
* **user:password@**: obvio.
* **host**: nombre de dominio (p.e.: tusitioweb.com) o IP (79.82.123.1)
* **port**: puerto (si no se especifica ninguno se usa el 80 por defecto)
* **path (obligatorio)**: ruta al fichero (por ejemplo: blog/index.php)
* **query**: parámetros/variables (por ejemplo: preview=true)
* **fragment**: punto de anclaje (por ejemplo #introducción)

Así una URL válida podría ser:
```
https://hhkaos.gitbooks.io/introduccion-a-html5/content/chapter1.html#primeros-pasos-con-html5
```
Donde:
- scheme = https
- user:password@ = (vacío)
- host = hhkaos.gitbooks.io
- port = 80
- path = introduccion-a-html5/content/chapter1.html
- query = (vacío)
- fragment = #primeros-pasos-con-html5

### Peticiones HTTP
Cuando nuestro navegador se comunica con un servidor web para solicitar o enviar un fichero/recurso a través de una URL se hace a través de mensajes HTTP, o como formalmente se suelen llamar *peticiones*. 

Algunas de las acciones que provocan que el navegador realice una petición HTTP son: pulsar un enlace, escribir una URL en la barra de direcciones o enviar un formulario.

Existen varios tipos de peticiones, aunque nosotros en este curso trabajaremos con dos tipos:
* **GET**: para solicitar información.
* **POST**: para enviar información.<br>

Los mensajes de respuesta del servidor pueden ser de muchos tipos aunque nosotros nos encontraremos normalmente tres:
* **200**: Significa que se ha encontrado correctamente el fichero/recurso.
* **403**: Significa que no tenemos permiso para acceder al fichero/recurso.
* **404**: Significa que el fichero/recurso que le hemos no se ha podido encontrar en el disco duro (puede ser porque no esté o porque la ruta es incorrecta).
 
El siguiente esquema muestra un diagrama que nos permite hacernos una idea sobre cómo funciona la comunicación entre ambos:

![Arquitectura](https://git.gitbook.com/raw/hhkaos/introduccion-a-html5/master/images/client-server.png?token=aGhrYW9zOmNjZWEzYzUwLTdlNWItNGVjOC05MzA0LTkxZDdhMWUxOGZhOA%3D%3D)

## Primeros pasos con HTML5
HTML ([Hypertext Markup Language](http://www.w3.org/html/)) es un [lenguaje de marcado](https://es.wikipedia.org/wiki/Lenguaje_de_marcado) (*que no es lo mismo que un [lenguaje de programación](https://es.wikipedia.org/wiki/Lenguaje_de_programaci%C3%B3n)*) creado por el [W3C](http://www.w3.org/) que sirve para definir la estructura y la semántica de nuestra página web. El W3C es un consorcio de personas, investigadores, empresas, etc. que trabajan continuamente para definir las normas que luego los fabricantes de navegadores deben implementar en sus navegadores que el mismo código funcione de igual manera en todos los navegadores.

Por tanto las versiones [han evolucionado a lo largo de los años](https://en.wikipedia.org/wiki/HTML#HTML_versions_timeline): HTML 2.0 (1995), HTML 4.0 (1997), XHTML (2000), HTML5 (2014), etc. con el objetivo de adaptarse a los nuevos tiempos y así dar soporte a nuevas necesidades (estandarización de los sistemas de autio, vídeo, etc)

**El fichero index.html**: por defecto los servidores web cuando reciben la petición de un fichero y no se indica explicitamente el nombre del fichero busca en la carpeta un fichero con nombre "index.html", si lo encuentra lo devuelve.

### Etiquetas y atributos
En el último estándar de HTML (HTML5) existen más de 100 etiquetas. Como comentaba al inicio no las veremos todas (de hecho no es habitual ver a nadie que las conozca todas). 

Vamos a empezar por entender qué pinta tienen.

Las etiquetas puede tener una apertura y un cierre como en el siguiente caso:

```html
<etiqueta atributo="valor">Contenido</etiqueta>
```
Aunque no siempre tienen por qué tener un *cierre*:

```html
<etiqueta atributo="valor">
```

Además es importante saber que el atributo y el valor son opcionales.

Vamos a ver algunos ejemplos de etiquetas:
- **etiqueta**: *html*, *head*, *meta*, *title*, *body*... 
- **atributo**: *class*, *id*, *charset*, *style* ...
- **valor**: *UTF-8*, *modal*, *margin-left: 10px* ...
 
No te preocupes que en los recursos te he dejado una chuleta con todas las etiquetas y algunos de los atributos que aceptan, pero por ahora lo importante es que entiendas el formato.

Por ejemplo:

```html
<meta charset="UTF-8">
```

En este caso se diría que esto es: *"una etiqueta **meta** con el atributo **charset** con el valor establecido a **UTF-8**"*. No hace falta que te preocupes por el significado, luego haremos incapié en esto.

### Anidación de etiquetas
Es importante saber que unas etiquetas pueden contener a otras, o como se suele decir "que se pueden anidar". 

Por ejemplo:

```html
<head>
    <title>Título de la página</title>
</head>
```
En este caso vemos que la etiqueta **head** contiene una etiqueta **title**. Si nos fijamos, además, el elemento anidado (*title*) está en una nueva línea y con un nivel de [indentación](https://es.wikipedia.org/wiki/Indentaci%C3%B3n)/sangrado mayor. Esto es así por una  [convención](http://lema.rae.es/drae/srv/search?id=j5dMxst0MDXX2F43uojM) general. 

Me gustaría mencionar que:
1. No todas las etiquetas son anidables entre sí; por ejemplo: una etiqueta **title** no puede contener una etiqueta **head**, pero esto lo veremos más adelante.
2. En muchos casos nos encontraremos muchos niveles de anidación (etiquetas que contienen etiquetas que a su vez contienen etiquetas, etc)

### Estructura básica de una página

Primero me gustaría hacer una pequeña aclaración sobre terminología que voy a usar, diferenciaremos:
- **Sitio web (o web)**: conjunto de todas las páginas en las que podemos navegar dentro de un mismo dominio (p.e: [rauljimenez.info](http://rauljimenez.info/contacto)).
- **Página web**: a una página individual dentro de un sitio web (p.e: [rauljimenez.info/contacto]( view-source:http://rauljimenez.info/contacto))

Dicho esto, toda *página web* en HTML5 que hagamos debe empezar con una estructura como la siguiente:

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
* ```<head> ... </head>```: contiene otras etiquetas que ofrecen principalmente información al navegador, a los buscadores y a otras páginas (como pueden ser redes sociales, etc).
* ```<meta charset="UTF-8">```: indicamos al navegador qué tipo de caracteres contiene la página. Para especificar cuál de todos los disponibles usamos el atributo charset con el valor < href="">UTF-8 que nos servirá para siempre que trabajemos en....
* ```<title> ... </title>```: indica el título de nuetra página, la usan los navegadores, buscadores, etc.
* ```<body> ... </body>```: contiene todo el contenido visible por el visitante de nuestra página.
Nota ¿por qué tabulamos nuestro código?: la tabulación es muy importante utilizarla usarla para facilitar la lectura del código.


## Recursos
* [Chuleta de etiquetas HTML5](images/html5-cheat-sheet.png)
* [Artículo: ¿Qué puede ocurrir si realizamos mal la anidación de etiquetas?](http://www.impressivewebs.com/dom-improperly-nested/)

**Recursos avanzados**.

Accede a estos recursos si ya tenías un conocimiento previo de programación web (XHTML, HTML4, etc) o si no le tienes miedo a nada ;D:
* [Organización sin ánimo de lucro responsable de gestionar los dominios a nivel mundial: ICANN - Wikipedia](https://en.wikipedia.org/wiki/ICANN)
* [Especificación oficial del estándar HTML5 - W3C](http://www.w3.org/TR/2014/REC-html5-20141028/)
* [Browser rendering optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860): aprende cómo funciona internamente Google Chrome y cómo optimizarlo.
* [The Web Hypertext Application Technology Working Group](https://html.spec.whatwg.org/multipage/)


## Ejercicio

En esta primera lección sólo tengas que realizar un ejercicio tipo test que podrás repetir tantas veces como quieras.

[Empezar ejercicio tipo test](http://www.cursohtml5desdecero.com/tests/leccion1.html)

Si hay algo que no te haya quedado claro puedes preguntar cualquier duda en los [issues del proyecto en Github](https://github.com/hhkaos/introduccion-a-html5/issues)

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