const {performance} = require('perf_hooks');

const canConstruct = (str, strings, memo = {}) => {
    if(str in memo) return memo[str];
    if(str === "") return true;
    
    for(let part of strings){
        if(str.startsWith(part) || str.endsWith(part)) {
            if(canConstruct(str.replace(part, ''), strings, memo) === true){
                memo[str] = true;

                return memo[str];
            }
        }
    }

    memo[str] = false;
    return false;
}

var startTime = performance.now();
console.log(canConstruct('abcdef', ['abc', 'cd', 'def'])); //true
var endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(canConstruct('abcdef', ['abc', 'cd', 'de'])); //false
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeeee', 'eeeeeeeeeeeeeeeeee', 'eeeeeeeeeeeeeeeee'])); //false
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeeee', 'eeeeeeeeeeeeeeeeee', 'eeeeeeeeeeeeeeeee', 'f'])); //true
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);