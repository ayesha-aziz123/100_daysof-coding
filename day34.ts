// Question 100: Use the JavaScript Math object to find the square root of 144.
// Explain & TIP: The Math.sqrt() function is a straightforward way to calculate the square root of any positive
//  number, directly providing the result you need.

function square(a: number) {
    return Math.sqrt(a)
}
console.log(square(144));


// Question 101: Generate a random integer between 1 and 10.
// Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in
//  combination with Math.floor() or Math.ceil() to ensure the result is an integer
function getRandomInteg(): number {
    return Math.floor(Math.random() * 10) + 1;

}
console.log(getRandomInteg());  //random 


// Question 102: Calculate and log the absolute difference between the number -5 and 5.
// Explain & TIP: The Math.abs() function returns the absolute value of a number, which is useful for finding the
//  magnitude  of a difference without regard to direction.
function difference(): number {
    return Math.abs(-5 - 10)
}
difference()
console.log(difference());
