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
        console.log();
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    // Validation logic here
}

function checkGuess(guess) {
    // Guess checking logic here
}

function displayGuess(guess) {
    // Display guess logic here
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
