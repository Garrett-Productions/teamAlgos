function plusOne(digits){
    for(let i = digits.length - 1; i >= 0; i--){
        //if digits is less than 9, at this first iteration, increase the num, and return it
        if(digits[i]< 9){
            digits[i]= digits[i]+1;
            return digits;
        } else {
            digits[i] = 0;
            // else first iteration is 9, so we set it equal to 0, then on our 2nd iteration we increase the second number and return it
        }
    }
    //one more edge case to handle, if our input array is [9,9] then we need to return [1,0,0] and not [0,0]
    //we can use unshift short cut to insert a 1 at the beginning of the array
    digits.unshift(1);
    return digits;
};
console.log(plusOne(digits = [1,2,3]))