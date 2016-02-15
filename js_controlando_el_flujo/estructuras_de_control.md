# Estructuras de control

## Estructura ```if```

```js
var printMsg = true;
 
if(printMsg) {
  console.log("Hola Mundo");
}

if(printMsg == true) {
  console.log("Hola Mundo");
}
```

```js
var age = 18;
 
if(age >= 18) {
  console.log("Eres mayor de edad");
}
else {
  console.log("Todavía no eres menor de edad");
}


if(age < 12) {
  console.log("Todavía eres muy pequeño");
}
else if(age < 19) {
  console.log("Eres un adolescente");
}
else {
  console.log("Piensa en cuidarte un poco más");
}
```


### Errores típicos
```js
// Error - Se asigna el valor "false" a la variable
if(printMsg = false) {
  ...
}
```

```js
var printMsg = false;
 
if(!printMsg) {
  console.log("Es la primera vez que se muestra el mensaje");
}

var usuarioPermiteMensajes = true;
 
if(!printMsg && usuarioPermiteMensajes) {
  console.log("Es la primera vez que se muestra el mensaje");
}
```

## Estructura ```for```

```js
for(initialization; condition; increment) {
  ...
}
```

```js
var days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
 
for(var i=0; i<7; i++) {
  alert(days[i]);
}
```