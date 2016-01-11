# Etiquetas

En el último estándar de HTML (HTML5) existen [más de 100 elementos](http://www.w3.org/TR/2014/REC-html5-20141028/) que nos permitirán crear etiquetas. Como comentaba al inicio del curso no los veremos todos, de hecho no es habitual encontrar a nadie que los conozca todos, ni siquiera los que llevamos tantos años haciendo webs, lo importante es saber dónde buscarlos y saber cómo usarlos.

Por esto vamos a empezar por entender qué aspecto tienen. Lo primero es saber que las etiquetas sólo pueden ser de dos tipos:

1) **Las que tienen una apertura y un cierre** como en el siguiente caso:

```html
<elemento atributo="valor">Contenido</elemento>
```
Por ejemplo:
```html
<a href="http://www.google.com">Google</a>
```
En este caso decimos que: "*tenemos un elemento **a** donde el valor del atributo **href** es **http://www.google.com**, y que su contenido es **Google***". No hace falta que te preocupes aún por el significado, luego haremos incapié en esto.

Si nos fijamos las etiquetas **siempre** están contenidas entre los símbolos *< >*, y el cierre sólo incluye el nombre del elemento precedido de una barra lateral "*/*" (p.e. </elemento>).

2) Por otro lado están los **elementos auto-contenidos** (los que no se cierran explícitamente):

```html
<elemento atributo="valor">
```

Por ejemplo:

```html
<img src="html-css-js.png" alt="Logotipos de HTML5, CSS3 y JavaScript">
```

Es importante destacar que el *atributo* y el *valor* son opcionales.

Vamos a ver algunos ejemplos de nombres de etiquetas:
- **elemento**: *html*, *head*, *meta*, *title*, *body*, *img*... 
- **atributo**: *charset*, *src*, *alt*, ...
- **valor**: *UTF-8*, *modal*, ...
 
A mi siempre me gusta tener esta "[chuleta](images/html5-cheat-sheet.png)" (o cheatsheet) a mano que resume todos los elementos y algunos de los atributos que aceptan. Pero por ahora no hace falta que te distraigas con esto, lo importante es que entiendas el formato.