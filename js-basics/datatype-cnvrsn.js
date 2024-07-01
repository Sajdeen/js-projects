let score = undefined
let age = "eight"
console.log(typeof score);
console.log (typeof (age));

let valueInNumber = Number(score)
console.log (typeof valueInNumber);
console.log(valueInNumber);

//"33" =>33
//"99abc" => NaN (Not a number)
//true => 1;false =>0

let  isLoggedIn = "sajdeen"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
//"sajdeen" =>true 

 let someNumber = 99

 let stringNumber = String(someNumber)
 console.log(stringNumber);
  console.log(typeof(stringNumber));

  //*****************Operations******* */
  let value =3
  let negValue =-value
  console.log(negValue);

  console.log(9+8);
  console.log(9-8);
  console.log(9*8);
  console.log(9/8);





  //********Stack Primitive,Heap Primitive */

  let myYoutubename = "sajdeen876@gmail.com"
  let anothername = "rahman"
console.log (myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "sajdeen876@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
