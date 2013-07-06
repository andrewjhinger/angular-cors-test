'use strict';
//
// web-server written in express, a node-based framework.
// run with 'node backend.js'.
//
// this serves only the json service, not the static html
//
var server = require('./lib/backapp.js'),
    port = process.env.PORT || 6321;

server.start(port);
