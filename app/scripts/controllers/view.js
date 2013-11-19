'use strict';

angular.module('ejercicioApp')
  .controller('ViewCtrl', function ($scope, $http, $routeParams) {
  	$scope.loader = true;
    $scope.elementId = $routeParams.item;

    $http.get('../json/periodicTable.json').then( function(data){
    	var elements = data.data.table;
    	for(var i = 0; i < elements.length; i++){
        
        for(var a = 0; a < elements[i].elements.length; a++){
          if(elements[i].elements[a].small == $scope.elementId){
            $scope.element = elements[i].elements[a];
            console.log($scope.element);
            return;
          }
        }
      }
  	});

    
});