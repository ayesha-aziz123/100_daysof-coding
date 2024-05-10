"use strict";
//⭐ Q 142 - Create a Promise that resolves with "Hello, World!" after 2 seconds.
Object.defineProperty(exports, "__esModule", { value: true });
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello World");
    }, 2000);
});
helloPromise.then((message) => console.log(message));
// ⭐ Q 143 - Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
const conditionPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.floor(Math.random() * 10);
        if (num > 5) {
            resolve("Success");
        }
        else {
            reject(new Error("failure"));
        }
    }, 3000);
});
conditionPromise.then((message) => console.log("you are ", message));
conditionPromise.catch((error) => console.error(error.message)); //an error is type of unknown
// ⭐ Q 144 - Explain the use of the Promise.all() method with an example.
const promise1 = Promise.resolve(2);
const prmise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, prmise2, promise3]).then((values) => {
    console.log(values);
});
