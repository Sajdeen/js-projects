const form = document.querySelector('form')
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

if (isNaN(height) === '' || height <= 0 || isNaN (height)){
    results.innerHTML = `Please give a valid height ${height}`;
}else if(isNan(weight) === '' || weight< 0 || isNan(weight)){
    results.innerHTML = `Please give a valid height ${height}`;
}else{
 const bmi = (weight / ((height*height)/10000)).toFixed(2)
 //show the result
 results.innerHTML =<span>${bmi}</span>
=======
const form = document.querySelector('form')
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

if (height === '' || height < 0 || is NaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
}
results.innerHTML = `${height}`;

const form = document.querySelector('form')
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

if (height === '' || height < 0 || isNaN (height)){
    results.innerHTML = `Please give a valid height ${height}`;
}
results.innerHTML = `${height}`;
))