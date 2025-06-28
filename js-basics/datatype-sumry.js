//primitive
//7 types:String.Number, Boolean,null,undefined,Symbol,Bigint


const score  =100
const scoreValue = 100.3

const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false, because symbols are unique

const bigNumber = 1234567890n//BigInt


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