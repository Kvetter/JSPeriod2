

var getJokes = function () {

  var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
  ];

  function randomJoke() {
    var index = Math.floor(Math.random() * (jokes.length));
    return jokes[index];
  }

  function addJoke(joke) {
    jokes.push(joke);
  }

  return {
    allJokes: function () { return jokes; },
    getRandomJoke: function () {
      var index = Math.floor(Math.random() * (jokes.length));
      return jokes[index];
    },
    addJoke: function (joke) { addJoke(joke) }
  }
}

module.exports = getJokes();