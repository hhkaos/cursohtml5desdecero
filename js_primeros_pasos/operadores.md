# Operadores
Los operadores nos vas a servir para modificar y comprobar el valor de las variables, vamos a ver diferentes tipos de operadores:
* Matemáticos
* Lógicos
* Relacionales

## Matemáticas
Los operadores matemáticos nos van a permitir realizar operaciones matemáticas sobre las variables, veamos algunos ejemplos:

```js
// Asignación (=)
var pi = 3.1416;
```
Nos permite darle un valor a una variable.
```js
// Incremento (++) y decremento (--)
var x = 1, y = 4;
x++; // x = 2
y--; // y = 3
```
Nos permite incrementar o decrementar en una unidad el valor de una variable.
```js
// Suma (+) y resta (-)
var x = 2, y = 3, z;
z = x + y // z = 5;
z = x - y // z = -1;
```

```js
// División (/) y multiplicación (*)
var x = 4, y = 2, z;
z = x / y // z = 2;
z = x * y // z = 8;
```
```js
// Abreviaciones
var numero1 = 5;
numero1 += 3;  // numero1 = numero1 + 3 = 8
numero1 -= 1;  // numero1 = numero1 - 1 = 4
numero1 *= 2;   // numero1 = numero1 * 2 = 10
numero1 /= 5;   // numero1 = numero1 / 5 = 1

```


// Módulo (%)
numero1 %= 4;   // numero1 = numero1 % 4 = 1

## Operadores lógicos

Los operadores lógicos son imprescindibles para realizar aplicaciones complejas, ya que se utilizan para tomar decisiones sobre las instrucciones que debería ejecutar el programa en función de ciertas condiciones.

El resultado de cualquier operación que utilice operadores lógicos siempre es un valor lógico o booleano.

```js
var visible = true;
!visible;  // Muestra "false" y no "true"
```

0 == "" == false

variable|!variable
---|---
true|false
false|true

**Operación AND (&&)**

La operación lógica AND obtiene su resultado combinando dos valores booleanos. El operador se indica mediante el símbolo && y su resultado solamente es true si los dos operandos son true:

variable1|variable2|variable1 && variable2
---|---|---
true|true|true
true|false|false
false|true|false
false|false|false

```js
var verdadero = true;
var falso = false;
resultado = verdadero && falso; // resultado = false
 
x = true;
y = true;
resultado = x && y; // resultado = true
```

**Operación OR (||)**

La operación lógica OR también combina dos valores booleanos. El operador se indica mediante el símbolo || y su resultado es true si alguno de los dos operandos es true:


variable1|variable2|variable1 &#124; &#124; variable2
---|---|---
true|true|true
true|false|true
false|true|true
false|false|false

```js
var verdadero = true;
var false = false;
resultado = verdadero || false; // resultado = true
 
x = false;
y = false;
resultado = x || y; // resultado = false
```

## Operaciones relacionales

Los operadores relacionales definidos por JavaScript son idénticos a los que definen las matemáticas: mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual que (==) y distinto de (!=).

Los operadores que relacionan variables son imprescindibles para realizar cualquier aplicación compleja, como se verá en el siguiente capítulo de programación avanzada. El resultado de todos estos operadores siempre es un valor booleano:

```javascript
var numero1 = 3;
var numero2 = 5;
resultado = numero1 > numero2; // resultado = false
resultado = numero1 < numero2; // resultado = true
 
numero1 = 5;
numero2 = 5;
resultado = numero1 >= numero2; // resultado = true
resultado = numero1 <= numero2; // resultado = true
resultado = numero1 == numero2; // resultado = true
resultado = numero1 != numero2; // resultado = false
```

Se debe tener especial cuidado con el operador de igualdad (==), ya que es el origen de la mayoría de errores de programación, incluso para los usuarios que ya tienen cierta experiencia desarrollando scripts. El operador == se utiliza para comparar el valor de dos variables, por lo que es muy diferente del operador =, que se utiliza para asignar un valor a una variable:

```javascript
// El operador "=" asigna valores
var numero1 = 5;
resultado = numero1 = 3;  // numero1 = 3 y resultado = 3
 
// El operador "==" compara variables
var numero1 = 5;
resultado = numero1 == 3; // numero1 = 5 y resultado = false
Los operadores relacionales también se pueden utilizar con variables de tipo cadena de texto:

var texto1 = "hola";
var texto2 = "hola";
var texto3 = "adios";
 
resultado = texto1 == texto3; // resultado = false
resultado = texto1 != texto2; // resultado = false
resultado = texto3 >= texto2; // resultado = false
```

Cuando se utilizan cadenas de texto, los operadores "mayor que" (>) y "menor que" (<) siguen un razonamiento no intuitivo: se compara letra a letra comenzando desde la izquierda hasta que se encuentre una diferencia entre las dos cadenas de texto. Para determinar si una letra es mayor o menor que otra, las mayúsculas se consideran menores que las minúsculas y las primeras letras del alfabeto son menores que las últimas (a es menor que b, b es menor que c, A es menor que a, etc.)