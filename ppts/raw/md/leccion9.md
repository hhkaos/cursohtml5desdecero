% JS: Controlando el flujo
% Lección 9
% www.cursohtml5desdecero.com

# Conceptos básicos

## Qué podemos hacer con JavaScript

# Estructuras de control

## Estructura ```if```

~~~~javascript
var printMsg = true;
 
if(printMsg) {
  console.log('Hola Mundo');
}

if(printMsg == true) {
  console.log('Hola Mundo');
}
~~~~

Un ejemplo usando un comparador lógico:

~~~~javascript
var printMsg = false;
 
if(!printMsg) {
  console.log('Me imprimo');
}

var isFirstMsg = true;
 
if(!printMsg && isFirstMsg) {
  console.log('Mi primer mensaje');
}
~~~~

Un **error típico** es introducir una asignación (```=```) en lugar de una comparación (```==```)
~~~~javascript
// Error - Se asigna el valor 'false' a la variable
if(printMsg = false) {
  ...
}
~~~~## Estructura ```if``` ... ```else```


~~~~javascript
var age = 18;
 
if(age >= 18) {
  console.log('Eres mayor de edad');
}
else {
  console.log('Eres menor de edad');
}
~~~~

## Estructura ```if``` ... ```else if``` ... ```else```

~~~~javascript
if(age < 18) {
  console.log('Eres menor de edad');
}
else if(age < 30) {
  console.log('Aún eres joven');
}
else {
  console.log('La sabiduría la da la experiencia');
}
~~~~

## Estructura ```for```

~~~~javascript
for(initialization; condition; increment) {
  ...
}
~~~~

~~~~javascript
var i;
var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
 
for(i = 0; i < days.length; i++) {
  alert(days[i]);
}
~~~~