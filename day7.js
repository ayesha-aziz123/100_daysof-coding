"use strict";
// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guest = ["aman", "muzammil", "burhan", "usama", "hamza"];
console.log(`I am inviting ${guest.length} people to dinner`);
// Question 20: Think of something you could store in an array.
//  For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.
let cities = ["karachi", "islamabad", "lahore", "quetta", "peshawar"];
console.log("cities to visit :");
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
// Question 21: Think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.
let person_information = { name: "Ayesha", cast: "shaikh", age: 18 };
console.log(person_information);
