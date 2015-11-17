var countryApp = angular.module('countryApp',['ngRoute']);

countryApp.config(function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'country-list.html',
		controller: 'countryCtrl'
	}).
	when('/:countryName',{
		templateUrl: 'country-detail.html',
		controller: 'countryDetailCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});

countryApp.controller('countryCtrl', function($scope,$http){

	$http.get('countries.json').success(function(countryData){
		$scope.countries = countryData;
	});

});

countryApp.controller('countryDetailCtrl', function($scope, $routeParams){
	console.log($routeParams)
});