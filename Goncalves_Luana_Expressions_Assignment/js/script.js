
 /*
Luana Goncalves
SDI Section #3
Expressions Assignment
1/15/2015
 */

//alert("Testing to see if the JS file is attached to the html.");

//Calculating the bank's percentage markup of a currency's exchange rate you want to purchase in US dollars.

 alert("We are calculating the bank's percentage markup of a currency's exchange rate you want to purchase in USD. Also we will compare how much USD you will need to purchase a certain currency with the bank rate."); //introduction of the calculator

 var bankExchange = prompt("Please enter the bank's exchange rate:"); //for user to input bank rate of the currency they are planning to purchase
console.log (bankExchange);

 var marketExchange = prompt("Please enter the market exchange:");//for user to input market rate of the currency they are planning to purchase
console.log(marketExchange);

 //Calculate with the information that the user has given to figure out percentage markup. 
 var exchangeCal = [bankExchange,marketExchange];
 var percentage = exchangeCal[0] - exchangeCal[1];
 percentage /= marketExchange;

 //var percentage = (bankExchange - marketExchange)/marketExchange; this is the equation to figure the out the percentage markup, however as seen above, I replaced it in a form of array and another assignment operator.

 percentage *=100;// assignment operator to convert the decimal into percent

  alert("The percentage markup of your exchange rate is  " + parseInt(percentage) + "%");//user's percentage mark up result
console.log(percentage);//Tested out to make sure the prompts and the calculation works. Used 2.75 for bank rate and 2.64 for market rate.

 //Now we are going to calculate how much the user will need to purchase in USD
 var amount = prompt ("Now we will calculate how much USD you will need. Please enter desired foreign currency you need:");
console.log(amount);// user enters amount they need in foreign currency to be calculated with bank rate.

 var currency = prompt("Is the foreign currency more expensive than the USD? \nYes or No"); // prompts a condition to determine the correct equation to use for USD amount.
 console.log(currency);

 //begin boolean condition

 if (currency === "yes") {
  var total1 = amount * bankExchange;
  console.log(total1);
  alert("You will need $" + total1);
 }
else
 {
  var total2 = amount / bankExchange;
  console.log(total2);
  alert("You will need $" + parseInt(total2));
 }

 //Tested the code condition which works with the calculations correctly. Entered amount for 2000. Typed yes, and then it multiples the amount with the rate I inputted earlier 2.75, giving me $5500. When entered the condition no, I got $727, which is the result of dividing 2.75 by 2000.

