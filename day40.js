"use strict";
// Q 118 - Write a loop that logs numbers from 1 to 10 to the console.
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Q 119 - Create a while loop that logs "Hello, World!" 5 times.
let count = 0;
while (count < 5) {
    console.log("Hello World"); //logs hello world
    count++; //loop 5 times
}
// Q 120 - Use a for...of loop to iterate through an array of your favorite movies and log each one.
const favorite_movie = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
];
for (let movies of favorite_movie) {
    console.log(movies);
}
