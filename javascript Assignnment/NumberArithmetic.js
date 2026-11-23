const prompt = require("prompt-sync")();
firstValue= prompt("Enter an integer: ");
secondValue = prompt("Enter an integer: ");
sum = firstValue + secondValue;
squareOfFirstValue = firstValue * firstValue;
squareOfSecondValue = secondValue * secondValue;
difference = squareOfFirstValue  - squareOfSecondValue ;


console.log("The square of " + firstValue + " is " + squareOfFirstValue);
console.log("The square of " + secondValue + " is " + squareOfSecondValue);
console.log("The sum of square of " + firstValue + " and " + secondValue + " is " + sum );
console.log("The difference between the square of " + firstValue + " from " + secondValue + " is " + difference );
