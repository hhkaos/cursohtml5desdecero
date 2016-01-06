# 1.3. Navegadores web

Es un programa que recibe, entiende y transforma el código que recibe desde un servidor web en algo entendible para un humano (una página web, imágenes, etc).

Entre algunas de las responsabilidades que debe garantizar un navegador se encuentran:

* **Integridad**: para transmitir páginas web se utiliza una forma de comunicación llamada HTTP (o protocolo [HTTP](http://www.w3.org/Protocols/)). Este protocolo es el lenguaje común entre el servidor y el navegador web. 

* **Seguridad**: dado que los navegadores reciben código escrito normalmente por otras personas, el navegador implementa lgunas reglas de seguridad. Estas reglas se definen a diferentes niveles: durante la conexión entre las máquinas y el envío ([HTTPS](https://en.wikipedia.org/wiki/HTTPS)), al ejecutarse en el navegador ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)), etc.

* **Optimización**: al mismo tiempo que reciben la información, los navegadores integran mecanismos para acelerar la carga para mejorar la experiencia del usuario, por ejemplo: utilizar una memoria de almacenamiento temporal (memoria caché), etc.

Aunque existen multitud de [navegadores](https://es.wikipedia.org/wiki/Navegador_web#Ejemplos_de_navegadores_web) y de [servidores HTTP](https://es.wikipedia.org/wiki/Servidor_web#Software) en los módulos de HTML5 y CSS3 usaremos solamente Google Chrome y nuestra máquina mientras desarrollamos y Github cuando tengamos que publicar nuestros ejercicios, ya que este nos ofrece un servidor web y HTTP gratuito.