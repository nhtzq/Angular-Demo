var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').then(function(response) {
		$scope.artists = response.data;
	});
}]);