const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use('/api/schemes', SchemeRouter);

server.use(express.json());


module.exports = server;