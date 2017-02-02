# Enviar y recibir cambios

## Instalar y configurar Git

Ahora vamos a empezar por [descargar e instalar Git](https://git-scm.com/downloads):

![](/assets/2017-02-01_1218.png)

Una vez descargado e instalado abrimos un programa \(la **consola de comandos**\) que usaremos para ejecutar Git y comunicarnos con Github. Para ello hacemos lo siguiente:

* En Windows pulsamos la tecla de Windows y escribimos "**Git bash**".
* En Mac abrimos el programa "**Terminal**" \(o cualquier otra variante: [iTerm](https://www.iterm2.com/), etc.\)
* Linux abrimos una terminar con Ctrl-Alt+T.

En Windows veremos algo parecido a esto:

![](/assets/Captura de pantalla 2017-02-01 12.46.34.png)

En Mac algo parecido a esto:  
![](/assets/Screenshot 2017-02-01 12.48.31.png)

A este programa lo llamaremos genéricamente: **consola de comandos**.

## Introducción a la consola de comandos

Antes de aprender cómo usar Git vamos a aprender qué es y cómo funciona la consola de comandos \(o simplemente **consola**\).

Podemos pensar en la consola de comandos como una especie de Buscador de ficheros \("Explorador de Windows"/"Finder de Mac"/"Nautilus en Ubuntu\) que para realizar acciones necesita que "ejecutemos órdenes" en lugar de interactuar con el ratón funciona.

**¿Qué significa esto?**  
Veamos un ejemplo, escribe en la consola "**ls**" y pulsa intro, verás algo parecido a lo siguiente:

![](/assets/Captura de pantalla 2017-02-01 13.02.30.png)

Lo que hemos hecho ha sido ejecutar una orden que nos permite ver \(**L**i**S**ta\) los ficheros y carpetas del directorio donde nos encontramos. Al igual que este hay otros comandos otros muchos, pero a nosotros nos bastará con saber movernos entre directorios usando principalmente el comando "**cd**":

* **pwd**: significa "**P**rint **W**orking **D**irectory" y como su nombre indica no muestra el directorio actual.
* **cd**: significa "**C**hange **D**irectory". Por defecto nos cambiará el "working directory" a nuestra carpeta de usuario del sistema \(prueba a hacer un **ls** después y verás los ficheros y carpetas de tu carpeta de usuario\).
* **cd **_**NOMBRE\_DIRECTORIO**_: si después de "cd" añadimos el nombre de un directorio equivaldría a hacer doble clic sobre una carpeta \(nos movemos dentro de esa carpeta\).
* **cd ..**:  si después de "cd" escribimos ".." nos salimos a la carpeta padre.
* **cd /**: nos lleva al directorio raíz de nuestro disco duro \(en el caso de Windows "**cd /C**" nos llevaría al disco raíz de la partición "C:".
* **ls -la**: nos permite mostrar todos los ficheros, incluyendo los ocultos.
* **mkdir **_**NOMBRE\_DIRECTORIO**_: nos permite crear un directorio dentro de la carpeta.

## Comandos en Git

Desde la consola se pueden ejecutar también otros programas, por ejemplo si tenemos [Atom](http://atom.io) instalado podemos escribir "**atom**" y se nos abrirá el programa.

Del mismo modo podemos ejecutar **git**, la única diferencia es que Git por defecto no tiene una interfaz gráfica.

Al igual que **cd**, para trabajar con **git** órdenes. Para facilitar el aprendizaje vamos a reducirnos al mínimo número de ordenes:

* **git clone **_**URL\_REPOSITORIO**_: esta órden nos permite vincular una carpeta de nuestro disco duro con un repositorio de Github y posteriormente sincronizar los cambios 
* **git status**: nos permite ver cambios en ficheros que no han sido guardados en el histórico \(o ficheros que no están sincronizados\).
* **git add \[**_**FICHERO**_**/**_**DIRECTORIO**_**/**_**-A**_**\]**: nos permite indicar un fichero/directorio/"todos los ficheros"
* **git commit -m "**_**CAMBIOS**_**"**:este paso indica a GIT que para todos los ficheros que hayan sido añadidos \(mediante add\) guarde una copia en memoria \(una "versión"\) y le añada el comentario indicado como recordatorio. Lo habitual es añadir un comentario sobre los cambios que se hicieron en esta nueva versión.
* **git push origin master**: con esta orden indicamos a Git que envíe los cambios desde nuestra máquina al repositorio "origen" \(en este caso, el que está en Github\).

Git ofrece otras muchas órdenes muy útiles como son:

* **git diff \[**_**FICHERO**_**/**_**DIRECTORIO**_**\]**: este comando nos permite ver lo que ha cambiando en un fichero/directorio desde la última versión que guardamos \(desde el último commit\)
* **git checkout \[**_**FICHERO**_**/**_**DIRECTORIO**_**\]**: con este comando podemos deshacer los cambios de un fichero y dejarlo como estab en el último commit.
* **git log**: nos muestra un histórico de todas las versiones del fichero.
* ...

Por eso, mi consejo es que hagas el curso gratuito [Try Git de CodeSchool](https://www.codeschool.com/courses/try-git) \(en una mañana posiblemente lo puedas hacer\) para descubrir parte de la potencia de esta tecnología.

## Clonar el repositorio

Ahora vamos a vincular \(clonar es el término correcto\) el repositorio en nuestro disco duro, pero antes de nada vamos a configurar la consola para que almacene nuestras credenciales siguiendo los siguientes tutoriales:

* [Para Windows](https://help.github.com/articles/caching-your-github-password-in-git/#platform-windows)
* [Para Mac](https://help.github.com/articles/caching-your-github-password-in-git/#platform-mac)
* [Para todos](https://help.github.com/articles/caching-your-github-password-in-git/#platform-linux)

Una vez hecho esto nos dirigimos a **github.com/username** y seleccionamos el repositorio creado, nos aparecerá algo parecido a esto:

![](/assets/Screenshot 2017-02-01 15.14.04.png)

A continuación **seleccionamos la opción HTTPS** y copiamos la URL que nos aparece dentro del cuadro azul \([https://github.com/raulEsri/raulEsri.github.io.git](https://github.com/raulEsri/raulEsri.github.io.git) en mi caso\) y nos dirigimos a la consola para clonar el repositorio en el directorio que queramos, por ejemplo:

![](/assets/Captura de pantalla 2017-02-01 15.19.04.png)

Es posible[^1] que desde la consola nos pida nuestro usuario y contraseña, en ese caso simplemente los introducimos.

## Enviar nuestros cambios a Github

Para ello vamos a crear un directorio "docs" dentro de nuestra carpeta \(en mi caso raulEsri.github.io\) y allí vamos a copiar nuestro fichero "**index.html**" con nuestro curriculum \(esto podemos hacerlo desde el explorar de Windows/Finder/...\).

Ahora vamos a usar la consola para enviar los cambios, para ello primero debemos movernos dentro de nuestra carpeta curriculum \("**cd raulEsri.github.io**" en mi caso\) y a continuación seguimos los siguientes pasos para guardar una versión del código y enviarla a Github:

```
$ git add docs
$ git commit -m "Adding initial version"
$ git push -u origin master?<-
```

Con esto sería suficiente, pero vamos pero a ver en detalle que estamos haciendo en cada uno de los pasos:

![](/assets/2017-02-02_0826.png)

Veamos qué estamos haciendo en cada uno de los pasos:

1. Antes de hacer nada ejecutamos ```$ git status```  para ver el estado en el que se encuentra nuestro repositorio, y nos indica que "**docs**" está en estado "Untracked" y en rojo, esto significa que aún no se ha guardado nunca una versión de este directorio y que nunca se ha solicitado que se sincronice con el repositorio.

2. Para solucionar esto ejecutamos ```$ git add docs```, de este modo simplemente le indicamos a *git* que queremos que queremos guardar una versión del directorio (pero nada más[^2]).

3. Volvemos a ejecutar ```$ git status``` a modo informativo simplemente para ver en qué estado se encuentra nuestro repositorio. En este caso nos indica que hay un fichero ("**docs/index.html**") pendiente de ser comiteado[^3] (será lo siguiente que hagamos).

4. Ahora vamos a indicarle a **git** que queremos añadir a nuestro histórico de versiones una nueva versión de todos los ficheros que hayan aparecido en el paso anterior como "Changes to be commited", para ello ejecutamos: ```git commit -m "Adding initial version"```. En este caso el comentario que describe los cambios que hemos hecho es "Adding initial version".

5. Si volvemos a ejecutar ```$ git status``` veremos que nuestros cambios no están pendientes de "comitear".

6. Por último ejecutamos ```$ git push``` lo que enviará nuestros cambios a Github[^4].

Una vez hecho todo esto podremos volver al navegador y refrescar la página principal de nuestro repositorio (**github.com/username/nombre-del-repo**) y veremos los cambios enviados.

## Recibir nuestros cambios desde Github

Si has sincronizado tu repositorio desde dos ordenadores distintos y has enviado cambios a Github que no tienes en la máquina con la que estás trabajando puedes traer los cambios ejecutando: ```$ git pull```

Esto funciona igual cuando editas algún fichero desde la web de Github o cuando varias personas estáis colaborando en un mismo repositorio.

## Ver el histórico de cambios

En cualquier momento puedes ver un histórico de los cambios que has estado haciendo (u otros han hecho) en el código ejecuntado ```$ git log```


## Errores refrecuentes

*Pendiente de terminar*:

* Antes de poder enviar cambios a un repositorio tienes que asegurarte que tu copia local está actualizada.




[^1]: [Como podemos ver en la documentación de Github](https://help.github.com/articles/which-remote-url-should-i-use/#cloning-with-https-urls-recommended)

[^2]: Al hacer un "**add**" en realidad lo que estamos añadiendo es añadir el fichero/carpeta a lo que se llama el [**staging area**](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics#_the_three_states). Al hacer un commit estamos guardando una versión de todo lo que se encuentre en este área.

[^3]: Aunque esta palabra no está aceptada en la RAE es un término ampliamente usado en el mundo informático ([como muchos otros](http://luauf.com/2009/10/19/el-lexico-informatico/)) por lo que yo también lo usaré para que aprendas a hablar el mismo idioma que nosotros ;P.

[^4]: Si esta orden te diese algún problema prueba con ```$ git push -u origin master``` y la próxima vez vuelve a probar sólo con ```git push```
