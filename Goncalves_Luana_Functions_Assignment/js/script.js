
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

 //validated each loop by leaving blank or entering a string instead.

 var total = savingsMonthly(guest,budget,months); //invocation of first function

 function savingsMonthly(guestNum,budgetNum,monthsNum){
  //calculation to give the total of how much the user should save per month

  var monthly = guestNum * budgetNum / monthsNum;
  return monthly;
 }
 console.log("You need to save $" + parseInt(total) + " per month");
 alert("You need to save $" + parseInt(total) + " per month");

 //now we will prompt the user if their event is a fundraiser event or not.

 var fundEvent = prompt("Is fundraising involved in this event? \nPlease enter Yes or No:");

 //Change all text string to lowercase

fundEvent = fundEvent.toLowerCase();

 //validate this prompt

while(fundEvent !="yes" && fundEvent !="no"){

 //reprompt
 fundEvent = prompt("Only type in yes or no. Is this a fundraising event?");
}

 // Now here, depending on what the user inputs, if yes, a prompt and function will follow through to calculate fundraising goal. If no, an alert will come up wishing user luck on event.

 if(fundEvent === "yes"){
  var fundraising = prompt("Please enter goal to fundraise:");

  //validate prompt

  while(fundraising==="" || isNaN(fundraising)){

   //reprompt user
   fundraising = prompt("Please do not leave blank and only use numbers! \nPlease enter the amount you need to fundraise:");
  }

  //function begins here to find out estimate donation per guest

  var fundAmount = function(guestNum, fundraisingNum){
  var amount = fundraisingNum / guestNum;
   return amount;
  }

  var donation = fundAmount(guest,fundraising);

  //printout
  console.log("You need each guest to donate $" + parseInt(donation) + " to meet your fundraising goal.");
  alert("You need each guest to donate $" + parseInt(donation) + " to meet your fundraising goal.");

 }else if(fundEvent === "no"){
  alert("Good luck and have a great event!")
 }


 //This ends the calculator. Tested using 200 guests, 50 for budget and 12 months. Fundraising goal I used 1000.





