// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

//Solving:
//working through the array backwards, if the array is [1,2,9] we need to return [1,3,0], so if there is a 9 on the far left we need to go to the left

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
};