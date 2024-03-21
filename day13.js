"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = 'large', text = 'I love typescript') {
    console.log(`you have order a ${size}, shirt that says ${text}`);
}
makeShirt();
makeShirt('medium');
// different message 
makeShirt('small', 'need a big shirt to wear');
// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = 'pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('karachi');
describe_city('Fraunce', 'Europe');
describe_city('lahore', ' punjab');
// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function citycountry(city, country) {
    return `${city}, ${country}`;
}
let c1 = citycountry('lahore', 'pakistan');
let c2 = citycountry('tokyo', 'japan');
let c3 = citycountry('paris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
