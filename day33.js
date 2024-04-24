"use strict";
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date 
// object provides methods to get the day, month, and year, which you can then assemble into any format you need
Object.defineProperty(exports, "__esModule", { value: true });
function dateformate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
}
console.log(dateformate());
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
// Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which
// gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.
function daysUntil() {
    //get the current date
    let today = new Date();
    let nextYear = today.getFullYear() + 1;
    let newYearDate = new Date(nextYear, 0, 1);
    let differenceInMilliSeconds = newYearDate.getTime() - today.getTime();
    let daysLeft = Math.ceil(differenceInMilliSeconds / (1000 * 60 * 60 * 24));
    console.log(`There are ${daysLeft} days left until new years day of the Next Year `);
}
daysUntil();
// Question 99: Generate a date object representing your next birthday and log it to the console.
// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year
// based on whether the birthday has already occurred this year or not.
function getNextBirth(month, day) {
    let today = new Date();
    let year = today.getFullYear();
    let birthday = new Date(year, month - 1, day);
    //using if satement
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
let nextBirthday = getNextBirth(2, 26);
console.log(`My Next Birthday is on ${nextBirthday.toLocaleDateString()}`);
