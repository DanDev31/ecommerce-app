const express = require('express')
const server = express()
const cors = require('cors')
const routes = require('./routes/index.js')
const morgan = require('morgan');

server.use(cors())
server.use(morgan('dev'));
server.use(express.json())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes)


module.exports = server;