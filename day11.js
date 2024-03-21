"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let user_name = ["admin", "Eric", "Hamza", "Irfan", "ayesha"];
if (user_name.length === 0) {
    console.log(" We need to find some users!");
}
else {
    for (let user of user_name) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user} thank you for logging in again`);
        }
    }
}
user_name = [];
if (user_name.length === 0) {
    console.log("we need to find some users!");
}
/*/32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available./*/
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["ali", "hamza", "Haseeb", "Moiz", "Aman"];
let new_users = ["ali", "hamza", "Muskan", "Javeria", "Ayesha"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`yes ${new_user}, is still list available`);
    }
}
/*/33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
7th 8th 9th", and each result should be on a separate line./*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; ///• Store the numbers 1 through 9 in a array.
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
