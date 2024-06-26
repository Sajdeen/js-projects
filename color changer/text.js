const buttons = document.querySelectorAll(".button");
const h1 = document.querySelector(".head");
const body = document.querySelector("body");

buttons.forEach(function(button){
   console.log(button);
   button.addEventListener('click', function(e){
       console.log(e);
       console.log(e.target);
       if(e.target.id === 'grey','h1'){
           body.style.backgroundColor = e.target.id;

           h1.style.color = grey;
       }
       if(e.target.id === 'Red'){
           body.style.backgroundColor = e.target.id;
       }
       if(e.target.id === 'blueviolet'){
           body.style.backgroundColor = e.target.id;
       }
       if(e.target.id === 'green'){
           body.style.backgroundColor = e.target.id;
       }

       if(e.target.id === 'yellow'){
           body.style.backgroundColor = e.target.id;
       }
   })
   
});

//console.log("Hello everyone!");