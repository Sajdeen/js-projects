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
console.log(loginUserMessage("sakinas"))//when we dont pass the value it comes undefined