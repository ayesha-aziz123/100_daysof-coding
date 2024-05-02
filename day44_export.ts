//task 130
export function add(a: number, b: number) {
     return a + b
}

//task  131 
export class person {
     name: string;
     constructor(name: string) {
          this.name = name

     }
     greet() {
          console.log(`Hello my name is ${this.name}`);
     }
}
//exports the person class

// task 132
export default class calculator {
     //empty export 

}