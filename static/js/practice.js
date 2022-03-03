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