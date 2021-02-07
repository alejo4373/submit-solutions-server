if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var submissionsRouter = require('./routes/submissions');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/submissions', submissionsRouter);

module.exports = app;
