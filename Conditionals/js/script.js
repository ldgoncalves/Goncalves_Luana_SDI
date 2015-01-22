//Conditional Logic

var kidHeight = 40;
var minHeight = 48

// if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight > minHeight){
   // code performed if condition is true
    console.log("You can ride the coaster!");
}


//Conditional Logic - With an Expression

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

// if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight + sneakerLift > minHeight){
    // code performed if condition is true
    console.log("You can ride the coaster!");
}

//Conditional Logic - With an Expression

var kidHeight = 52;
var minHeight = 48

// if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight <= minHeight){
    // code performed if condition is true
    console.log("You can ride the coaster!");
}else{
    //code performed if condition is false
    console.log("Sorry kid, you've go some growing to do first!");
}

//Conditional Logic - else if

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

// if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight > minHeight){
    // you can ride!
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've go some growing to do first!");
}