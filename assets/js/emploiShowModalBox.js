'use strict'
$(document).ready(function(){

	$('body').on('click','.ui.button',function(){
		$('.ui.modal').show();

	});

	$('body').on('click','.close.icon', function(){
		$('.ui.modal').hide();
	});

	$('body').on('click','.ui.button.fermeture', function(){
		$('.ui.modal').hide();
	});

	$('body').on('click','.ui.green.button.envoi', function(){
		$('.ui.modal').hide();
	});


	/*$('.field').on('submit',function(){
			event.preventDefault();
			var toAdd = $('.text_annonces').val();
			$('.annonces').append('<div class="item">'+ toAdd + '</div');
	});

	$(".ui.positive.right.labeled.icon.button").click(function(){
		var toAdd = $(".text_annonces").val();
		$(".annonces").append('<div class="item">'+ toAdd + '</div');
	});*/
});