//Declare a variable using var, assign it a number, and log the value to the comsole.
var myVar = 10

console.log(myVar);

//Task2: Declare a variable using let, assign it a string, and log the value to the comsole.

let str = "Sajdeen";
console.log(str);

//Task3: Declare a variable using const, assign it a boolean value, and log the value to the comsole.

const booln = true;
console.log(booln);

//Task4: Create a variable of different datatypes(num,boolean, array,string,object) and log each variables types using the typesof operator.

//Number
let num = 3
console.log(num);
console.log(typeof num);

//string
let abc = "saj"
console.log(abc);
console.log(typeof abc);

//booln
let boolean = true// Using let for reassignment
let v = "Initial value (let)";
console.log("Before reassignment (let):", variableLet);  // Output: Before reassignment (let): Initial value (let)

variableLet = "Changed value (let)";
console.log("After reassignment (let):", variableLet);   // Output: After reassignment (let): Changed value (let)

// Using const for reassignment attempt (will result in an error)
const variableConst = "Initial value (const)";
console.log("Before reassignment (const):", variableConst);  // Output: Before reassignment (const): Initial value (const)

try {
    variableConst = "Changed value (const)";
} catch (error) {
    console.log("Error message (const):", error.message);  // Output: Error message (const): Assignment to constant variable.
}

console.log("After reassignment attempt (const):", variableConst);  // Output: After reassignment attempt (const): Initial value (const) (unchanged)

console.log(boolean);
console.log(typeof boolean);

//Array
let arr = [0,1,2]
console.log(arr);
console.log(typeof arr)

let array = [0,[1,2]]
console.log(array);
console.log(typeof array);

//array
const fruits = ["apple", "mango", "orange"]
console.log(fruits);
console.log(typeof fruits);

const fruitis = [];
fruits.push("banana", "apple", "peach");
console.log(fruitis.length); 
console.log(typeof fruitis);

let myArray = [0, [1, 2]];
console.log(myArray);          
console.log(typeof (myArray)); 


//Act:4:> Reassigning Variables
//Task: Declare a variable using let, assign it an initial value,reassign a new value and log both value to the console.

// Declare a variable using let and assign an initial value
let myVariable = 10;
console.log("Initial value:", myVariable);  

// Reassign a new value to the variable
myVariable = 20;
console.log("New value:", myVariable);     

//Act:5: Understanding Const => Try reassigning a variable declare with const and observe the error.  

const vari = 40;
console.log("Initialvalue", vari);

try{
    vari = 50;
}catch (error){
    console.log("Error", error.message);
}

//Feature a request
//A: Variable type console log:=> Write a scripts that declare a variables of different datatypes and logs both the value and type of each variable to the console.

let numVar = 7
let strVar = "Yaseen"
let bool = false
let arry = [1,2,3];
let nullVar = null;                   // Null
let undefinedVar;                     // Undefined (implicitly undefined)
let objectVar = { name: "Alice" };    // Object

console.log(numVar,strVar,bool,arry);
console.log(numVar,  typeof numVar,strVar, typeof strVar,bool, typeof bool, arry, typeof arry, nullVar, typeof nullVar, undefinedVar, typeof undefinedVar, objectVar,typeof objectVar);

//B: Reassignment demo => Create a script that demonstrate a difference in behavior between let and const when it comes to reassignment.

// Using let for reassignment
let variableLet = "Initial value (let)";
console.log("Before reassignment (let):", variableLet);  // Output: Before reassignment (let): Initial value (let)

variableLet = "Changed value (let)";
console.log("After reassignment (let):", variableLet);   // Output: After reassignment (let): Changed value (let)

// Using const for reassignment attempt (will result in an error)
const reassign = "Initial value (const)";
console.log("Before reassignment (const):", variableConst);  // Output: Before reassignment (const): Initial value (const)

try {
    variableConst = "Changed value (const)";
} catch (error) {
    console.log("Error message (const):", error.message);  // Output: Error message (const): Assignment to constant variable.
}

console.log("After reassignment attempt (const):", variableConst);  // Output: After reassignment attempt (const): Initial value (const) (unchanged)
