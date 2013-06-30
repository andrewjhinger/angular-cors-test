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
      keys.push(i);
    }
  }
  return keys;
};

Notes.prototype.get = function(id) {
  return repo[id];
};

Notes.prototype.put = function(id, data) {
  repo[id] = data;
};

module.exports = Notes;
