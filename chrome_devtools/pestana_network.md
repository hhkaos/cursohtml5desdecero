# Pestaña network

Como decíamos, esta pestaña nos permite ver los recursos recuperados a través de las peticiones HTTP y los detalles de las mismas: tipo del mensaje (GET/POST), código de respuesta (200, 404, ...), etc.

Si abres las DevTools después de haber cargado la página la pestaña "Network" te saldrá vacía, si es así, refresca la página y verás como te aparece algo parecido<sup>1</sup> a esto:

![] (../images/pestana_network.png)

Cada fila representa una petición HTTP, y si te fijas, dejando el cursor encima de una petición te mostrará la URL completa del recurso.

Si haces clic en cualquiera de las peticiones podrás ver los contenidos del recurso y algunos detalles que no nos preocuparán en este curso.

![] (../images/cerrar_respuesta_red.png)

Para cerrar el detalle de la petición puedes pulsar en el aspa.

Veamos ahora **algunos** de los apartados de esta pestaña:

![](../images/network-panel.png)

* **Preserve records on navigation*:**
* **Clear records**:
* **Hide/show filter buttons**:
* **Filter buttons**
* 

Más información: https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/resource-loading#network-panel-overview


Por último, simplemente, te animo a que 

<small>Aclaraciones:</small><br>
<small>1. Las peticiones serán distintas en cada página, por lo tanto con casi total seguridad tus peticiones serán distintas a las de la imagen.</small><br>