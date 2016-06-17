var express = require('express')
var app = express()
var request = require('superagent')
var dotenv = require('dotenv')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')
var createAnimal = require('./lib/create-animal')

var animalsObj = require('./data/data.json')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.redirect('/animals')// what is this doing?
})

app.get('/animals', function(req, res) {
  res.render('animalIndex', animalsObj)
  console.log(animalsObj)
})

app.get('/animals/create', function(req, res) {
  res.render('animalCreate')
})

app.post('/animals', function(req,res){
  createAnimal(req.body.name, animalsObj, res)
  // res.redirect('/animals')
  //in the create file
})

app.get('/animals/:id/', function(req, res) {
  var animal = animalsObj.animals.find(function(animals) {
    return animals.id === parseInt(req.params.id)
  })
  res.render('animalView', animal)
})

module.exports = app
