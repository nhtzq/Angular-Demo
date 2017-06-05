angular.module('myApp', [
	'myApp.controllers'
]);

angular.module('myApp.controllers', []).controller('myController', function($scope) {
	$scope.salary = 0;
	$scope.percentage = 0;
	$scope.result = function() {
		return $scope.salary * $scope.percentage * 0.01;
	};	
});