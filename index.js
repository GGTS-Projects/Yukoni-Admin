const express = require('express');
const bodyParser = require('body-parser');
const config = require('./server/config');
const passport = require('passport');

const session = require('express-session');
const mongoose = require('mongoose');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
//
require('./server/models').connect(config.dbUri);

var app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(cookieParser());
app.use(bodyParser());

app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

const routes = require ('./server/routes/index.js');
 app.use('/', routes);
// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});