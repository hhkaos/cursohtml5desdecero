# Estructura básica de una página

Primero me gustaría hacer una pequeña aclaración sobre terminología que voy a usar, diferenciaremos:
- **Sitio web (o web)**: como el conjunto de todas las páginas en las que podemos navegar dentro de un mismo dominio (p.e: [rauljimenez.info](http://rauljimenez.info), [rauljimenez.info/contacto](http://rauljimenez.info/contacto), etc).
- **Página web**: a una página individual dentro de un sitio web (p.e: [rauljimenez.info/contacto]( view-source:http://rauljimenez.info/contacto))

Dicho esto, toda *página web* que hagamos en HTML5 debe tener una estructura inicial como la siguiente:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Título de la página</title>
</head>
<body></body>
</html>
```

A continuación explicamos la función que cumple cada etiqueta:

* ```<!DOCTYPE html>```: indicar al navegador que el código HTML en el que está escrita la página es en la versión 5, osea que es HTML5. [+info](http://www.w3.org/TR/2011/WD-html5-20110525/syntax.html#the-doctype)
* ```<html>... </html>```: indica la raíz del documento y **todas** las etiquetas deben estar incluidas dentro.
* ```<head> ... </head>```: se usa para envolver otras etiquetas que ofrecen información principalmente a: el navegador, a los buscadores y a otras páginas (como pueden ser redes sociales, etc). La información especificada dentro del *head* no se muestra *dentro* de la página web ve el usuario.
* ```<meta charset="UTF-8">```: indica al navegador qué tipo de caracteres contiene la página. Para especificar cuál de [todos los disponibles]() usamos el atributo charset con el valor [UTF-8]() que nos servirá para siempre que trabajemos en español, inglés, ....**(TERMINAR)**
* ```<title> ... </title>```: indica el título de nuetra página. Este se muestra en: la pestaña del navegador, el enlace que indexan los buscadores, etc.
* ```<body> ... </body>```: contiene todo el contenido visible por el usuario *dentro* de nuestra página.