const prompt = require("prompt-sync")();
value = prompt("Enter an integer: ");
square = value * value;
if(value > 100 && square > 100){
console.log( value + " and  the square of " + value  + " is greater than 100");



}
else if( value < 100 && square < 100){
console.log(100 + " is  greater than " + value + " and " +  + " square of "+ value  );


}

else if(value == 100  && square == 100){
console.log(value + " and the square of "+ value + " is equal to 100");


}
else if(value != 100 && square != 100){
console.log( value + " and  the square of " + value + " is not equal to 100");



}
else{
console.log("Enter a valid number");
}





