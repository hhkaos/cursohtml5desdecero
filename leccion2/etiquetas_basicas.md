# Etiquetas básicas

Para terminar esta lección vamos a aprender el significado de ocho de las etiquetas que con más frecuencia tendremos que usar cuando creemos páginas web:

* ```<h1></h1>```: esta etiqueta se utiliza para representar el encabezado de una página, como si fuera el índice de un libro. Puede variar desde 1 hasta 6 para diferenciar subniveles ([+info](http://www.w3.org/TR/2014/REC-html5-20141028/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements)).

* ```<p></p>```: representa un párrafo ([+info](http://www.w3.org/TR/2014/REC-html5-20141028/grouping-content.html#the-p-element)).

* ```<br>```: representa un salto de línea ([+ìnfo](http://www.w3.org/TR/2014/REC-html5-20141028/grouping-content.html#the-p-element)).

* ```<ul></ul>```: representa una lista de elementos, donde el orden de los elementos no es importante - esto quiere decir que el cambio del orden no modifica el significado. ([+ìnfo](http://www.w3.org/TR/2014/REC-html5-20141028/grouping-content.html#the-ul-element)).

* ```<li></li>```: representa un elemento de la lista. Si su padre es *ol*, o *ul*, entonces The li element represents a list item. If its parent element is an ol, or ul, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element. ([+ìnfo](http://www.w3.org/TR/2014/REC-html5-20141028/grouping-content.html#the-li-element)).

* ```<ol></ol>```: The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document. ([+ìnfo](http://www.w3.org/TR/2014/REC-html5-20141028/grouping-content.html#the-ol-element)).

* ```<strong></strong>```: The strong element represents strong importance, seriousness, or urgency for its contents. ([+ìnfo](http://www.w3.org/TR/2014/REC-html5-20141028/text-level-semantics.html#the-strong-element)).

* ```<em></em>```: The em element represents stress emphasis of its contents. ([+ìnfo](http://www.w3.org/TR/2014/REC-html5-20141028/text-level-semantics.html#the-em-element)).

* ```<!-- -->```: se utiliza para comentarios dentro del código que el usuario no podrá ver. Por ejemplo para añadir notas de tareas pendientes, aclaraciones que nos ayuden a nosotros o a otras personas a entender el código, etc.  ([+ìnfo](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#comments)).

El siguiente ejemplo muestra una página web que combina todas ellas:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Ejemplo con etiquetas básicas</title>
</head>
<body>
    <!-- Este comentario no lo podrá ver el visitante -->
    <h1>Mi primer ejemplo</h1>
    <p>
        Este ejemplo muestra cómo combinar algunas de las etiquetas más básicas de HTML5. <br>
        Recuerda que <strong>es importante entender la diferencias entre ellas</strong>.
    </p>
    
    <p>
        Por ejemplo si no importa el orden, como si listamos personas nominadas a los Oscars,  podemos de los elementos en una lista debemos usar <em>ul</em>. 
    </p>
    <ul>
        <li>David Verdaguer</li>
        <li>Jesús Castro</li>
        <li>Israel Elejalde</li>
        <li>Dani Rovira</li>
    </ul>
    
    <p>
        Pero si estamos listando elementos donde el orden el importante, como por ejemplo la clasificación del mundial de fútbol del 2010 debemos usar <em>ol</em>.
    </p>
    <ol>	 
        <li>España</li>
        <li>Países Bajos</li>
        <li>Alemania</li>
        <li>Uruguay</li>
    </ol>
</body>
</html>
```

Esto generaría una página como la siguiente:
<hr>
![](../images/primer_ejemplo.png)
<hr>
Si quieres puedes ver [el ejemplo en vivo aquí](https://hhkaos.gitbooks.io/introduccion-a-html5/content/leccion2/ejemplo_con_etiquetas_basicas.html).

Es importante destacar que aunque el navegador le añade un estilo por defecto a las etiquetas, por ejemplo:
* ```strong```en negrita
* ```ul``` y ```ol``` con un margen a la izquierda y un punto o número respectivamente
* ```em``` en cursiva

Esto no es responsabilidad del HTML, esto lo podremos personalizar en un futuro con CSS. HTML sirve para dotar de estructura al contenido, y por tanto **lo importante es entender que lo que estamos haciendo es darle un valor semántico al mismo**.

Este valor semántico es **muy importante** entre otras cosas para que los buscadores (que no son más que programas automatizados) puedan "entender" el contenido de nuestra página y así poder detectar de qué estamos hablando y qué es importante.

Pero no sólo es importante para los buscadores, esta estructura es muy importante para otras herramientas como por ejemplo los navegadores para invidentes (por ejemplo [WebbIE](http://www.webbie.org.uk/es/)) que lo que hacen es leer el contenido al usuario.