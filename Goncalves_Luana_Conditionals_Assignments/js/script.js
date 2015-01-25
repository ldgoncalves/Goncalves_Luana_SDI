
 /*
Luana Goncalves
SDI Section #3
Conditionals Assignment
1/22/2015
 */

//alert("Testing to see if the JS file is attached to the html.");

//This is a calculator that will determine how much you need to save a month to meet their travel budget goals. Initially the user will be prompted and will be asked their travel budget, how many months they to save and how much they are willing to save. Finally, the calculator will compare if the saving amount is too little or good enough to save and will calculate how much they would need to save.

 alert("This your Travel Budget Calculator! We will determine how much you need to save for your next trip.");

 var budget = prompt("What is your travel budget for your next trip?");
 //This is only if there's no input and the user will be prompted again. Tested to see if works and it does.
 if (budget == "") {
  alert("You forgot to input something!");
  var budget = prompt("What is your travel budget for your next trip?");
 }

 var months = prompt("How many months do you have until your next trip?");
 //This is only if there's no input and the user will be prompted again. Tested to see if works and it does.
 if (months == ""){
  alert("You forgot to input something!");
  var months = prompt("How many months do you have until your next trip?");
 }

 var savings = prompt("How much are you willing to save per month?");
 //This is only if there's no input and the user will be prompted again. Tested to see if works and it does.
 if (savings == ""){
  alert("You forgot to input something!");
  var savings = prompt("How much are you willing to save per month?");
 }

 //From here we will divide months by budget and compare the result with the savings.

 var result = budget/months;

 if (result > savings){
  console.log("You have more saving to do. You should be saving $" + parseInt(result) + " a month.");
  alert("You have more saving to do. You should be saving $" + parseInt(result) + " a month.");
 }else if (result <= savings){
  console.log("You are on the right track for your next trip!");
  alert("You are on the right track for your next trip!");
 }

 /*Tested out the prompts for now. Added 500 as budget, 6 as months, and 25 for savings. Printed out "You have more saving to do." To get the print out "You are on the right track for your next trip!", I just changed the savings to 85.*/

//Now we will prompt the user with the least savings and ask if they would like to calculate how many months they need to extend with their current savings a month.

 var help; //This will either prompt the user to continue the calculation, if not, wish them fun on trip.

 help = (result > savings)? prompt("Would you like to keep your savings amount and calculate how many months you will need to extend instead? \n Please enter Yes or No:") : alert("Have fun in " + months + " months!");

 /* Tested this by entering the savings that is the highest to get the alert "Have fun in X months!". Also tested to get the prompt for the person with the lowest savings if they would like to continue with another equation. Everything is the clear*/

 //This here will determine if the prompted user said yes or no. If yes, we will continue with the month extension calculation, if no, we will wish them luck.

 if (help == "yes" || help == "Yes"){ //added logical operators here for the purpose if the user enter Yes either in lowercase or uppercase.
  var extension = budget/savings - months; //equation for month extension
  console.log("You have to save for additional " + extension + " months.");
  alert("You have to save for additional " + extension + " months.");
 }else if (help == "no" || help == "No"){ //added logical operators here for the purpose if the user enter No either in lowercase or uppercase.
  console.log("Good luck in your savings!");
  alert("Good luck in your savings!");
 }

 /* Tested the "help" prompts by typing in "yes" and then "Yes" and also "no" and "No" to make sure they the functions they need to do.*/

 //Did one last test with budget=2000 months=12 and savings=200, and then savings at 80. Greenlight!

