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

Orden en el que se ejecuta JavaScript
efectos como texto que aparece y desaparece, animaciones, acciones que se activan al pulsar botones y ventanas con mensajes de aviso al usuario.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primer script</title>

  <script>
    alert("Hola Mundo!");
  </script>
</head>
 
<body>
  <p>Mi primer script</p>
</body>
</html>
```

El método ```alert()``` es una función que abre una ventaja con un mensaje el navegador del usuario. Aquí puedes ver el ejemplo.

## Palabras reservadas

break, case, catch, continue, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with.

## Sintaxis

1. Se distinguen las mayúsculas y minúsculas: 
2. No se define el tipo de las variables
3. No es necesario terminar cada sentencia con el carácter de punto y coma (;)
4. Se pueden incluir comentarios en una línea usando ```js // ``` y multilínea usando ```/* */``` ejemplo:

si la ejecución de un script dura demasiado tiempo (por ejemplo por un error de programación) el navegador informa al usuario de que un script está consumiendo demasiados recursos y le da la posibilidad de detener su ejecución.
