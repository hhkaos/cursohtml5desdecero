% CSS: Modelo de caja
% Lección 7
% www.cursohtml5desdecero.com

# Elementos HTML

## DIV y SPAN

Existen dos elementos que utilizaremos para envolver el contenido pero que no tienen ningún *valor semántico*.

# Formato visual

## Modelo de caja

![Modelo de caja](http://www.planetoftunes.com/website-design/css/media/boxmodel.gif)

## Propiedad Display

La propiedad display puede tener varios valores:

* [inline](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements): elementos en línea (a, img, span, input, label, ...)
* [block](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements): elementos en bloque (h1-h6, p, div, ul, ol, li, hr, ...)
* inline-block

## Diferencias entre inline y block

* **Formato**: por defecto, los *elementos en bloque** empiezan en una nueva línea, pero los en *elemento en línea* pueden empezar en cualquier sitio dentro de una línea.
* **Modelo de contenido**: 
    * Normalmente los elementos en bloque pueden contener elementos de ambos tipos.
    * Los elementos en línea sólo pueden contener otros elementos en línea.

## Propiedad position

* static
* relative
* absolute
* fixed

## Propiedad z-index

Esta propiedad establece el orden en el que aparecen las cajas en el eje Z (profundidad) y se establece como un número entero.

Ejemplo:

~~~~css
div{
    z-index: 999;
}
~~~~

## Borde (Border)

* border-width:
* border-style:
* border-color:
* border:

[Ver todos](https://www.w3.org/wiki/CSS/Properties#Border)


## Margen y relleno (Margin & Padding)

[Ver todos](https://www.w3.org/wiki/CSS/Properties#Margin_.26_Padding)

# Selectores

[Ver todos]()

## Herencia

~~~~css
h1 span{
    color: red;
}
~~~~

~~~~css
h1 > span{
    color: red;
}
~~~~

~~~~css
h1, h2{
    color: red;
}
~~~~

