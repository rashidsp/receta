var controllers = angular.module('controllers');
controllers.controller("RecipController", ['$scope', '$routeParams', '$resource', function ($scope, $routeParams, $resource){
	var Recipe = $resource('recipies/:recipeId', {recipeId: "@id", format: 'json'});
}]);