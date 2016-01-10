# Etiquetas y atributos

En el último estándar de HTML (HTML5) existen [más de 100 etiquetas](http://www.w3.org/TR/2014/REC-html5-20141028/). Como comentaba al inicio del curso no las veremos todas, de hecho no es habitual encontrar a nadie que las conozca todas, ni siquiera los que llevamos tantos años haciendo webs, lo importante es saber dónde buscarlas y saber cómo usarlas.

Por esto vamos a empezar por entender qué aspecto tienen. Lo primero es saber que las etiquetas sólo pueden ser de dos tipos:

1) **Las que tienen una apertura y un cierre** como en el siguiente caso:

```html
<nombre atributo="valor">Contenido</nombre>
```
Por ejemplo:
```html
<a href="http://www.google.com">Google</a>
```
En este caso decimos que: "*tenemos una etiqueta **a** donde el valor del atributo **href** es **http://www.google.com**, y que su contenido es **Google***".

Si nos fijamos las etiquetas **siempre** están contenidas entre los símbolos *< >*, y que el cierre sólo incluye el nombre de la etiqueta precedido de una barra lateral: */* (p.e. </nombre>).

2) Por otro lado están ^^las etiquetas que no se cierran explítitamente**:

```html
<etiqueta atributo="valor">
```

Es importante destacar que el *atributo* y el *valor* son opcionales.

Vamos a ver algunos ejemplos de nombres de etiquetas:
- **etiqueta**: *html*, *head*, *meta*, *title*, *body*... 
- **atributo**: *charset*, *class*, *id*, ...
- **valor**: *UTF-8*, *modal*, ...
 
A mi siempre me gusta tener esta "[chuleta](images/html5-cheat-sheet.png)" (o cheatsheet) a mano que resume todas las etiquetas y algunos de los atributos que aceptan. Pero por ahora no hace falta que te distraigas con esto, lo importante es que entiendas el formato.

Por ejemplo:

```html
<meta charset="UTF-8">
```

En este caso diríamos que esto es: *"una etiqueta **meta** con el atributo **charset** con el valor establecido a **UTF-8**"*. No hace falta que te preocupes aún por el significado, luego haremos incapié en esto.