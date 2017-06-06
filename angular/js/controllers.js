var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').then(function(response) {
		$scope.artists = response.data;
		$scope.artistOrder = 'name';
	});
}]);