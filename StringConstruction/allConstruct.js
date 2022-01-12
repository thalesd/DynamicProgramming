const {performance} = require('perf_hooks');

const allConstruct = (target, wordBank, memo = {}) => {
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

    return result;
}

var startTime = performance.now();
console.log(allConstruct('', [])); //0
var endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

var startTime = performance.now();
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
var endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //0
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //4
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeeee', 'eeeeeeeeeeeeeeeeee', 'eeeeeeeeeeeeeeeee', 'f'])); // ?
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);

startTime = performance.now();
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeeee', 'eeeeeeeeeeeeeeeeee', 'eeeeeeeeeeeeeeeee'])); // 0
endTime = performance.now();
console.log(`Call to canConstruct took ${endTime - startTime} milliseconds`);