// Question 106: Determine if a given year is a leap year using comparison operators.
// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.

function leapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

console.log(leapYear(2020));   //true
console.log(leapYear(2010));   //false
console.log(leapYear(2000));   //true
console.log(leapYear(2024));   //true

// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

// Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.
function divisible(num: number): boolean {
    return num % 2 === 0 && num % 3 === 0
}
console.log(divisible(12));  //true
console.log(divisible(50));  //false
console.log(divisible(13));  //false



// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
function caseString(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase()
}
console.log(caseString("AYESHA", "ayeshaaaa"));  //false
console.log(caseString("coding", "Coding"));     //true

