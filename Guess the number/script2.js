const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if (guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess){
            if(numGuess === 11){
                displayGuess(guess)
                displayMessage(`Game Over Random Number was ${randomNumber}`)
                endGame()
            }else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }
    }
}
 
    

function checkGuess(guess) {
    // Guess checking logic here
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
            endGame()
        }else if (guess < randomNumber){
            displayMessage(`Number is Toooo low`)
        }else if (guess > randomNumber){
            displayMessage(`Number is Too High`)
        }
}

function displayGuess(guess) {
    // Display guess logic here
    userInput.value =''
}

function displayMessage(message) {
    // Display message logic here
}

function endGame() {
    // End game logic here
}

function newGame() {
    // New game logic here
}

document.querySelector('body').style.background = '#347245';
document.querySelector('h1').style.color = 'blue';
document.querySelector('p').style.cssText = 'color: orange; font-size: 30px; font-family: Arial;';

document.querySelector('.form').style.cssText = `
    border: 2px solid black;
    border-radius: 20px;
    height: 20rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

document.querySelector('#subt').style.cssText = `
    height: 50px;
    border-radius: 20px;
    background-color: yellow;
    color: black;
    font-size: 20px;
    font-family: sans-serif;
    margin: 12px;
`;

document.getElementById('guess2').style.cssText = `
    padding:0;
    margin: 0;
    font-size: 30px;
    font-family: sans-serif;
`;
