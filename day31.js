"use strict";
// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Adding elements to an array can be easily done using the .push() method. It allows you to add new items to the end of an array.
let favFruits = ["mango", "lichi", "orange"];
console.log(favFruits);
favFruits.push("apple");
console.log(favFruits);
// Question 92: Write a function to remove the last element from an array and return the removed element.
// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.
function itemRemover(a) {
    return `Delete items: ${[a.pop()]}`;
}
let arr = ["banana", "pineapple", "apple"];
console.log(arr);
console.log(itemRemover(arr));
console.log(arr);
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use 
// that index to set a new value with array bracket notation.
function replaceBananawithMango(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1) {
        fruits[index] = "mango";
    }
}
const fruits = ["Apple", "Banana", "orange"];
console.log(fruits); //original array
replaceBananawithMango(fruits);
console.log(fruits); //replace array
