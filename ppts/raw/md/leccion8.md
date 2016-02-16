% JS: Primeros pasos
% Lección 8
% www.cursohtml5desdecero.com

# Conceptos básicos

## Qué podemos hacer con JavaScript

* Operaciones matemáticas, lógicas, etc.
* Controlar el flujo del programa
* Validar formularios
* Cargar contenidos mediante peticiones HTTP
* Modificar el DOM
* Acceder a información como la versión del navegador, tamaño de la ventana, sistema operativo, localización, etc.
* Etc.

## Mi primer script

~~~html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primer script</title>
</head>
 
<body>
  <script>
    document.writeln('Hola Mundo!');
  </script>
</body>
</html>
~~~

## Recomendación

Usa 'use strict';

~~~html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primer script</title>
</head>
 
<body>
  <script>
    'use strict';
    document.writeln('Hola Mundo!');
  </script>
</body>
</html>
~~~

## Sintaxis

Algunas características:

* Es sensible a mayúsculas y minúsculas (o lo que es lo mismo, es case-sensitive), por tanto: "var variable;"  no es equivalente a "var Variable;"
* No es obligatorio (pero sí recomendado) declarar las variables
* No se define el tipo de las variables
* No es necesario (pero sí recomendado) terminar cada expresión con el carácter de punto y coma (;)
* Se pueden incluir comentarios en una línea usando // y en múltiples líneas usando /* */.

# Variables

## Cómo declarar una variable

~~~html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primer script</title>
</head>
 
<body>
  <script>
    // Declaramos una variable
    var counter;

    // Declaramos dos variables: map y widget
    var map, widget;
  </script>
</body>
</html>
~~~

## Nombres de variables: Reglas

* El primer carácter **no** puede ser un número.
* Sólo puede estar formado por letras, números y los símbolos: dólar (```$```) y guión bajo (```_```).

~~~~javascript
var $num1;
var _$name;
var $$$otherNumber;
var $_a__$4;
~~~~

> **Consejo**: elige nombres de variables que sean representativos del valor que almacenan para facilitar la comprensión del código.

## Palabras reservadas

~~~~javascript
abstract, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in, instanceof, int, interface, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, volatile, void, while, with
~~~~

## Tipos de variables (1/4)

~~~~javascript
// Númericas (integer & floats)
// -----------------------------
var counter = 16;   // variable tipo entero
var price = 19.99;  // variable tipo decimal
~~~~

## Tipos de variables (2/4)

~~~~javascript
// Cadenas de texto (strings)
// -----------------------------
var msg = 'Bienvenido a nuestro sitio web';
var txt = 'Una frase con "comillas dobles" dentro';
var txt = 'Una frase con \'comillas simples\' dentro';
~~~~

## Tipos de variables (3/4)

~~~~javascript
// Colecciones (arrays)
// -----------------------------
// Definiendo los días de la semana en cadenas de texto
var day1 = 'Lunes', day2 = 'Martes', ... , 'Domingo';

// Definición equivalente en un Array
var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// days[0] = 'Lunes'
// days[1] = 'Martes'
// ...
// days[6] = 'Domingo'
~~~~

## Tipos de variables (4/4)

~~~~javascript
// Booleanos (boolean)
// -----------------------------
var valid = false;
var prime = true;
~~~~

# Métodos

## Para trabajar con Number(s)

~~~~js
var n = 231.8273;
n.toFixed(2); // 231.82
~~~~

## Para trabajar con String(s)

~~~~javascript
var hello = 'Hola ';
var world = 'Mundo!';

// Para contar el número de caracteres
console.log(hello.length); // 5

// Para concatenar cadenas
console.log(hello + ' ' + world); // Hola Mundo!
console.log(hello.concat(' ' + world));  // Hola Mundo!

// Para busacar subcadenas en una cadena
var pos = hello.indexOf('a'); // pos = 3
var pos = hello.indexOf('b'); // pos = -1
~~~~

Y otros métodos: ```lastIndexOf```, ```substring```, ```split```, etc.

## Para trabajar con Array(s)

~~~~javascript
var fruits = ['banana', 'melon, 'orange'];

// Para contar
var n = fruits.length; // n = 3

//Para añadir elementos
fruits.push('apple', 'peach'); // fruits = ['banana', 'melon, 'orange', 'apple', 'peach']
~~~~

```contact```, ```join```, ```pop```, ```shift```, Y otras como: ```unshift```, ```reverse```.

# Operadores

## Operadores matemáticos

~~~~javascript
// Asignación (=)
var pi = 3.1416;

// Incremento (++) y decremento (--)
var x = 1, y = 4;
x++;  // x = 2
y--;  // y = 3

// Suma (+) y resta (-)
var x = 2, y = 3, z;
z = x + y;  // z = 5;
z = x - y;  // z = -1;

// División (/) y multiplicación (*)
var x = 4, y = 2, z;
z = x / y;  // z = 2;
z = x * y;  // z = 8;

// Abreviaciones
var x = 5;
x += 3;  // x = x + 3 => 8
x -= 1;  // x = x - 1 => 4
x *= 2;  // x = x * 2 => 10
x /= 5;  // x = x / 5 => 1
~~~~

## Operadores lógicos (1/3)

Operador negación (!): 

~~~~javascript
var visible = true;
!visible;  // Devuelve "false" y no "true"
~~~~

x|!x
---|---
true|false
false|true

## Operadores lógicos (2/3)

Operador AND (&&): 

x|y|x && y
---|---|---
true|true|true
true|false|false
false|true|false
false|false|false

~~~~javascript
var x = true;
var y = false;
result = x && y; // result = false
 
x = true;
y = true;
result = x && y; // result = true
~~~~

## Operadores lógicos (3/3)

Operador OR (||): 

x|y|x &#124; &#124; y
---|---|---
true|true|true
true|false|true
false|true|true
false|false|false

~~~~javascript
var x = true;
var y = false;
result = x || y; // result = true
 
x = false;
y = false;
result = x || y; // result = false
~~~~

## Operadores relacionales (1/3)

Los operadores relacionales definidos por JavaScript son los mismos que los matemáticos: 

* Mayor que: ```>```
* Menor que: ```<```
* Mayor o igual: ```>=```
* Menor o igual: ```<=```
* Igual que: ```==``` 
* Distinto de: ```!=```

## Operadores relacionales (2/3)

El resultado de todos estos operadores siempre es un valor booleano.

~~~~javascript
var even = 2;
var odd = 5;
result = even > odd; // result = false
result = even < odd; // result = true
 
a = 5;
b = 5;
result = a >= b; // result = true
result = a <= b; // result = true
result = a == b; // result = true
result = a != b; // result = false
~~~~

## Operadores relacionales (3/3)

~~~~javascript
// El operador "=" asigna valores
var x = 5;
y = x = 3;  // y = 3 y x = 3
 
// El operador "==" compara variables
var x = 5;
y = x == 3; // x = 5 y y = false

/* 
   Los operadores relacionales también se pueden
   utilizar con variables de tipo cadena de texto:
*/
var txt1 = "hola";
var txt2 = "hola";
var txt3 = "adios";
 
result = txt1 == txt3; // result = false
result = txt1 != txt2; // result = false
result = txt3 >= txt3; // result = false
~~~~
