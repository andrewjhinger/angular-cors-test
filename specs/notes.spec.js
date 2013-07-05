var Notes = require('../lib/notes')
//
// test for the server part.
// written in node-jasmine, for now the default for yeoman.
//
describe('notes', function() {
  it('should have constructor', function() {
    var notes = new Notes();
  });

  it('should come with predefined notes', function() {
    var notes = new Notes();
    expect(notes.keys().length).toBe(3);
  });

  it('should have note aap', function() {
    var notes = new Notes();
    var note = notes.get('aap');
    expect(note.id).toBe('aap');
    expect(note.data).toMatch(/gouden ring/);
  });
});
