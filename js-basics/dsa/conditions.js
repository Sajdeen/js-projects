// Valid voter

 var   age=prompt(" what is your  age?"); // prompt always returns a string
 console.log (age);
 console.log(typeof age);


 var   ans = Number( prompt(" what is your  age?") );// converting string to number so here 
console.log (ans);
console.log(typeof ans);
    
if (ans >= 18) {
    console.log("You are  valid voter");
}else{
    console.log("you are not eligible");
}