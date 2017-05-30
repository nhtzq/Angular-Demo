var myApp = angular.module('myApp', []);

myApp.controller('myController', function myController($scope) {
	$scope.author = {
		'name'		: 'Jack Tan', 
		'title'		: 'Software Developer', 
		'company'	: 'Gridology Edu. & Tech. Inc.'
	};
});