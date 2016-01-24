# Etiquetas - Parte 2


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
* **Ancla (o *anchor*)**: a diferencia de los dos anteriores, este enlace se utilizar para indicar un elemento dentro de la misma página que estamos viendo. Para ello tenemos que explicar un nuevo tipo de atributo que tienen todos los elementos en HTML, el **[id](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#the-id-attribute)** (*unique identifier*), como su nombre indica es un identificador único y por tanto no podemos ponerle a dos elementos HTML el mismo ID

## Imágenes
img

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

