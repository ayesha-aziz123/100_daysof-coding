"use strict";
// Q 112 - Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
Object.defineProperty(exports, "__esModule", { value: true });
const countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
// Q 113 - Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
const country = new Map();
country.set("USA", "Washington, D.C.");
country.set("PAKISTAN", "Islamabad.");
country.set("INDIA", "Dehli.");
console.log(country);
function checkCountry(country) {
    if (country.has("PAKISTAN")) {
        console.log(`The Capital of Pakistan is ${country.get("PAKISTAN")} `);
    }
    else {
        console.log("Pakistan is not in the map");
    }
}
checkCountry(country);
// Q 114 - Iterate over a Map of student IDs and names, and log each pair to the console.P
let students = new Map();
students.set("ayesha", 3667);
students.set("maryam", 3899);
students.forEach((id, name) => {
    console.log(`Student ID: ${id}, Name ${name}`);
});
