# Variables

Las variables en los lenguajes de programación se asemejan a las variables utilizadas en matemáticas. Las variables se utilizan para almacenar y hacer referencia a valores, gracias a ellas podemos darle vida a la web.

Para declarar/definir una variable utilizaremos la palabra clave ```var``` seguida del nombre de la variable, por ejemplo:

```js
var counter;
```

En este caso no se le ha asignado ninguna variable.

> **Consejos**:
* Aunque no es obligatorio, acaba siempre las sentencias con punto y coma (por convención).
* Escribe **siempre** el código en inglés.
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
// Arrays
// -----------------------------
// Definiendo los días de la semana en cadenas de texto
var day1 = 'Lunes', day2 = 'Martes', ... , 'Domingo';

// Definición equivalente en un Array
var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// dias[0] = 'Lunes'
// dias[1] = 'Martes'
// ...
// dias[6] = 'Domingo'
```

Los ```Arrays```o colecciones nos permiten añadir varios valores dentro de un elemento. 


```js
// Booleanos
// -----------------------------
var valid = false;
var prime = true;
```

Los booleanos se utilizan para almacenar valores lógicos: ```true``` o ```false```.

```js
// Objetos
// -----------------------------
var obj = {
    name: 'Raul',
    last_name: 'Jimenez Ortega'
};

// obj.name = 'Raul'
// obj.last_name = 'Jimenez Ortega'
```