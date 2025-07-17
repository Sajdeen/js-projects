const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0" ,'false' , " ",[], {}, function(){}= empty()


// if (userEmail.length=== 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish  coalescing operator (??): null undefined

let val1;
val1 = 5    ?? 10

val1 = null
console.log(val1); // If val1 is null or undefined, it will return 10