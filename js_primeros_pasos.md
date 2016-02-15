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
    document.writeln("Hola Mundo!");
  </script>
</body>
</html>
```

El método ```alert()``` es una función que abre una ventaja con un mensaje el navegador del usuario, [aquí puedes verlo en funcionamiento](https://hhkaos.gitbooks.io/cursohtml5desdecero/content/js_primeros_pasos/alert.html).


## Sintaxis

Algunas de las características de JavaScript son:

1. Es sensible a mayúsculas y minúsculas (o lo que es lo mismo, es *case-sensitive*), por tanto: ```var variable;``` no es equivalente a ```var Variable;``` 
2. No es obligatorio (pero sí recomendado) declarar las variables
3. No se define el *tipo* de las variables
3. No es necesario (pero sí recomendado) terminar cada expresión con el carácter de punto y coma (;)
4. Se pueden incluir comentarios en una línea usando ``` // ``` y en múltiples líneas usando ```/* */```, por ejemplo:

Existen más características, como que si la ejecución de un script dura demasiado tiempo (por un error, por ejemplo de programación) el navegador puede informarle al usuario de que hay un script que está consumiendo demasiados recursos y darle la posibilidad de detener su ejecución.

## Palabras reservadas

Existen algunas palabras que no podremos usar como variables, por ejemplo: ```abstract, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in, instanceof, int, interface, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, volatile, void, while, with```.



Orden en el que se ejecuta JavaScript
efectos como texto que aparece y desaparece, animaciones, acciones que se activan al pulsar botones y ventanas con mensajes de aviso al usuario.
