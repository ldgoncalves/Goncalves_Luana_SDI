
 /*
Luana Goncalves
SDI Section #3
Functions Assignment
1/29/2015
 */

//alert("Testing to see if the JS file is attached to the html.");

 //This is a simple event budget calculator to determine how much money the user needs to save for event.

//After the calculation is done for the budget, the user will be prompted if the event is for fundraising. If yes, the function will calculate approximately how much each guest needs to donate.

 //Let's prompt the user with three questions first.

 alert("Hello! We will be calculating how much you will need to save for your event.")

 var guest = prompt("How many guests will attend your event?");

 while(guest==="" || isNaN(guest)){
  //reprompt user
  guest = prompt("Please do not leave blank and only use numbers! \nPlease enter the number of guests that will attending your event:");
 }

 var budget = prompt("How much are you willing to spend per guest?");

 while(budget==="" || isNaN(budget)){
  //reprompt user
  budget = prompt("Please do not leave blank and only use numbers! \nPlease enter the amount you are willing to spend per guest:");
 }

 var months = prompt("How many months you have until event?");

 while(months==="" || isNaN(months)){
  //reprompt user
  months = prompt("Please do not leave blank and only use numbers! \nPlease enter the number of months you have until your event:");
 }