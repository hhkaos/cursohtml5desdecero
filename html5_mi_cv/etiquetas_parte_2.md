# Etiquetas - Parte 2
Ahora vamos a ver las etiquetas básicas para trabajar con: enlaces o hipervínculos, imágenes, tablas, formularios, separadores y otras consideraciones.

Esta vez tampoco veremos todos los atributos posibles aunque añadiré enlaces a la documentación:

## Enlaces o hipervínculos
Una de las características más destacables de HTML es la posibilidad de enlazar unas páginas con otras, para hacer esto utilizamos el elemento "**[a](https://www.w3.org/TR/2014/REC-html5-20141028/text-level-semantics.html#the-a-element)**" con el atributo "**href**" (Hypertext Reference). Por ejemplo:

```html
<a href="http://www.cursohtml5desdecero">Curso de HTML5 desde cero</a>
```

Hay 3 tipos de enlaces:
* **Absoluto**: es un enlace que incluye todas las partes de una URL como vimos en el capítulo 1: <br>```scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]```
* **Relativo**: hace referencia a un recurso que se encuentra en una posición relativa a nuestra URL, así podemos establecer rutas relativas, por ejemplo: 
```html
<a href="img/imagen1.jpg">enlace a una imagen</a>
``` 
Donde indicamos que si por ejemplo la URL actual es http://www.cursohtml5desdecero.com/leccion1, la imagen se encuentra en http://www.cursohtml5desdecero.com/leccion1/img/imagen1.jpg, y si queremos hacer referencia a un recurso que se encuentra en un "**path**" anterior lo hacemos usando "**../**", por ejemplo:
```html
<a href="../img/imagen1.jpg">enlace a una imagen</a>
``` 
Que hará referencia a la siguiente URL: http://www.cursohtml5desdecero.com/img/imagen1.jpg (eliminamos **leccion1**).
* **Ancla (o *anchor*)**: a diferencia de los dos anteriores, este enlace se utilizar para indicar un elemento dentro de la misma página que estamos viendo. Para ello tenemos que explicar un nuevo tipo de atributo que tienen todos los elementos en HTML, el **[id](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#the-id-attribute)** (*unique identifier*), como su nombre indica es un identificador único y por tanto no podemos ponerle a dos elementos HTML el mismo **id**. Luego para añadir un hipervínculo a este elemento sólo tenemos que establecer el atributo **href** del enlace al **id** del elemento precedido de una almohadilla (#), por ejemplo:
```html
<a href="#leccion1">Lección 3</a>
...
<!-- aquí vendría todo el contenido -->
<h2 id="leccion1">Lección 3</h2>
```
Esto estamos acostumbrado a verlo en la Wikipedia, por ejemplo: <br>
https://en.wikipedia.org/wiki/Hyperlink#Hyperlinks_in_HTML

## Imágenes
Para mostrar una imagen en una página tenemos dos formas de hacerlo, una es usando el elemento **[img](https://www.w3.org/TR/2014/REC-html5-20141028/embedded-content-0.html#the-img-element)** y otras es mediante CSS (que veremos en el capítulo correspondiente).

Esta etiqueta sólo requiere de dos atributos obligatorios que son: **src** (de *source*) y el otro es **alt** (de *alternative*), por ejemplo:
```html
<img src="http://www.cursohtml5desdecero.com/assets/images/html-css-js.png" alt="Logo de HTML5">
```
Como podemos deducir del código anterior, el atributo **src** lo usaremos para indicar la URL (absoluta o relativa) a la imagen, y **alt** como el texto (alternativo) que mostrará el navegador en caso de no encontrar la imagen<sup>1</sup>.

## Tablas
table

## Formularios
form, button

## Separadores
hr

## Otras consideraciones
HTML entities < > &aacute;...
Espacios, menor que, etc.


DOM y DOMContentLoaded

* Mozilla CDN
* 
<small>Aclaraciones:</small><br>
<small>1. Puede que no se encuentre la imagen porque alguien la borre del servidor o porque nos equivoquemos al introducir la URL.</small><br>

