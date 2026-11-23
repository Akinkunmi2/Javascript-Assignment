const prompt = require("prompt-sync")();
firstInteger = Number(prompt("Enter an integer: "));
secondInteger = Number(prompt("Enter an integer: "));
thirdInteger = Number(prompt("Enter an integer: "));
sum = firstInteger + secondInteger + thirdInteger;
average = Math.round((sum) / 3)
product = firstInteger * secondInteger * thirdInteger;
max = firstInteger
min = firstInteger
console.log("The sum of the numbers u entered is " + sum);
console.log("The average of the numbers you entered is " + average);
console.log("The product of the numbers you entered is " + product );
if(min < secondInteger && min < thirdInteger){
console.log(firstInteger + " is the smallest number");
}
else if(secondInteger < thirdInteger){
console.log(secondInteger + " is the smallest number");
}
else{
console.log( thirdInteger + " is the smallest number");
}
if(max > secondInteger && max > thirdInteger){
console.log(firstInteger + " is the largest number");

}
else if(secondInteger > thirdInteger){
console.log(secondInteger + " is the largest number");


}
else{
console.log(thirdInteger + " is the largest number");

}

