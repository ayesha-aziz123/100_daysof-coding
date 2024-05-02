"use strict";
// Q 133 - Write a JavaScript object and convert it into a JSON string.
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Alice",
    age: 18,
    city: "Wonderland"
};
const json = JSON.stringify(person);
console.log(json); //converting in to JSON string
// Q 134 - Take a JSON string and parse it into a JavaScript object.
const jsonString = ' {"name":"Alice","age":30,"city":"Wonderland"}';
const persons = JSON.parse(jsonString);
console.log(persons);
// Q 135 - Explain how you can format a JSON string with proper indentation for readability.
const person2 = {
    name: "Alice",
    age: 18,
    city: "Wonderland"
};
const stringJson = JSON.stringify(person2, null, 2);
console.log(stringJson);
