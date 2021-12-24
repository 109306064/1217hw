//Generate a random number between 1 and 500
let randomNumber = parseInt((Math.random()*100)+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;
let min=1;
let max=100;

if (playGame){
    subt.addEventListener('click', function(e){
        e.preventDefault();
        //Grab guess from user
        const guess = parseInt(userInput.value);
        checkGuess(guess);
    });
}



function checkGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 500!')
    } else {
        //Keep record of number of attempted guesses
        previousGuesses.push(guess);}
    //Display clue if guess is too high or too low
    
    if (guess === randomNumber){
        alert("You guessed correctly!");
        endGame();
    } else if (guess < randomNumber) {
        min=guess;

        displayMessage(min+`~`+max);

    } else if (guess > randomNumber) {
        max=guess;
        displayMessage(min+`~`+max);
    }
}

function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message){
        lowOrHi.innerHTML = `<h1>${message}</h1>`
}



//Allow to restart game with restart button
//Change DIV to a form so it can accept the enter key

//NOTES:
//NaN != NaN