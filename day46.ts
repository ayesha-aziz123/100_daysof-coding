// Q 136 - Use console.log() to debug and track the value of a variable inside a loop.
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}, i value:, i`); // Logs the current iteration number and the value of i
}

// Q 137 - Implement a try-catch block to handle potential errors in a block of code.

try {
  //intentionally cause an error
  throw new Error("Something went wrong");
} catch (error) {
  // console.log(error.message); ///logs the error
}

// Q 138 - Describe how to use breakpoints in browser developer tools to debug JavaScript code.
console.log("Before break point ");

console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);

console.log("After break point");
