# Peticiones HTTP

Cuando nuestro navegador quiere acceder a una página web a través de HTTP (*scheme* = http), lo que hace es comunicarse con el servidor HTTP instalado en un servidor web. Para ello descompone la URL que le permite conocer la dirección de la máquina (host) y la ruta (*path*) del recurso que se quiere solicitar (o el del que se quiere enviar), y envía un mensaje a la máquina, lo que formalmente se conoce como una *petición*.

Algunas de las acciones que provocan que el navegador realice una petición HTTP son: pulsar un enlace, refrescar una pestaña, escribir una URL en la barra de direcciones o enviar un formulario.

Existen varios tipos de peticiones, aunque nosotros en este curso trabajaremos con dos tipos:
* **GET**: para solicitar información.
* **POST**: para enviar información.

Los mensajes de respuesta del servidor pueden ser de muchos tipos, aunque nosotros nos encontraremos normalmente tres, que significan:
* **200**: que se ha encontrado correctamente el fichero/recurso.
* **403**: que no tenemos permiso para acceder al fichero/recurso.
* **404**: que el fichero/recurso que le hemos solicitado no se ha podido encontrar en el disco duro (puede ser porque no esté o porque la ruta es incorrecta).
 
El siguiente esquema muestra un esquema simplificado que nos permite hacernos una idea sobre cómo funciona la comunicación entre ambos:

![Arquitectura](https://git.gitbook.com/raw/hhkaos/introduccion-a-html5/master/images/client-server.png?token=aGhrYW9zOmNjZWEzYzUwLTdlNWItNGVjOC05MzA0LTkxZDdhMWUxOGZhOA%3D%3D)