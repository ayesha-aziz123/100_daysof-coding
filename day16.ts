// 💡Question_46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
//  and a method describe() that logs a sentence about the laptop.

const laptop: {make : string; model : string; year : number; describe: any} = {
    make: "Apple",
    model: "MacBook",
    year : 2023,
    describe:function() {
        return `Make: ${laptop.make}\nModel: ${laptop.model}\n Year: ${laptop.year}`;
    },
};
console.log(laptop.describe());

// 💡Question_47:
//  Advanced Array Destructuring: Given an array of objects representing different laptops,
//  each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
const laptops : any =[
    {
        make : "Apple",
        model : "Surface laptop 4",
        Year : 2022,
    },
    {
        make : "Microsoft",
        model : "Mackbook pro",
        Year : 2023,
    },
    {
        make : "HP",
        model : "pro Book",
        Year : 2024,
    }
];
const [laptop1 , laptop2] =laptops;
console.log(laptop1);
console.log(laptop2);

// 💡Question_48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let prices_arra1 : number[] = [50000,45000,34000,];
let prices_arra2 :number[] = [35000,25000,29000];

let combinePrices:number[] = [...prices_arra1, ...prices_arra2] .sort(
    ( a:number , b:number) => a - b
);
console.log(combinePrices);