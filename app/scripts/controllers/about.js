'use strict';

/**
 * @ngdoc function
 * @name cocktailsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cocktailsApp
 */
angular.module('cocktailsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
