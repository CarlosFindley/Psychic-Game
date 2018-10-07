//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Creating variables and setting them to zero
let wins = 0;
let losses = 0;
let guessesLeft = 7;
let guessedLetters = [];

//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 7 guesses
function updateGuessesLeft() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector(".guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector(".guessSoFar").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
    totalGuesses = 7;
    guessesLeft = 7;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
        alert("Not quite, try again.");
        return false;
    } else if (check === true) {
        //If the Users choice was an alphabet char then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector("wins").innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Yes, you are psychic! Mantis has chosen " + userGuess);
                reset();
            }
        } else if (guessesLeft == 0) {
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector(".losses").innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
            // Then we'll call the reset. 
            reset();
        }
        return false;
    } else {
        alert("Oops, we have an error");
    }

};