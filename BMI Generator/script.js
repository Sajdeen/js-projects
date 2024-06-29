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
});