const prompt = require("prompt-sync")();
firstInteger = Number(prompt("Enter an integer: "));
secondInteger = Number(prompt("Enter an integer: "));
thirdInteger = Number(prompt("Enter an integer: "));
forthInteger = Number(prompt("Enter an integer: "));
fifthInteger = Number(prompt("Enter an integer: "))
max = Math.max(firstInteger,secondInteger,thirdInteger,forthInteger,fifthInteger);
min = Math.min(firstInteger,secondInteger,thirdInteger,forthInteger,fifthInteger);
console.log(max + " is the largest number");
console.log(min + " is the smallest number")
