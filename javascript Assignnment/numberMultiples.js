const prompt = require("prompt-sync")();
firstValue = prompt("Enter an integer: ");
secondValue = prompt("Enter an integer: ");
firstValueTriple = firstValue * firstValue * firstValue;
secondValueDouble = secondValue * secondValue;

if(firstValueTriple % secondValueDouble == 0){
console.log(firstValueTriple + " is a multiple of " + secondValueDouble);

}
else{
console.log(firstValueTriple + " is not a multiple of " + secondValueDouble);
}
