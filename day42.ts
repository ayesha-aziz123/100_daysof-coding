// Q 124 - Create a function inside an object that returns the object's own name property using the this keyword.
const person = {
    name: "ayesha",
    getName: function () {
        return this.name
    }
};
console.log(person.getName());


// Q 125 - Modify a method in an object to use the this keyword to access another property in the same object.

const add = {
    a: 10,
    b: 20,
    calculation: function () {
        return this.a * this.b
    }
};
console.log(add.calculation());  ///output => 200 


// Q 126 - Explain how the this keyword changes its value when used inside a nested function within a method.

const nested = {
    property: "Hello",
    outerMethod: function () {
        return (this.property)


        const innerMethod = () => {
            console.log(this.property)
        }
        innerMethod()
    }
}

console.log(nested.outerMethod());
