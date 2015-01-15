/*
Luana Goncalves
SDI Section #3
Expression Worksheet
1/15/2015
 */

//alert("Testing to see if the JS file is attached to the html.");

//Dog Years: Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”

// Calculate how old Sparky the pit bull is in dog years based on his actual age.

var humanYears = 5; //this is Sparky's age is human years

var dogYears = 7;

//multiply humanYears and dogYears to get Sparky's age.

var sparkysAge = humanYears * dogYears;

//printout Sparky's age

console.log("Sparky is " + humanYears + " human years old which is " + sparkysAge + " in dog years.");

//Slice of Pie part 1: A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)

var a = 10; //number of slices per pie
var b = 29; // number of people at party
var c = 5; //number of pizza pies

//multiple a with c, then divide the result with b

var result = a * c / b;

result = parseFloat("1.7");

console.log ("Each person ate " + result + " slices of pizza at the party");

//Slice of Pie part 2: At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests.

// Assume guests get whole slices, how many whole slices will Sparky feast on?

var a = 10; //number of slices
var b = 29; //number of people
var c = 5; //number of pizza


//multiple a with c to get total of slices

var totalSlices = a % b;



//Now calculate the remainder of slices

console.log(totalSlices);



