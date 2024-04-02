"use strict";
// 💡Question_73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
Object.defineProperty(exports, "__esModule", { value: true });
function updateVariable() {
    let x = "Information technology";
    console.log("Initial  value:", x);
    x = "Hello world";
    console.log("updated Value:", x);
}
updateVariable();
// 💡Question_74: Swapping Variables: Demonstrate how to swap the value of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swapValue() {
    let a = 5, b = 10; //initially a is 5 and b is 10
    console.log("Before swap: a =", a, "b =", b);
    let c = a;
    a = b;
    b = c;
    console.log("After swap: a =", a, "b =", b);
}
swapValue();
// 💡Question_75: Compound Assignment Operators : Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
function compoundOperators() {
    let x = 4; //initial x equal to 4
    console.log("\nInitial x:", x);
    x += 2; ///add 2 to x
    console.log("After Addition:", x);
    x -= 4; //subtract 4 to x
    console.log("After Subtraction:", x);
    x *= 1; //multiply 1 to x
    console.log("After multiplication:", x);
    x /= 5; //division 5 to x
    console.log("After  division:", x);
}
compoundOperators(); ///see result arithmetic operators
