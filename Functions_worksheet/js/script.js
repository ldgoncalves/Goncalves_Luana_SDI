
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

 var total = calcCircle(3.14,10);

 function calcCircle (pie, r){
  var circumference = 2 * pie * r;
  return circumference;
 }
 console.log("The circumference of the circle is " + total);

