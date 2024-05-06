// ⭐ Q 139 - List three reserved words in JavaScript and create a valid use case for each.

// Reserved word: let - used to declare a block-scoped local variable
let count = 10;

// Reserved word: if - used to execute a block of code if a specified condition is true
if (count > 0) {
  console.log("Count is greater than 0");
}

// Reserved word: return - used to exit a function and return a value from that function
function add(a: number, b: number) {
  return a + b;
}
// Demonstrates valid use cases for the reserved words 'let', 'if', and 'return'.

// ⭐ Q 140 - Explain the error that occurs when trying to use a reserved word as a variable name.

// let if = 10 // this line case  a syntax error
console.log(
  "Using a reserved word as a variable name causes a syntax error in JavaScript."
);

// ⭐ Q 141 - Discuss the significance of the await reserved word in asynchronous JavaScript.

let fechSomething = () => {};
async function fetchData() {
  const data = await fechSomething();
  console.log(data);
}

console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);
