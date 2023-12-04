// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

const number1 = 330;
const number2 = 89;

console.log("Multiplication", number1 * number2,)
console.log("Subtraction", number1 - number2,)
console.log("Addition", number1 + number2,)
console.log("Division", number1 / number2,)

// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

let value = 7;


value += 10;
console.log(value)
value -= 10;
console.log(value)
value *= 10;
console.log(value)
value /= 10;
console.log(value)
value %= 10;
console.log(value)
value **= 10;
console.log(value)

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

let num1 = 12;
let num2 = 12;

console.log(num1==num2);
console.log(num1>num2);
console.log(num1<num2);

// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

let a = 23;
let b = 123;

if( a >0 && b>0 ){
    console.log("both are positive");

}
else if ( a>0 || b>0){
    console.log("atleast one element is positive");
}
else {
    console.log("both are negative");
}

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

// bitwise operators : &, |, ^, ~, <<, >>, >>>

let f = 10;

let c = 20;

console.log(b & c);

console.log(b | c);

console.log(b ^ c);

console.log(~b);

console.log(b << 2);

console.log(b >> 2);

console.log(b >>> 2);

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

let x= 8;
let y = 9;

console.log(x>=y ? "greater":"smaller")


// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

// type operators : typeof, instanceof

console.log(typeof 10);

console.log(typeof "Shubh");

console.log(typeof true);

console.log(typeof null);

console.log(typeof undefined);

console.log(typeof [1, 2, 3]);

console.log(typeof { name: "Shubh" });

console.log(typeof function () { });

console.log(typeof new Date());

console.log(typeof new Error());


// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

// string operators : +, +=

let k = "aj";

let g = "di";

console.log(k + g);

console.log(k += g);


// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

// same as Problem 7


// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

const person = {
    name: "Shubh",
    age: 20,
    city: "Mathura"
}

console.log("name" in person);

console.log("age" in person);

console.log("city" in person);