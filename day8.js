"use strict";
// 22. Intentional Error: If you haven’t received an array index error in one of your programs 
Object.defineProperty(exports, "__esModule", { value: true });
//Error
const days = ["monday", "sunday", "saturday"];
// console.log(days{4}); //index error
console.log(days[2]);
// 23. Conditional Tests: Write a series of conditional tests. 
///createing car variable
let car = 'subaru';
//Test No 1
console.log("Is car == 'subaru'? I predicted True");
console.log(car == 'subaru');
//Test No 2
console.log("Is car.Uppercase == 'subaru'? I predicted False");
console.log(car.toUpperCase() == 'subaru');
//Test No 3
console.log("Is car !== 'Taxi'? I predicted True");
console.log(car !== 'Taxi');
//Test No 4
console.log("is car =='bus'? I pridicted False");
console.log(car == 'bus');
//Test No 5
console.log("Is car !== 'truck'? I predicted True");
console.log(car !== 'truck');
//Test No 6
console.log("Is car == 'SUBARU'? I predicted False");
console.log(car == 'SUBARU');
//Test No 7
console.log("Is car !== 'Honda'? I predicted True");
console.log(car !== 'Honda');
//Test No 8
console.log("Is car == 'Train'? I predicted False");
console.log(car == 'Train');
//Test No 9
console.log("Is car == 'subaru'? I predicted True");
console.log(car == 'subaru');
//Test No 10
console.log("Is car == 'cycle'? I predicted False");
console.log(car == 'cycle');
// 24. More Conditional Tests:
///Equality test with string
let apple = "apple";
console.log("Equality test with string: ", ("apple" == apple));
///unequality test with string
console.log("unequality test with string: ", ("apple" !== apple));
// Tests using the lower case function
console.log("Lower case function equal to test: ", "HELLO".toLowerCase() == "hello");
console.log("Lower case function not equal to test: ", "HELLO".toLowerCase() !== "hello");
//Numerical test involving Equality
console.log("Equality test with numbers: ", 30 === 30);
//Numerical test involving InEquality
console.log("InEquality test with numbers: ", 26 == 35);
//  greater than 
console.log("Greater than test: ", 10 > 5);
//Less Than
console.log("less than test: ", 5 > 10);
// greater than or equal to, 
console.log("Greater than or Equal to: ", 10 >= 10);
// and less than or equal 
console.log("Less than or equal test: ", 5 >= 15);
//  Tests using "and" operators
console.log("And operators test: ", 5 === 5 && 10 > 5);
// /  Tests using "or" operators
console.log("or operators test: ", 5 !== 5 || 10 < 5);
///ceate array
const fruits = ["Nashpati", "Mango", "Banana"];
// Test whether an item is in array
console.log("Test Nashpati is array: ", fruits.includes("Mango"));
//Test whether an item is not in a array
console.log("Testing Apple is not array: ", fruits.includes("Apple"));
