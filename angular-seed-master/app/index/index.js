'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/index', {
		templateUrl: 'index/index.html',
		controller: 'IndexCtrl'
	});
}])

.controller('IndexCtrl', [function() {

}]);
