// Question 40;
///creating Album (function to return object)
function make_album(artist: string, title: string) {
    let album = { artist, title };
  
    return album;
  }
  console.log(make_album("Artist One", "The First Album"));
  console.log(make_album("Artist Two", "The Second Album"));
  console.log(make_album("Artist Three", "The Third Album"));


// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), w

// Array of magician's names
let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
show_magicians(magicians);


////Question 42;    (Modifying Array)
///Array of magician's names
const magicianNames: string[] = ["Ayesha", "hafsa", "Maryam","Moiz"];
function showmagicians(magicians: string[]){
    for (const magician of magicians) {
        console.log(magician);
    }
}
function making_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
// Modify the array to add "the Great" to each magician's name
const greatMagicianNames: string[] = making_great(magicianNames);

// Call the function to show the orginal magician's names
console.log("Original Magicians:");
showmagicians(magicianNames); 

// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
showmagicians(greatMagicianNames); 
