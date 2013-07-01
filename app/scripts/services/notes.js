'use strict';
//
// notes service, in-memory version
//
var notesModule = angular.module('notesModule', ['ngResource']);
notesModule.factory('notesService', function() {

  var repo = {
    'aap': 'al draagt een aap een gouden ring',
    'noot': 'als de noot het hoogste is',
    'mies': 'van de mies holland verkiezing'
  };

  var keys = function() {
    var i, keys = [];
    for (i in repo) {
      if (repo.hasOwnProperty(i)) {
        keys.push(i);
      }
    }
    return keys;
  };

  var get = function(id) {
    return repo[id];
  };

  var put = function(id, data) {
    repo[id] = data;
  };

  var notes = {
    keys: keys,
    get: get,
    put: put
  };

  return notes;
});

