'use strict';

/**
 * @ngdoc filter
 * @name angular14InterviewApp.filter:firstLetterFilter
 * @function
 * @description
 * # firstLetterFilter
 * Filter in the angular14InterviewApp.
 */
angular.module("angular14InterviewApp").filter("firstLetterFilter", function() {
  return function(input, startWithLetter) {
    if (!startWithLetter) return input;
    var filtered = [];
    angular.forEach(input, item => {
      if (startWithLetter.toLowerCase() === item.nm.charAt(0).toLowerCase()) {
        filtered.push(item);
      }
    });
    return filtered;
  };
});

angular.module("angular14InterviewApp").filter("mySearch", function() {
  return function(input, text) {
    if (text === undefined || text === "") return input;

    var filtered = [];
    angular.forEach(input, item => {
      if (item.nm.toLowerCase().indexOf(text.toLowerCase()) == 0) {
        filtered.push(item);
      }
    });
    return filtered;
  };
});
