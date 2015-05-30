'use strict';

/* Controllers */

var pastenodeControllers = angular.module('pastenodeControllers', []);

pastenodeControllers.controller('HomeController', ['$scope', '$http','$route',
  function($scope, $http, $route) {
    $http.get('api/pastes').success(function(data) {
      $scope.pastes = data;
    });

    $scope.addNote = function(){      
        // Writing it to the server
        //      
        var dataObj = {
                title: $scope.title,
                body: $scope.body,
        };  

        var res = $http.post('/api/pastes', dataObj);
        res.success(function(data, status, headers, config) {
             window.location = ('#/paste/' + data._id); 
        });
        res.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });     
        // Making the fields empty
        //
        $scope.title='';
        $scope.body='';
    };

    $scope.deletePastes = function(){
        var res = $http.get('/api/pastes/reset');
        res.success(function(data, status, headers, config) {
            $scope.pastes = data;
        });
    }
  }]);

pastenodeControllers.controller('PasteController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('api/pastes/' + $routeParams.pasteID).success(function(data) {
        $scope.paste = data;
    });
  }]);
