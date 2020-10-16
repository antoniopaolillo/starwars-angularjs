angular.module('angularjsapp', ['ngRoute', 'table', 'filterService'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
      templateUrl: 'partials/principal.html',
      controller: 'TableController'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  });
