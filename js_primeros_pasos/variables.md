# Variables

Las variables en los lenguajes de programación siguen una lógica similar a las variables utilizadas en otros ámbitos como las matemáticas. Una variable es un elemento que se emplea para almacenar y hacer referencia a otro valor. Gracias a las variables es posible crear 'programas genéricos", es decir, programas que funcionan siempre igual independientemente de los valores concretos utilizados.

```js
var numero_1 = 3
var numero_2 = 1
var resultado = numero_1 + numero_2
```

El nombre de una variable también se conoce como identificador y debe cumplir las siguientes normas:

Sólo puede estar formado por letras, números y los símbolos $ (dólar) y _ (guión bajo).
El primer carácter no puede ser un número.

Por tanto, las siguientes variables tienen nombres correctos:

var $numero1;
var _$letra;
var $$$otroNumero;
var $_a__$4;

## Tipos de variables

```js

// Númericas (integer & floats)
// -----------------------------
var iva = 16;        // variable tipo entero
var precio = 19.99;  // variable tipo decimal

// Cadenas de texto (strings)
// -----------------------------
var msg = 'Bienvenido a nuestro sitio web';
var txt = 'Una frase con "comillas dobles" dentro';
var txt = 'Una frase con \'comillas simples\' dentro';

// Arrays
// -----------------------------
// Definiendo los días de la semana en cadenas de texto
var dia1 = 'Lunes', dia2 = 'Martes', ... , 'Domingo';

// Definición equivalente en un Array
var dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// dias[0] = 'Lunes'
// dias[1] = 'Martes'
// ...
// dias[6] = 'Domingo'

// Booleanos
// -----------------------------
var clienteRegistrado = false;
var ivaIncluido = true;

```