'use strict';

/* App Module */

var pastenodeApp = angular.module('pastenodeApp', [
  'ngRoute',
  'pastenodeControllers'
]);

pastenodeApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/paste/:pasteID', {
        templateUrl: 'partials/paste.html',
        controller: 'PasteController'
      }).
      otherwise({
        redirectTo: '/'
      });

  }]);
