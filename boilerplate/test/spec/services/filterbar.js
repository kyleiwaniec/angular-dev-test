'use strict';

describe('Service: filterbar', function () {

  // load the service's module
  beforeEach(module('angular14InterviewApp'));

  // instantiate service
  var filterbar;
  beforeEach(inject(function (_filterbar_) {
    filterbar = _filterbar_;
  }));

  it('should do something', function () {
    expect(!!filterbar).toBe(true);
  });

});
