const prompt = require("prompt-sync")();
integer = prompt("Enter an integer: ");
if(integer % 3 == 0 ){
console.log(integer + " is divisible by 3" );
}
else{
console.log(integer + " is not divisible by 3")
}

