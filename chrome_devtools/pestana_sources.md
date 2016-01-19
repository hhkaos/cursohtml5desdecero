# Pestaña sources

La pestaña "**Sources**" nos muestra las fuentes de contenido que se han utilizado para construir la página. Desde esta pestaña podemos escribir y modificar ficheros que estén vinculados a nuestro disco duro, pero veremos cómo hacer esto en la siguiente lección.

Empecemos por describir los distintos paneles:

[![](../images/sources.png)](../images/sources.png)

* **Sources**: aquí encontraremos por cada dominio desde el cual nuestro navegador haya obtenido recursos<sup>1</sup> (HTML, CSS o JavaScript) una jerarquía de ficheros. Haciendo clic en cualquiera de ellos se abrirá el código en un panel derecho.
* **[Content scripts](https://developer.chrome.com/extensions/content_scripts)**: aquí se encuentran  ficheros JavaScript simples ([scripts](https://es.wikipedia.org/wiki/Script)) implementados desde las extensiones de Google Chrome.
* **[Snippets](https://developers.google.com/web/tools/chrome-devtools/debug/snippets/?hl=en)**: esta pestaña nos permite almacenar *pequeños trozos de código<sup>2</sup> reutilizables* ([snippets](https://es.wikipedia.org/wiki/Snippet)) escritos en JavaScript que podremos ejecutar o reutilizar (valga la redundancia) en cualquier página.
* **[Depurador](https://es.wikipedia.org/wiki/Depuraci%C3%B3n_de_programas)**: este panel nos ayudará a hacer un seguimiento paso a paso de la ejecución de nuestro código JavaScript para encontrar errores, veremos como usarlo en los capítulos de JavaScript.
 
Al igual que en la lección anterior, te recomiendo que guardes en un lugar seguro los [atajos de teclado del panel Sources](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts#sources-1) y de vez en cuando los revises para aumentar tu productividad.

## Panel de contenido
El panel de contenido nos ofrece un [editor de código](https://es.wikipedia.org/wiki/Editor_de_c%C3%B3digo_fuente) que dispone adicionalmente de [otros atajos de teclado](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts#within-the-code-editor).

Es importante saber que: a diferencia de los cambios del DOM, en la pestaña "**Elements**" para poder ver los cambios reflejados en la página que estamos viendo es necesario **guardar los cambios y refrescar la página**.

[![](../images/sources_2.png)](../images/sources_2.png)

En cuanto a los atajos me gustaría destacar cinco que usaremos con **mucha frecuencia**:

Windows/Linux   | Mac           | Función
----------------|---------------|---
Ctrl + F        | Cmd + F       | Buscar (y adicionalmente) texto dentro de un fichero
Ctrl + S        | Cmd + S       | Guardar un fichero
Ctrl + R, F5   | Cmd + R        | Refrescar la página
Ctrl + P        | Cmd + P       | Buscar ficheros por nombre 
Ctrl + P + :**num**| Cmd + P + :**num**| Acceder directamente a un número de línea

Por último, la opción "**Prety print**" veremos que es especialmente útil cuando estemos depurando [bibliotecas](https://es.wikipedia.org/wiki/Biblioteca_(inform%C3%A1tica) JavaScript [minificadas](https://en.wikipedia.org/wiki/Minification_(programming) (*comprimidas*), aunque de momento no te preocupes por esto.


<small>Recursos y aclaraciones:</small><br>
<small>1. Normalmente mediante peticiones HTTP aunque puede que también mediante las extensiones de Chrome.</small><br>
<small>2. En este repositorio de Github podrás encontrar una [colección de snippets](https://github.com/bgrins/devtools-snippets).</small><br>
