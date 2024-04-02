// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average. 
function averageScore(...scores: number[]): number {
    let total = scores.reduce((sum, scores) => sum + scores, 0)
    return total / scores.length;
}
console.log(averageScore(10, 45, 60, 70));//take lots of scores and find their average. 


// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later. 
function specialNumber(valueToAdd: number): (arg: number) => number {
    return function (x: number): number {
        return x + valueToAdd;
    }
}

const add5 = specialNumber(5)
const result = add5(25)
console.log(result);



// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age. 
let userProfile = {
    name: "Ayesha",
    age: 18,
    setupProfile: function () {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
console.log(userProfile.setupProfile());
