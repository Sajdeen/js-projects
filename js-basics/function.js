function sayMyName(){
    console.log("S");
  console.log("J");
    console.log("D");

   console.log("S");
}
//sayMyName()
//function addTwoNumbers(number1,number2){
  // console.log (number1 + number2);
//}

function addTwoNumbers(number1,number2){
   //let result = number1 + number2
   console.log("sajdeen"); 
   //return result
   return number1 + number2
   

}
const result = addTwoNumbers(3,4)
//console.log("Result: ", result);

function loginUserMessage(username = "saj"){
  // if(username === undefined)
  if(!username)
      {
console.log("Please ente a username");
return
   }
   return`${username} just logged in`
}

//console.log(loginUserMessage("sajdeen"))//O/p  sajdeen just logged in
//console.log(loginUserMessage(""))// O/p just logged in
//console.log(loginUserMessage("sakinas"))//when we dont pass the value it comes undefined

function calculateCartPrice(val1,val2,...num1){
   return num1
}
//console.log(calculateCartPrice(200,400,520,5222))

const user = {
   username: "sajdeen",
   price:199
}
function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
   username: "sajdeen",
   price:199
})

const myNewArray = [200, 400, 5000, 600]
function returnSecondValue(getArray){
   return getArray[2]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,5000,600]));

