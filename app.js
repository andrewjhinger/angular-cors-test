'use strict';
//
// web-server written in express, a node-based framework.
// run with 'node app.js'.
//
// this serves static data from /dist on port 5000,
// in contrast to 'grunt server', that serves data
// from /app (unprocessed) to port 9000 with live reload.
//
// the json service lives at another port.
//
var express = require('express');

var port = process.env.PORT || 5000;
var BASE = '/dist';
 
var app = express();

// Configuration

app.configure(function(){
  // apache style log lines to stdout
  app.use(express.logger());
  // gzip/deflate
  app.use(express.compress());
  // serve static data from here
  app.use(express.static(__dirname + BASE));
});

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(port, function() {
  console.log('Listening on ' + port);
});
