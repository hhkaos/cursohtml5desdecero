# Introducción a CSS

Para empezar me gustaría que supieses que aunque tú no hayas escrito aún ninguna línea de CSS, la página que has creado ya contenía algunos estilos, los estilos por defecto que incluye el navegador.

Es importante que sepas que cada navegador incluye siempre una serie de estilos por defecto a cada elemento HTML, por ejemplo:
* Los elementos ```<p>``` tienen estilos para que se produzca un salto entre el párrafo y los elementos anterior y posterior
* El elemento ```<strong>``` para que se muestre en negrita
* Los elementos ```<li>``` para que aparezca un punto a la izquierda
* Los encabezados ```<h1>```, ```<h2>```, etc para que se muestren de un tamaño mayor que el por defecto
* Etc

Esto es algo común en todos los navegadores, el problema es que no todos definen los estilos de igual manera y esto puede ser fuente de errores en el futuro. Por eso veremos que es una práctica común que nuestros proyectos CSS empiecen cargando una hoja de estilos llamada [Reset.css](http://meyerweb.com/eric/tools/css/reset/) que elimina los estilos que pueden provocar errores en el futuro.

Vamos a empezar viendo centrándonos en las propiedades de CSS3 que vienen heredadas de la versión 2.1. Dado que CSS3 al igual que HTML5 son estándares que se crean desde el W3C, la implementación en los navegadores no es inmediata, y por tanto no todos los elementos HTML5 ni todas las propiedades CSS3 están actualmente implementadas en todos los navegadores, por eso quiero dejarte este recurso con el que podrán consultar qué navegadores soportan cada característica: [CanIUse.com](http://caniuse.com/).

Como ejemplo podrás comprobar que el elemento HTML5 ```<video>``` no está soportado por [Internet Explorer 8 ni por Opera mini](http://caniuse.com/#search=video) o que la propiedad CSS3 ```background-attachment``` no está soportada por el [buscador de Android ni por Opera mini](http://caniuse.com/#feat=background-attachment).