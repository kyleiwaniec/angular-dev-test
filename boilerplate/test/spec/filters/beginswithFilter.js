'use strict';

describe('Filter: beginsWith', function () {

  // load the filter's module
  beforeEach(module('angular14InterviewApp'));

  // initialize a new instance of the filter before each test
  var beginsWith;
  beforeEach(inject(function ($filter) {
    beginsWith = $filter('beginsWith');
  }));

  it('It should give array of 1 object name begin with A', function () {
    var input = [{"nm":"Abar","va":"v0"},{"nm":"Barca","va":"v0"},{"nm":"Bare","va":"v0"}];
    
    // console.log(firstLetterFilter(input,"A"));
    // expect("A").toBe("A");
    expect(beginsWith(input,"A").length).toBe(1);
  });
  it('It should give array of 2 object name begin with Ba', function () {
    var input = [{"nm":"Abar","va":"v0"},{"nm":"Barca","va":"v0"},{"nm":"Bare","va":"v0"}];
    
    // console.log(firstLetterFilter(input,"A"));
    // expect("A").toBe("A");
    expect(beginsWith(input,"Ba").length).toBe(2);
  });
  it('It should give array of 0 object name begin with C', function () {
    var input = [{"nm":"Abar","va":"v0"},{"nm":"Barca","va":"v0"},{"nm":"Bare","va":"v0"}];
    
    // console.log(firstLetterFilter(input,"A"));
    // expect("A").toBe("A");
    expect(beginsWith(input,"C").length).toBe(0);
  });

});
