angular.module('table', [])
  .directive('myTable', function () {

    const ddo = {};

    ddo.restrict = "E";

    ddo.templateUrl =  'partials/table.html';

    return ddo;
  }).directive('filtersInput', function() {

    const ddo = {};

    ddo.restrict = "E";

    ddo.templateUrl =  'partials/filtersinput.html';

    return ddo;
  }).directive('filtersActivate', function() {
    const ddo = {};

    ddo.restrict = "E";

    ddo.templateUrl =  'partials/filtersActivate.html';

    return ddo;
  });
