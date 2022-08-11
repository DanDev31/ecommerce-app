const express = require('express')
const server = express()
const cors = require('cors')
const routes = require('./routes/index.js')
const morgan = require('morgan');
const passport = require('passport')
const passportSetUp = require('./passport')
const cookieSession = require("cookie-session");

server.use(
    cookieSession({ name: "session", keys: ["Dan"], maxAge: 24 * 60 * 60 * 100 })
  )
server.use(cors())
server.use(morgan('dev'));
server.use(express.json())
server.use(passport.initialize());
server.use(passport.session());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes)


module.exports = server;