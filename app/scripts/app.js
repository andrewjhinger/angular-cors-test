'use strict';

angular.module('angularApp', ['notesModule'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/notes', {
        templateUrl: 'views/notesList.html',
        controller: 'NotesListCtl'
      })
      .when('/notes/:id', {
        templateUrl: 'views/notesDetail.html',
        controller: 'NotesDetailCtl'
      })
      .otherwise({
        redirectTo: '/notes'
      });
  });
