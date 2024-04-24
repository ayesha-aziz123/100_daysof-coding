"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 103: Write a function that returns a random boolean value, true or false.
function getRandomBoolean() {
    return Math.random() > 0.5;
}
console.log(getRandomBoolean()); //false
// Question 104: Create a function that generates a random hexadecimal color code.
function randomHexa() {
    let color = '#' + Math.floor(Math.random() * 0xffffff).toString(14).padStart(6, '0');
    return color;
}
console.log(randomHexa());
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
