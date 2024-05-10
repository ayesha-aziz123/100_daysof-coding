"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q 145 - Create a function that accepts a callback and invokes it with some arguments.
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
// Example callback function that adds two numbers
const add = (a, b) => {
    console.log(a + b);
};
executeCallback(add, 5, 5);
// Q 146 - Show an example of a callback function used to filter an array of numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNumbers = numbers.filter((number) => number > 5);
console.log(filteredNumbers); ///output [6, 7, 8, 9, 10]
// Q 147 - Explain how to handle errors in a callback pattern.
// function fetching (){}
function fetching(callbacks) {
    let er = new Error("You have an error");
    let data = "Governor Initiative of AI web 3.0 ans Meta verse";
    if (Math.random() > 1) {
        callbacks(null, data);
    }
    else {
        callbacks(er);
    }
}
fetching((error, data) => {
    if (error) {
        console.log(console.error(error.message));
    }
    else {
        console.log(data);
    }
});
