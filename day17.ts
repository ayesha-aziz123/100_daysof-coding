//💡 Question 49: Function with Rest Parameters:
//  Write a function that takes a rest parameter representing multiple hobbies.
// //  It should log each hobby with a statement saying you enjoy that hobby.

function printHobbies(...rest: string[]) {
  for (let hobby of rest) {
    console.log(`Enjoy ${hobby}`);
  }
}
printHobbies("playing", "reading", "sports");


// 💡Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities
let myIdeaDay = `My ideal day would involved:
  1. Waking up early in the morning and perform Fajr Salah.
  2. Reading Quran daily at least 30 to 40 minutes.
  3. Listening islamic scholors speach on YouTube.`

console.log(myIdeaDay);



// 💡Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function
function CalculateArea(length: number, width: number): number {
  return length * width;
}
const calculates = (length: number, width: number): number => {
  return length * width;
};
console.log(calculates(45, 7));

