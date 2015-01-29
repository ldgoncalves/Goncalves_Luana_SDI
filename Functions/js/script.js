//Chapter 3

/*function convertToCentigrade(degFahren)
{
    var degCent;
    degCent = 5/9 * (degFahren -32);

    return degCent;
}

var degFahren = new Array(212, 32, -459.15);
var degCent = new Array();
var loopCounter;

for (loopCounter = 0; loopCounter <= 2; loopCounter++)
{
    degCent[loopCounter] = convertToCentigrade(degFahren[loopCounter]);
}

for (loopCounter = 2; loopCounter >= 0; loopCounter--)
{
    document.write("Value " + loopCounter + " was " + degFahren[loopCounter] + " degrees Fahrenheit");
    document.write(" which is " + degCent[loopCounter] + " degrees centigrade<br />");
}*/

//Functions - Basic Structure and Function Execution

/*function outptMsg(){
    console.log("Hello World");
}

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();*/

//Functions - Variable Scope

/*var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    //console.log(area);
}
calcArea();
console.log(width);*/

// Functions - Arguments and Parameters

/*calcArea(30,20);

function calcArea(w, h){ //w-30, h=20
    var area = w * h;
    console.log(area);
}

function dogYears(age){ //parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears +" years old.")
}
var age1 = 4;
dogYears(age1); //arguments
dogYears(5);*/

/*//Functions - Returning Values

var total = calcArea(30,20);

function calcArea(w, h){
    var area = w * h;
    return area; //function spitting the info out
}
console.log(total); // functions that are returning should be assigned to variables*/

/*//Functions - Function vs Procedure

//this is a function
function calcAreaF(width, height){
    var area = width * height;
    return area;
}

//This is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}*/

//Function - Anonymous Functions


/*var functionName = function(){
    //code to run
}

functionName();*/

var calcArea = function(width, height){ //defining
    //code the function runs
    var area = width * height;
    return area;
}

var a = calcArea(20, 30); //invoking

console.log(a);

//you have to define your function before invokinf