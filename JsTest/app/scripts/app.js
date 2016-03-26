(function(window) {

	"use strict"
	
	var app = {};

	app.greet = function(name) {
		return "hello " + name;
	};

	window.myApp = app;

})(this);