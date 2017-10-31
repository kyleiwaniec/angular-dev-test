'use strict';

describe('Directive: memberList', function () {

  // load the directive's module
  beforeEach(module('angular14InterviewApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<member-list></member-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the memberList directive');
  }));
});
