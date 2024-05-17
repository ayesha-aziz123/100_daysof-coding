/**********************************
 * TYPE ANNOTATIONS WITH FUNCTION *
 **********************************/

// Function to calculate the area of a rectangle
function calculateRectangleArea(length: number, width: number): number {
    return length * width;
}

// Calling the function with valid arguments
const lengthRectAngle = 5;
const widthOfRectAngle = 5;
const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
console.log(`The area of the rectangle is: ${area}`); //25



/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
 **********************************/

// Optional Parameters:
function greetOptional(name: string, age?: number) {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greetOptional("Alice"); // Output: "Hello, Alice!"
greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."

// Default Parameters:
function greetDefault(name: string, age: number = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."



/***************************
* FUNCTION REST PARAMETER *
***************************/

// Function with a rest parameter and type annotations
function addAll(...nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i]; 
    }
    return result;
}

// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 10, 10, + true)); // Output: 81


/******************
* ARROW FUNCTION *
******************/

const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(20, 20)); // Output: 40



// **********************
//  * ANONYMOUS FUNCTION *
//  **********************/

const add = function (num1: number, num2: number): number {
    return num1 + num2;
};
console.log(add(10, 20)); // Output: 30


//***********  void *******************
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
    
}

function noReturnValue(): void {
    // This function doesn't return a value (implicitly returns undefined).
}



//**************   never  ********8
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // This function never exits (infinite loop).
    }
}