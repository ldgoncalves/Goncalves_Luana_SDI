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

//Average shopping bill: You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries.Please note: there should only be one given for this problem set, the array holding the five weekly totals.  You should be able to access the array using the array access notation discussed earlier in the course.


var groceryBudget = [35,32,38,32,29];// list of totals per week spent

var total = (groceryBudget[0] + groceryBudget[1] + groceryBudget[2] +groceryBudget[3] + groceryBudget[4]);//an array of the total for 5 weeks

var average = total/5; //divide from the total above with 5


console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week.");

//Discounts: Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)

//Calculate a discounted price for a video game.

var originalPrice = 69.99;

var discountOnly = .15;

var salesTax = .06;

discount *= originalPrice;

var discountResult = originalPrice - discountOnly;

//console.log(discountResult);

var withTax = discountResult * salesTax;
withTax += discountResult

//console.log(withTax);

console.log("“Your video game was originally $" + originalPrice + ", but after a" + % discount, it is now $X without tax, and $X with tax.”")



