"use strict";
/***************
 * UNION TYPES *
 ***************/
Object.defineProperty(exports, "__esModule", { value: true });
let myVar;
myVar = "Alice";
console.log(myVar);
myVar = 10;
console.log(myVar);
/*****************
 * LITERAL TYPES *
 *****************/
let direction;
console.log("left");
//Here's an example of using a literal type in a function parameter:
function setColor(color) {
    console.log(color);
}
console.log("red");
/******************
 * NULLABLE TYPES *
 ******************/
let userName = "Alice";
let ageEx;
function greetUser(userName) {
    if (userName === null) {
        console.log(`Hello, Guest!`);
    }
    else {
        console.log(`Hello ${userName}!`);
    }
}
greetUser(null);
greetUser("Alice");
let myname = "ayesha";
let string = "Alice";
let num = 12;
const alice = {
    name: "Alice",
    age: 18,
    subject: ["Physics", "Chemistry", "Computer"],
    emailAddress: "alice@example.com",
};
const bob = {
    name: "Alice",
    age: 20,
    subject: ["Physics", "Chemistry", "Computer"],
};
console.log(alice);
console.log(bob);
const person = {
    name: "alice",
    age: 20,
    address: "123 Main St",
    phone: 123 - 456 - 7890,
};
console.log(person);
