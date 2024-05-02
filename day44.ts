// Q 130 - Explain how to export a function from one JavaScript file and import it into another file

import { add } from "./day44_export.js";

console.log(add(10, 70));  //output 80
//importing the add function from export.ts using

// Q 131 - Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { person } from "./day44_export.js";

const confirm = new person("Alice");

confirm.greet()

// Q 132 - Discuss the difference between default and named exports in JavaScript modules.

import { until1, until2 } from "./day44_calculator.js";

import calculator from "./day44_export.js";
