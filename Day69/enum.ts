// ****************//////////////////////////////////*********
//< ============================== ENUMS ==========================>
// ****************//////////////////////////////////*********

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
  }
  
  const today: Days = Days.Wednesday;
  
  console.log(`Today is ${Days[today]}`);


  /////////////// Other Example /////////////
  enum fruits {
    mango,
    banana,
    apple,
    lichi
  }
  const result: fruits = fruits.banana;
  console.log(`my favourite fruit is ${fruits[result] }`);
  
