describe('Users factory', function () {
  var TableController;
  // Before each test load our angularjsapp module
  beforeEach(module('angularjsapp'));

  beforeEach(inject(function ($rootScope, filterMaster, $controller) {
    scope = $rootScope.$new();
    TableController = $controller('TableController', {
      $scope: scope,
      filterMaster,
    });
  }));

  // A simple test to verify the tests are ok
  it('should exist', function () {
    expect(2 + 2).toBe(4);
  });

  it('find controller scope', function () {
    console.log(scope.valuesFilter)
  });
});

describe('table', function () {
});
