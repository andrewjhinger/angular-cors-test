'use strict';

angular.module('angularApp')
  .controller('NotesListCtl', function ($scope, notesService) {
    $scope.keys = notesService.keys();
  });

angular.module('angularApp')
  .controller('NotesDetailCtl', function ($scope, notesService, $routeParams, $location) {
    $scope.id = $routeParams.id;
    $scope.data = notesService.get($scope.id);
    $scope.save = function() {
      notesService.put($scope.id, $scope.data);
      $location.path('/notes');
    };
  });
