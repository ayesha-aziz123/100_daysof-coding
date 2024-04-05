// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and
//  returns the number rounded to the nearest integer.

// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.

function rounder(a: number) {
  return Math.round(a)
}
console.log(rounder(34.4)); //34
console.log(rounder(45.6));  //46


// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number
//  (like "123") and converts it into an actual number type.

function converter(x: string) {
  return parseInt(x)

}
console.log(converter("123"));
console.log(converter("34.6"));//it did'nt write decimal


function converter2(x: string) {
  return parseFloat(x)
}
console.log(converter2("123"));
console.log(converter2("34.6"));//it write deimal





// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN 
// (Not a Number) and return a boolean result.

// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to a number. 
// It's useful for validating inputs or results of calculations.

function nanChecker(a: any) {
  return isNaN(a)
}
console.log(nanChecker(1234));  //false
console.log(nanChecker("ayesha")); //true
console.log(nanChecker(undefined)); //true
