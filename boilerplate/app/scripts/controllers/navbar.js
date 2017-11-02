'use strict';

/**
 * @ngdoc function
 * @name angular14InterviewApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the angular14InterviewApp
 */

angular.module("angular14InterviewApp").controller("NavbarCtrl", [
  "$scope",
  "serve",
  function($scope, serve) {
    $scope.$watch(
      function() {
        return serve.memberObj;
      },
      function(newData, oldData) {
        $scope.selectedMembers = newData;
        if (newData !== oldData) {
          $scope.selectedMembers = newData;
        }
      }
    );

    $scope.activeSearchBar = false;

    $scope.toggleSearchBar = function() {
      return ($scope.activeSearchBar = !$scope.activeSearchBar);
    };
  }
]);