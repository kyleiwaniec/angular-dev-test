'use strict';

/**
 * @ngdoc function
 * @name angular14InterviewApp.controller:FilterbarCtrl
 * @description
 * # FilterbarCtrl
 * Controller of the angular14InterviewApp
 */
angular.module('angular14InterviewApp')
  .controller('FilterbarCtrl', ['$scope', 'filterbarService', '$http', function ($scope, filterbarService, $http) {
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



   filterbarService.getMembers()
     .then(function(data) {
       $scope.members = data;
     })

    $scope.selectedMembers = [];
    $scope.toggleSelectedMember = function(index) {
      var isSelected = $scope.selectedMembers.indexOf(index);
      if(isSelected === -1) return $scope.selectedMembers.push(index);

      $scope.selectedMembers.splice(isSelected, 1);
      console.log($scope.selectedMembers);
      debugger
    };


  }]);
