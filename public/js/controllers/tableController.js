angular.module('angularjsapp').controller('TableController', function ($scope, $http, filterMaster, filterPositionsName) {
  $scope.data = '';
  $scope.filteredHeaders = '';
  $scope.nameFilter = '';
  $scope.valuesFilter = {};
  $scope.valuesFilterArr = [];

  $http.get('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((result) => {
      $scope.data = result.data.results;
      $scope.filteredHeaders = Object.keys($scope.data[0])
        .filter(element => !['residents', 'films', 'create'].includes(element));
    })
    .catch((err) => console.log(err));

  $scope.filterPlanets = function () {
    if ($scope.nameFilter.length === 0 && $scope.valuesFilterArr.length === 0) {
      return $scope.data;
    }
    return filterMaster.filter($scope.data, $scope.nameFilter, $scope.valuesFilterArr);
  }

  $scope.filterPositions = () => filterPositionsName.filter($scope.valuesFilterArr);

  $scope.addValueFilter = function () {
    $scope.valuesFilterArr.push($scope.valuesFilter);
    $scope.valuesFilter = {};
  };

  $scope.shouldAdd = function () {
    return !($scope.valuesFilter.position && $scope.valuesFilter.valueRange && $scope.valuesFilter.value)
  }

  $scope.removeFilter = function (filterToBeRemoved) {
    const newFilteredArr = $scope.valuesFilterArr.filter((filter) => filter.position !== filterToBeRemoved.position);
    $scope.valuesFilterArr = newFilteredArr;
  }
});
