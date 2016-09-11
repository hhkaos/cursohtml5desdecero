'use strict';

var addEventListenerClick = function(){
  // Recupero el elemento con id="header" (la cabecera = Snippets)
  var header = document.getElementById('header');

  // Le añado un listener (o disparador), cuando se haga clic
  header.addEventListener('click', function(){
    
    if(header.classList.contains('active')){
      // Si header contiene la clase 'active' la elimino
      header.classList.remove('active');  
      console.log('header.classList === ', header.classList);
    }else{
      // En caso contrario la añado
      header.classList.add('active');  
      console.log('header.classList === ', header.classList);
    }
  });
};

var addEventListenerMouse = function(){
  var header = document.getElementById('header');

  // Selecciono los elementos que contienen la clase btn
  var btns = document.querySelectorAll('.btn');

  // Cuando paso el ratón por encima de la cabecera
  header.addEventListener('mouseover', function(){
    console.log('Estoy encima -> oculto los botones');
    
    // Recorro todos los botones y los oculto
    for(var b = 0; b < btns.length; b++){
        btns[b].style.visibility = 'hidden';
    }
  });

  // Cuando dejo de estar encimar del elemento con el ratón
  header.addEventListener('mouseout', function(){
    console.log('Ya no estoy encima -> muestro los botones');

    // Recorro todos los botones y los muestro
    for(var b = 0; b < btns.length; b++){
        btns[b].style.visibility = 'visible';
    }
  });

  /*
    Existen muchos otros eventos; lista completa:
    https://developer.mozilla.org/en-US/docs/Web/Events
  */
};

var events = {
  "Asociar un comportamiento al hacer clic en un elemento": addEventListenerClick,
  "Asociar un comportamiento al pasar el ratón por encima": addEventListenerMouse
};