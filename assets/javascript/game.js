// Create array of choices for the computer to choose from
var arrayOfLetters = ["a", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Setting score defaults
var wins = 0;
var losses = 0;
var guessesLeft = 14;
var guessedSoFar = [];

// Create variables that hold references to the places in the HTML where we want to display things.
document.querySelector(".wins").innerHTML = "Wins: " + wins;
document.querySelector(".losses").innerHTML = "Losses: " + losses;
document.querySelector(".guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
document.querySelector(".guessedSoFar").innerHTML = "Your Guesses so far: " + guessedSoFar;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = arrayOfLetters[Math.floor(Math.random() * arrayOfLetters.length)];

    var reset = function() {
        guessesLeft = 14;
        guessedSoFar = [];
    }

        // I user guess and computer guess match
        if (userGuess === computerGuess) {
            wins++;
            alert("Terrific!  Are you a psychic?");
            reset();
        } else if (userGuess !== computerGuess) {
            guessesLeft--;
        }

        if (guessesLeft <= 0) {
            losses++;
            alert("Not quite! The computer chose " + "\"" + computerGuess + ".\"" + " Try again.");
            reset();
        }

        if (wins >= 7) {
            alert("You are a PSYCHIC!");
            // document.querySelector()
        } else if (losses >= 7) {
            alert("How unfortunate, you are not a PSYCHIC!");
        }



        guessedSoFar.push(userGuess);


        document.querySelector(".wins").innerHTML = "Wins: " + wins;
        document.querySelector(".losses").innerHTML = "Losses: " + losses;
        document.querySelector(".guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
        document.querySelector(".guessedSoFar").innerHTML = "Your Guesses so far: " + guessedSoFar.join(', ');

  };

  // Also wanted to accomplish ending the game and changing the background