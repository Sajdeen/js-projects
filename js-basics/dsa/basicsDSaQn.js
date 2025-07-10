//Q:Calculate area and perimeter of a rectangle?

let a = 5;
let b = 10;

console.log("perimeter of rectangle is: " + 2 * (a + b));
console.log("area  of rectangle is:" + ( a * b)) ;     

//Q2:Calculate the herons formula of a triangle?

let side1 = 5;
let side2 = 6;  
let side3 = 7;

let s = (side1 + side2 + side3) / 2;
console.log("s is: " + s);
console.log ("herons form:" + Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)));
console.log(Math.trunc( Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))));

//Q3:Calculate the circumference  of a circle?//2*pi*r

let radius = 12;
//let pi = 3.14;
let pi = Math.PI;
console.log(2 *  Math.PI * radius);
console.log ( Number   (2 *  Math.PI * radius).toFixed(3)) ; 