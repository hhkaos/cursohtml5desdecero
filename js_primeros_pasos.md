# JS: Primeros pasos

JavaScript (JS) es un lenguaje de programación, un lenguaje con su propio vocabulario, sintaxis, semántica, expresiones, errores, etc.

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
    document.writeln("Hola Mundo!");
  </script>
</body>
</html>
```

Vamos a ver cómo interpretar este script. Lo que estamos haciendo es:
1. Llamar al **método ```writeln```**<sup>1</sup> que escribe en el DOM lo que recibe como parámetro seguido de un salto de línea, en este caso ```Hola Mundo!``` seguido de un salto de línea (```\n```).
2. Este método está definido en el **```document```**<sup>2</sup> y que representa al DOM y que tiene otras funciones para acceder a elementos del DOM, etc.<sup>3</sup>

Para evitar errores que pueden pasar desapercibidos en JavaScript (por si flexibilidad) te recomiendo que introduzcas siempre la expresión ```'use strict';```al principio de tus scripts. El modo estricto significa entre otras cosas que hay que declarar todas las variables y objetos<sup>4</sup>.

Así quedaría:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primer script</title>
</head>
 
<body>
  <script>
    'use strict';
    document.writeln("Hola Mundo!");
  </script>
</body>
</html>
```

## Sintaxis

Algunas de las características de JavaScript son:

1. Es sensible a mayúsculas y minúsculas (o lo que es lo mismo, es *case-sensitive*), por tanto: 
```js
var variable;
``` 
no es equivalente a 
```js
var Variable;
``` 
2. No es obligatorio (pero sí recomendado) declarar las variables
3. No se define el *tipo* de las variables
4. No es necesario (pero sí recomendado) terminar cada expresión con el carácter de punto y coma (;)
5. Se pueden incluir comentarios en una línea usando ``` // ``` y en múltiples líneas usando ```/* */```.

<hr>

<small>Aclaraciones:</small><br>
<small>1. Más información sobre el [método writeln](https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln)</small><br>
<small>2. Más información sobre la [interfaz document](https://developer.mozilla.org/en/docs/Web/API/Document).</small><br>
<small>3. Y el documento está definido como parte del objeto **```window```** que representa a la ventana del navegador donde está cargado el DOM y donde se almacena mucha más información. Añadir la palabra ```window```es opcional. <br><br>

</small><br>

* Y [otras tantas restricciones](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode) más.

