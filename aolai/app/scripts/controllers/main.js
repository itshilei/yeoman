'use strict';

/**
 * @ngdoc function
 * @name aolaiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aolaiApp
 */
angular.module('aolaiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
