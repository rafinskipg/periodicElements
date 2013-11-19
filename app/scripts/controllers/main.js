'use strict';

angular.module('ejercicioApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    var colors = [];
  	$scope.loader = true;
    $scope.elements = [];

    $http.get('../json/periodicTable.json').then( function(data){
    	$scope.elements = data.data;
    	$scope.loader = false;
    	console.log($scope.elements);
  	});

    $scope.show = function(item){
    	$location.path( '/view/'+ item );
    }

    function randomColor(){
    	return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    //Populate with data
    for(var i = 0; i < 20; i++){
    	colors.push(randomColor());
    }

    $scope.getStyles  = function(pos, row){
    	console.log(row)
    	return "background-color:" + colors[pos] + "; left: "+ (33 * pos) +"px; top: " + (row * 80)+"px;"
    }

});