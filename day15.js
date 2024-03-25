"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. 
Object.defineProperty(exports, "__esModule", { value: true });
// Array of magician's names
let magicians = ["Ayesha", "hafsa", "Maryam", "Moiz"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
// 44. Sandwiches: Write a function that accepts a array of items 
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
function createCar(manufacturer, model, ...extras) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let extra of extras) {
        car[extra[0]] = extra[1];
    }
    return car;
}
let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2024]);
console.log(myCar);
