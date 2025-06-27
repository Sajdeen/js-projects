const accountId = 14452;
let accountEmail = "sajdeen012@gmail.com";
let accountPassword = "12345";
var accountCity = "rajani";
let accountState;

//accountId= 2 //not allowed as it is a constant
/*
Prefer not to use var, because of issue in block scope and functional scope.
*/


accountEmail = "sjlkl@gmail.com";
accountCity = "Hyderabad";
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);