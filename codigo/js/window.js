'use strict';

var accessDOMElements = function(){
  // Acceder a un elemento del DOM usando su ID
  var header = document.getElementById('header');
  console.log('header = ', header);

  // Acceder a un elemento usando la clase del elemento
  var backClassElement = document.getElementsByClassName('btn');
  console.log('backClassElement = ', backClassElement);

  // Acceder a un elemento usando el nombre del elemento
  var pElements = document.getElementsByTagName('p');
  console.log('pElements = ', pElements);

  // Accedo a los h1 que sean hijos de header
  var h1Children = document.querySelectorAll('#header h1');
  console.log('h1Children = ', h1Children);
};

var accessModifyAttrs = function(){
  // Acceder a un atributo
  var codeElement = document.getElementsByClassName('container');
  var getAttr = codeElement[0].getAttribute('class');
  console.log('codeElement[0].getAttribute(\'class\') = ', getAttr);

  // Modificar un atributo de un elemento
  var header = document.getElementById('header');
  header.style = 'color: red';
  console.log('header = ', header.getAttribute('style'));

  // Modificar el contenido de un elemento
  header.innerHTML = '<h1 class="text-center">SNIPPETS</h1>';
  console.log('header.innerHTML = ', header.innerHTML);

  // Creamos un elemento del DOM
  var paragraph = document.createElement('p');
  console.log('new paragraph = ', paragraph);

  // Eliminamos el pie de página (id="footer")
  var footer = document.getElementById('footer');
  console.log('before removeChild = ', footer);
  footer.parentNode.removeChild(footer);
  var footer = document.getElementById('footer');
  console.log('after removeChild = ', footer);
};

var windowObj = function(){
  /*
    El objeto window en JavaScript es donde se almacena todo:
    'document', las variables globales (con ámbito global), etc.

    Se pueden acceder a las propiedades de windows sin necesidad
    de poner el nombre delante, por ejemplo:
    window.document === document
  */
  console.log('window = ', window);
  
  // Incluye funciones para imprimir en mensaje en la consola
  console.log('window.console = ', window.console);
  
  // Incluye funciones para gestionar el DOM, URL, etc.
  console.log('window.document = ', window.document);
  
  // Alert es una función que permite abrir una ventana emergente
  console.log('window.alert = ', window.alert);

  // Nos permite construir objetos para hacer peticiones AJAX
  console.log('window.XMLHttpRequest = ', window.XMLHttpRequest);

  // Ejecutamos setInterval cada 3 segundos
  setInterval(function(){ console.log('','setInterval'); }, 3000);

  // Ejecutamos setInterval cada 5 segundos
  setTimeout(function(){ console.log('','setTimeout'); }, 5000);
}

var loadUsingAjax = function(){

  var load = function(url, callback) {
    var xhr;

    if(typeof XMLHttpRequest !== 'undefined'){
      xhr = new XMLHttpRequest();
    }else {
      var versions = ['MSXML2.XmlHttp.5.0', 
      'MSXML2.XmlHttp.4.0',
      'MSXML2.XmlHttp.3.0', 
      'MSXML2.XmlHttp.2.0',
      'Microsoft.XmlHttp'];

      for(var i = 0, len = versions.length; i < len; i++) {
        try {
          xhr = new ActiveXObject(versions[i]);
          break;
        }
        catch(e){}
      } // end for
     }

     var ensureReadiness = function() {
      if(xhr.readyState < 4) {
        return;
      }

      if(xhr.status !== 200) {
        return;
      }

      // all is well  
      if(xhr.readyState === 4) {
        callback(xhr);
      }           
    };

    xhr.onreadystatechange = ensureReadiness;

    xhr.open('GET', url, true);
    xhr.send('');
  };

  var sheetID = '1wQkCTSzmV81XaPyKyioIKghqQgc_73exPmuDxI5vLAk',
      sheetTAB = 1,
      sheetURL = 'https://spreadsheets.google.com/feeds/list/' + sheetID + '/' + sheetTAB + '/public/values';

  // Pedimos un recurso a Google por AJAX en formato JSON
  load(sheetURL + '?alt=json', function( xhr ) {
    var response = JSON.parse(xhr.responseText);
    console.log('response === ', response);
  });
};

var windowObjSnippets = {
  "Acceder a los elementos del DOM": accessDOMElements,
  "Acceder y modificar atributos de elementos del DOM": accessModifyAttrs,
  "Objeto window": windowObj,
  "Carga usando AJAX": loadUsingAjax
};