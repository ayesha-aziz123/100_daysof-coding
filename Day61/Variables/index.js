
alert("There will be an error after this message");

[1, 2].forEach(alert);

//========================== VARIABLES ==================
let x = 5; 
x = "john";
alert(x)

// let result = typeof null === "object";
// alert(result)
let func = typeof function (){} === "function";
console.log(func);


// ====================  INTERACTION ==============

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true


// ================ OPERATORS =================

alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string


alert( 0 == false ); // true
alert( 0 == '' ); // true

// =============== LOOPS ============
// 1
while (condition) {
    
  }
  
 // 2
  do {
    let a = 5
  
    
  } while (a < 10);
  alert(a)

  // 3
  for(let i = 0; i < 10; i++) {
 alert("hello world");
}


// ============ switch =================
let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}
  