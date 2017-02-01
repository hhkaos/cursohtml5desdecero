# Enviar y recibir cambios

## Instalar y configurar Git
Vamos a empezar por [descargar e instalar Git](https://git-scm.com/downloads):

![](/assets/2017-02-01_1218.png)

Una vez descargado e instalado abrimos un programa (la **consola de comandos**) que usaremos para ejecutar Git y comunicarnos con Github. Para ello hacemos lo siguiente:

* En Windows pulsamos la tecla de Windows y escribimos "**Git bash**".
* En Mac abrimos el programa "**Terminal**" (o cualquier otra variante: [iTerm](https://www.iterm2.com/), etc.)
* Linux abrimos una terminar con Ctrl-Alt+T.

En Windows veremos algo parecido a esto:

![](/assets/Captura de pantalla 2017-02-01 12.46.34.png)

En Mac algo parecido a esto:
![](/assets/Screenshot 2017-02-01 12.48.31.png)

A este programa lo llamaremos genéricamente: **consola de comandos**.

## Introducción a la consola de comandos

Antes de aprender cómo usar Git vamos a aprender qué es y cómo funciona la consola de comandos (o simplemente **consola**).

Podemos pensar en la consola de comandos como una especie de Buscador de ficheros ("Explorador de Windows"/"Finder de Mac"/"Nautilus en Ubuntu) que para realizar acciones necesita que "ejecutemos órdenes" en lugar de interactuar con el ratón funciona.

**¿Qué significa esto?**
Veamos un ejemplo, escribe en la consola "**ls**" y pulsa intro, verás algo parecido a lo siguiente:

![](/assets/Captura de pantalla 2017-02-01 13.02.30.png)

Lo que hemos hecho ha sido ejecutar una orden que nos permite ver (**L**i**S**ta) los ficheros y carpetas del directorio donde nos encontramos. Al igual que este hay otros comandos otros muchos, pero a nosotros nos bastará con saber movernos entre directorios usando principalmente el comando "**cd**":

* **pwd**: significa "**P**rint **W**orking **D**irectory" y como su nombre indica no muestra el directorio actual.
* **cd**: significa "**C**hange **D**irectory". Por defecto nos cambiará el "working directory" a nuestra carpeta de usuario del sistema (prueba a hacer un **ls** después y verás los ficheros y carpetas de tu carpeta de usuario).
* **cd [DIRECTORIO]**: si después de "cd" añadimos el nombre de un directorio equivaldría a hacer doble clic sobre una carpseta (nos movemos dentro de esa carpeta).
* **cd ..**:  si después de "cd" escribimos ".." nos salimos a la carpeta padre.
* **cd /**: nos lleva al directorio raíz de nuestro disco duro (en el caso de Windows "**cd /C**" nos llevaría al disco raíz de la spartición "C:".

## Comandos en Git

## Enviar y recibir cambios
Pendiente

## Ver el histórico de cambios
Pendiente

<small>Aclaraciones:</small><br>
<small>1. Mi recomendación es que hagas el curso gratuito [Try Git de CodeSchool](https://www.codeschool.com/courses/try-git) para aprender a usar Git desde la línea de comandos cuando te hayas acostumbrado a usar Git (  **yo nunca uso ninguna herramienta gráfica**).</small><br>