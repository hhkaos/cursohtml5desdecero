'use strict';

var declareVariables = function(){
  // Declaramos una variable
  var counter;

  // Declaramos dos variables: map y widget
  var map, widget;

  // El primer carácter no puede ser un número.
  // Sólo puede estar formado por letras, números y los símbolos: 
  // dólar ($) y guión bajo (_).
  var $num1;
  var _$name;
  var $$$otherNumber;
  var $_a__$4;

  /*
    Palabras reservadas:
    abstract, boolean, break, byte, case, catch, char, class, 
    const, continue, debugger, default, delete, do, double, else, 
    enum, export, extends, false, final, finally, float, for, 
    function, goto, if, implements, import, in, instanceof, int, 
    interface, long, native, new, null, package, private, 
    protected, public, return, short, static, super, switch, 
    synchronized, this, throw, throws, transient, true, try, 
    typeof, var, volatile, void, while, with
  */
};

var variableTypes = function(){
  // Numéricas (integer & floats)
  // -----------------------------
  var counter = 16;   // variable tipo entero
  var price = 19.99;  // variable tipo decimal

  // Cadenas de texto (strings)
  // -----------------------------
  var featureService = 'http://services3.arcgis.com/arcgis/rest/services/Gasolinerasshape';
  var basemaps = 'streets';
  var complexString = 'Una frase con \'comillas simples\' dentro';

  // Colecciones - Array(s)
  // -----------------------------
  // Definiendo los días de la semana en cadenas de texto
  var day1 = 'Lunes', day2 = 'Martes', /*..., */ day5 = 'Viernes';

  // Definición equivalente en un Array
  var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  // El elemento entre corchetes indica el índice, y en
  // informática el primer elemento suele ser 0.
  console.log('days[0] // ', days[0]);
  console.log('days[1] // ', days[1]);
  console.log('days[4] // ', days[4]);

  // Booleanos (boolean): valores lógicos
  // -----------------------------
  var valid = false;
  var prime = true;
};

var methodsTypes = function(){
  var n = 231.8273;
  var hello = 'Hola ';
  var world = 'Mundo!';
  var fruits = ['banana', 'melon', 'orange'];

  // Para trabajar con Number(s)
  console.log('n.toFixed(2) \t\t// ', n.toFixed(2));  // 231.82

  // Para contar el número de caracteres
  console.log('hello.length \t\t// ', hello.length);  // 5    

  // Para concatenar cadenas
  console.log('hello + world \t\t// ', hello + world); // 'Hola Mundo!'
  console.log('hello.concat(world) \t// ', hello.concat(world));  // 'Hola Mundo!'

  // Para buscar subcadenas en una cadena
  console.log('hello.indexOf(\'a\') \t// ', hello.indexOf('a')); // 3
  console.log('hello.indexOf(\'b\') \t// ', hello.indexOf('b')); // -1

  console.log('fruits \t\t\t// ', fruits);  // [banana,melon,orange]

  // Para contar número de elementos en un Array
  console.log('fruits.length \t\t// ', fruits.length);  // 3

  // Para añadir elementos
  fruits.push('apple', 'peach');
  console.log('fruits (after push) \t// ', fruits); // [banana,melon,orange,apple,peach]
  console.log('fruits.length \t\t// ', fruits.length);  // 5
};

var variables = {
  "Declarar variables": declareVariables,
  "Tipos de variables": variableTypes,
  "Métodos de algunos tipos": methodsTypes,
}; 