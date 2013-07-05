'use strict';
//
// web-server written in express, a node-based framework.
// run with 'node backend.js'.
//
// this serves only the json service, not the static html
//
var express = require('express'),
    Notes = require('./lib/notes.js'),
    notes = new Notes();

var port = process.env.PORT || 6321;
 
var app = express();

var ALLOWED_HEADERS = [
  'X-Requested-With',
  'Content-Type'
];

var ALLOWED_HOSTS = {
  'http://localhost:5000': 1,
  'http://localhost:9000': 1
};


var allowCrossDomain = function(req, res, next) {
  var origin = req.headers.origin;
  if (ALLOWED_HOSTS[origin]) {
    // can't return a list
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', ALLOWED_HEADERS.join());
  }
  next();
};

// Configuration
app.configure(function(){
  // apache style log lines to stdout
  app.use(express.logger());
  // gzip/deflate
  app.use(express.compress());
  // interpret json, multipart, formencoded
  app.use(express.bodyParser());
  app.use(allowCrossDomain);
});


app.options('*', function(req, res) {
  res.end();
});

app.get('/svc/notes', function(req, res) {
  res.json(notes.keys());
});

app.get('/svc/notes/:id', function(req, res) {
  res.json(notes.get(req.params.id));
});

app.post('/svc/notes/:id', function(req, res) {
  // angularjs prefers POST to PUT for save().
  // hmm, :id is redundant with :id in body.
  res.json(notes.put(req.body));
});

app.listen(port, function() {
  console.log('Listening on ' + port);
});
