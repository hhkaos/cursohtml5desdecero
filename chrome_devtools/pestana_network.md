# Pestaña network

Como decíamos, esta pestaña nos permite ver los recursos recuperados a través de las peticiones HTTP y los detalles de las mismas: tipo del mensaje (GET/POST), código de respuesta (200, 404, ...), etc.

Si abres las DevTools después de haber cargado la página la pestaña "Network" te saldrá vacía, si es así, refresca la página y verás como te aparece algo parecido<sup>1</sup> a esto:

![](../images/pestana_network.png)

Cada fila representa una petición HTTP, y si te fijas, dejando el cursor encima de una petición te mostrará la URL completa del recurso.

Si haces clic en cualquiera de las peticiones podrás ver los contenidos del recurso y algunos detalles que no nos preocuparán en este curso.

![](../images/cerrar_respuesta_red.png)

Para cerrar el detalle de la petición puedes pulsar en el aspa.

Veamos ahora **algunas**<sup>2</sup> de las cosas que podemos hacer en esta pestaña. Si te fijas, las opciones en esta imagen no coinciden exactamente con las de la imagen anterior (y posiblemente tampoco con las tuyas), esto se debe a que este "pantallazo" es de una versión anterior del navegador (no importa), veamos que significan:

![](../images/network-panel.png)

* **[Preserve records on navigation](https://developer.chrome.com/devtools/docs/network#preserving-the-network-log-upon-navigation)**: por defecto aparece el bóton en rojo, esto significa que cada vez que cambiemos de página se eliminarán las peticiones y se añadirán las nuevas. En cambio, si lo desactivamos se mantendrán las peticiones antiguas.
* **Preserve log**: si marcas esta opción, el efecto será justo el contrario, nunca se borrarán las peticiones HTTP, ni cambiando de página ni de dominio (se irán añadiendo una tras otra).
* **Clear records**: este botón nos permite limpiar la información de las peticiones.
* **Hide/show filter buttons**: para ocultar/mostrar los botones para filtar.
* **Filter buttons**: estos botones nos permite ver sólo las peticiones HTTP que ha recuperado un tipo de recurso. *De momento* no lo usaremos mucho.
* **Summary view**: podemos ver cuántas peticiones HTTP se han necesitado para cargar la página (requests), cuando ocupa la suma de todos los recursos recuperados (XXX transferred), el tiempo que ha tardado en cargar, etc.
* **No throttling** (se ve en la imagen anterior): esto permite simular que tu conexión a Intenet es más lenta. Lo usaremos más adelante cuando queramos ver si nuestra página carga la suficientemente rápido usando un dispositivo conectado por 3G.

Por último, simplemente quería animarte a que dediques un par de minutos a jugar con esta pestaña antes de pasar a la siguiente. Si tienes cualquier duda no olvides preguntarla en los [issues de Github](https://github.com/hhkaos/cursohtml5desdecero/issues).

<small>Aclaraciones:</small><br>
<small>1. Las peticiones serán distintas en cada página, por lo tanto con casi total seguridad tus peticiones serán distintas a las de la imagen.</small><br>
<small>2. Si ya tienes experiencia con Chrome DevTools y quieres, encontrarás dónde ampliar conocimientos en la sección recursos de esta lección.</small>