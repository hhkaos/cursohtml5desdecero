% HTML5: Primeros pasos
% Lección 2
% www.cursohtml5desdecero.com

# Contenidos

## Veremos

* Una introducción a HTML5
* Qué son y cómo funcionan las etiquetas
* Qué es y cómo se hace la anidación de etiquetas
* La estructura básica de una página
* Algunas etiquetas básicas

# Introducción

## ¿Qué es?

Un lenguaje de marcado creado por la [W3C]() (+400 empresas)

## ¿Cuántos elementos existen?

En HTML5: [más de 100 elementos](http://www.w3.org/TR/2014/REC-html5-20141028/)

## Tipos

**Los que tienen una apertura y un cierre** como en el siguiente caso:

~~~~html
<elemento atributo="valor">Contenido</elemento>
~~~~

Por ejemplo:

~~~~html
<a href="http://www.google.com">Google</a>
~~~~

## Tipos (2)

Los **elementos auto-contenidos** (los que no se cierran explícitamente):

~~~~html
<elemento atributo="valor">
~~~~

Por ejemplo:

~~~~html
<img src="html-css-js.png" alt="Logotipos de HTML5, CSS3 y JavaScript">
~~~~

# Anidación

## Ejemplo
~~~~html
<head>
    <title>Título de la página</title>
    <meta name="author" content="Raúl Jiménez Ortega - @hhkaos">
</head>
~~~~

## Orden de apertura y cierre

~~~~html
<p>El orden es <strong>muy importante</p></strong>
~~~~

La forma **correcta** de hacerlo sería:

~~~~html
<p>El orden es <strong>muy importante</strong></p>
~~~~

# Estructura del HTML

## Estructura básica de una página

~~~~html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Título de la página</title>
</head>
<body></body>
</html>
~~~~

# Etiquetas básicas

## Encabezados, párrafos, etc

* h1 = **h**eading**1**; h2 = **h**eading **2**; ...
* p = **p**aragraph
* br = **b**reak **l**ine
* ul = **u**nordered **l**ist
* ol = **o**rdered **l**ist
* li = **l**ist **i**tem
* em = **em**phasis

## Ejemplo

~~~~html
<!DOCTYPE html>
<!-- TODO: añadir la etiqueta lang -->
<html>
<head>
	<meta charset="UTF-8">
	<title>Ejemplo con etiquetas básicas</title>
</head>
<body>
    <h1>Etiquetas HTML</h1>
    <p>
        Este ejemplo muestra cómo combinar algunas de las etiquetas más básicas de HTML5. <br>
        Recuerda que <strong>es importante entender la diferencias entre ellas</strong>.
    </p>
    
    <h2>Etiqueta ul+li</h2>
    <p>
        Si listamos personas nominadas a los Oscars, dado que el orden no altera el significado, debemos usar <em>ul</em>. 
    </p>
    <ul>
        <li>David Verdaguer</li>
        <li>Jesús Castro</li>
        <li>Israel Elejalde</li>
        <li>Dani Rovira</li>
    </ul>
    
    <h2>Etiqueta ol+li</h2>
    <p>
        En el caso de que estemos listando elementos donde el orden es importante, como por ejemplo la clasificación de un mundial de fútbol, debemos usar <em>ol</em>.
    </p>
    <ol>	 
        <li>España</li>
        <li>Países Bajos</li>
        <li>Alemania</li>
        <li>Uruguay</li>
    </ol>
</body>
</html>
~~~~
