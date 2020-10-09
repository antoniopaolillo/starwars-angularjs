angular.module('angularjsapp', ['ngRoute', 'table'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
      templateUrl: 'partials/principal.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  });
