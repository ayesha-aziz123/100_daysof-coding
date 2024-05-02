"use strict";
// Q 130 - Explain how to export a function from one JavaScript file and import it into another file
Object.defineProperty(exports, "__esModule", { value: true });
const day44_export_js_1 = require("./day44_export.js");
console.log((0, day44_export_js_1.add)(10, 70)); //output 80
//importing the add function from export.ts using
// Q 131 - Create two modules; one that exports a class, and another that imports the class and creates an instance.
const day44_export_js_2 = require("./day44_export.js");
const confirm = new day44_export_js_2.person("Alice");
confirm.greet();
