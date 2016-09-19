# Anidación de etiquetas

También es importante saber que unas etiquetas pueden contener a otras (una o varias), o como se suele decir "que se pueden anidar".

Por ejemplo:

```html
<head>
    <title>Título de la página</title>
    <meta name="author" content="Raúl Jiménez Ortega - @hhkaos">
</head>
```
En este caso vemos que la etiqueta **head** tiene como contenido a otra etiqueta **title**. En este caso se dice que:
* La etiqueta *head* es el **padre** de la etiqueta *title* y *meta*.
* Y que la etiqueta *title* y *meta* son **hijas** de la etiqueta *head*.
* La etiqueta *title* y *meta* son **hermanas**.

Si nos fijamos, además, la etiqueta anidada (*title*) está en una nueva línea y con un nivel de [indentación](https://es.wikipedia.org/wiki/Indentaci%C3%B3n)/sangrado mayor. Esto es así por una [convención](http://lema.rae.es/drae/srv/search?id=j5dMxst0MDXX2F43uojM) mundial a la que se ha llegado para que los programadores escribamos código de una manera similar, tanto para hacernos más fácil y comprensible el código cuando este crezca, como para cuando tengamos que compartirlo con otros programadores.

## Orden de apertura y cierre
Cuando anidamos etiquetas unas dentro de otras es muy importante cerrarlas *en orden*. Esto quiere decir que la primera etiqueta en cerrarse tiene que ser la última que se abrió, así por ejemplo este ejemplo sería **incorrecto**:

```html
<p>El orden es <strong>muy importante</p></strong>
```

La forma **correcta** de hacerlo sería:

```html
<p>El orden es <strong>muy importante</strong></p>
```

Recordemos que hay etiquetas que no es necesario cerrarlas por lo que esto sería **correcto**:

```html
<p>
    El orden es <strong>muy importante</strong>.<br>
    Así introducíamos un salto de línea.
</p>
```

## Otros aspectos

Me gustaría puntualizar otros dos detalles:
1. No todas las etiquetas son anidables entre sí; por ejemplo: una etiqueta **body** no puede contener una etiqueta **head**. Pero no te preocupes de momento por esto, en otra lección veremos cómo podemos saber qué etiquetas son anidables entre sí.
2. Es importante indentar bien el código porque en muchos casos nos encontraremos muchos niveles de anidación, etiquetas que contienen etiquetas que a su vez contienen etiquetas, etc. ya **no hay límite de anidamiento**.