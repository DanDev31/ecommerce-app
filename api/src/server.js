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
server.use(cors({
    origin: "http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}))
server.use(morgan('dev'));
server.use(express.json())
server.use(passport.initialize());
server.use(passport.session());

server.use('/', routes)


module.exports = server;