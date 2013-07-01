'use strict';

describe('Controller: NotesListCtl', function () {

  // load the controller's module
  beforeEach(module('angularApp', 'ngResource'));

  var dummyNotesService = {
    keys: function() {
      return ['aap', 'noot' ];
    }
  };

  var NotesListCtl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotesListCtl = $controller('NotesListCtl', {
      $scope: scope,
      notesService: dummyNotesService
    });
  }));

  it('should attach a list of keys to the scope', function () {
    expect(scope.keys.length).toBe(2);
  });
});
