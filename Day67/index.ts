// ================== TYPE ANNOTATIONS =================

let fruits: string[] = ["banana","mango","Apple","Orange"];
for(let i=0; i<fruits.length; i++){
    console.log(`Fruits : ${fruits[i].toUpperCase()}`);
    
}


// ================ TYPE ANNOTATIONS With MultiDimensional ARRAYS ===============

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];
