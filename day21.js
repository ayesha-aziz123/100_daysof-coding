"use strict";
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example. 
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicles;
(function (Vehicles) {
    Vehicles["car"] = "Car";
    Vehicles["truck"] = "Truck";
    Vehicles["motorcycle"] = "Motorcycle";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.car);
console.log(Vehicles.truck);
console.log(Vehicles.motorcycle);
let studentData = {
    name: "Ayesha",
    age: 18,
    courses: ["generative AI", "dataStructure", "Metaverse"]
};
console.log(studentData);
let circle = {
    kind: "circle",
    radius: 5
};
let rectangle = {
    kind: "rectangle",
    height: 25,
    width: 10,
};
console.log(circle);
console.log(rectangle);
