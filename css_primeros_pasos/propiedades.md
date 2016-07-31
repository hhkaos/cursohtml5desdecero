#Propiedades
Hemos visto una forma de aplicar estilos a nuestro HTML, en el siguiente capítulo veremos otras formas, pero de momento nos vamos a quedar aquí y vamos a ver en detalle algunas de las propiedades más usadas en CSS.

## Modificar el color

La propiedad **[color](https://www.w3.org/wiki/CSS/Properties/color)** se puede usar en cualquier elemento, aunque principalmente se usa para modificar el color del texto, esta no es su única función<sup>1</sup>.

Existen múltiples **formas de [especificar el color](https://www.w3.org/wiki/CSS/Properties/color#Values)**, aquí veremos tres, mediante su:

* **[Valor hexadecimal](https://www.w3.org/wiki/CSS/Properties/color/RGB)**: #faf o #ffaaff
* **[Valor RGB (Red, Green, Blue)](https://www.w3.org/wiki/CSS/Properties/color/RGB)**: rgb(255, 160, 255) o rgb(100%, 62.5%, 100%)
* **[Valor RGBA (RGB + Alpha)](https://www.w3.org/wiki/CSS/Properties/color/RGBA)**: rgba(255, 160, 255, 1) or rgba(100%, 62.5%, 100%, 1)

El valor Alpha tiene que estar comprendido entre [0-1] y hace referencia a la transparencia del elemento, siendo 1 = opaco y 0 = transparente.

Ahora vamos a ver tres formas equivalentes de representar el color rojo:

```css
h1{
    color: rgb(100%, 0, 0);
}
```

```css
h1{
    color: #F00;
}
```

```css
h1{
    color: rgba(100%, 0, 0, 1);
}
```

En RGB si indica en cada uno de los valores la cantidad de Rojo(Red), Verde(Green) y Azul(Blue). Este valor puede ser un porcentaje o un valor comprendido entre 0 y 255, siendo 255 equivalente a 100%. 

En cuanto al valor hexadecimal FF equivale a 255, existen múltiples [conversores de decimal a hexadecimal](http://www.binaryhexconverter.com/hex-to-decimal-converter) y viceversa, la principal ventaja de usar este formato es que ocupa menos caracteres y por tanto menos espacio en disco. Por último, cuando un valor hexadecimal contiene 3 caracteres significa que cada uno de ellos se repite dos veces, ej: #faf es igual que #ffaaff.

Cuando lleguemos al apartado de "**Estilos con DevTools**" veremos una manera sencilla de usar un [círculo cromático](https://es.wikipedia.org/wiki/C%C3%ADrculo_crom%C3%A1tico) para conocer/elegir el color de un elemento.

##  Modificar la fuente

Para modificar las propiedades de la [fuente](https://www.w3.org/wiki/CSS/Properties#Font) (font) tenemos distintas propiedades:

* **[font-size](https://www.w3.org/wiki/CSS/Properties/font-size)**: nos permite especificar el tamaño de la fuente
* **[font-style](https://www.w3.org/wiki/CSS/Properties/font-style)**: nos permite darle estilo a la fuente (p.e.: `normal` o `italic`)
* **[font-family](https://www.w3.org/wiki/CSS/Properties/font-family)**: establece una lista de fuentes (`Arial`, `Helvetica`, `sans-serif`;)
* **[font-weight](https://www.w3.org/wiki/CSS/Properties/font-weight)**: nos permite especificar el ancho de la fuente (`bold`, `400`, `600`, ...)
* **[font](https://www.w3.org/wiki/CSS/Properties/font)**: atajo para establecer varias propiedades

### font-size
En cuanto al tamaño hay [varias formas de especificarlo](https://www.w3.org/Style/Examples/007/units.en.html), pero vamos a ver cómo especificar el tamaño usando unidades de longitud, por ejemplo: 

* **px**: representan un tamaño absoluto.
* **em**: representan un valor relativo respecto al elemento DOM padre.
* **rem** (root em): representan un valor relativo respecto al elemento `body`.

Un elemento puede tener múltiples estilos como vemos a continuación:
```css
h1{
    color: #F00;
    font-size: 16px;
}
```

Al igual que con los colores, veremos cómo jugar con estos valores usando Chrome DevTools.

### font-style
Los valores que puede contener son: ```	normal | italic | oblique | inherit```, "**inherit**" significa que tome el valor del elemento padre, y "**oblique**" e "**italic**" indican que la fuente se muestre el cursiva:

```css
h1{
    color: #F00;
    font-size: 16px;
    font-style: italic;
}
```

### font-family

Esta propiedad indica la fuente que queremos usar, por defecto<sup>2</sup> sólo se pueden especificar fuentes que tenga el usuario instaladas en su sistema operativo, ¿pero cómo sabemos cuales son?. Bueno, existen [algunas fuentes que se considera seguras](http://www.w3schools.com/cssref/css_websafe_fonts.asp) y que por tanto podemos contar con que estarán disponibles en casi cualquier sistema operativo.

Además de esto podemos introducir una lista de fuentes separadas por comas, de este modo en caso de que no se encuentre la primera fuente especificada se intentará con las posteriores. 

Aquí podemos ver un ejemplo:

```css
body{
    font-family: "Times New Roman", Times, serif;
}
```

Si nos fijamos también veremos que aquellas fuentes que tengan nombres compuestos (con espacios) deben ir encerradas entre comillas dobles.

En la siguiente lección veremos una forma sencilla de utilizar fuentes que no estén instaladas en el sistema operativo usando CSS3.

### font-weight
Esta propiedad hace referencia al grosor de la fuente y puede tomar múltiples valores: ```normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit````

De aquí merece la pena mencionar: 
* Que "**normal**" es sinónimo de "**400**" y "**bold**" de "**700**", este último representaría una negrita
* No todos los valores están disponibles para todas las fuentes, de hecho salvo que se usen fuentes personalizadas es difícil encontrar fuentes con anchos distintos a 400 o 700.

Un ejemplo:
```css
body{
    font-family: "Times New Roman", Times, serif;
    font-weight: 700;
}
```

### font
Como comentábamos esta es una forma de agrupar múltiples valores en una sola propiedad, no es trivial de recordar y por tanto no te recomiendo que la uses mientras estás empezando porque puede darte problemas.

Para que te suene si te lo encuentras en el código de alguien tiene este aspecto:
```css
h1{
   font: bold 1.2em Helvetica, Arial, sans-serif;
}
``` 
 
## Modificar el texto

Para modificar el [texto](https://www.w3.org/wiki/CSS/Properties#Text) (text) tenemos otras propiedades:

* **[text-align](https://www.w3.org/wiki/CSS/Properties/text-align)**: para alinear el texto (left, right, center, justify)
* **[text-decoration](https://www.w3.org/wiki/CSS/Properties/text-decoration)**: permite añadir un subrayado, tachar una palabra, etc (underline, line-throught, ...)
* **[text-transform](https://www.w3.org/wiki/CSS/Properties/text-transform)**: permite transformar en mayúsculas, minúculas, etc (uppercase, lowercase, capitalize, ...)
* **[line-height](https://www.w3.org/wiki/CSS/Properties/line-height)**: permite ajustar el interlineado usando unidades como vimos antes (px, em, rem, ...).

Puedes ver el detalle de cada una de las propiedades haciendo clic sobre el enlace en cada una.

Por simplificar aquí te mostramos algunos ejemplos:

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

## Otras etiquetas habituales
No es el objetivo de este curso ver todas las propiedades CSS ya que son muchas y la mejor forma de aprenderlas es con la práctica, pero antes de terminar esta lección me gustaría nombrarte dos más:
* **background** y **background-color**: que como su nombre indica nos permite cambiar el fondo de un elemento ([ver más](https://www.w3.org/wiki/CSS/Properties#Background)).
* **list-style**, **list-style-image** y **list-type**: nos permite modificar la imagen que precede a los elementos de una lista, etc ([ver más](https://www.w3.org/wiki/CSS/Properties#List)).

Ejemplos:
```css
body{ background-color: #efefef; }
h1{ background: url("fondo-encabezado.jpg") no-repeat center; }

li{ list-style: none; }
li{ list-style: square outsite; }
li{ list-style-image: url("punto.jpg"); }
li{ list-style-type: upper-roman; }
```

> **Nota**: en ocasiones cuando a elemento sólo se le define una propiedad te encontrarás que algunas personas lo escriben en una sola línea.

# Chuleta CSS
Ya hemos visto unos pocos estilos, conforme avancemos seguramente te cueste recordarlos así que al igual que con HTML aquí te dejo una [chuleta de CSS3](https://github.com/hhkaos/cursohtml5desdecero/blob/master/images/css3-cheat-sheet.pdf) con sus propiedades, y no te asustes, no creo que haya nadie que se las conozca todas, a lo largo de este curso te explicaré sólo aquellas que necesitarás más amenudo y te enseñaré como seguir luego ampliando por tu cuenta.

<hr>

**Aclaraciones:**<br>

1. En este artículo se puede leer cómo [la propiedad color no sólo afecta al texto](http://www.sitepoint.com/12-little-known-css-facts/#the-color-property-isnt-just-for-text)
2. En CSS 2.1 no se podían usar fuentes personalizadas, esta es una nueva características incorporada en CSS3.<br>
