function reverseInteger(number){
 const initialValue = number;
 let reverse = 0
while(number  != 0){
let placeHolder = number % 10;
reverse = reverse * 10 + placeHolder;
number = Math.trunc(number / 10);



}
 return reverse == initialValue;




}


console.log(reverseInteger(-121))
