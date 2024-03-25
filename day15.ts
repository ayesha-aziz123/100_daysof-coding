// 43. Unchanged Magicians: Start with your work from Exercise 40. 

// Array of magician's names
let magicians: string[] = ["Ayesha", "hafsa", "Maryam","Moiz"];

function make_great(magicians: string[]): string[] {
  let greatMagicians:any = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
});
return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names


// 44. Sandwiches: Write a function that accepts a array of items 

function make_sandwich(...items: string[]) {
  console.log(`Making a sandwich with: ${items.join(", ")}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");


// 45. Cars: Write a function that stores information about a car in a Object.

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; 
}
function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
  let car: Car = {
      manufacturer: manufacturer,
      model: model
  };
  for (let extra of extras) {
      car[extra[0]] = extra[1];
  }
  return car;
}let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2024]);

console.log(myCar);