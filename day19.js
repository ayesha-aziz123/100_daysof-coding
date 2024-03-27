"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//**Question 55:** Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numbersList = [1, 2, 42, 60];
let doubleNumber = numbersList.map(num => num * 2);
console.log("original list Number:");
console.log(numbersList);
console.log("Double Number each list  in Array:");
console.log(doubleNumber);
//**Question 56:** Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
const mixedItem = [1, "Apple", 4, "Banana", true, 56, null, "mango"];
const onlyString = mixedItem.filter(item => typeof item === 'string');
console.log(onlyString);
///**Question 57:** Find the Average Grade: Given a list of grades, calculate the average grade.
const grades = [56, 87, 100, 58, 88];
const sumGrades = grades.reduce((a, b) => {
    return a + b;
}, 0);
const averageGrades = Math.round(sumGrades / grades.length);
console.log(averageGrades);
