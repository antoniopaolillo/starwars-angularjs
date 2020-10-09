angular.module('angularjsapp').controller('TableController', function ($scope, $http, filterMaster) {
  $scope.data = '';
  $scope.filteredHeaders = '';
  $scope.nameFilter = '';
  $http.get('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((result) => {
      $scope.data = result.data.results;
      $scope.filteredHeaders = Object.keys($scope.data[0])
        .filter(element => !['residents', 'films', 'create'].includes(element));
    })
    .catch((err) => console.log(err));

  $scope.filterPlanets = function () {
    if($scope.nameFilter.length === 0) return $scope.data;
    return filterMaster.filter($scope.data, $scope.nameFilter);
  }
});
