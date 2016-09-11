'use strict';

var mathOperators = function(){
  // Asignación (=)
  var pi = 3.1416;
  console.log('pi \t// ', pi);            // 3.1416

  // Suma (+) y resta (-)
  console.log('2 + 3 \t// ', 2 + 3);      // 5
  console.log('2 - 3 \t// ', 2 - 3);      // -1

  // División (/) y multiplicación (*)
  console.log('4 / 2 \t// ', 4 / 2);      // 2
  console.log('4 * 2 \t// ', 4 * 2);      // 8

  // Módulo (resto de la división)
  console.log('23 % 5 \t// ', 23 % 5);    // 3

  /*
    Abreviaciones
  */
  var x = 5;
  
  // Incrementamos x en 1
  console.log(x + ' += 1 \t// ', x += 1); // 6
  
  // Reducimos x en 2
  console.log(x + ' -= 2 \t// ', x -= 2); // 4
  
  // Multiplicamos x por 5
  console.log(x + ' *= 5 \t// ', x *= 5); // 20
  
  // Dividimos x entre 4
  console.log(x + ' /= 4 // ', x /= 4); // 5

  // Resto de x entre 2
  console.log(x + ' %= 2 \t// ', x %= 2); // 1

  /*
      Incremento (++) y decremento (--)
  */
  var x = 1;
  console.log('x \t// ', x);              // 1

  // x++ imprime el valor y luego incrementa
  console.log('x++ \t// ', x++);          // 1
  console.log('x \t// ', x);              // 2
  console.log('x-- \t// ', x--);          // 2
  console.log('x \t// ', x);              // 1
  
  // El prefijo (++ / --) realiza primero la operación
  console.log('++x \t// ', ++x);          // 2
  console.log('--x \t// ', --x);          // 1
};

var logicOperators = function(){
  // Operador negación (!)
  console.log('!true \t=== ', !true); 
  console.log('!false \t=== ', !false); 

  // Operador AND (&&)
  console.log('\ntrue && true \t=== ', true && true); 
  console.log('true && false \t=== ', true && false); 
  console.log('false && true \t=== ', false && true); 
  console.log('false && false \t=== ', false && false); 

  // Operador OR (||)
  console.log('\ntrue || true \t=== ', true || true); 
  console.log('true || false \t=== ', true || false); 
  console.log('false || true \t=== ', false || true); 
  console.log('false || false \t=== ', false || false); 
};

var relationalsOperators = function(){
  // Operadores mayor y menor que (>, <)
  console.log('2 > 5 \t\t// ', 2 > 5);            // false
  console.log('2 < 5 \t\t// ', 2 < 5);            // true
   
  // Operadores mayor o igual y menor o igual que (>, <)
  console.log('5 >= 5 \t\t// ', 5 >= 5);          // true
  console.log('5 <= 5 \t\t// ', 5 <= 5);          // true
  
  // Los operadores == y != comparan los valores
  console.log('5 == \'5\' \t// ', 5 == '5');    // true
  console.log('5 == 5 \t\t// ', 5 == 5);          // true
  console.log('5 != \'5\' \t// ', 5 != '5');    // false 
  console.log('5 != 5 \t\t// ', 5 != 5);          // false


  // Los operadores === y !== comparan los valores y los tipos
  console.log('5 === \'5\' \t// ', 5 === '5');  // false
  console.log('5 === 5 \t// ', 5 === 5);        // true
  console.log('5 !== \'5\' \t// ', 5 !== '5');  // true 
  console.log('5 !== 5 \t// ', 5 !== 5);        // false

  /* 
   Los operadores relacionales también se pueden
   utilizar con variables de tipo cadena de texto:
  */
  console.log('\'hola\' == \'adios\' \t// ', 'hola' == 'adios'); 
  console.log('\'hola\' != \'hola\' \t// ', 'hola' != 'hola'); 
  console.log('\'adios\' >= \'adios\' \t// ', 'adios' >= 'adios'); 
  
  // La comparación entre dos cadenas se hace carácter a carácter
  // de izquierda a derecha, y los más pequeños con los números
  // y a continuación las primeras letas del abecedario
  console.log('\'1dia\' <= \'adios\' \t// ', '1dia' <= 'adios'); 
  console.log('\'anda ya\' <= \'adios\' \t// ', 'anda ya' <= 'adios'); 
};

var typeofOperator = function(){
  var integer = 3,
      decimal = 3.14,
      boolean = true,
      string = 'hello',
      array = [1,2,3],
      obj = {};

  /*
      Función typeof para consultar el tipo de una variable
  */
  console.log('typeof ' + integer + ' === ', typeof integer);
  console.log('typeof ' + decimal + ' === ', typeof decimal);
  console.log('typeof ' + boolean + ' === ', typeof boolean);
  console.log('typeof \'' + string + '\' === ', typeof string);
  console.log('typeof [' + array + '] === ', typeof array);
  console.log('typeof ' + obj + ' === ', typeof obj);
};

var nullAndUndefined = function(){
  /*
    Valores null y undefined:
    - undefined: significa que una variable ha sido declarada
      pero no se le ha asignado ningun valor
    - null: es un valor
  */
  console.log('null == undefined // ', null == undefined);    // true
  console.log('null === undefined // ', null === undefined);  // false
  
  var a,
      b = null;
  console.log('a // ', a);                             // undefined
  console.log('b // ', b);                             // null
  
  console.log('a == null // ', a == null);             // true
  console.log('b == undefined // ', b == undefined);   // true

  console.log('a == undefined // ', a == undefined);   // true
  console.log('b == null // ', b == null);             // true  

  console.log('a === undefined // ', a === undefined); // true
  console.log('b === null // ', b === null);           // true

  console.log('a === null // ', a === null);           // false
  console.log('b === undefined // ', b === undefined); // false

  // Por tanto, a efectos de una comparación lógica, null
  // y undefined son iguales (==) salvo en su tipo.
};


var operators = {
  "Operadores matemáticos": mathOperators,
  "Operadores lógicos": logicOperators,
  "Operadores relacionales": relationalsOperators,
  "Operador typeof": typeofOperator,
  "Valores null y undefined": nullAndUndefined
};