(function(window, angular) {

	"use strict"
	
	var app = angular.module("myApp", []);

	app.controller("mainCtrl", ['$scope', function($scope) {
		$scope.greet = function(name) {
			return "hello " + name;
		};
	}]);

	window.myApp = app;

})(this, angular);