'use strict';

var functionDefine = function(){
  /*
    Forma 1)
    Definir la función en tiempo de análisis. Para ello no la 
    asignamos a una variable. Esto nos permite llamar a la 
    función antes de haberla definido
  */
  console.log('suma(3, 4) = ', suma(3, 4));  

  function suma(a, b){
    return a + b;
  }

  /*
    Forma 2)
    Definir la función en tiempo de ejecución nos obliga
    a definir una función antes de ejecutarla
  */
  try{
    // Fallará ya que no está aún definida
    console.log('resta(5, 3) = ', resta(5, 3));  
  }catch(e){
    console.log('Error: ', e);  
  }
  var resta = function (a, b){
    return a - b;
  }
  
  console.log('resta(5, 3) = ', resta(5, 3));  
};

var functionInObj = function(){
  // Definir una función en un objeto 
  // y asignarle el valor "this"
  var map = { 
    "basemap": "topo",
    "center": [-3, 40]
  };
  console.log('map ===', map);

  map.setZoom = function(level){
    this.zoom = level; // Equivaldría a map.zoom = level
    console.log('this = ', this); // this === map
  };

  // El código interior equivale a este:
  var map = { 
    "basemap": "topo",
    "center": [-3, 40],
    "setZoom": function(level){
      this.zoom = level;
      // El objeto se imprime a si mismo cuando 
      // se llame a la función obj.setZoom(level)
      console.log('this = ', this);
    }
  };

  map.setZoom(5);
};


var anonymFunction = function(){
  var map = { 
    "basemap": "topo",
    "center": [-3, 40]
  };

  // Función anónima
  (function(){
    // El ámbito (scope) es distinto, por tanto si re-declaramos
    // map, los cambios no tendrán efectos en la variable map
    // del padre
    var map = 'Nuevo valor'; // Local
    console.log('map (hijo) === ', map);
  }());

  console.log('map (padre) === ', map);
};
  
var nestedFunctions = function(){
  // Definimos c en el ámbito global
  window.c = '10';

  var parentFunction = function(a, b){
    
    // Declaramos C en el ámbito local
    var c = a + b;
    
    console.log('a en parentFunction === ', a);
    console.log('b en parentFunction === ', b);
    console.log('c en parentFunction === ', c);
    console.log('window.c en parentFunction === ', window.c);
    
    var childFunction = function(c){  
      // Al declarar en el ámbito de esta función
      // su valor no se verá afectado fuera
      var a = 4;

      console.log('\na en childFunction === ', a);
      console.log('b en childFunction === ', b);
      console.log('c en childFunction === ', c);
      console.log('window.c en childFunction === ', window.c);

      // Machacamos su valor en parentFunction al no estar 
      // declarada en este ámbito
      b = 5;
    };

    childFunction(c);

    console.log('\na en parentFunction (2ª vez) === ', a);
    console.log('b en parentFunction (2ª vez) === ', b);
    console.log('c en parentFunction (2ª vez) === ', c);
    
  };

  parentFunction(1, 2);
  
};


var functions = {
  "Cómo definir una función": functionDefine,
  "Asignar una función en un objeto y usar this": functionInObj,
  'Ámbitos de una variable': nestedFunctions,
  "Declarar una función anónima": anonymFunction
};