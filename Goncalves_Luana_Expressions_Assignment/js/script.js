
 /*
Luana Goncalves
SDI Section #3
Expressions Assignment
1/15/2015
 */

//alert("Testing to see if the JS file is attached to the html.");

//Calculating the bank's percentage markup of a currency's exchange rate you want to purchase in US dollars.

 alert("We are calculating the bank's percentage markup of a currency's exchange rate you want to purchase in USD. Also we will compare how much USD you will need to purchase a certain currency.");

 var bankExchange = prompt("Please enter the bank's exchange rate:");
console.log (bankExchange);
 var marketExchange = prompt("Please enter the market exchange:");
console.log(marketExchange);
 var percentage = (bankExchange - marketExchange)/marketExchange * 100;

  alert("The percentage markup of your exchange rate is  " + parseInt(percentage) + " percent");

 var amount = prompt ("Now we will calculate how much USD you will need. Please enter desired foreign currency you need:");

