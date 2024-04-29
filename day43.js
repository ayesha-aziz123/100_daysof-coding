"use strict";
// Q 127 - Convert a traditional function expression to an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
//traditional function :
const traditional = function (a, b) {
    return a + b;
};
//Arrow function :
const arrow = (a, b) => a + b;
//log
console.log(traditional(10, 80)); //output 90
console.log(arrow(10, 80)); //output 90
// Q 128 - Create an arrow function that takes multiple parameters and returns the product of all parameters.
const multipleParameters = (...numbers) => numbers.reduce((total, num) => total * num, 1);
//log
console.log(multipleParameters(2, 4, 3)); //output 24
// Q 129 - Explain how this behaves differently in arrow functions compared to traditional functions.
const traditionalVsArrow = {
    property: "'Traditional values' vs 'arrow value'",
    traditional: function () {
        console.log(`Traditional value: ${this.property}`);
    },
    arrowFunction: () => {
        // console.log(`Arrow Function: ${this.property}`)
    }
};
traditionalVsArrow.traditional();
traditionalVsArrow.arrowFunction();
