var express = require('express')
var app = express()
var request = require('superagent')
var dotenv = require('dotenv')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.redirect('/animals')
})

app.get('/animals', function(req, res) {
  res.render('animalIndex', animalsObj)
})

module.exports = app
