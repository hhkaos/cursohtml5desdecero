# Convenciones

Antes de terminar me gustaría explicarte algunas de las principales convenciones o buenas prácticas que deberemos de tener en cuenta a la hora de escribir código HTML:
* Los valores de los atributos en HTML deben ir entre comillas dobles:
```html 
<!-- MAL -->
<img src='html5.gif' alt='Logo HTML5'>
<!-- BIEN -->
<img src="html5.gif" alt="Logo HTML5">
```
* La indentación se debe hacer con 2 espacios (prácticamente todos los editores de código permite configurar este valor).
```html
<p>
    <img src="html5.gif" alt="Logo HTML5">
</p>
```
* Los nombres de los elementos HTML y sus atributos se deben escribir en minúsculas
```html
<!-- MAL -->
<p>
    <IMG SRC="html5.gif" ALT="Logo HTML5">
</p>
<!-- BIEN -->
<p>
    <img src="html5.gif" alt="Logo HTML5">
</p>
```
* Usar UTF-8 como encoding.
* No cerrar elementos autocontenidos, por ejemplo usa ```<br>``` en lugar de ```<br/>```
* Evita el uso de estilos en línea (atributo ```style``` lo veremos en el siguiente apartado)
* Evita el uso de entidades HTML siempre que sea posible (salvo por ejemplo para ```<``` y ```&```)
```html
<!-- MAL -->
<h1>P&áacute;gina sobre &lt; HTML5 &amp; CSS3</h1>
<!-- BIEN -->
<h1>Página sobre &lt; HTML5 &amp; CSS3</h1>
```
* No introduzcas espacios antes o después del signo "igual":
```html
<!-- MAL -->
<img src = "html5.gif" alt = "Logo HTML5">
<!-- BIEN -->
<img src="html5.gif" alt="Logo HTML5">
```
* Establece los nombres de los ficheros en minúsculas, Windows no hace distinción entre mayúsculas y minúsculas pero otros sistemas sí, y esto puede provocar que una ruta funcione en un sistema operativo pero no en otro. Por ejemplo si tenemos un fichero llamado **Logo_HTML5.jpg** y una página que hace referencia a él con ```<img src="logo_html5.jpg" alt="Logo HTML5">```. Esto funcionará en Windows pero en un sistema basado en Unix (Linux o Mac) no funcionará.
* Los ficheros HTML debe tener la extensión "**.html**".
* Especifica el atributo **lang** en el elemento **html**.

Esta recopilación ha sido extraída de algunas guías de estilo.
* [HTML(5) Style Guide and Coding Conventions](http://www.w3schools.com/html/html5_syntax.asp)

http://docs.ckan.org/en/latest/contributing/html.html

https://google.github.io/styleguide/htmlcssguide.xml

http://codeguide.co/#html-syntax

Nombres de directorios

espacios
nombres con sentido
camelCase

A