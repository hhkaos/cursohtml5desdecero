# Etiquetas y atributos

En el último estándar de HTML (HTML5) existen [más de 100 etiquetas](http://www.w3.org/TR/2014/REC-html5-20141028/). Como comentaba al inicio del curso no las veremos todas, de hecho no es habitual ver a nadie que las conozca todas, ni siquiera los que llevamos tantos años haciendo webs, lo importante es saber dónde buscarlas y saber cómo usarlas.

Por esto vamos a empezar por entender qué aspecto tienen. Lo primero es saber que las etiquetas sólo pueden ser de dos tipos:

1) Las que tienen una apertura y un cierre como en el siguiente caso:

```html
<etiqueta atributo="valor">Contenido</etiqueta>
```

Vemos que las etiquetas **siempre** están contenidas entre los símbolos *< >*, y que el cierre se hará usando el nombre de la etiqueta precedido de una barra lateral: */* (p.e. </etiqueta>).

2) Por otro lado están las etiquetas que no se cierran explítictamente:

```html
<etiqueta atributo="valor">
```

Es importante destacar que el *atributo* es un valor opcional

Vamos a ver algunos ejemplos de etiquetas:
- **etiqueta**: *html*, *head*, *meta*, *title*, *body*... 
- **atributo**: *charset*, *class*, *id*, ...
- **valor**: *UTF-8*, *modal*, ...
 
No te preocupes que en los recursos te he dejado una chuleta con todas las etiquetas y algunos de los atributos que aceptan, pero por ahora lo importante es que entiendas el formato.

Por ejemplo:

```html
<meta charset="UTF-8">
```

En este caso diríamos que esto es: *"una etiqueta **meta** con el atributo **charset** con el valor establecido a **UTF-8**"*. No hace falta que te preocupes aún por el significado, luego haremos incapié en esto.