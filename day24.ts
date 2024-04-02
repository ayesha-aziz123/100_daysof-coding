// 💡Question_70: Understanding let in loops: Write a function that uses as loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function printNumberWithLet() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
} printNumberWithLet()

// 💡Question_71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let age = 18;
age = 18;
console.log(`Age: ${age}`);

const gender = "Male";
try {
    gender = "Female";  //const-declared variable and
} catch (error) {
    console.log(error.message); ////const-declared variable and catch the error
}

// 💡Question_72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let blockLet = "\nvariable inside the block";
    const blockConst = "also only visible inside the block"

    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(blocklet); //this will be fail showing Error

} catch (error) {
    console.log("blockLet is not accessible to outside the Block");

}
try {
    console.log(blockConst);  //this will be fail showing Error

} catch (error) {
    console.log("blockConst is not accessible to outside the Block");
}

