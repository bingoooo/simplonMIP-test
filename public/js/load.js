'use strict';
$(function() {
	$("#main_menu a").click(function(e){
		/*e.preventDefault();
		var fichier = $(this).attr('href');
		$("section").load("partials/" + fichier + ".html");*/
		$("#main_menu .active").removeClass("active");
		$(this).addClass("active");
	});
});