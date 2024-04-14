// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
// Explain & TIP: The .map() method transforms each item in an array according to a specific function 
// and returns a new array with the transformed items.

function lengthArrays (str:string[]){
  return array.map(str => str.length)  //It tells length of every word
}

let array = ["Ahmed","Moiz","Laraib","Osama"];
console.log(lengthArrays(array));
console.log(array);  //original array



// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.

function filter (str:number[]){
    return str.filter(str => str > 10 )
}
let arr :number[] = [1,4,6,9,35,20,40,80,70];
console.log(filter(arr));


// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

function arrcal(arr:number[]){
       return arr.reduce((a , b) => a + b)
}
let array2 :number[] = [1, 2, 4, 10, 50, 70, 80];
console.log(arrcal(array2))