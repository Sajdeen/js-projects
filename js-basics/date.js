// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// Define myCreatedDate with corrected date format
let myCreatedDate = new Date("07-02-2024");

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // Gets the time in milliseconds since Jan 1, 1970
console.log(Date.now() / 1000); // Gets the current timestamp in seconds
console.log(Math.floor(Date.now() / 1000)); // Gets the current timestamp in seconds, rounded down

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // Returns the month (zero-based index, so July is 6)
console.log(newDate.getDate()); // Returns the day of the month
console.log(newDate.getDay()); // Returns the day of the week (Sunday is 0)

// Example of using toLocaleString with options
console.log(newDate.toLocaleString('default', {
  weekday: 'long',
  timeZone: 'UTC'
}));

