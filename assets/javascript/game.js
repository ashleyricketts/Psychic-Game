var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft;
var guessedLetters;
var letterToGuess;

reset();
display();


document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === letterToGuess) {
    win();
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}

function display() {
  var winsP = document.getElementById("wins");
  var lossesP = document.getElementById("losses");
  var guessesRemaining = document.getElementById("guessRemaining");
  var letterGuessed = document.getElementById("lettersGuessed");
  winsP.innerHTML = wins;
  lossesP.innerHTML = losses;
  guessesRemaining.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(', ');
}

function win() {
  wins++;
  alert("Correct! You guessed " + letterToGuess)
  reset();
}

function lost() {
  losses++;
  reset();
}

function fail(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
}

function reset() {
  guessesLeft = 10;
  guessedLetters = [];
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + letterToGuess);
}
