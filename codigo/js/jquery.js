'use strict';

var eventClickWithJquery = function(){
  // Recupero el elemento con id="myBtn"
  var $myBtn = $('#header');

  // Le añado un listener (o disparador), cuando se haga click
  $myBtn.click(function(){
    var classList = '';

    if($myBtn.hasClass('active')){
      // Si myBtn contiene la clase active la elimino
      $(this).removeClass('active');  
      
      // Recuperamos el atributo clase y los partimos
      classList = $('#header').attr('class').split(' ');
      console.log('classList === ', classList);
    }else{
      // En caso contrario la añado
      $(this).addClass('active');  

      // Recuperamos el atributo clase y los partimos
      classList = $('#header').attr('class').split(' ');
      console.log('classList === ', classList);
    }
  });
};


var eventMouseWithJquery = function(){
  var $header = $('#header');
  var $btns = $('.btn');

  // Cuando paso el ratón por encima del elemento
  $header.mouseover(function(){
    console.log('Estoy encima -> oculto el lazo');
    $btns.css('visibility', 'hidden')
  });

  // Cuando dejo de estar encimar del elemento con el ratón
  $header.mouseout(function(){
    console.log('Ya no estoy encima -> muestro el lazo');
    $btns.css('visibility', 'visible');
  });
};


var jqueryAjax = function(){
  var sheetID = '1wQkCTSzmV81XaPyKyioIKghqQgc_73exPmuDxI5vLAk',
      sheetTAB = 1,
      sheetURL = 'https://spreadsheets.google.com/feeds/list/' + sheetID + '/' + sheetTAB + '/public/values';

  // Pedimos un recurso por AJAX usando JSON
  $.getJSON( sheetURL + '?alt=json', function( data ) {
    var rows = data.feed.entry;

    for(var r in rows){
      console.log('row['+ r +'].gsx$nombre.$t = ', data.feed.entry[r].gsx$nombre.$t);
    }
    
    console.log('\ndata === ', data);
  });

  // Pedimos un recurso por AJAX usando JSONP (alternativa 2)
  $.ajax({
    jsonp: 'callback',
    dataType: 'jsonp',
    url: sheetURL + '?alt=json-in-script',

    success: function( response ) {
      // ...
    }
  });

  // Enlace para ver y editar la hoja
  // http://bit.ly/1R9RKHz
};

var jQuerySnippets = {
  "Recuperar un elemento y asignar un evento": eventClickWithJquery,
  "Comportamientos: mouseover y mouseout": eventMouseWithJquery,
  "Recuperar elementos por AJAX": jqueryAjax
};

