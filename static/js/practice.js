// Functions 
// EX. Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
// Return a value 
console.log(addition(4, 5));

// EX. Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
// Return a value 
console.log(doubleAddition(4,5));
console.log(doubleAddition(64,34));


// ***Arrow functions (Fat arrow); refactoring into a single line function 
// EX. Original; Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }
// Condensed 
printHello = () => "Hello there!";

// EX. Original addition function
function addition(a, b) {
    return a + b;
  }
// Converted to an arrow function
addition = (a, b) => a + b;

// EX. Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
// Converted to an arrow function 
doubleAddition = (c, d) => addition(c, d) * 2;

// *** Arrays 
// EX. Array 
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
// For loop 
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

// For loop to iterate through an array of vegetables.
// Ex. Array
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
// For loop 
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// Loop through numbers without using an array
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }