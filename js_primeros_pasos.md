# JS: Primeros pasos

JavaScript es un lenguaje de programación, un lenguaje con su propio vocabulario, sintaxis, semántica, expresiones, errores, etc.

JavaScript nos permite darle vida a la web, hacerla más dinámica e interactiva, y por tanto mostrar algo más que información de manera estática.

¿Qué se puede hacer con JavaScript?:
* Operaciones matemáticas, lógicas, etc.
* Controlar el flujo del programa
* Validar formularios
* Cargar contenidos mediante peticiones HTTP
* Modificar el DOM
* Acceder a información como la versión del navegador, tamaño de la ventana, sistema operativo, localización, etc.
* Etc.

## Mi primer script
Este es el script más simple que podemos hacer:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primer script</title>
</head>
 
<body>
  <script>
    window.document.writeln("Hola Mundo!");
  </script>
</body>
</html>
```

Vamos a ver cómo interpretar este script. Lo que estamos haciendo es:
1. Llamar al **método ```writeln```** que escribe en el DOM lo que recibe como parámetro, en este caso ```Hola Mundo!```
2. Este método está definido en el **```document```**<sup>1</sup> y que representa al DOM y que tiene otras funciones para acceder a elementos del DOM, etc.
3. Y el documento está definido como parte del objeto **```window```**<sup>2</sup> que representa a la ventana del navegador donde está cargado el DOM y donde se almacena mucha más información.

Por ejemplo, otras funciones comunes definidas en el objeto ```window``` son:
* ```alert()``` que abre una ventaja con un mensaje el navegador del usuario, [aquí puedes verlo en funcionamiento](https://hhkaos.gitbooks.io/cursohtml5desdecero/content/js_primeros_pasos/alert.html).
* ```console``` que implementa funciones para imprimir mensajes en la consola de error (```console.error()```), etc
 
> **Nota:** Todos los métodos y objetos incluidos en el objeto window podemos llamarlos sin necesidad de escribir ```window.```

Para evitar errores que pueden pasar desapercibidos en JavaScript (por si flexibilidad) te recomiendo que introduzcas siempre la expresión ```'use strict';```al principio de tus scripts. El modo estricto significa:
* Que hay que declarar todas las variables
* No se pueden borrar variables usando ```delete```

## Sintaxis

Algunas de las características de JavaScript son:

1. Es sensible a mayúsculas y minúsculas (o lo que es lo mismo, es *case-sensitive*), por tanto: ```var variable;``` no es equivalente a ```var Variable;``` 
2. No es obligatorio (pero sí recomendado) declarar las variables
3. No se define el *tipo* de las variables
3. No es necesario (pero sí recomendado) terminar cada expresión con el carácter de punto y coma (;)
4. Se pueden incluir comentarios en una línea usando ``` // ``` y en múltiples líneas usando ```/* */```, por ejemplo:

Existen más características, como que si la ejecución de un script dura demasiado tiempo (por un error, por ejemplo de programación) el navegador puede informarle al usuario de que hay un script que está consumiendo demasiados recursos y darle la posibilidad de detener su ejecución.


<small>Aclaraciones:</small><br>
<small>1. Más información sobre la [interfaz document](https://developer.mozilla.org/en/docs/Web/API/Document).</small><br>
<small>1. Más información sobre el [objeto window](https://developer.mozilla.org/en-US/docs/Web/API/Window).</small><br>

