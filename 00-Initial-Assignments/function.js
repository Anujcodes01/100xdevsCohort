// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

let Name = "Anuj";
function greeting(Name) {
    console.log("hello " + Name);
}

greeting(Name)

// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.

let paraOne = 23;
let paraSecond = 23;
function addTwoParameters(paraOne, paraSecond) {
    console.log(paraOne + paraSecond);

}

addTwoParameters(paraOne, paraSecond)

// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

let time = 2;
function greetingMessage(time) {
    if (time > 4 && time < 12) {
        console.log("good morning");

    }
    else if (time >= 12 && time <= 15) {
        console.log('good noon');

    }
    else if (time > 15 && time < 22) {
        console.log('good evening')
    }
    else {
        console.log("good night ");
    }
}

greetingMessage(time)

// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

// similar datatypesquestions.js Question-5



// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

const power = (base, exponent) => {
    return base ** exponent
}

console.log(power(2, 3))


// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

const primeNumber = (Number) => {
    if (Number <= 0) return false;

    for (let i = 2; i < Number; i++) {
        if (Number % i == 0) return false;

    }
    return true;
}



console.log(primeNumber(11));

// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.


const globalVariable = 10;

const localVariable = () => {
    
        const localVariable = 20;
    
        console.log(`Global Variable: ${globalVariable}`);
    
        console.log(`Local Variable: ${localVariable}`);
    
    }

localVariable();

console.log(`Global Variable: ${globalVariable}`);

// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.



const outerFunction = () => {

    const outerVariable = 10;

    const innerFunction = () => {

        console.log(`Outer Variable: ${outerVariable}`);

    }

    return innerFunction;

}

const innerFunction = outerFunction();

innerFunction();

// Question-9:  Write a recursive function to calculate the factorial of a given number.

















// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).




