
 /*
Luana Goncalves
SDI Section #3
Functions Worksheet
1/29/2015
 */

//alert("Testing to see if the JS file is attached to the html.");

//Circumference

 //Calculate the circumference of a circle
//Formula is C = 2 * 3.14 * radius

 var total = calcCircle(3.14,10); //argument - establishing pie and radius variable

 function calcCircle (Pi, r){ //parameters
  var circumference = 2 * Pi * r;
  return circumference;
 }
 //the result to be printed out.
 console.log("The circumference of the circle is " + total);

//Stung!
//Calculate how many bee stings are needed to kill an animal in a function.

 var total = calcStings(40,8.666666667); //40 pounds is the victim's weight and 8.666666667 is the bee stings per pound that can kill an animal.

 function calcStings (weight, stings){ // parameters
//calculation victim's weight / bee stings
  var beeStings = weight / stings;
  return beeStings;
 }
//the result to be printed out.
console.log("It takes " + parseInt(total) + " bee stings to kill this animal.");