/**
 * Longest substring with no repeating characters
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0;
    if(s.length == 1) return 1;

    let set = new Set();
    let pointer1 = 0;
    let maxLength = 0;

    for(let pointer2 = 0; pointer2 <s.length; pointer2++){
        while(set.has(s[pointer2])){
            set.delete(s[pointer1]);
            pointer1++;
        }
        set.add(s[pointer2]);
        
        maxLength = Math.max(maxLength, pointer2 - pointer1 + 1);
    }

    return maxLength;
};