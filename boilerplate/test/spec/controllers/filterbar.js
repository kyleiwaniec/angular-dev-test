'use strict';

describe('Controller: FilterbarCtrl', function () {

  // load the controller's module
  beforeEach(module('angular14InterviewApp'));

  var FilterbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FilterbarCtrl = $controller('FilterbarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
