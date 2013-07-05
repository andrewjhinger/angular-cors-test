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


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
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
  // res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  ////  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
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
