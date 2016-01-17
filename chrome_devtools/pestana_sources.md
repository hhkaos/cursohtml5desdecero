# Pestaña sources

La pestaña "**Sources**" nos muestras las fuentes de contenido que se han utilizado para construir la página. Desde esta pestaña podemos escribir y modificar ficheros que estén vinculados a nuestro disco duro, pero veremos cómo hacer esto en el siguiente apartado.

Empecemos por describir los distintos paneles:

![](../images/sources.png)

* **Sources**: aquí encontraremos una jerarquía de ficheros por cada dominio desde el cual nuestro navegador haya obtenido recursos<sup>1</sup> HTML, CSS o JavaScript. Haciendo clic en cualquiera de ellos se abrirá el código en una nueva pestaña en el panel derecho.
* **[Content scripts](https://developer.chrome.com/extensions/content_scripts)**: aquí se encuentran ficheros JavaScript implementados por algunas extensiones de Google Chrome que podamos tener instaladas.
* **[Snippets](https://developers.google.com/web/tools/chrome-devtools/debug/snippets/?hl=en)**: esta pestaña nos permite crear pequeños trozos de código<sup>2</sup> JavaScript que podremos ejecutar o reutilizar en cualquier página.
* **Depurador**: este panel nos permite utilizar el depurador de código de JavaScript, veremos como usarlo en posteriores lecciones.
 
Al igual que en la lección anterior, te recomiendo que tengas a mano los [atajos de teclado del panel Sources](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts#sources-1)


## Panel de contenido

![](../images/sources_2.png)

https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts#within-the-code-editor

<small>Recursos y aclaraciones:</small><br>
<small>1. Normalmente mediante peticiones HTTP aunque puede que también mediante las extensiones de Chrome.</small><br>
<small>2. En este repositorio de Github podrás encontrar una [colección de snippers](https://github.com/bgrins/devtools-snippets).</small><br>
