// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example. 

enum Vehicles {
    car = "Car",
    truck = "Truck",
    motorcycle = "Motorcycle"
}
console.log(Vehicles.car);
console.log(Vehicles.truck);
console.log(Vehicles.motorcycle);

// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student. 
interface student {
    name: string,
    age: number,
    courses: string[]
}
let studentData: student = {
    name: "Ayesha",
    age: 18,
    courses: ["generative AI", "dataStructure", "Metaverse"]
}
console.log(studentData);

// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape. 

// type alias
type shape = {
    kind: "circle" | "rectangle",
    radius?: number,  //circle
    height?: number,//rectangle
    width?: number //rectangle
}
let circle: shape = {
    kind: "circle",
    radius: 5
}
let rectangle: shape = {
    kind: "rectangle",
    height: 25,
    width: 10,
}
console.log(circle);
console.log(rectangle);
