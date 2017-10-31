'use strict';

/**
 * @ngdoc function
 * @name angular14InterviewApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the angular14InterviewApp
 */
angular.module('angular14InterviewApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.activeSearchBar = false;

    $scope.toggleSearchBar = function() {
      return $scope.activeSearchBar = !$scope.activeSearchBar
    };

  });
