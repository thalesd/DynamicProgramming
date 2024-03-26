/**
 * Longest Palindromic Algorithm
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length == 0) return s;

    let maxLength = 1;
    let start = 0;

    for(let i = 0; i< s.length; i++){
        let oddLength = expandAroundCenter(s, i, i);
        let evenLength = expandAroundCenter(s, i, i+1);

        let length = Math.max(oddLength, evenLength);

        if(length > maxLength){
            maxLength = length;
            start = i - Math.floor((length-1)/2);
        }
    }

    return s.substring(start, start + maxLength);

    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
};

/**
 * Longest Palindromic Algorithm usng Manacher's Algorithm
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    if (s.length === 0) return "";

    // Preprocess the string to insert special characters
    let processedStr = "$#" + s.split('').join('#') + "#";

    let palindromeLengths = new Array(processedStr.length).fill(0);
    let center = 0;
    let right = 0;

    for (let i = 1; i < processedStr.length - 1; i++) {
        let mirror = 2 * center - i;

        // Update the palindrome length using symmetry
        if (i < right) {
            palindromeLengths[i] = Math.min(right - i, palindromeLengths[mirror]);
        }

        // Expand around the current index to find palindromes
        while (processedStr[i + (1 + palindromeLengths[i])] === processedStr[i - (1 + palindromeLengths[i])]) {
            palindromeLengths[i]++;
        }

        // Update center and right boundary if palindrome at current index extends beyond current right boundary
        if (i + palindromeLengths[i] > right) {
            center = i;
            right = i + palindromeLengths[i];
        }
    }

    let maxLen = 0;
    let centerIndex = 0;
    for (let i = 1; i < processedStr.length - 1; i++) {
        if (palindromeLengths[i] > maxLen) {
            maxLen = palindromeLengths[i];
            centerIndex = i;
        }
    }

    // Extract the longest palindrome from the processed string
    let start = (centerIndex - maxLen) / 2;
    return s.substring(start, start + maxLen);
}

