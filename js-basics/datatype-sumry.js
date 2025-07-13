//primitive
//7 types:String.Number, Boolean,null,undefined,Symbol,Bigint


const score  =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false, because symbols are unique

//const bigNumber = 1234567890n//BigInt


//reference type(Non Primitive)


//Object,Array,Function

const heros = ["sajdeen", "rahman", "sajdeen"]  
let myObj = {
    name: "sajdeen",
    age: 25, 
}

const myFunction = function(){
    console.log("hello world");

}
console.log(typeof bigNumber);

console.log(typeof outsideTemp);
console.log(typeof score);
console.log(typeof scoreValue);
 console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof isLoggedIn);
console.log(typeof userEmail); //undefined, because userEmail is declared but not assigned a value
console.log(typeof id); //Symbol
console.log(typeof anotherId); //Symbol






//+++++++++++++++++++++++++++++++++\\

//stack(Primitive) vs heap(Non Primitive)
let myYoutubename = "sajdeenramani.com"
let anotherName = myYoutubename;


anotherName = "rahman"

console 
console.log(anotherName);