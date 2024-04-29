"use strict";
// Q 115 - Use a switch statement to log the days of the week based on a number (1-7).
Object.defineProperty(exports, "__esModule", { value: true });
function logDays1(day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day");
            break;
    }
}
logDays1(1);
// Q 116 - Create a switch case that matches several cases to the same code block, representing seasons.
function season(month) {
    switch (month) {
        case 1:
        case 2:
        case 3:
            console.log("Winter");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Spring");
            break;
        case 7:
        case 8:
        case 9:
            console.log("Summer");
            break;
        case 10:
        case 11:
        case 12:
            console.log("Fall");
            break;
        default:
            console.log("Invalid Month");
            break;
    }
}
season(5);
// Q 117 - Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function evaluatGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Exellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Nice");
            break;
        default:
            console.log("Invalid Grade");
            break;
    }
}
evaluatGrade("A");
