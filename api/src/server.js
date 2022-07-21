const express = require('express')
const server = express()
const cors = require('cors')
const routes = require('./routes/index.js')
const morgan = require('morgan');


server.use(cors())
server.use(morgan('dev'));
server.use(express.json())

server.use('/', routes)


module.exports = server;