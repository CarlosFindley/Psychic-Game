// I based my work on help I found online, specifically https://github.com/Ednas/Psychic-Game

// Array of letters available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables and setting them to zero
let wins = 0;
let losses = 0;
let guessesLeft = 7;
let guessedLetters = [];

// The computer selects a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This one updates the "guesses left" in HTML
function updateGuessCount() {
    document.querySelector(".guessLeft").innerHTML = "Guesses left: " + guessesLeft;
}

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
}

// This one updates the "your guesses so far" in HTML
function updateGuessesSoFar() {
    document.querySelector(".guessSoFar").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
}
// Function will be called when we reset everything
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessCount();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessCount();

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    // If wrong guess
    if (check === false) {
        alert("Not quite, try again.");
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessCount();
        updateGuessesSoFar();

        // If right guess
        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector(".wins").innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("You are LUCKY! The right letter is " + "\"" + computerGuess + "\"");
                reset();
            }
        } else if (guessesLeft == 0) { // captures the losses
            losses++;
            document.querySelector(".losses").innerHTML = "Losses: " + losses;
            alert("How UNFORTUNATE! The right letter is " + "\"" + computerGuess + "\"");
            // Then we'll call the reset. 
            reset();
        }
        return false;
    } else {
        alert("Oops, we have an error");
    }

}