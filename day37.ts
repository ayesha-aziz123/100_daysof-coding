// Q 109 - Write an if statement that logs "Good Morning" if the current time is before 12 PM.

let current = new Date();
if (current.getHours() < 12) {
    console.log("Good Morning");

}

// Q 110 - Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function grade(score: number): string {
    if (score >= 90) {
        return 'A+'
    } else if (score >= 80) {
        return 'A'
    } else if (score >= 70) {
        return 'B'
    } else if (score >= 60) {
        return 'C'
    } else if (score >= 50) {
        return 'D'
    } else {
        return 'F'
    }
}
console.log(grade(30));
console.log(grade(95));


// Q 111 - Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorize(age: number): string {
    if (age < 13) {
        return "You are child"
    } else if (age <= 20) {
        return "You are teenager"
    } else {
        return "You are Adult"
    }

}
console.log(categorize(20));  //teenager
console.log(categorize(60));   ///Adult
console.log(categorize(30));    //Adult
console.log(categorize(10));    //child
console.log(categorize(16));    //teenager
