var express = require('express');
var router = express.Router();
var persons = require("../model/model");
var jokes = require("../model/jokes");

persons.addTestData();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Handlebars Demo', data: persons.getAll});
});

router.get('/jokes', function(req, res, next) {
  console.log(jokes.getRandomJoke);
  console.log(jokes.allJokes);
  res.render('jokes.hbs', { title: 'Handlebars Demo Jokes', allJokes: jokes.allJokes, randomJoke: jokes.getRandomJoke});
});

router.get('/login', function(req, res, next) {
  res.render('login.hbs');
});



router.post("/", function(req, res, next){
  var name = req.body.name;
  persons.addPerson(name);
  res.redirect("/");
});

router.post("/jokes", function(req, res, next){
  var joke = req.body.joke;
  jokes.addJoke(joke);
  res.redirect("/jokes");
});


module.exports = router;
