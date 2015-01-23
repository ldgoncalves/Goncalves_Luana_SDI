//Conditional Logic - Logical Operators
//And operator
var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
 console.log("We can buy the phone!");
}else{
 console.log("No phone for you!");
}
//Or operator
var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
 console.log("We can buy the phone!");
}else{
 console.log("No phone for you!");
}

//Conditional Logic - Ternary Operators

//if(condition){
// do if true;
//}else{
 //do if false;
//}

//(condition) ? do if true : do if false;

var gpa = 48;

//if the gpa is over the min 2.0 score, the student can graduate
//if(gpa > 2.0){
 /*console.log("You can graduate!");
}else{
 console.log("GPA is too low");
}*/

//(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low!");



var age = 6;
var book;

// if the child is under 10, they get Green Egss and Ham, otherwise they get The Time Machine.

/*if (age age <10){
 book = "Green Eggs and Ham";
}else{
 book = "The Time Machine";
}
console.log(book);*/

book = (age <10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);




