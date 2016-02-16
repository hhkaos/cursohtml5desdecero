# Variables

Las variables en los lenguajes de programación se asemejan a las variables utilizadas en matemáticas, se utilizan para almacenar y hacer referencia a valores, gracias a ellas podemos darle vida a la web.

Para declarar/definir una variable utilizaremos la palabra clave ```var``` seguida del nombre de la variable y un punto y coma (```;```), por ejemplo:

```js
var counter;
```

En este caso hemos declarado una variable con el nombre ```counter```pero no se le ha asignado ningún valor.

> **Consejos**:
* Aunque no es obligatorio, acaba siempre las sentencias con punto y coma (por convención).
* Escribe siempre el código en inglés.
* Añade siempre un espacio antes y otro después del signo igual (=)

El nombre de una variable debe cumplir las siguientes normas:
* Sólo puede estar formado por letras, números y los símbolos $ (dólar) y _ (guión bajo).
* El primer carácter no puede ser un número.

Por tanto, las siguientes variables estarían correctamente definidas:
```javascript
var $num1;
var _$name;
var $$$otherNumber;
var $_a__$4;
```
A pesar de ello, **es importante que elijamos nombres de variables que sean representativos del valor que almacenan**, para facilitar la comprensión del código.

## Palabras reservadas

Antes de continuar me gustaría comentarte que existen palabras reservadas que tienen un significado en el lenguaje y que no podremos usar como nombres de variables: ```abstract, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in, instanceof, int, interface, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, volatile, void, while, with```. 

## Tipos de variables
En todos los lenguajes de programación existen distintos tipos de variables, en JavaScript tendremos:

```js
// Númericas (integer & floats)
// -----------------------------
var counter = 16;   // variable tipo entero
var price = 19.99;  // variable tipo decimal
```

Que nos permiten almacenar números enteros y con decimales para realizar operaciones.

```js
// Cadenas de texto (strings)
// -----------------------------
var msg = 'Bienvenido a nuestro sitio web';
var txt = 'Una frase con "comillas dobles" dentro';
var txt = 'Una frase con \'comillas simples\' dentro';
```

Que nos permiten trabajar con cadenas de texto. Para ello tenemos con encerrar la cadena entre comillas simples o dobles, pero normalmente se recomienda hacerlo con comillas simples. En caso de querer introducir una comilla simple dentro de una cadena podemos hacerlo incluyendo el carácter contra-barra (\\) justo delante, para evitar que se cierre la cadena.

```js
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
```

Los ```Arrays```o colecciones nos permiten añadir varios valores dentro de un elemento. 


```js
// Booleanos (boolean)
// -----------------------------
var valid = false;
var prime = true;
```

Los booleanos se utilizan para almacenar valores lógicos: ```true``` o ```false```.

## Funciones

Existen múltiples funciones para trabajar con cadenas de texto, por ejemplo:

```js
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
```

Y otros métodos: ```lastIndexOf```, ```substring```, ```split```, etc.

Al igual para trabajar con Arrays:
```js
var fruits = ['banana', 'melon, 'orange'];

// Para contar
var n = fruits.length; // n = 3

//Para añadir elementos
fruits.push('apple', 'peach'); // fruits = ['banana', 'melon, 'orange', 'apple', 'peach']
```

```contact```, ```join```, ```pop```, ```shift```, Y otras como: ```unshift```, ```reverse```.


Para los números hay una función muy útil:

```js
var n = 231.8273;
n.toFixed(2); // 231.82
```