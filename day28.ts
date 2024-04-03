// Question 82: Find the Length of a String: Write a function that takes 
// a string as an argument and returns the number of characters in the string.

// Explain & TIP: The .length property of a string gives you the total number of characters it contains,
//  helping you understand more about the data you're working with.
function lengthCount(str: string) {
    return str.length
}

console.log(lengthCount('ayesha'));


// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then lowercase, and logs both.

// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, 
// useful for formatting or comparing strings.

function converts(str: string) {
    let upperCase = str.toUpperCase();
    let lowercase = str.toLowerCase();

    console.log("UpperCase:", upperCase, "lowercase:", lowercase);

}
converts("hello world")


// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.
function replacer(sentence: string) {
    return sentence.replace(/javascript/g, "Typescript")
}
console.log("I love to code in javascript and javascript is my love ");
