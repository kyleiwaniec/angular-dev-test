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
    $scope.filtertext = "";
    $scope.selectLetter = function(index) {
      $scope.filtertext = $scope.alphabeth[index];
    };
    $scope.selectAll = false;
    $scope.quantity = 18;
    var onLoadQuantity = 3;

    $scope.loadMoreMembers = function() {
      $scope.quantity += onLoadQuantity;
    };



   filterbarService.getMembers()
     .then(function(data) {
       $scope.members = data;
     })

  
     $scope.toggleSelectedAllMember = function() {
      $scope.selectAll = !$scope.selectAll;
      angular.forEach($scope.filteredItems, function(member){ member.selected = $scope.selectAll; });
    };


    $scope.toggleSelectedMember = function(member) {
      member.selected=!member.selected;
      checkAllstatus();
    };


  }]);
