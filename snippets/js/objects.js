// Create a new empty object
var newEmptyObject = function(){
  var obj = {};
  console.log('obj === ', obj);
};

var nonEmptyObject = function(){
  // Definimos un objeto con una propiedad 'name'
  // establecida con el valor 'Luis'
  var luis = {
    "name": "Luis"
  };
  
  console.log('luis === ', luis);

  // Hay dos formas de acceder a una propiedad
  console.log('luis.name === ', luis.name);  
  console.log('luis[\'name\'] === ', luis['name']);
};

var addObjProp = function(){
  var luis = {};
  
  // Hay dos formas
  luis['last-name'] = 'Trueba';
  luis.city = 'Granada';
  
  console.log('luis === ', luis);
};

var complexObject = function(){
  var luis = { "name": "Luis González" },
      carlos = { "name": "Carlos Mota" };
      
  var me = {
    "name": "Raúl",
    "age": 31,
    "friends": [luis, carlos],
    "address": {
      "street": "Avenida América",
      "number": 45,
      "city": "Madrid",
      "postal-code": 28002
    }
  };

  console.log('me === ', me);
  console.log('me.name === ', me.name);
  console.log('me.friends[0] === ', me.friends[0]);
  console.log('me.friends[0].name === ', me.friends[0].name);
  console.log('me.address.street === ', me.address.street);
  console.log('me.address[\'postal-code\'] === ', me.address['postal-code']);
};

var newObjContructor = function(){
  // Creamos una función EsriMap que se asigna propiedades
  var EsriMap = function(obj){
    
    if(obj && obj.basemap){
      // Si recibo un objeto y tiene una propiedad basemap
      this.basemap = obj.basemap;
    }else{
      // Si no recibo un objeto o no tiene una propiedad basemap
      this.basemap = 'satellite';
    }

    // Establezco una propiedad setCenter que contiene una función
    // y que cambia una propiedad de la función
    this.setZoom = function(val){
      this.zoom = val;
    };
  };

  // Con new creamos una variable de tipo myMap que 
  // se comporta como un objeto y sus propiedades.
  var topoMap = new EsriMap({
    'basemap': 'topo'
  });
  var defaultMap = new EsriMap();

  console.log('topoMap = ', topoMap);
  console.log('defaultMap = ', defaultMap);
   
  console.log ('\n----defaultMap.setZoom(12);----','\n'); 
  defaultMap.setZoom(12);
  console.log('topoMap = ', topoMap);
  console.log('defaultMap = ', defaultMap);
};

/*var inheritance = function(){
  'use strict';
  class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
      this.getHeight = function(){
        return height;
      }
    }
  }

  class Square extends Polygon {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
    get area() {
      return this.height * this.width;
    }
    set sideLength(newLength) {
      this.height = newLength;
      this.width = newLength;
    }
  }

  var square = new Square(2);
  console.log('square === ', square);
  console.log('square.hasOwnProperty(\'getHeight\') === ', square.hasOwnProperty('getHeight'));
};*/

var forInObj = function(){
  var luis = { "name": "Luis González" },
      carlos = { "name": "Carlos Mota" };
      
  var me = {
    "name": "Raúl",
    "age": 31,
    "friends": [luis, carlos],
    "address": {
      "street": "Avenida América",
      "number": 45,
      "city": "Madrid",
      "postal-code": 28002
    }
  };

  for(var property in me) {    
    // Este if evita que el bucle acceda a variables del navegador
    if (me.hasOwnProperty(property)) {
        console.log('me[' + property + '] = ', me[property]);
        // me.property se puede usar ya que en lugar de
        // tomar el valor de la variable, JavaScript
        // buscaría una propiedad llamada 'property'
    }else{
      console.log('Esta propiedad no es mia, me[' + property + '] = ', me[property]);
    }
  }

  /*
    hasOwnProperty es una función que nos permite saber si la 
    propiedad está definida en el objeto o está heradada,
    por ejemplo:
  */
  console.log('me.friends.length // ', me.friends.length);
  console.log('me.friends.hasOwnProperty(\'length\') //', me.friends.hasOwnProperty('length'));

  console.log('me.friends.push(luis) // ', me.friends.push(luis));
  console.log('me.friends.hasOwnProperty(\'push\') //', me.friends.hasOwnProperty('push'));

  // En este caso la propiedad push viene heredada de 
  // Array.prototype.push
}

var objects = {
  "Nuevo objeto vacío": newEmptyObject,
  "Nuevo objeto con propiedades": nonEmptyObject,
  "Añadir una propiedad": addObjProp,
  "Crear un objeto más complejo": complexObject,
  "Operador new para construir objetos": newObjContructor,
  // TODO: "Herencia de objetos": inheritance,
  "Recorrer objeto con un bucle for": forInObj
  
};