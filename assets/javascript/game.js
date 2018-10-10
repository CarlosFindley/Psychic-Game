// Create array of choices for the computer to choose from
var arrayOfLetters = ["a", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Setting score defaults
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guessSoFar = [];

// Create variables that hold references to the places in the HTML where we want to display things.
document.querySelector(".wins").innerHTML = "Wins: " + wins;
document.querySelector(".losses").innerHTML = "Losses: " + losses;
document.querySelector(".guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
document.querySelector(".guessSoFar").innerHTML = "Your Guesses so far: " + guessSoFar;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = arrayOfLetters[Math.floor(Math.random() * arrayOfLetters.length)];

        // I user guess and computer guess match
        if (userGuess === computerGuess) {
            wins++;
            // wins.textContent = "Wins: " + wins;
        } else if (userGuess !== computerGuess) {
            losses++;
            
        }

        document.querySelector(".wins").innerHTML = "Wins: " + wins;
        document.querySelector(".losses").innerHTML = "Losses: " + losses;
        document.querySelector(".guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
        document.querySelector(".guessSoFar").innerHTML = "Your Guesses so far: " + guessSoFar;


  };