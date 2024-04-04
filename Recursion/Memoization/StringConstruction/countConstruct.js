const {performance} = require('perf_hooks');

const countConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === "") return 1;

    let totalCount = 0;
    
    for(let part of wordBank){
        if(target.startsWith(part)) {
            var numWaysForRest = countConstruct(target.replace(part, ''), wordBank, memo);

            totalCount += numWaysForRest;
        }
    }
    
    memo[target] = totalCount;
    return totalCount;
}

var startTime = performance.now();
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
var endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //0
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //4
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeeee', 'eeeeeeeeeeeeeeeeee', 'eeeeeeeeeeeeeeeee', 'f'])); // ?
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeeee', 'eeeeeeeeeeeeeeeeee', 'eeeeeeeeeeeeeeeee'])); // 0
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);