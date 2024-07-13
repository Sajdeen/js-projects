const accountId = 14452;
let accountEmail = "sajdeen012@gmail.com";
let accountPassword = "12345";
let accountCity = "rajani";
let accountState;

/*
Prefer not to use var because of issues with
block scope and functional scope.
*/

console.log(accountId);

accountEmail = "sajen012@gmail.com";
accountPassword = "12345";
accountCity = "kolkata";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
