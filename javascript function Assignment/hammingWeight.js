function hammingWeight(totalSteps){
binary = 0
let length = String(totalSteps).length;

for(let count = 0; count < length; count ++){
value = totalSteps % 10;

binary = binary + value   * 2 ** count;
totalSteps = (totalSteps / 10);

}
return binary
}
console.log(hammingWeight(11));
