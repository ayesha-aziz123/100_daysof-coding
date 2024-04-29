"use strict";
// Q 121 - Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// Q 122 - Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let count = 10;
while (count > 0) {
    if (count === 5) {
        break;
    }
    console.log(count);
    count--;
}
// Q 123 - Create a loop that iterates through a string and stops when it finds the first vowel.
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`first vowel found :${char}`);
            break;
        }
        console.log(char);
    }
}
logUntilVowel("syziygy");
