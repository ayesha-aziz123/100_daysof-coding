"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 💡Question_64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
function combineStringsAndNumber(text, number) {
    return text + number;
}
console.log(combineStringsAndNumber("Age:", 22));
// 💡Question_65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(remainder(70, 4));
// 💡Question_66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function checkBalance(value1, value2) {
    return value1 && value2;
}
console.log(checkBalance(true, false));
