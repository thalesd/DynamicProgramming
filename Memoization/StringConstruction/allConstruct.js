const {performance} = require('perf_hooks');

const allConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === "") return [[]];

    let result = [];

    for (let word of wordBank){
        if(target.startsWith(word)){
            const suffix = target.slice(word.length);

            let suffixWays = allConstruct(suffix, wordBank, memo);

            const waysToBuild = suffixWays.map(way => [word, ... way]);

            result.push(...waysToBuild);
        }
    }

    memo[target] = result;

    return result;
}

var startTime = performance.now();
console.log(allConstruct('', [])); 
var endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

var startTime = performance.now();
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
var endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eef', 'eeeeeeeeeeeeeeeeeeef', 'eeeeeeeeeeeeeeeeef', 'f']));
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeeee', 'eeeeeeeeeeeeeeeeee', 'eeeeeeeeeeeeeeeee']));
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);