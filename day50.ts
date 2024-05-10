// ⭐ Q 148 - Demonstrate the use of the setTimeout() function to execute code after a delay.
setTimeout(() => {
  console.log("I love Typescript");
}, 4000);


//⭐ Q 149 - Explain the concept of the event loop in JavaScript with an example.

console.log("First");
setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Third");


// ⭐Q 150 - Describe how asynchronous callbacks differ from synchronous code execution.

console.log("Before Synchronous operation");
for (let i = 0; i < 5; i++) {
  console.log("Synchronous operation");
}
console.log("After Synchronous operation");

setTimeout(() => {
  console.log("asynchronous operation");
}, 1000);
console.log("After asynchronous operation");
