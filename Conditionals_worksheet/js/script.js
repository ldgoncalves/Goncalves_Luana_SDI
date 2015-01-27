
 /*
Luana Goncalves
SDI Section #3
Conditionals Worksheet
1/22/2015
 */

//alert("Testing to see if the JS file is attached to the html.");

 //Group 1 Celsius to Fahrenheit converter

 /*alert("We are converting to either Celsius or Fahrenheit degrees."); //introduction of the calculator

 var degreeType = prompt("Which temperature are you looking to convert to?" + "\n Please enter \"C" + "\" for Celsius or \"F" + "\" for Fahrenheit."); //for user to input which degree type they would like to convert.

 var value = prompt("Please enter the value you would like to convert:")

 // If "C" formula as follows: (value -32) * 5/9 = C. If "F" formula as follows: value * 9/5 + 32 =F

 if (degreeType === "F") {
  var final = value * 9/5 + 32;
  console.log("The temperature is " + final + "\xB0 Fahrenheit");
  alert("The temperature is " + final + "\xB0 Fahrenheit");

 }else if(degreeType === "C"){
  var final = (value - 32) * 5/9;
  console.log("The temperature is " + final + "\xB0 Celsius");
  alert("The temperature is " + final + "\xB0 Celsius");
 }*/

 /*Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.

  Given:
  Username entered by user
  Password entered by user
  Correct username
  Correct password
  Result To Print Out:
  “Welcome, (place their username here)!”  - if the username and password is correct
  “User not found. Try again.” -if the username does not match
  “Password does not match our records.”  -if the username matches but the password does not
  */

//Group 2 Check the Login


 /*var userName = prompt("Full Sail University Email Login \nPlease enter username:");
 var passWord = prompt("Please enter password:");

 if (userName == "kmicklos" && passWord == "funny54nana") {
  console.log("Welcome, kmicklos!");
  alert("Welcome, kmicklos!")
 }else if(userName != "kmicklos" && passWord == "funny54nana") {
  console.log("User not found. Try again.");
  alert("User not found. Try again.");
 }else if (userName == "kmicklos" && passWord != "funny54nana"){
  console.log("Password does not match our records.");
  alert("Password does not match our records.");
 }
*/


//Group 3 Movie Ticket Price

 var ticket = 12;
 var discount = 7;
 var age = prompt("How old are you?");
 var time = prompt("What time is your movie?");

 if (age <= 10 && age >= 55){
  console.log("The ticket price is $" + discount + ".");
  alert("The ticket price is $" + discount + ".");
 }if (!(age <= 10 && age >= 55)){
  console.log("The ticket price is $" + ticket + ".");
  alert("The ticket price is $" + ticket + ".");
 }

 if (time == 3) {
  console.log("The ticket price is $" + discount + ".");
  alert("The ticket price is $" + discount + ".");
 }

