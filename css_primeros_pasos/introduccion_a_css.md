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

¿Por qué?, te cuento la versión extendida: 

Tanto CSS3 como HTML5 son estándares creados por el W3C que recordemos que incluyen muchos elementos, propiedades, etc. Por tanto el trabajo que implica adaptar cada uno de los navegadores para comprendan estos estándares es costoso y conlleva tiempo, es por eso que el soporte en los mismos evoluciona progresivamente. 

Además cada empresa u organización responsable de dicha adaptación prioriza (bajo su propio criterio) en qué orden soportará cada característica. Al final esto conlleva a que el soporte de las nuevas características de los estándares a día de hoy (17 Sept. 2016), dos años después de su publicación no estén completamente soportados en ningún navegador, pero ni siguiera estén las mismas características en cada navegador<sup>1</sup>.

Si te preguntase, ¿de cuántos navegadores crees que te deberías preocupar? (los más importantes). Supongo que te respuesta sería: tres o cuatro (Chrome, Internet Explorer, Firefox y Safari) o algo similar, ¿no?.

Bueno, ojalá fuese tan fácil, al final cada uno de estos navegadores no sólo dispone de versiones para distintos sistemas operativos (Windows, Mac, Linux, Android, iOS, Windows Phone, etc), sino que además los usuarios no siempre usan la última versión de cada navegador. Y el problema añadido que supone esto, es que para nuestra desgracia, un mismo navegador (por ejemplo Chrome), no necesariamente tiene que soporta exáctamente igual las características en Windows que en Android.

Pero no todo son malas noticias, para nuestra fortuna existe un proyecto llamado: [CanIUse.com](http://caniuse.com/), que concretamente nos va a resolver nuestras dudas. 

Por ejemplo: ¿tendré problemas si uso el elemento HTML5 `video` en el código de mi página? Si entras en la página de CanIUse comprobarás que dicho elemento no está soportado por [Internet Explorer 8 ni por Opera mini](http://caniuse.com/#search=video) o que la propiedad CSS3 `background-attachment` no está soportada por el [buscador de Android ni por Opera mini](http://caniuse.com/#feat=background-attachment).

Y esto... ¿eso qué quiere decir?, ¿puedes o no?. Para tomar esta decisión yo te recomiendo que te informes todo lo posible de qué tipo de personas visitarán tu web para intentar averiguar qué sistemas operativos, navegadores, etc usan y en base a eso decidas. Por ejemplo no es lo mismo un blog de productos Apple (probablemente tendrás un tráfico mayor que la media de usuarios que usen Safari), que una página que vayas a promocionar mucho en redes sociales (tendrás mucho tráfico móvil), etc.

Si estás actualizando una página antigua puedes usar Google Analytics o cualquier otra herramienta alternativa para obtener la información de tu tráfico actual.

Por este motivo es por lo que empezaremos aprendiendo propiedades CSS de la versión 2.1, ya que actualmente está soportado por el 99% de los navegadores.

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

En lugar de incluir "pantallazos" mostrando el resultado de cada ejemplo he optado por crear un recurso con contiene múltiples ejemplos de código (*snippets*) y un "*live preview*". Dichos snippets están organizados por lección y número de snippet. 

A lo largo de las lecciones haré referencia a ellos para que puedas consultarlos antes de continuar con la lección.

También los he creado con el objetivo de que estos snippets te sean de utilidad más adelante en tus futuros desarrollos.

Puedes acceder a ellos a través de la siguiente URL: [http://libro.cursohtml5desdecero.com/snippets/css/](http://libro.cursohtml5desdecero.com/snippets/css/).

<hr>



**Aclaraciones:**<br>



1.siendo los que más soportan (ordenados de mayor a menor): Chrome, Firefox, Edge y Safari.
