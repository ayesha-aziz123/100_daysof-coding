"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = exports.add = void 0;
//task 130
function add(a, b) {
    return a + b;
}
exports.add = add;
//task  131 
class person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello my name is ${this.name}`);
    }
}
exports.person = person;
//exports the person class
// task 132
class calculator {
}
exports.default = calculator;
