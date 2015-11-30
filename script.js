angular
	.module('myMod', [])

	.controller('pixController', ['$scope', function($scope) {
  		$scope.images = [
 	 		{src: 'Park1.jpg' 
 	 		 title: 'A beautiful autumn day in Central Park.'
 	 		// }, {a: 'Detail of a finial on a park bridge.'}, 
  			// {a: 'Statue of Christopher Columbus at corner of the park.'}, 
  			// {a: 'At Mariella Pizza, just a few blocks from the park...yummy!'},
  			// {a: 'From the roof of the Met overlooking Central Park.'},
  			// {a: 'Found a favorite coffee shop in a lovely old building.'},
  			// {a: 'Brooklyn & Manhattan bridges.'},
  			// {a: 'Larry Wilmer is smart AND funny!'}, 
  			// {a: 'An installation by 1xRun, owners of Inner State Gallery Detroit.'}, 
  			// {a: 'Bird Girl, by a Murals in the Market artist.'}, 
  			// {a: 'Tiffany windows and lamps on display.'},
  			// {a: 'With windows overlooking the park at the Met.'
  		}];
	}]);
