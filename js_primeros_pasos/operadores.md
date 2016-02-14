# Operadores
Los operadores nos vas a servir para modificar y comprobar el valor de las variables, vamos a ver diferentes tipos de operadores:
* Matemáticos
* Lógicos
* Relacionales

## Operadores matemáticos
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
var x = 5;
x += 3;  // x = x + 3 => 8
x -= 1;  // x = x - 1 => 4
x *= 2;  // x = x * 2 => 10
x /= 5;  // x = x / 5 => 1

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

x|!x
---|---
true|false
false|true

**Operación AND (&&)**

La operación lógica AND obtiene su resultado combinando dos valores booleanos. El operador se indica mediante el símbolo && y su resultado solamente es ```true``` si los dos operandos son ```true```:

x|y|x && y
---|---|---
true|true|true
true|false|false
false|true|false
false|false|false

```js
var x = true;
var y = false;
result = x && y; // result = false
 
x = true;
y = true;
result = x && y; // result = true
```

**Operación OR (||)**

La operación lógica OR también combina dos valores booleanos. El operador se indica mediante el símbolo || y su resultado es ```true``` si alguno de los dos operandos es ```true```:


x|y|x &#124; &#124; y
---|---|---
true|true|true
true|false|true
false|true|true
false|false|false

```js
var x = true;
var y = false;
result = x || y; // result = true
 
x = false;
y = false;
result = x || y; // result = false
```

## Operadores relacionales

Los operadores relacionales definidos por JavaScript son los mismos que los matemáticos: 
* Mayor que: ```>```
* Menor que: ```<```
* Mayor o igual: ```>=```
* Menor o igual: ```<=```
* Igual que: ```==``` 
* Distinto de: ```!=```
 
Aunque también existe el operador ```===``` que quiere decir **exáctamente igual**, teniendo en cuenta no sólo el valor de la variable sino también el tipo, por ejemplo:
```javascript
0 == ""         // true
0 == false      // true
0 === false     // false
2 == '2'        // true
2 === '2'       // false
```

Vamos a ver en la siguiente lección que estos operadores son imprescindibles a la hora de controlar el flujo de un programa.

El resultado de todos estos operadores siempre es un valor booleano:

```javascript
var even = 2;
var odd = 5;
result = even > odd; // result = false
result = even < odd; // result = true
 
even = 5;
odd = 5;
result = even >= odd; // result = true
result = even <= odd; // result = true
result = even == odd; // result = true
result = even != odd; // result = false
```

Se debe tener especial cuidado con el operador de igualdad (==), ya que es el origen de la mayoría de errores de programación, incluso para los usuarios que ya tienen cierta experiencia desarrollando scripts. El operador == se utiliza para comparar el valor de dos variables, por lo que es muy diferente del operador =, que se utiliza para asignar un valor a una variable:

```javascript
// El operador "=" asigna valores
var x = 5;
y = x = 3;  // y = 3 y x = 3
 
// El operador "==" compara variables
var x = 5;
y = x == 3; // x = 5 y y = false
Los operadores relacionales también se pueden utilizar con variables de tipo cadena de texto:

var txt1 = "hola";
var txt2 = "hola";
var txt3 = "adios";
 
result = txt1 == txt3; // result = false
result = txt1 != txt2; // result = false
result = txt3 >= txt3; // result = false
```

Cuando se utilizan cadenas de texto, los operadores "mayor que" (>) y "menor que" (<) siguen un razonamiento no intuitivo: se compara letra a letra comenzando desde la izquierda hasta que se encuentre una diferencia entre las dos cadenas de texto. Para determinar si una letra es mayor o menor que otra, las mayúsculas se consideran menores que las minúsculas y las primeras letras del alfabeto son menores que las últimas (a es menor que b, b es menor que c, A es menor que a, etc.)