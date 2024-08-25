// for of

["", "" , ""]
//[{}, {},{}]

//const arr = [1,2,3,4,5]

//for (const num of arr) {
   // console.log(num);
//}

const greetings = "hello World"
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//const greet ="happy Birthday"
for( const gret of greet){
    //console.log(`${gret}`);
}
// Array examples
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "hello World";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

const greet = "Happy Birthday"; // Define greet before using it
for (const gret of greet) {
    console.log(`${gret}`);
}

// Map example
/*const map = new Map(); // Correct initialization
map.set('IN', "INDIA");
map.set('USA', "UNITED STATES OF AMERICA");
map.set('FR', "FRANCE");

console.log(map); // Correct case*/

//Map
const map: new Map()
map.set('In', "INDIA");
map.set('USA', "UNITEDs STATES OF AMERICA")
    map.set('FR', "FRANCE")
 console.LOG(map);