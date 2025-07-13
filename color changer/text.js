
const buttons = document.querySelectorAll(".button");
const h1 =document.querySelector(".head");
const body = document.querySelector("body");


const fontcolor = {
    grey: "pink",
    red: "goldenrod",
    blueviolet: "lightblue",
    green: "white",
    yellow: "black"
};

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
    const bgColor = e.target.id.toLowerCase(); // Get the id of the clicked button
    body.style.backgroundColor = bgColor;    
   
    if(fontcolor[bgColor] && fontcolor[bgColor] !== bgColor){
        h1.style.color = fontcolor[bgColor];
    }else{
        h1.style.color = "black"; // Default color if not specified
    }

});
});