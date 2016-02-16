# Estructuras de control

## Estructura ```if```

```js
var printMsg = true;
 
if(printMsg) {
  console.log('Hola Mundo');
}

if(printMsg == true) {
  console.log('Hola Mundo');
}
```

Un ejemplo usando un comparador lógico:

```js
var printMsg = false;
 
if(!printMsg) {
  console.log('Me imprimo');
}

var isFirstMsg = true;
 
if(!printMsg && isFirstMsg) {
  console.log('Mi primer mensaje');
}
```

Un **error típico** es introducir una asignación (```=```) en lugar de una comparación (```==```)
```js
// Error - Se asigna el valor 'false' a la variable
if(printMsg = false) {
  ...
}
```
## Estructura ```if``` ... ```else```

```js
var age = 18;
 
if(age >= 18) {
  console.log('Eres mayor de edad');
}
else {
  console.log('Eres menor de edad');
}
```

## Estructura ```if``` ... ```else if``` ... ```else```

```js
if(age < 18) {
  console.log('Eres menor de edad');
}
else if(age < 30) {
  console.log('Aún eres joven');
}
else {
  console.log('La sabiduría la da la experiencia');
}
```

## Estructura ```for```

```js
for(initialization; condition; increment) {
  ...
}
```

```js
var i;
var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
 
for(i = 0; i < days.length; i++) {
  alert(days[i]);
}
```