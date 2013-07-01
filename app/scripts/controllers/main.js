'use strict';

angular.module('angularApp')
  .controller('NotesListCtl', function ($scope, notesService) {
    $scope.keys = notesService.keys();
  });


angular.module('angularApp')
  .controller('NotesDetailCtl', function ($scope, notesService, $routeParams, $location) {
    $scope.note = notesService.get($routeParams.id);
    $scope.save = function() {
      notesService.put($scope.note);
      $location.path('/notes');
    };
  });
