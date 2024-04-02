// 💡Question_67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

function arithmetic(a: number, numberWithString: string): number {
    return a + Number(numberWithString)
}
console.log(arithmetic(12, '10'))



// 💡Question_68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
//  Round the result to two decimal places.

function decimalNumber(num1: number, num2: number): number {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(decimalNumber(0.2, 0.4));



// 💡Question_69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function dividingRemainder(dividing: number, divides: number) {
    let quotient = Math.floor(dividing / divides)
    let remainder = dividing % divides;

///create object to store the result
    let result = {
        Quotient: quotient,
        Remainder: remainder
    };

    return result;
}
let result = dividingRemainder(10, 5);
console.log("Quotient :", result.Quotient);
console.log("Remainder :", result.Remainder);



