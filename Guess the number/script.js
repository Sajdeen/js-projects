const randomNumber = parseInt(Math.random() * 100 +1); 

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener('Click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log()
       validateGuess(guess)
    })
}
function validateGuess(guess){
    //
}

function checkGuess(guess){
    //
}

function displayGuess(guess){
    //
    }
function displayMessage(message){
//
}

function endGame(){
    //
}

function newGame(){
    //
}

document.querySelector('body').style.background = '#347245';
document.querySelector('h1').style.color ='blue';
//document.querySelector('p').style.color ='orange';
document.querySelector('p').style.cssText = 'color: orange; font-size: 30px; font-family: Arial;';
//document.querySelector('.form').style.border ='2px solid black';border-radius='20px';
//document.querySelector('.form').style.cssText = 'border: 2px solid black;border-radius: 20px; height:20rem;width:20rem; align-items:center;justify-content:center';
document.querySelector('.form').style.cssText = `
    border: 2px solid black;
    border-radius: 20px;
    height: 20rem;
    width: 20rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

document.querySelector('#subt').style.cssText =`
height:50px;
border-radius:20px;
background-color:#10ac84;
color:white;
font-size:20px;
font-family:sans-serif;
margin:12px;

`
document.getElementById('#guess2').style.cssText=`
padding:2px;
margin:0;
font-size:20px;
font-family:sanserif;

`
