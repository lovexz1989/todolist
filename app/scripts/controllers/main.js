'use strict';

/**
 * @ngdoc function
 * @name todolistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todolistApp
 */
angular.module('todolistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
