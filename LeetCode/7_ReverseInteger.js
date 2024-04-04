/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let isNegative = false;

    let maxValue = Math.pow(2, 31) - 1;

    if(x < 0){
        isNegative = true;
        x = x * -1;
    }

    while(x !== 0 && result < maxValue){
        result = (result * 10) + (x%10);
        x = Math.floor(x/10);
    }

    if(result > maxValue) return 0;

    return isNegative ? -result : result;
};