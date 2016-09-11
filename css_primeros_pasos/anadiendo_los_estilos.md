# Formas de añadir CSS

Ahora vamos a repasar las tres formas que existen de añadir estilos a nuestro HTML y una muy breve presentación a los selectores.

## Estilos en línea

Voy a explicarte esta forma de aplicar estilos, aunque debes evitarla siempre que te sea posible ya que es una mala práctica estilar tu página de esta manera.

A cualquier etiqueta HTML puedes añadirle la propiedad "**style"** y dentro de ella añadir tantos estilos como desees separados por punto y coma, por ejemplo:

```html
<h1 style="color:red; font-size:2em">Título de la página</h1>
```

Esta práctica está totalmente des-recomendada ya que a la larga complica el mantenmiento de los estilos de tu página incitándote a escribir más código del necesario como veremos a continuación.

## Estilos internos

Este es el ejemplo que hemos visto hasta ahora, añadiendo la etiqueta "**&lt;style&gt;"** dentro del "**&lt;head&gt;" **de nuestra página HTML.

## Estilos externos

Y por último la forma recomendada \(**siempre**\) de aplicar estilos: creando un fichero con extensión "**.css**" e indicarle al navegador que cargue dicho dichero, para ello usaremos un elemento auto-contenido llamado **&lt;link&gt;** del siguiente modo:

```html
<link rel="stylesheet" href="resources/css/main.css">
```

> **Nota**: Una página puede incluir varias etiquetas **link**, o lo que es lo mismo: _múltiples hojas de estilos_. En caso de que una regla<sup>1</sup> esté duplicada siempre prevalecerá la que se cargue en último lugar<sup>2</sup>. Cuando veamos la herencia veremos qué significa esto.

# Selectores de etiquetas

Ya que hemos visto todas las formas de cargar estilos CSS en nuestras páginas y cómo aplicar estilos a etiquetas HTML usando el nombre de la etiqueta, vamos a ver otras dos formas de seleccionar etiquetas HTML para aplicarles estilos:

* Asignando un identificador \(**único**\) al elemento: para ello añadiremos la propiedad **id="valor"** a la etiqueta.
* Asignando una o varias clases al elemento: en este caso usaremos la propiedad **class="valor1 valor2 ..."**.

Veamos un ejemplo:

```html
<!-- index.html -->
<h1 id="experiencia">Experiencia <strong class="destacado">profesional<strong></h1>

<p class="destacado">
    A lo largo de los últimos 16 años blah blah blah...
</p>

<style>
    #experiencia{
        font-size: large;
    }
    .destacado{
        color: blue;
    }
    strong{
        font-weight: normal;
    }
</style>
```

En este caso se ha añadido un identificador a la etiqueta "**h1**" y la misma clase \("**destacado**"\) a dos etiquetas: "**strong**" y "**p**". Dados los estilos definidos el resultado será el siguiente:

* La frase "**Experiencia profesional**" se le aplicará un tamaño mayor \(`large`\)
* La palabra profesional aparecerá con un ancho de fuente "`normal`" 
* Y todo salvo la palabra "**Experiencia**" aparecerá en color azul.

> **Nota importante**: los identificadores son únicos por cada página HTML. Por tanto dentro de un mismo fichero "**.html**" no podemos asignar el mismo valor a dos "**id**" o nos encontraremos con problemas e inconsistencias.

## Fuentes personalizadas

Una novedad de CSS3 frente a las versiones anteriores es que se permite el uso de fuentes personalizadas. El repositorio de fuentes más popular es [Google Fonts](https://www.google.com/fonts) que ofrece un amplio número de ellas de uso libre.

Para para poder usarlas tendremos que:

1. Añadir la hoja de estilos en nuestro HTML usando la etiqueta "**&lt;link&gt;**".
2. Añadir la propiedad **font-family** en los elementos que queramos aplicar la fuente en nuestro CSS.

Por ejemplo:

```html
<!-- index.html -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600italic,700' rel='stylesheet' type='text/css'>
```

```css
/* main.css */
body{
    font-family: 'Open Sans', sans-serif, arial;
}
```

> **Nota**: al añadir múltiples nombres de fuente separados por coma lo que estamos indicándole al navegador es que si tuviese problemas para cargar la primera fuente lo intente con la segunda, y si tuviese problemas con la segunda lo intentase con la tercera, y así tantas veces como queramos. Por ejemplo: el problema podría deberse a que el navegador no soporte CSS3 y fuentes personalizadas o por ejemplo porque el fichero que contiene la fuente y que tiene que descargar el navegador no estuviese disponible.

<hr>



**Aclaraciones:**<br>



1. Una regla no es más que la forma de específicar el elemento HTML a los que se les debe aplicar un estilo definido.

2. El navegador cargará y leerás los ficheros de manera secuencial, esto significa que lee empezando por la primera línea de un fichero y termina por la última, por tanto para facilitarnos la compresión podemos imaginarnos que cuando se carga un fichero con una etiqueta (**link** o **script**), esta etiqueta es reemplazada por el contenido del fichero al que haga referencia dicha etiqueta.




