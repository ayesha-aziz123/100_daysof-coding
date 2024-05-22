
///////// A generic function that returns the input value as is

function returnType<T>(val: T): T {
    return val;
}

const numVal: number = returnType<number>(100);
const strVal: string = returnType<string>("Alice");
const boolVal: boolean = returnType<boolean>(true);
const arrVal: number[] = returnType<number[]>([1, 2, 3, 4]);

console.log(`Number Value: ${numVal}`);
console.log(`String Value: ${strVal}`);
console.log(`Boolean Value: ${boolVal}`);
console.log(`Array Value: ${arrVal}`);


