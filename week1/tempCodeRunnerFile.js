function plusOnee(digits){

    for(let i = digits.length -1; i>= 0; i--){
        if(digits[i]< 9){
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    return [1, ...digits]
};
console.log(plusOnee(digits = [1,2,3]))
console.log(plusOnee(digits = [9,9]))