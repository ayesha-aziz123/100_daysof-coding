// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" 
// within any given string and returns its position.

// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.
function finder(line: string, word: string) {
  console.log(line.indexOf(word))
}

finder(`the blue color is my fav`, `blue`)  //4


// Question 86: Checking for Text Presence: Create a function that checks if the word 
// "JavaScript" is present in a given string. It should return true if found, otherwise false.

// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).

function checker(line: any, word: any): boolean {
  if (line.includes(word)) {
    return true
  }
  else {
    return false
  }
}

console.log(checker(`my name is Eric`, `Eric`));//true 
console.log(checker(`my name is  Eric`, `danny`));  //false



// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.

function extracter(str: string, istart: number, istop: number) {
  console.log(str.substring(istart, istop))
}

extracter(`Ayesha is beautiful name`, 0, 6) //Ayesha


