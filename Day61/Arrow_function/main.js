
// ///////////////////////////// ARROW FUNCTION  //////////////////////////

// let func = function (arg1, arg2, ...argN) {
//   return expression;
// };

// let sum = (a, b) => a + b;
// alert(sum(1, 10)); //11

// /* This arrow function is a shorter form of:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert(sum(1, 2)); // 3

// let double = (n) => n * 2;
// // roughly the same as: let double = function(n) { return n * 2 }

// alert(double(3)); // 6


// let sayHi = () => alert("Hello!");

// sayHi();


function ask (question, yes, no){
    if(confirm(question) )yes() 
 else no()   
}
ask("do you aagree?" , 
()=> alert("you agreed"),
 ()=> alert("you cancel the execution "))