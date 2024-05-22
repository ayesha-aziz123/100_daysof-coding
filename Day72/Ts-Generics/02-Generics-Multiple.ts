//  < ==================================================>
// A generic function that returns the input value as is
//  < ==================================================>

function returnTypeEx<T>(val: T): T {
    return val
}
console.log(returnTypeEx<number> (1000)); //return 1000 (number)
console.log(returnTypeEx<string> ("Alice")); // return  (string)

 // Arrow Function with Generics `returnTypeArrowSyntax`
 const returnTypeArrowSyntax = <T> (val:T):T =>  val ;

 console.log(returnTypeArrowSyntax<number> (6000)); 
 console.log(returnTypeEx<string> ("Elzero"));
 


//  < ==================================================>
//  ************** Generic Function `testType`*********
//  < ==================================================>


  function ReturnTest<T> (value:T) :string {
    return `The value is ${value} and the Type is ${typeof value}`
  }
  
  console.log(ReturnTest<number> (2000));
   // Returns: "The Value Is 2000 And Type Is number"

  console.log(ReturnTest<string> ("Elzero"));
   // Returns: "The Value Is Elzero And Type Is string"

  
//  < ==================================================>
//    *********** Generic Function `multipleTypes`***********
//  < ==================================================>

    function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
        return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
      }
      
      console.log(multipleTypes<string, number>("Osama", 100));
      // Returns: "The First Value Is Osama And Second Value 100"
      
      console.log(multipleTypes<string, boolean>("Elzero", true));
      // Returns: "The First Value Is Elzero And Second Value true"