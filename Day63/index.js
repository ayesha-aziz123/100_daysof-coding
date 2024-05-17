"use strict";
//Using Type Annotations with Variables:
Object.defineProperty(exports, "__esModule", { value: true });
//You can explicitly annotate variable types in the following way
let myNumberExOne = 42;
let myStringExOne = "Hello, TypeScript";
console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);
//Another way to write this code is as follows:
let myNumberExTwo;
let myStringExTwo;
myNumberExTwo = 42;
myStringExTwo = "Hello, TypeScript";
console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);
//dynamic type determination
let greeting = "Hello, world!";
console.log(greeting);
//Any Type
let myVariable = 42;
myVariable = "Hello, TypeScript";
console.log(myVariable);
