% CSS: Primeros pasos
% Lección 6
% www.cursohtml5desdecero.com

# Contenidos

## Veremos

* Introducción a CSS3
* Como cambiar los estilos de:
    * Textos
    * Colores
    * Fuentes
    * Fondos
    * Listas

# Introducción a CSS3

## Cascading StyleSheets

CSS o las hojas de estilo en cascada es un lenguaje de marcado que nos permite modificar el aspecto gráfico de los elementos introducidos con HTML.

## Herencia

Una propiedad **muy importante** de las hojas de estilo es que los estilos aplicados a un elemento padre son heredados por su hijo.

~~~~html
<ul style="color: red">
    <li>Inicio</li>
    <li style="color: blue">Experiencia</li>
</ul>
~~~~

En este caso el color de la fuente "Inicio" aparecerá en rojo y la de "Experiencia" en azul.

> Nota: **no está recomendado** aplicar los estilos usando atributos. A esta forma se le llama usar "estilos en línea".

## Aplicar estilos a los elementos

* **id**: identificador **único** de un elemento
* **class**: identificador que puede ser compartido por varios elementos

~~~~html
<!-- index.html -->
<h1 id="experiencia">Experiencia <strong class="destacado">profesional<strong></h1>

<p class="destacado">
    A lo largo de los últimos 16 años blah blah blah...
</p>
~~~~

~~~~css
/* main.css*/
#experiencia{
    font-size: large;
}
.destacado{
    color: blue;
}
strong{
    font-weight: normal;
}
~~~~

## Vincular una hoja de estilos

Para indicarle a una página dónde se encuentras los estilos tendremos que añadir un elemento auto-contenido **<link>**:

~~~~css
<link rel="stylesheet" href="resources/css/main.css">
~~~~

Una página puede incluir varias hojas de estilos, y siempre prevalecen los estilos de la última hoja añadida.

# Modificar el color

##  Color

Propiedades:

* **[color](https://www.w3.org/wiki/CSS/Properties/color)**: establece el color de la fuente
* **[opacity](https://www.w3.org/wiki/CSS/Properties/opacity)**: establece la transparencia de un elemento

## Formas de especificar el color

* **[Valor hexadecimal](https://www.w3.org/wiki/CSS/Properties/color/RGB)**: #faf o #ffaaff
* **[Valor RGB (Red, Green, Blue)](https://www.w3.org/wiki/CSS/Properties/color/RGB)**: rgb(255, 160, 255) o rgb(100%, 62.5%, 100%)
* **[Valor RGBA (RGB + Alpha)](https://www.w3.org/wiki/CSS/Properties/color/RGBA)**: rgba(255, 160, 255, 1) or rgba(100%, 62.5%, 100%, 1)

[Ver todos](https://www.w3.org/wiki/CSS/Properties/color#Values)

## Ejemplos:

~~~~css
.error{
    color: rgb(100%,0,0);
    opacity: 0.5;
}
~~~~

~~~~css
.error{
    color: #F00;
    opacity: 0.5;
}
~~~~

~~~~css
.error{
    color: rgba(100%, 0, 0, .5);
}
~~~~

#  Modificar la fuente

## Fuente (Font)

* **[font-style](https://www.w3.org/wiki/CSS/Properties/font-style)**: nos permite darle estilo a la fuente (p.e.: normal o italic)
* **[font-family](https://www.w3.org/wiki/CSS/Properties/font-family)**: establece una lista de fuentes (Gill, Helvetica, sans-serif;)
* **[font-size](https://www.w3.org/wiki/CSS/Properties/font-size)**: nos permite especificar el tamaño de la fuente
* **[font-weight](https://www.w3.org/wiki/CSS/Properties/font-weight)**: nos permite especificar el ancho de la fuente (bold, 400, 600, ...)
* **[font](https://www.w3.org/wiki/CSS/Properties/font)**: atajo para establecer varias propiedades

[Ver todos](https://www.w3.org/wiki/CSS/Properties#Font)

## Formas de especificar el tamaño

Hay varias formas, pero vamos a ver cómo especificar el tamaño usando unidades de longitud, algunos tipos para las fuentes son: 

* **px**: representan un tamaño absoluto.
* **em**: representan un valor relativo respecto al padre.
* **rem** (root em): representan un valor relativo respecto al *body*

[Ver todos](https://www.w3.org/Style/Examples/007/units.en.html)

## Fuentes personalizadas

En CSS3 ya se permite el uso de fuente personalizadas. [Google Fonts](https://www.google.com/fonts) dispone de un amplio número de fuentes de uso libre.

Para usarlas tendremos que añadir la hoja de estilos en nuestro HTML y añadir las fuentes en los elementos que queramos en nuestro CSS.

~~~~html
<!-- index.html -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600italic,700' rel='stylesheet' type='text/css'>
~~~~

~~~~css
/* main.css */
body{
    font-family: 'Open Sans', sans-serif;
}
~~~~

## Ejemplo

~~~~css
h1{
    font: italic 600 24px / 1.5em Helvetica;
}
~~~~

~~~~css
h1{
    font-size: 2em;
    font-family: 'Open Sans', sans-serif;
}
~~~~

~~~~css
h1{
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
}
~~~~

# Modificar el texto

## Texto (Text)

* **[text-align](https://www.w3.org/wiki/CSS/Properties/text-align)**: para alinear el texto (left, right, center, justify)
* **[text-decoration](https://www.w3.org/wiki/CSS/Properties/text-decoration)**: permite añadir un subrayado, tachar una palabra, etc (underline, line-throught, ...)
* **[text-transform](https://www.w3.org/wiki/CSS/Properties/text-transform)**: permite transformar en mayúsculas, minúculas, etc (uppercase, lowercase, capitalize, ...)
* **[line-height](https://www.w3.org/wiki/CSS/Properties/line-height)**: permite ajustar el interlineado usando unidades como vimos antes (px, em, rem, ...).

[Ver todos](https://www.w3.org/wiki/CSS/Properties#Text)

## Ejemplos:

~~~~css
h1{
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
}
~~~~

~~~~css
.p{
    line-height: 1.5em;
}
~~~~

# Modificar el fondo de un elemento

## Fondo (Background)

* **[background-color](https://www.w3.org/wiki/CSS/Properties/background-color)**: nos permite especificar el color (igual que vimos antes) de fondo de un elemento.
* **[background-image](https://www.w3.org/wiki/CSS/Properties/background-image)**: permite especificar una URL de una imagen que queremos que aparezca de fondo (por ej: url('imagen.jpg'))
* **[background-repeat](https://www.w3.org/wiki/CSS/Properties/background-repeat)**: por defecto si establecemos una imagen de fondo se repite indefinidamente, pero esto podemos cambiarlo (repeat-x, repeat-y, no-repeat, ...)
* **[background-position](https://www.w3.org/wiki/CSS/Properties/background-position)**: nos permite cambiar la posición de la imagen de fondo (left, right, center, ...)
* **[background](https://www.w3.org/wiki/CSS/Properties/background)**: es un atajo igual que la propiedad **font**.

[Ver todos](https://www.w3.org/wiki/CSS/Properties#Background)

## Ejemplos

~~~~css
body{
    background-color: #efefef;
}
~~~~

~~~~css
h1{
    background: url("fondo-encabezado.jpg") no-repeat center;
}
~~~~

# Modificar una lista

## Lista (List)

* **[list-style-image](https://www.w3.org/wiki/CSS/Properties/list-style-image)**: permite especificar una imagen para cada que preceda a cada elemento de la lista.
* **[list-style-type](https://www.w3.org/wiki/CSS/Properties/list-style-type)**: si no es establece la propiedad *list-style-image* especficar el formato que precede a un elemento de la lista
* **[list-style](https://www.w3.org/wiki/CSS/Properties/list-style)**: es un atajo igual que *font* o *background*

[Ver todos](https://www.w3.org/wiki/CSS/Properties#List)

## Ejemplos

~~~~css
li{
    list-style: none;
}
~~~~

~~~~css
li{
    list-style: square outsite;
}
~~~~

~~~~css
li{
    list-style-image: url("punto.jpg");
}
~~~~

~~~~css
li{
    list-style-type: upper-roman;
}
~~~~