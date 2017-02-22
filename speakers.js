$(document).ready(function() {
    $('a').click(function () {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
        var urlJSON = 'json_files/' + $(this).attr('title') + '.json';
        request.open('GET', urlJSON);
        request.onreadystatechange = function() {
            if ((request.status === 200) &&
                (request.readyState === 4)) {
                  var data = JSON.parse(request.responseText);
                  data = data.speakers[0];
               
                $('main').html('<h1>'+data.title+'</h1>');
                $('main').append('<img src=' + data.image + '>');
                $('main').append('<h2>'+data.month+'<br>'+data.speaker+'</h2>');
                $('main').append('<p>'+data.text+'</p>');


            }
        }
        request.send();
    }); // end click

}); // end ready
