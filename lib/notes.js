//
// in memory notes database, living in the server.
//
'use strict';

var repo = {
  'aap': 'al draagt een aap een gouden ring',
  'noot': 'als de noot het hoogste is',
  'mies': 'van de mies holland verkiezing'
};


var Notes = function() {
};

Notes.prototype.keys = function() {
  var i, keys = [];
  for (i in repo) {
    if (repo.hasOwnProperty(i)) {
      // angularjs wants hashes, not bare strings
      keys.push({'id': i});
    }
  }
  return keys;
};

Notes.prototype.get = function(id) {
  return {id: id, data: repo[id]};
};

Notes.prototype.put = function(note) {
  repo[note.id] = note.data;
};

module.exports = Notes;
