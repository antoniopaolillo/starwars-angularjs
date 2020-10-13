angular.module('filterService', [])
  .factory('filterMaster', function (filterByName, filterByValues) {
    const service = {};
    service.filter = function (data, filterName, valuesFilterArr) {
      if (filterName.length === 0) {
        filterByValues.filterValue(data, valuesFilterArr);
      }
      return filterByName.filterName(data, filterName, valuesFilterArr);
    }
    return service;

  }).factory('filterByName', function (filterByValues) {
    const service = {};
    service.filterName = function (data, filterByName, valuesFilterArr) {
      const filteredData = data.filter(planet => planet.name.includes(filterByName));
      return valuesFilterArr.length !== 0 ? filterByValues.filterValue(filteredData, valuesFilterArr) : filteredData
    }
    return service;

  }).factory('filterByValues', function () {
    const service = {};
    service.filterValue = function (data, valuesFilterArr) {
      return valuesFilterArr.reduce((acc, filter, index) => {
        const array = index === 0 ? data : acc;
        const { position, valueRange, value } = filter;
        switch (valueRange) {
          case 'Maior que':
            return array.filter(
              (planet) => planet[position] > Number(value) && planet[position] !== 'unknown',
            );
          case 'Menor que':
            return array.filter(
              (planet) => planet[position] < Number(value) && planet[position] !== 'unknown',
            );
          case 'Igual a':
            return array.filter((planet) => planet[position] === value && planet[position] !== 'unknown');
          default:
            return false;
        }
      }, []);
    }
    return service;

  }).factory('filterPositionsName', function () {
    const service = {};
    const positionsToFilter = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    service.filter = function (arrUsedPositions) {
      if (arrUsedPositions.length > 0) {
        const arrayOfUsedPositions = arrUsedPositions.map((filter) => filter.position);
        const arrayOfPositionsToUse = positionsToFilter.filter(
          (position) => !arrayOfUsedPositions.includes(position),
        );
        return arrayOfPositionsToUse;
      }
      return positionsToFilter;
    }

    return service;
  });
