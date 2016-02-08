# Convenciones

Antes de terminar me gustaría explicarte algunas de las principales convenciones o buenas prácticas que deberemos de tener en cuenta a la hora de escribir código HTML:
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
* No introducir espacios antes o después del signo "igual":
```html
<!-- MAL -->
<img src = "html5.gif" alt = "Logo HTML5">
<!-- BIEN -->
<img src="html5.gif" alt="Logo HTML5">
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
* Especifica el atributo **lang** en el elemento **html**:
```html
<html lang="es">
```
* Especifica siempre el atributo **for** cuando añadas un elemento **label**
```html
<label for="field-email">email</label>
<input type="email" id="field-email" name="email" value="" />
```
* Internet Explore soporta el uso de una etiqueta de compatibilidad **meta** indicando cómo tratar el código, usar siempre que se pueda:
```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

Esta recopilación ha sido extraída de algunas guías de estilo.
* [HTML(5) Style Guide and Coding Conventions](http://www.w3schools.com/html/html5_syntax.asp)
* [HTML coding  standards - CKAN](http://docs.ckan.org/en/latest/contributing/html.html)
* [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml)
* [Code Guide by @mdo](http://codeguide.co/#html-syntax)

## Otras convenciones

### Nombres de ficheros

Es recomendable seguir las siguientes convenciones:

* Establecer los nombres de los ficheros en minúsculas, Windows no hace distinción entre mayúsculas y minúsculas pero otros sistemas sí, y esto puede provocar que una ruta funcione en un sistema operativo pero no en otro. Por ejemplo si tenemos un fichero llamado **Logo_HTML5.jpg** y una página que hace referencia a él con ```<img src="logo_html5.jpg" alt="Logo HTML5">```. Esto funcionará en Windows pero en un sistema basado en Unix (Linux o Mac) no funcionará.
* Dale un nombre que represente lo que contiene, esto no sólo por usabilidad sino por posicionamiento (SEO<sup>1</sup>)
* En lugar de espacio usa un guión "-".
* Nunca uses acentos ni caracteres especiales: ñ, ",", etc.

### Extensiones de ficheros
Es recomendable que cada tipo de fichero tenga una extensión:
* HTML: "**.html**"
* JPEG: "**.jpg**"
* GIF: "**.gif**"
* PNG: "**.png**"

### Estructura de directorios
Conforme crezca tu proyecto agradecerás tener una estructura lógica que te ayude a organizar todos los ficheros. Basándome en [esta respuesta en Stackoverflow](http://stackoverflow.com/questions/24199004/best-practice-to-organize-javascript-library-css-folder-structure#answer-24199418)<sup>2</sup> te recomiendo seguir esta estructura<sup>3</sup>:
```
resources/
    css/
        main.css
    images/
        logo-html5.jpg
    js/
vendors/
    jquery/
        jquery.min.js
index.html
```
Donde:
* **resources**: es un directorio que incluye los **elementos que tú has creado** y que contiene tantos directorios como tipos de recursos (css -> estilos, images -> imágenes, js -> JavaScript).
* **vendors**: para almacenar recursos creados por terceros
* Y en el fichero raíz colocar los ficheros HTML que necesites.


<small>Aclaraciones:</small><br>
<small>1. SEO es el acrónimo de Search Engine Optimization, o lo que viene a ser lo mismo: [Optimización en Motores de Búsqueda](https://es.wikipedia.org/wiki/Posicionamiento_en_buscadores). Por ejemplo, estableciendo correctamente los nombres de nuestra imágenes, es más probable que aparezcamos en buenas posiciones en [Google Images](http://google.com/images).</small><br>
<small>2. Stackoverflow es uno de los sitios de referencia donde podrás encontrar muchas dudas de programación, lo que lo hace realmente interesante es [el sistema de valoraciones](http://stackoverflow.com/tour) que permite discernir las "buenas" de las "malas" respuestas.</small><br>
<small>3. No todos los proyectos se deben organizar igual, en muchas ocasiones dependerá de las tecnologías que estés usando, pero para este curso esta estructura será suficientemente buena.</small><br>
