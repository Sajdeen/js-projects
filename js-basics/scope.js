//var c =100
let a = 500  //local scope

if(true){//block scope
    let a = 10 
const b = 20
 //var c =30
//console.log("Inner: ", a);

}

for(let i=0; i < Array.length; i++){
    const element = Array[i];
}
//console.log(a);
//console.log(b);
//console.log(c);


//nested scope
function one(){
    const username = "Sajdeen"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website);
two()
}
//one()

if (true){
    const username = "Sajdeen"
    if (username === "Sajdeen"){
        const website = " youtube"
        //console.log(username + website);
    }

  //  console.log(website);
}
//console.log(username);

//+++++++++++Intresting++++++++++//



function addOne(num){
    return num + 1
}

console.log(addOne(5))


addTwo(5)
const addTwo = function(num){
    return num +2
}

 //console.log(addTwo(5))