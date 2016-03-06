'use strict';

var controllersModule = require('./_index');


function playersCtrl($scope,$http){

  $scope.title  = "Manage players";

  $http({
  method: 'GET',
  url: 'http://localhost:8080/PocWebApp-1.0-SNAPSHOT/prospect'
  }).then(function successCallback(response) {
    $scope.prospects = response;
  }, function errorCallback(response) {
    
  });

  $scope.addPlayer = function(player){
  	console.log(player);
  }

  $scope.clear = function(){
    $scope.player = {};
  }

}

controllersModule.controller('playersCtrl', playersCtrl);
