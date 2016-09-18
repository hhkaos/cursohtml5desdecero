# Introducción a CSS

Por si aún no lo sabes, me gustaría empezar comentándote que a los profesionales que diseñan páginas usando HTML y CSS se les suele llamar **maquetadores web**. Si a un maquetador web le añadimos conocimientos en programación con JavaScript ya podemos hablar de un **front-end developer**.

Antes de empezar a hablar de código me gustaría explicarte dos aspectos muy importantes que venimos sufriendo históricamente los que nos dedicamos a esto y sitiéndolo mucho, tú tampoco te vas a escapar.


## Inconsistencia de estilos
No sé si te has dado cuenta, pero aunque tú aún no hayas escrito aún ninguna línea de CSS, la página que has creado ya contenía algunos estilos, los estilos por defecto que incluye el navegador.

Es **muy importante que siempre tengas en cuenta que cada navegador incluye estilos propios por defecto** que aplica a los distintos elementos HTML, por ejemplo:

* Los elementos `<p>` tienen estilos para que se produzca un salto entre el párrafo y los elementos anterior y posterior. (*pero la distancia puede variar entre navegadores*

* El elemento `<strong>` para que se muestre en negrita.

* Los elementos `<li>` para que aparezca un punto a la izquierda y una ligera indentación. (*pero el margen puede variar*)

* Los encabezados `<h1>`, `<h2>`, etc para que se muestren de un tamaño mayor que el del resto (*pero los tamaños pueden variar*).
* Etc

Esto sucede en todos los navegadores, el problema como vemos es que no todos definen los estilos exactamente de la misma manera y si no tienes esto en cuenta desde el principio lo vas a sufrir en el futuro. 

Aunque lo lógico sería que todos los navegadores se pusiesen de acuerdo en definir unos estilos por defectos comunes, ya hemos asumido que esto no va a pasar nunca, por este motivo quiero presentarte [Reset.css](http://meyerweb.com/eric/tools/css/reset/), una hoja de estilos comúnmente usada para uniformizar los estilos en todos los navegadores, lo que nos ayudará a que el resultado final después de aplicar nuestros estilos sean el mismo independientemente del navegador desde la que la abramos.

## Soporte a estándares
Por otro lado quería comentarte que vamos a empezar centrándonos en las propiedades de CSS3 que vienen heredadas de la [versión 2.1](https://www.w3.org/TR/CSS21/). 

¿Por qué?, la versión resumida es: qué por evitarte quebraderos de cabeza iniciales. La versión extendida la he dejado como un "Anexo - Navegadores y estándares soportados".

## Mi primer CSS

Hay múltiples formas de añadir CSS a nuestra página, una forma es utilizando el elemento `<style>` dentro de nuesto HTML, por ejemplo:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Mi primer CSS</title>
    <!-- Aquí definimos los estilo CSS para esta página -->
    <style>
      h1{
        color: red;
      }
    </style>
    <!-- Fin del CSS -->
</head>
<body>
    <h1>Encabezado 1</h1>
</body>
</html>
```

De este modo estamos le indicamos al navegador que queremos que nos coloree el texto de todos los elementos **h1** en color rojo, para ello usamos la propiedad "**color**" y establecemos su valor a "**red**".

Los estilos aplicados a un elemento en CSS siempre tienen que estar envueltos entre llaves \("**{}**"\). Por cada propiedad definida \(en este caso `color`\) tenemos que terminar la línea con punto y coma.

Por tanto los estilos se definen de la siguiente manera:
```css
nombre-de-la-etiqueta-html {
    propiedad-css: valor-de-la-propiedad;
    propiedad-css-2: valor-de-la-propiedad-2;
}
```

Una buena práctica es tabular las propiedades de un elemento (igual que se hace con el código HTML).

Siempre que se use el elemento "**style**" debe estar anidado dentro del elemento "**head**", aunque si lo ponemos dentro del "**body**" lo más probable es que funcione bien, pero no sería válido según el W3C y por tanto no pasaría [el validador](https://validator.w3.org/nu/#textarea).

## Snippets interactivos

En esta lección en lugar de incluir "pantallazos" mostrando el resultado de cada ejemplo, he optado por crear un recurso que contiene múltiples ejemplos de código (*snippets*) y una vista preliminar de los mismos. 

Dichos snippets están organizados por lección y número de snippet, por lo que a lo largo de las lecciones haré referencia a ellos para que si quieres puedas consultarlos antes de continuar con la lección.

Además de como apoyo al libro, tienen un segundo propósito estos snippets: servite de recurso en el futuro para tus propios desarrollos.

Aquí tienes la URL por si quieres echarles un vistazo ahora para ir familiarizándote con la interfaz: [http://libro.cursohtml5desdecero.com/snippets/css/](http://libro.cursohtml5desdecero.com/snippets/css/)

<hr>



**Aclaraciones:**<br>



1.siendo los que más soportan (ordenados de mayor a menor): Chrome, Firefox, Edge y Safari.
