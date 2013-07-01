'use strict';
//
// notes service, in-memory version
//
var notesModule = angular.module('notesModule', ['ngResource']);
notesModule.factory('notesService', [ '$resource', function($resource) {

  var Notes = $resource('/svc/notes/:noteId', {noteId: '@id'});

  var keys = function() {
    //
    // 'query' is a predefined action that immmediately returns an empty
    // array.  If you omit the explicit callback, the empty array will
    // be populated automatically when the rest call is completed;
    // Due to angularjs data binding this is immediately made visible.
    // The downside is that you don't have a callbac to provide an
    // error message in case of network errors.
    //
    // Since we don't pass in any parameters, the :id part of the
    // url template is left empty, which takes us to the overview
    // of all available notes.
    //
    return Notes.query();
  };

  var get = function(id) {
    return Notes.get({noteId: id});
  };

  var put = function(note) {
    //
    // $resource extends the returned object with methods $save, $delete
    // that remember the $resource to apply the REST operation to.  The
    // {noteId: '@id'} part says that the noteId part of the URL template
    // is to be filled in from the id in the object $save() is invoked on.
    //
    note.$save();
  };

  var notes = {
    keys: keys,
    get: get,
    put: put
  };

  return notes;
}]);

