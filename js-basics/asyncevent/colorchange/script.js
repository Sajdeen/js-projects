//generate a random color

const randomcolor = function(){
    const hex ="0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random () * 16)]
    }
    return color;
};

const startChangingColor = function(){};

document.querySelector("#Start").addEventListener('click', startChangingColor)