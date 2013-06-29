//
// notes service, in-memory version
//
var notesModule = angular.module('notesModule', []);
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
  }

  // TODO: add create/read/update/delete

  var notes = {
    keys: keys
  };

  return notes;
});

