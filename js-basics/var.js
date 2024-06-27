const accountId = 14452
let accountEmail ="sajdeen012@gmail.com"
var accountPassword = "12345"
accountCity = "rajani"
let accountState;

//accountId = 2


/*
Prefer not to use var because of issue in
block scope and functional scope

*/
console.log(accountId);
accountEmail ="sajen012@gmail.com"; //if we dont use semicolon there is no problem in code so you write code without semicolon under given example
var accountPassword = "12345"
accountCity = "kolkata"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])