/**
 * FUNCTION repeatString(word, num):
 *   SET repeatedWord to an empty string
 * 
 *   IF num is less than 0:
 *     RETURN "ERROR"
 * 
 *   FOR i from 0 to num - 1:
 *     ADD word to the end of repeatedWord
 * 
 *   RETURN repeatedWord
 */

const repeatString = function(word, num) {
    let repeatedWord = "";
    if (num < 0) return "ERROR";

    for (let i = 0; i < num; i++) {
        repeatedWord += word;
    }

    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
