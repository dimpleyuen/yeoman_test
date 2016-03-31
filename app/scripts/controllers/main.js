'use strict';

/**
 * @ngdoc function
 * @name cocktailsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cocktailsApp
 */
angular.module('cocktailsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
