angular.module('filterService', [])
  .factory('filterMaster', function (filterByName) {
    const service = {};
    service.filter = function (data, filterName) {
      return filterByName.filter(data, filterName);
    }
    return service;

  }).factory('filterByName', function () {
    const service = {};
    service.filter = function (data, filterByName) {
      return data.filter(planet => planet.name.includes(filterByName));
    }
    return service;

  }).factory('filterByValues', function () {
    const service = {};
    return service;
  });
