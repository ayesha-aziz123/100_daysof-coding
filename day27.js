"use strict";
// 💡Question_79: Creating and Accessing Object Properties: Construct an object representing a car with 
// properties for make, model, and year. Then, show how you can access the model property of the car.
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    make: "honda",
    model: "civic",
    year: 2024
};
console.log(car.model);
// 💡Question_80: Updating Object Properties: Add a property named color to the existing car object, and
//  then update the year paroperty to 2021. Show how to perform these operations.
let Car1 = {
    make: "Toyota",
    model: "corolla",
    year: 2020
};
Car1['color'] = "red";
Car1.year = 2023;
console.log(Car1);
// 💡Question_81: Iterating Over Object Properties: Write a function that takes an object
//  as an argument and logs all of its properties and values.
let Car = {
    make: "toyota",
    model: "marcitize",
    year: 2022,
};
function IteratingOverObject(obj) {
    for (let elem in obj) {
        console.log(`${elem}: ${obj[elem]}`);
    }
}
IteratingOverObject(Car);
