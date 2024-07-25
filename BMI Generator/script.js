const form = document.querySelector('form')
//const height = parseInt(document.querySelector('height').Value)
//this usecase will give u empty

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) {
results.innerHTML = `Please give a valid height ${height}`;
    }else
    if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
            }else{
            const bmi = (weight/ ((height*height)/10000)).toFixed(2);

            let bmicategory = '';
            if(bmi < 18.6){
                bmicategory = 'Underweight';
            }else if (bmi >= 18.6 && bmi <= 24.9){
                bmicategory = 'Normal Range';
            }else{
                bmicategory ='Overweight';
            }
        
           //show the result
           results.innerHTML = `<span>Your BMI is ${bmi} (${bmicategory})</span>`
        }


   // results.innerHTML = `${height}`;
});
