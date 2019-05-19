var app = angular.module('app', ['components']);

app.controller('BeerCounter', function($scope, $locale, beertrickService) {
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];
  $scope.reverseBeerService = function() {
		$scope.beers = beertrickService.reverse($scope.beers);  
	};
  if ($locale.id === 'en-us') {
    $scope.beerForms = {
      0: 'no beers',
      one: '{} beer',
      other: '{} beers'
    };
  } else {
    $scope.beerForms = {
      0: 'žiadne pivo',
      one: '{} pivo',
      few: '{} pivá',
      other: '{} pív'
    };
  }
});
app.service('beertrickService', function() {
	this.reverse = function(beers) {
		return beers.reverse();
	};
});