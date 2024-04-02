// 💡Question_76: Function Parameters and Return Values. Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
function adds(x: number, y: number) {
    return x + y
}
let result = adds(3, 5)
console.log(result);


// 💡Question_77: Default Parameters: Write a function that greets a user, It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function userName(name: string = "Alice") {
    console.log(`Hello ${name}`)
}
userName("Ayesha")
userName()


// 💡Question_78: Function Expression vs Function Declarations: Compare function expressions and declarations by cratting one of each that performs the same task, such as squaring a number

function squareDeclarations(num: number): number {
    return num * num
}
//function Expression use squaring Number
const squareExpression = function (num2: number): number {
    return num2 * num2
}
console.log(squareDeclarations(10));
console.log(squareExpression(10));
