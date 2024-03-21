// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

// add a comment
// /this program print a personal message
let myName ="Ayesha";
console.log(`Hello my name is ${myName} and I am learning programming`);


// Question 11: Names: Store the names of a few of your friends in an array called names. 

let friends:string[] = ["aqsa","fatima","halima"];// name array

// print name one at a time
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);


// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

/// make array
let names:string[] = ["aqsa","fatima","halima"];

// send message
let message:string = "would you like to learn typescript";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);