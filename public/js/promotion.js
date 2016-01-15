
$(document).ready(function(){
    $.getJSON("user.json", function(data){
        var tpl = $('#cardTemplate').html();
        var html = Mustache.render(tpl,data);
        $('#sebcards').html(html);   
    });

});



