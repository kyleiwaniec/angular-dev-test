'use strict';

describe('Filter: firstLetterFilter', function () {

  // load the filter's module
  beforeEach(module('angular14InterviewApp'));

  // initialize a new instance of the filter before each test
  var firstLetterFilter;
  beforeEach(inject(function ($filter) {
    firstLetterFilter = $filter('firstLetterFilter');
  }));

  it('should return the input prefixed with "firstLetterFilter filter:"', function () {
    var text = 'angularjs';
    expect(firstLetterFilter(text)).toBe('firstLetterFilter filter: ' + text);
  });

});
