'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, notesService) {
    $scope.awesomeThings = notesService.keys();
  });
