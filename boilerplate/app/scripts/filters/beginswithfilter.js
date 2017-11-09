angular.module('angular14InterviewApp')
.filter('beginsWith', function () {
  return function (input, beginsWith) {
    

    var lowerStr = (beginsWith + "").toLowerCase();

    if(!beginsWith) return input;
    var filtered = [];
    angular.forEach(input, function(item) {
      if(item.nm.toLowerCase().indexOf(lowerStr) === 0) {
        filtered.push(item);
      }
    });
    return filtered;
  };
});
