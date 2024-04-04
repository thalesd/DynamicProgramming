const {performance} = require('perf_hooks');

//Receives only lower case a to z characters
//Return the last non empty string after removing 
//the first occurence of each character from the alphabet
//until it is empty
const lastNonEmptyString = (string) => {
    const lettersDictionary = new Map();
    let maxCountOfChars = 0;

    for(let i in string){
        let char = string[i];
        let previousValue = lettersDictionary.get(char) || [];
        lettersDictionary.set(char, [...previousValue, i]);
        maxCountOfChars = Math.max(previousValue.length+1, maxCountOfChars);
    }

    let indexes = [];
    iterator = lettersDictionary.values();
    for (const value of iterator) {
        if(value.length == maxCountOfChars)
            indexes.push(value[value.length-1]);
    }

    indexes = indexes.sort((a, b) => a - b);

    let result = "";

    for (const index of indexes){
        result += string[index];
    }

    return result;
} 

// const createBigInputString = (targetLength) => {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     const alphabetArray = alphabet.split('');

//     let generatedResponse = [];
//     while(generatedResponse.length < targetLength){
//         const seed = Math.floor(Math.random() * 5);
//         if(seed <= 2) generatedResponse += alphabetArray[Math.floor(Math.random() * (alphabetArray.length/5))]; 
//         else {
//             generatedResponse += alphabetArray[13 + (Math.floor(Math.random() * alphabetArray.length/2))];
//         }
//     }

//     return generatedResponse;
// }

var startTime1 = performance.now();
let input1 = "aabbccba"; // returns "ba"
console.log(lastNonEmptyString(input1));
var endTime1 = performance.now();
console.log(`Call to lastNonEmptyString took ${endTime1 - startTime1} milliseconds`);

var startTime2 = performance.now();
let input2 = "aaabcccb"; // returns "ac"
console.log(lastNonEmptyString(input2));
var endTime2 = performance.now();
console.log(`Call to lastNonEmptyString took ${endTime2 - startTime2} milliseconds`);

var startTime4 = performance.now();
let input4 = "xckiekqxfxqaelsuuue"; //returns "xue"
console.log(lastNonEmptyString(input4));
var endTime4 = performance.now();
console.log(`Call to lastNonEmptyString took ${endTime4 - startTime4} milliseconds`);

var startTime5 = performance.now();
let input5 = "hqpghzygfjeaoyybxszgntbgvheumqoccdvswqbquznencqfilnijdihkkkfcozzbyzemcbgbprzgpodepiypmlpswqxddwapqhe"; //return "zpq"
console.log(lastNonEmptyString(input5));
var endTime5 = performance.now();
console.log(`Call to lastNonEmptyString took ${endTime5 - startTime5} milliseconds`);