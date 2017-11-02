'use strict';

/**
 * @ngdoc function
 * @name angular14InterviewApp.controller:FilterbarCtrl
 * @description
 * # FilterbarCtrl
 * Controller of the angular14InterviewApp
 */
angular.module("angular14InterviewApp").service("serve", function() {
  this.memberObj = [];
});

angular.module("angular14InterviewApp").controller("FilterbarCtrl", [ "$scope", "serve", "filterbarService", "$http", function($scope, serve, filterbarService, $http) {
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

    $scope.alphabeth = filterbarService.alphabeth;
    $scope.selectedLetterIndex = null;
    $scope.selectLetter = function(index) {
      $scope.selectedLetterIndex = index;
    };

    $scope.quantity = 18;
    var onLoadQuantity = 3;

    $scope.loadMoreMembers = function() {
      $scope.quantity += onLoadQuantity;
    };

    filterbarService.getMembers().then(function(data) {
      $scope.members = data;
    });

    // $scope.selectedMembers = [];
    $scope.toggleSelectedMember = function(index) {
      var isSelected = $scope.selectedMembers.indexOf(index);
      if (isSelected === -1) return $scope.selectedMembers.push(index);
      $scope.selectedMembers.splice(isSelected, 1);
    };

    $scope.checkboxStyle = false;

    $scope.toggleAllMembers = function() {
      if ($scope.selectedMembers.length < $scope.quantity) {
        for (var i = 0; i < $scope.quantity; i++) {
          $scope.selectedMembers.push(i);
        }
      } else {
        for (var i = $scope.selectedMembers.length; i >= 0; i--) {
          $scope.selectedMembers.splice(i, 1);
        }
      }
      var x = false;
      $scope.checkboxStyle = !$scope.checkboxStyle;
    };
  }
]);
