'use strict';

var getAJAXRequests = (function() {
    var oldSend = XMLHttpRequest.prototype.send,
        currentRequests = [];

    XMLHttpRequest.prototype.send = function() {
        currentRequests.push(this); // add this request to the stack
        oldSend.apply(this, arguments); // run the original function

        // add an event listener to remove the object from the array
        // when the request is complete
        this.addEventListener('readystatechange', function() {
            var idx;

            if (this.readyState === XMLHttpRequest.DONE) {
                idx = currentRequests.indexOf(this);
                if (idx > -1) {
                    currentRequests.splice(idx, 1);
                }
            }
        }, false);
    };

    return function() {
        return currentRequests;
    }
}());

(function(){

  var updateURL = function(){
    var l = $('#lesson')[0].selectedIndex + 1;
    var s = $('#snippets')[0].selectedIndex + 1;
    location.search = '?lesson='+ l +'&snippet='+ s;
  };

  // Load selectors with all sample options
  var qs = function(key) {
      key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
      var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
      return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  };
  var qsLesson = qs('lesson') || 1;
  var qsSnippet = qs('snippet')|| 1;

  if(qs('min') === 'true'){
    $('.dispensable').hide();
  }

  /*

  */
  var loadSnippet = function(obj){
    var j = 0;
    for(var snippet in obj) {
      if (obj.hasOwnProperty(snippet)) {
        j++;
        $('#snippets').append('<option value="'+snippet+'">' + j + '.- '+snippet+'</option>');
      }
    }
  };

  var i = 0;
  for(var lesson in samples) {
    if (samples.hasOwnProperty(lesson)) {
      var s = samples[lesson];
      var tmp = Object.keys(s).length;
      i++;
      $('#lesson').append('<option value="'+lesson+'">' + i + '.- '+lesson+' ('+tmp+')</option>');

      if(i == qsLesson){
        loadSnippet(s);
      }
    }
  }

  var needRefresh = false;
  var maxLesson = $("#lesson option").length;
  if(qsLesson > maxLesson || qsLesson < 0){
    $("#lesson")[0].selectedIndex = 0;
    needRefresh = true;
  }
  var maxSnippet = $("#snippets option").length;
  if(qsSnippet > maxSnippet || qsSnippet < 0){
    $("#snippets")[0].selectedIndex = 0;
    needRefresh = true;
  }
  if(needRefresh){
    updateURL();
  }

  function safe(input) {
    if(input.replace){
      input = input.replace(/&/g, '&amp;');
      input = input.replace(/</g, '&lt;');
      input = input.replace(/>/g, '&gt;');
    }
    return input;
  }
  var runCode = function(str, obj){
    var params = [str, obj];

    for(var p in params){
      if(params[p] && params[p].toString){
        var tmp = params[p].toString();

        if(params[p] && tmp === '[object Object]'){
          //prettyprint
          document.getElementById('console').innerHTML += JSON.stringify(params[p], null, 2);
        }else if(typeof params[p] === 'string' || typeof params[p] === 'number'){
          document.getElementById('console').innerHTML += safe(params[p]);
        }else if (typeof params[p] === 'object' && params[p].length >= 0){
          document.getElementById('console').innerHTML += '['+ params[p]+']';
        }else{
          document.getElementById('console').innerHTML += params[p].toString();
        }
      }else if(typeof params[p] === "boolean" && params[p] === false){
        document.getElementById('console').innerHTML += 'false';
      }else if(typeof params[p] === "undefined"){
        document.getElementById('console').innerHTML += 'undefined';
      }else if(params[p] === null){
        document.getElementById('console').innerHTML += 'null';
      }

    }

    document.getElementById('console').innerHTML += '\n';
    //document.getElementById('console').innerHTML += str;


  };

  var oldLog = console.log;
  console.log = function(message,param){
    //log = message;
    runCode(message, param)
    oldLog.apply(console, arguments);
  };

  var cleanFn = function(fn){
    fn = fn.toString();
    fn = fn.substr(fn.indexOf('\n') + 1);
    fn = fn.substr(0, (fn.length - 2));
    return fn;
  };
  var refreshPreElements = function(){
    var l = $('#lesson').val();
    var s = $('#snippets').val();

    if(samples[l] && samples[l][s]){
      var txt =cleanFn(samples[l][s]);
      $('#code, #console').removeClass('prettyprinted');
      $('#code').text(txt);
      $('#console').empty();
      samples[l][s]();

      var reqs = getAJAXRequests();
      if($('#console').html() === '' && reqs.length == 0){
        $('#console').html('// El código no ha producido ningún mensaje en la consola');
      }
      //PR.prettyPrint();
      hljs.initHighlightingOnLoad();
    }else{
      location.search = '?lesson=1&snippet=1';
    }
  };

  if(qsLesson && qsSnippet){
    (document.getElementById('lesson')).selectedIndex = qsLesson-1;
    (document.getElementById('snippets')).selectedIndex = qsSnippet-1;
    refreshPreElements();
  }else{
    var qsLesson = 1
  }



  $('#lesson').change(function(){
    /*$('#snippets').empty();
    var lesson = $('#lesson').val();
    loadSnippet(samples[lesson]);
    $('#snippets').change()*/
    $('#snippets')[0].selectedIndex = 0;
    updateURL();
  });



  $('#snippets').change(function(){
    //refreshPreElements();
    updateURL();
  });



  $('#btnRun').click(function(){
    $('#console').empty();
    var l = $('#lesson').val();
    var s = $('#snippets').val();

  });

  //$('#code').text(cleanFn(samples['Objetos']['Nuevo objeto vacío']));
  //$('#snippets').change();

  $('#prev').click(function(){

    var lesson = document.getElementById('lesson');
    var snippets = document.getElementById('snippets');
    if((snippets.selectedIndex -1) >= 0){
      snippets.selectedIndex--;
      //$('#snippets').change();
      updateURL();
    }else if((lesson.selectedIndex + 1) >= 2){
      lesson.selectedIndex--;
      snippets.selectedIndex = 0;
      updateURL();
    }
  });

  $('#next').click(function(){

    var lesson = document.getElementById('lesson');
    var snippets = document.getElementById('snippets');
    if((snippets.selectedIndex + 1) < $("#snippets option").length){
      snippets.selectedIndex++;
      //$('#snippets').change();
      updateURL();

      /*var l = $('#lesson')[0].selectedIndex + 1;
      var s = $('#snippets')[0].selectedIndex + 1;
      location.search = '?lesson='+ l +'&snippet='+ s;*/
    }else if((lesson.selectedIndex + 1) < $("#lesson option").length){
      //console.log("Hay más");
      lesson.selectedIndex++;
      snippets.selectedIndex = 0;
      updateURL();
    }
  });

//(document.getElementById('snippets')).selectedIndex
}());
