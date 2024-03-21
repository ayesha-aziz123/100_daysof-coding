// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.


let favorite_pizza:string[]= ["pepperoni","chicken","fagita"];
for(let pizza of favorite_pizza){
    console.log(pizza);
}

for(let pizza of favorite_pizza){
    console.log(`I like ${pizza} pizza`);
    
}
console.log("\n I really love pizza");


// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.tnode

let animals:string[]= ["Dog","puppy","cat"];
///print only names
for(let i of animals){
    console.log(i);
    
}
 console.log("\n");

for(let animal of animals){
    console.log(`A ${animal} would make a great animal`);
    
}
console.log(`All these animals ${animals[0]}, ${animals[1]}, ${animals[2]} make a great pet`);


// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

function make_shirt (size:string, text:string){
    console.log(`\n you selected ${size} shirt with ${text} print on shirt`)
    
}
make_shirt('large', '"sky is the limited"')
make_shirt('small', '"whole world"')