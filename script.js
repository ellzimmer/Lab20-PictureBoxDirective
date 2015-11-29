angular
	.module('myMod', [])

	.controller('pixController', ['$scope', function($scope) {
  		$scope.pics = [
 	 		{a: 1}, 
  			{a: 2}, 
  			{a: 3}, 
  			{a: 4}];
	}]);
