const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./server/config');

require('./server/models').connect(config.dbUri);
var app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/config/passport/local-signup');
const localLoginStrategy = require('./server/config/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

//Routes
// const authCheckMiddleware = require('./server/config/passport/auth-check');
// app.use('/api', authCheckMiddleware);

//require('./server/routes/auth.js')(app, passport);
const routes = require ('./server/routes/index.js');
 app.use('/', routes);
//  

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});