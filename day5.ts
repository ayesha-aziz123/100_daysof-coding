//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportations=["Honda motorcycle","bus","car","sport car"];  ///motorcycle list

transportations.forEach(transportation=>console.log(`"I would like to own a ${transportation}"`));///print series


// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?

let guestlists=["Ayan","Arham","Faizan"];  ////// invite to dinner
guestlists.forEach(guestlist=>console.log(`\nHello, ${guestlist} would you like with me dinner! `));


// Question 15: Changing Guest List: One of your guests can't make it to the dinner

let guestArr : string[] = ["moiz","maryam", "fatima","Huma"] ;  /////guest list

let canNotAttend :string = "moiz";
console.log(canNotAttend + " "+ "can not attend the dinner.");

let newguest :string="Ayesha";
guestArr [guestArr.indexOf(canNotAttend)] = newguest;
console.log(guestArr);

// send out a new set of invitations with a replacement guest.
guestArr.forEach(guestArr=>console.log(`Dear ${guestArr},you are invited to the dinner`));