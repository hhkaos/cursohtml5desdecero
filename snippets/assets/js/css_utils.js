'use strict';

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
      var s = samples[lesson].snippets;
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
  }else{
    $('#lesson')[0].selectedIndex = qsLesson - 1;
    $('#snippets')[0].selectedIndex = qsSnippet - 1;
  }

  var i = document.getElementById("lesson").selectedIndex;
  var j = document.getElementById("snippets").selectedIndex;
  var l = $('#lesson').val();
  var s = $('#snippets').val();

  var values = JSON.parse($("#codepen [name='data']").val());
  values.title = 'Lección '+ i + ' - Snippet: '+ j+': ' +samples[l].snippets[s];
  $("#codepen [name='data']").val(JSON.stringify(values));



  var htmlFile = samples[l].folder +'/'+ samples[l].snippets[s] + '.html';
  $.get( htmlFile, function( data ) {
    var body = data.replace(/^[\S\s]*<body[^>]*?>/i, "")
                    .replace(/<\/body[\S\s]*$/i, "");
    body = body.trim()
    $( ".html" ).text( '  ' + body );

    var values = JSON.parse($("#codepen [name='data']").val());
    values.html = body;
    $("#codepen [name='data']").val(JSON.stringify(values));

    $('#code, #console').removeClass('prettyprinted');
    PR.prettyPrint();
  });


  var fileName = samples[l].snippets[s] + '.css';
  var url = samples[l].folder +'/'+ fileName;
  $("#css-file").attr("href",url);
  $("#css-file").text(fileName);

  console.log("url=",url)
  $.get( url, function( data ) {
    data = data.trim()
    $( ".css" ).text( data );
    var values = JSON.parse($("#codepen [name='data']").val());
    values.css = data;
    $("#codepen [name='data']").val(JSON.stringify(values));

    $('#code, #console').removeClass('prettyprinted');
    PR.prettyPrint();
    hljs.initHighlightingOnLoad();
    setTimeout(function(){
      hljs.initLineNumbersOnLoad()
    }, 500);
  });

  //{"title": "New Pen!", "html": "<div>Hello, World!</div>"}

  var iframe = $('<iframe></iframe>');
  iframe.attr('src', htmlFile);
  $('#preview').append(iframe);


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


}());
