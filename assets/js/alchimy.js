"use strict";
window.$ = require('jquery');
var Mustache = require('mustache');

alert('yatta');
var app = {
	config: {
		url:"https://smp.ovh",
		target:"#main"
	},
	init : function(){
		this.makeTpl();
	},
	makeTpl: function(){
		var tpl = "<p>{{msg}}</p>";
		var output = Mustache.render(tpl, {msg : "Coucous les simploniens !"});
		$("#main").html(output);
	}
};

$(document).ready(function(){
	app.init();
});