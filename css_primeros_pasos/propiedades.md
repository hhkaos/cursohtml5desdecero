#Propiedades
Vamos empezar viendo algunas de las propiedades más usadas en CSS.

## Modificar el color

Propiedades:

* **[color](https://www.w3.org/wiki/CSS/Properties/color)**: establece el color de la fuente
* **[opacity](https://www.w3.org/wiki/CSS/Properties/opacity)**: establece la transparencia de un elemento

**Formas de [especificar el color](https://www.w3.org/wiki/CSS/Properties/color#Values)**:

* **[Valor hexadecimal](https://www.w3.org/wiki/CSS/Properties/color/RGB)**: #faf o #ffaaff
* **[Valor RGB (Red, Green, Blue)](https://www.w3.org/wiki/CSS/Properties/color/RGB)**: rgb(255, 160, 255) o rgb(100%, 62.5%, 100%)
* **[Valor RGBA (RGB + Alpha)](https://www.w3.org/wiki/CSS/Properties/color/RGBA)**: rgba(255, 160, 255, 1) or rgba(100%, 62.5%, 100%, 1)

Ejemplos:

```css
.error{
    color: rgb(100%,0,0);
    opacity: 0.5;
}
```

```css
.error{
    color: #F00;
    opacity: 0.5;
}
```

```css
.error{
    color: rgba(100%, 0, 0, .5);
}
```

##  Modificar la fuente

Propiedades de la [fuente](https://www.w3.org/wiki/CSS/Properties#Font) (font):

* **[font-style](https://www.w3.org/wiki/CSS/Properties/font-style)**: nos permite darle estilo a la fuente (p.e.: normal o italic)
* **[font-family](https://www.w3.org/wiki/CSS/Properties/font-family)**: establece una lista de fuentes (Gill, Helvetica, sans-serif;)
* **[font-size](https://www.w3.org/wiki/CSS/Properties/font-size)**: nos permite especificar el tamaño de la fuente
* **[font-weight](https://www.w3.org/wiki/CSS/Properties/font-weight)**: nos permite especificar el ancho de la fuente (bold, 400, 600, ...)
* **[font](https://www.w3.org/wiki/CSS/Properties/font)**: atajo para establecer varias propiedades

Hay [varias formas de especificar el tamaño](https://www.w3.org/Style/Examples/007/units.en.html), pero vamos a ver cómo especificar el tamaño usando unidades de longitud, algunos tipos para las fuentes son: 

* **px**: representan un tamaño absoluto.
* **em**: representan un valor relativo respecto al padre.
* **rem** (root em): representan un valor relativo respecto al *body*

### Fuentes personalizadas

En CSS3 ya se permite el uso de fuente personalizadas. [Google Fonts](https://www.google.com/fonts) dispone de un amplio número de fuentes de uso libre.

Para usarlas tendremos que añadir la hoja de estilos en nuestro HTML y añadir las fuentes en los elementos que queramos en nuestro CSS.

```html
<!-- index.html -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600italic,700' rel='stylesheet' type='text/css'>
```

```css
/* main.css */
body{
    font-family: 'Open Sans', sans-serif;
}
```

Ejemplo:

```css
h1{
    font: italic 600 24px / 1.5em Helvetica;
}
```

```css
h1{
    font-size: 2em;
    font-family: 'Open Sans', sans-serif;
}
```

```css
h1{
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
}
```

## Modificar el texto

Propuedades para modificar el [texto](https://www.w3.org/wiki/CSS/Properties#Text) (text):

* **[text-align](https://www.w3.org/wiki/CSS/Properties/text-align)**: para alinear el texto (left, right, center, justify)
* **[text-decoration](https://www.w3.org/wiki/CSS/Properties/text-decoration)**: permite añadir un subrayado, tachar una palabra, etc (underline, line-throught, ...)
* **[text-transform](https://www.w3.org/wiki/CSS/Properties/text-transform)**: permite transformar en mayúsculas, minúculas, etc (uppercase, lowercase, capitalize, ...)
* **[line-height](https://www.w3.org/wiki/CSS/Properties/line-height)**: permite ajustar el interlineado usando unidades como vimos antes (px, em, rem, ...).

Ejemplos:

```css
h1{
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
}
```

```css
.p{
    line-height: 1.5em;
}
```

