/***************
 * UNION TYPES *
 ***************/

let myVar: string | number;
myVar = "Alice";
console.log(myVar);

myVar = 10;
console.log(myVar);

/*****************
 * LITERAL TYPES *
 *****************/

let direction: "left" | "right" | "up" | "down";

console.log("left");

//Here's an example of using a literal type in a function parameter:

function setColor(color: "red" | "green" | "blue") {
  console.log(color);
}

console.log("red");

/******************
 * NULLABLE TYPES *
 ******************/
let userName: string | null = "Alice";
let ageEx: number | null;

function greetUser(userName: string | null) {
  if (userName === null) {
    console.log(`Hello, Guest!`);
  } else {
    console.log(`Hello ${userName}!`);
  }
}
greetUser(null);
greetUser("Alice");

/**************
 * TYPE ALIAS *
 **************/

type myString = string;

let myname: myString = "ayesha";

type myStringOrNumber = string | number;

let string: myStringOrNumber = "Alice";
let num: myStringOrNumber = 12;

///another example

type student = {
  name: string;
  age: number;
  subject: string[];
  emailAddress?: string;
};
const alice: student = {
  name: "Alice",
  age: 18,
  subject: ["Physics", "Chemistry", "Computer"],
  emailAddress: "alice@example.com",
};
const bob: student = {
  name: "Alice",
  age: 20,
  subject: ["Physics", "Chemistry", "Computer"],
};
console.log(alice);
console.log(bob);

// /*********************
//  * INTERSECTION TYPE *
//  *********************/
type firstType = {
  name: string;
  age: number;
};
type secondType = {
  address: string;
  phone: number;
};

type combine = firstType & secondType;

const person: combine = {
  name: "alice",
  age: 20,
  address: "123 Main St",
  phone: 123 - 456 - 7890,
};
console.log(person);
