# Lección 1

En esta primera lección vamos a empezar por aprender los **conceptos fundamentales** a la hora de entender el funcionamiento de una página web y por tanto la base para entender de dónde pueden venir los errores que comentamos en el futuro, por eso no empezaremos a hablar de HTML5 hasta el final de la lección. Además es importante interiorizar bien estos conceptos ya que nos los encontraremos con frecuencia en otras páginas, explicaciones, etc.

## Servidores y navegadores web
Un servidor web es un programa que se encarga (entre otras cosas) de enviar archivos desde el disco duro del ordenador donde está instalado a los navegadores web que los soliciten (nota: también se le llama servidor que al propio ordenador que tiene este software instalado). Y un navegador web es un programa que recibe, entiende y transforma este código que recibe a través de la red en algo entendible para un humano (una página web)

![Arquitectura](https://git.gitbook.com/raw/hhkaos/introduccion-a-html5/master/images/client-server.png?token=aGhrYW9zOmNjZWEzYzUwLTdlNWItNGVjOC05MzA0LTkxZDdhMWUxOGZhOA%3D%3D)

Entre algunas de las responsabilidades que debe garantizar de un navegador se encuentran:

* **Integridad**: para transmitir páginas web se utiliza una forma de comunicación llamada HTTP (o protocolo [HTTP](http://www.w3.org/Protocols/)). Este protocolo es el lenguaje común entre el servidor y el navegador web. Vamos a ver los principales mensajes, o como formalmente se suelen llamar *peticiones*:
    * Tipos de peticiones:
        * **GET**: para solicitar información.
        * **POST**: para enviar información.<br>
    * Mensajes de respuesta (del servidor):
        * **200**: Significa que se ha encontrado correctamente el fichero/recurso.
        * **403**: Significa que no tenemos permiso para acceder al fichero/recurso.
        * **404**: Significa que el fichero/recurso que le hemos no se ha podido encontrar en el disco duro (puede ser porque no esté o porque la ruta es incorrecta).

* **Seguridad**: dado que los navegadores reciben código escrito por otras personas, la seguridad en Internet se define a diferentes niveles de seguridad: durante el envío ([HTTPS](https://en.wikipedia.org/wiki/HTTPS)), al ejecutarse en el navegador ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)), etc.
* **Optimización**: al mismo tiempo que reciben la información integran mecanismos para acelerar la carga y mejorar la experiencia del usuario como es utilizar la memoria caché (memoria de almacenamiento temporal).
etc.

Aunque existen multitud de [navegadores](https://es.wikipedia.org/wiki/Navegador_web#Ejemplos_de_navegadores_web) y de [servidores web](https://es.wikipedia.org/wiki/Servidor_web#Software) en los módulos de HTML5 y CSS3 usaremos principalmente Google Chrome y no usaremos de momento ningún servidor web.

**¿Cómo funcionan las URLs? (Uniform Resource Locator)**

Para acceder a un fichero/recurso a través de un navegador usamos la URL que sigue el siguiente formato:

```
scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]
```

Vamos a hacer un pequeño repaso a cada una de las partes de la URL:

* **scheme (obligatorio)**: este suele ser ser http o https normalmente, aunque podría ser file, ftp, mailto, skype, etc
* **user:password@**
* **host**: nombre de dominio (p.e.: www.tusitioweb.com) o IP (79.82.123.1)
* **port**: puerto (si no se especifica ninguno se usa el 80 por defecto)
* **path (obligatorio)**: ruta al fichero
* **query**: parámetros/variables
* **fragment**: punto de anclaje

## ¿Qué vamos a necesitar?
Un editor de texto (o editor de código), por ejemplo:

* [Google Chrome](https://www.google.com/chrome/) (recomendado); además de un navegador se puede usar como editor de código ^_^.
* [Atom.io](https://atom.io/)
* [Sublime Text](http://www.sublimetext.com/3)

## Introducción a HTML5
HTML ([Hypertext Markup Language](http://www.w3.org/html/)) es un lenguaje de marcas creado por el [W3C](http://www.w3.org/) que sirve para definir la estructura y la semántica de nuestra página web. El W3C es un consorcio de personas, investigadores, empresas, etc. que trabajan continuamente para definir las normas que luego los fabricantes de navegadores deben implementar en sus navegadores que el mismo código funcione de igual manera en todos los navegadores.

Por tanto las versiones [han evolucionado a lo largo de los años](https://en.wikipedia.org/wiki/HTML#HTML_versions_timeline): HTML 2.0 (1995), HTML 4.0 (1997), XHTML (2000), HTML5 (2014), etc. con el objetivo de adaptarse a los nuevos tiempos y así dar soporte a nuevas necesidades (estandarización de los sistemas de autio, vídeo, etc)

**El fichero index.html**: por defecto los servidores web cuando reciben la petición de un fichero y no se indica explicitamente el nombre del fichero busca en la carpeta un fichero con nombre "index.html", si lo encuentra lo devuelve.

### Etiquetas y atributos
En el último estándar de HTML (HTML5) existen más de 100 etiquetas. Como comentaba al inicio no las veremos todas (de hecho no es habitual ver a nadie que las conozca todas). 

Vamos a empezar por entender qué pinta tienen. Las etiquetas siguen una estructura como la siguiente:

```html
<nombre_de_la_etiqueta atributo="valor">Contenido</nombre_de_la_etiqueta>
<nombre_de_la_etiqueta atributo="valor">
```

Por ejemplos algunos nombres de etiquetas son: **html**, **head**, **meta**, **title** y **body**. Y ejemplos de atributos son: **class**, **id**, **charset**, **style**, etc. No te preocupes que en los recursos te he dejado una chuleta con todas las etiquetas y algunos de los atributos que aceptan. Ahora lo importante es que entiendas el formato.

Por ejemplo en este caso vemos que la etiqueta **meta** puede contener el atributo **charset** con el valor **UTF-8**:

```html
<meta charset="UTF-8">
```

### Anidación de etiquetas
Unas etiquetas puedes contener a otras, lo que
http://www.w3.org/TR/2014/REC-html5-20141028/dom.html#phrasing-content-1

```html
<p class="nueva">
    asdasd <span>asdasd</span>
</p>
```

### Estructura básica

Toda página web comparte esta estructura.

```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Título de la página</title>
</head>

<body>
</body>

</html>
```

A continuación explicamos la función que cumple cada etiqueta:

* ```<!DOCTYPE html> ... </html>```: sirve para indicarle al navegador que el código HTML que le vamos a escribir dentro está en la versión 5, osea que es HTML5. [+info](http://www.w3.org/TR/2011/WD-html5-20110525/syntax.html#the-doctype)
* ```<head> ... </head>```: contiene otras etiquetas que ofrecen principalmente información al navegador, a los buscadores y a otras páginas (como pueden ser redes sociales, etc).
* ```<meta charset="UTF-8">```: indicamos al navegador qué tipo de caracteres contiene la página. Para especificar cuál de todos los disponibles usamos el atributo charset con el valor < href="">UTF-8 que nos servirá para siempre que trabajemos en....
* ```<title> ... </title>```: indica el título de nuetra página, la usan los navegadores, buscadores, etc.
* ```<body> ... </body>```: contiene todo el contenido visible por el visitante de nuestra página.
Nota ¿por qué tabulamos nuestro código?: la tabulación es muy importante utilizarla usarla para facilitar la lectura del código.

## Introducción a Google Chrome Developer Tools
De momento sólo nos vamos a centrar en tres de las pestañas:

* Elements
* Sources
* Network

Antes de continuar, estilos por defecto del navegador, inspeccionar/editar, etc.

Espacios, menor que, etc.

## Validar nuestro código
Que el código se muestre en nuestro navegador web como queríamos no implica necesariamente que lo hayamos escrito bien. En muchas ocasiones el navegador es capaz de detectar errores humanos y corregirlos de manera automática para que el usuario vea bien la página, pero esto no es siempre así. Si queremos asegurarnos de que nuestra página está correctamente escrita podemos usar el Validador de HTML del W3C, que además en caso de encontrar errores nos dará pistas sobre cómo resolverlos.

## Recursos
* Mozilla CDN
* [Chuleta de etiquetas HTML5](images/html5-cheat-sheet.png)
* Curso de Chrome Developer Tools
* [Curso online W3C - HTML5 W3c Training](http://www.w3devcampus.com/html5-w3c-training/)
* [Especificación HTML5](http://www.w3.org/TR/2014/REC-html5-20141028/)
* [Artículo: ¿Qué puede ocurrir si realizamos mal la anidación de etiquetas?](http://www.impressivewebs.com/dom-improperly-nested/)

## Dudas
Github code comments / issues

Ejercicio
Ejercicio tipo test

Este primer ejercicio consiste en crear un documento HTML5 con la estructura que hemos visto previamente, configurar Google Chrome para poder editar el fichero y subir nuestro ejercicio a Github.

1. Crear una carpeta en tu disco duro en la que iremos añadiendo los ejercicios
2. Crear un fichero index.html dentro de la carpeta y copiar la estructura básica que hemos visto
3. Configurar Google Chrome para poder editar nuestro fichero
4. Crear una cuenta en Github si no la tenemos
5. Crear un repositorio para este curso
6. Subir el código que hemos hecho a nuestro repositorio

Dudas con los ejercicios, si tienes alguna duda con el ejercicio