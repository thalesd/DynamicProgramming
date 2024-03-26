/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length == 0 || s.length == 1 || numRows == 1) return s;

    let newStrings = Array(numRows).fill("");
    let i = 0;
    let loopRight = true;

    s.split('').forEach(character => {
        newStrings[i] += character;

        if(loopRight && i == (numRows-1) || !loopRight && i == 0) 
            loopRight = !loopRight;

        if(loopRight) i++;
        else i--;
    });

    return newStrings.join('');
};