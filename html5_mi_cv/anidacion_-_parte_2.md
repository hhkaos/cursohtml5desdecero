# Anidación - Parte 2

En el primer capítulo de HTML vimos que las etiquetas se pueden anidar, pero comentamos que no todas las etiquetas son anidables entre sí, por ejemplo **esto sería incorrecto**:

```html
<body>
    <head></head>
</body>
```

Ya que una etiqueta **body** no puede contener a otra **head**, pero... ¿cómo podemos saber qué etiquetas son anidables?. 

Con la práctica aprenderá algunas anidaciones que están prohibidas y desarrollarás una capacidad de razonar algunas anidaciones obvias, pero al principio podrás servirte de tres recursos principalmente:
* La pestaña **Elements** del navegador. Como decíamos el navegador es un programa bastante complejo, y entre otras cosas que se encarga es de construir el DOM. Si durante el proceso de construcción del DOM el navegador se encuentra una anidación incorrecta intentará resolverla. Por eso si inspeccionamos el DOM de nuestra página, podremos ver si el propio navegador ha encontrado etiquetas mal anidadas y nos ha modificado el código.
* El validador de código del W3C que veremos cómo usar en el siguiente apartado.
* Pero nuestro principal recurso debe ser [la especificación de HTML5 del W3C](https://www.w3.org/TR/2014/REC-html5-20141028/), ahora veremos cómo usarla.

## Usar la especificación del W3C

En la descripción de todo elemento HTML nos encontraremos un apartado que se llama **[Content model](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#content-models)** que especifica qué tipo de etiquetas se pueden anidar,  por ejemplo: **[Metadata content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#metadata-content)**,  **[Flow content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#flow-content)**, **[Sectioning content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#sectioning-content)**, **[Heading content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#heading-content)**, **[Phrasing content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#phrasing-content)**, ...

Por ejemplo el elemento "**[li](https://www.w3.org/TR/2014/REC-html5-20141028/grouping-content.html#the-li-element)**" que usábamos para especificar un elemento de una lista (List Item) indica que su "Content model" es "[Flow content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#flow-content)", si hacemos clic en el enlace veráss que esto significa que el elemento soporta casi todos los elementos: a, area, article, b, blockquote, br, div, em, footer, form, h1, h2, h3, h4, h5, h6, header, hr, i, iframe, img, input, etc.

Sin embargo si vas a la especificación del elemento "**[p](https://www.w3.org/TR/2014/REC-html5-20141028/grouping-content.html#the-p-element)**" verás que su modelo es de "[Phrasing content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#phrasing-content-1)", que admite muchas etiquetas pero por ejemplo no admite: "ul", "ol", "hr", etc.

Esta es la mejor forma de saber qué etiquetas son anidables y cuales no.