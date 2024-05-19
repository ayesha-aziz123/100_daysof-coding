"use strict";
// ****************//////////////////////////////////*********
//< ============================== ENUMS ==========================>
// ****************//////////////////////////////////*********
Object.defineProperty(exports, "__esModule", { value: true });
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
const today = Days.Wednesday;
console.log(`Today is ${Days[today]}`);
/////////////// Other Example /////////////
var fruits;
(function (fruits) {
    fruits[fruits["mango"] = 0] = "mango";
    fruits[fruits["banana"] = 1] = "banana";
    fruits[fruits["apple"] = 2] = "apple";
    fruits[fruits["lichi"] = 3] = "lichi";
})(fruits || (fruits = {}));
const result = fruits.banana;
console.log(`my favourite fruit is ${fruits[result]}`);
