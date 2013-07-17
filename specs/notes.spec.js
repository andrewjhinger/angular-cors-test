'use strict';
var Notes = require('../lib/notes'),
    expect = require('chai').expect;

describe('notes', function() {
  it('should have a constructor', function() {
    new Notes();
  });

  it('should come with predefined notes', function() {
    var notes = new Notes();
    expect(notes.keys().length).to.equal(3);
  });

  it('should have note aap', function() {
    var notes = new Notes();
    var note = notes.get('aap');
    expect(note.id).to.equal('aap');
    expect(note.data).to.match(/gouden ring/);
  });
});
