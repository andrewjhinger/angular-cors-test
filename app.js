'use strict';
//
// web-server written in express, a node-based framework.
// run with 'node app.js'.
//
// this serves static data from /dist on port 5000,
// in contrast to 'grunt server', that serves data
// from /app (unprocessed) to port 9000 with live reload.
//
var express = require('express'),
    Notes = require('./lib/notes.js'),
    notes = new Notes();

var port = process.env.PORT || 5000;
var BASE = '/dist';
 
var app = express();

// Configuration

app.configure(function(){
  // apache style log lines to stdout
  app.use(express.logger());
  // gzip/deflate
  app.use(express.compress());
  // interpret json, multipart, formencoded
  app.use(express.bodyParser());
  // serve static data from here
  app.use(express.static(__dirname + BASE));
});

app.get('/', function(req, res) {
  res.render('index.html');
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
