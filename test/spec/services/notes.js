'use strict';

describe('NotesService', function () {

  var svc, $httpBackend;
  var SAMPLE_KEYS = [{id: 'aap'}, {id: 'noot'}];
  var SAMPLE_DATA = {id:'aap', data: 'al draagt een aap een gouden ring'};

  // make module available to injector
  beforeEach(module('notesModule'));

  // $resource adds methods such as save() to retrieved objects,
  // so simple equals is not sufficient
  // http://docs.angularjs.org/api/angular.equals
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // Initialize the service and mock backend
  beforeEach(inject(function (_$httpBackend_, notesService) {
    $httpBackend = _$httpBackend_;
    svc = notesService;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  //
  // note how the service uses $resource. this starts by
  // returning an empty object, then modifies it when the
  // response arrives.  This means there is no channel to
  // report an error status; this will change in angular 1.2
  // when $resource gets the promise api.
  //
  it('should retrieve keys', function () {
    $httpBackend.expectGET('http://localhost:6321/svc/notes').
      respond(SAMPLE_KEYS);
    var result = svc.keys();
    expect(result).toEqualData([]);
    $httpBackend.flush();
    expect(result).toEqualData(SAMPLE_KEYS);
  });

  it('should get data', function () {
    $httpBackend.expectGET('http://localhost:6321/svc/notes/aap').
      respond(SAMPLE_DATA);
    var result = svc.get('aap');
    expect(result).toEqualData({});
    $httpBackend.flush();
    expect(result).toEqualData(SAMPLE_DATA);
  });

  it('should put data', function () {
    $httpBackend.expectGET('http://localhost:6321/svc/notes/aap').
      respond(SAMPLE_DATA);
    var result = svc.get('aap');
    $httpBackend.flush();
    // note how $httpBackend makes it difficult to return empty response
    $httpBackend.expectPOST('http://localhost:6321/svc/notes/aap', SAMPLE_DATA).
      respond(200, "thank you");
    svc.put(result);
    $httpBackend.flush();
  });

});
