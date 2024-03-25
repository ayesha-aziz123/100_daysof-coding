"use strict";
// 💡Question_52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
//  Include its brand, model, and other key features like how much storage it has, the size of its screen,
//  and how long its battery lasts.
Object.defineProperty(exports, "__esModule", { value: true });
let SmartPhone = {
    Brand: "Apple",
    Model: " I phone 15 pro max",
    screen: {
        storage: 560,
        batteryCapacity: "5000 mah",
        color: "gray",
        ScreenSize: "4.6 inch",
        batterytime: "longer"
    },
};
console.log(SmartPhone);
// 💡Question_53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows
// what a computer programmer knows, like coding languages, tools, and software frameworks. 
// Find a way to get three specific skills from this list and show them.
let programmersWork = {
    languages: ["TypeScript", "JavaScript", "Html", "Python"],
    Tools: ["Git", "Webpack", "Docker"],
    FrameWorks: ["Angular", "React", "Vue"],
};
let { languages, Tools, FrameWorks } = programmersWork;
console.log(`languages: ${languages[0]}, Tool: ${Tools[0]}, FrameWorks: ${FrameWorks[1]}`);
// 💡Question_54:Making Flexible Object Keys: Learn how to set up a list where you can change the name 
//   of each section based on what you need at that moment, like adjusting labels based on user choices
//function is a way to make flexible list
function objectWithDyanamicKey(key, value) {
    let dynamicObject = [key, value];
    return dynamicObject;
}
let userPreference = objectWithDyanamicKey("Theme", "Dark");
console.log(userPreference);
