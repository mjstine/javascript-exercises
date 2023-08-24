/**
 * FUNCTION reverseString(word):
 *   CREATE an empty list called arrChar
 *   CONVERT word into a list of characters and STORE it in arrChar
 * 
 *   SET charLeft to 0
 *   SET charRight to length of word minus 1
 *   SET tempChar to an empty string
 *   SET reversedStr to an empty string
 * 
 *   WHILE charLeft is less than charRight:
 *     FOR each item in arrChar:
 *       SET tempChar to the character at index charLeft
 *       SET the character at index charLeft in arrChar to the character at index charRight
 *       SET the character at index charRight in arrChar to tempChar
 *     
 *     INCREMENT charLeft by 1
 *     DECREMENT charRight by 1
 * 
 *   FOR each item in arrChar:
 *     ADD the item to the end of reversedStr
 * 
 *   RETURN reversedStr
 */

const reverseString = function (word) {
  const arrChar = Array.from(word);

  let charLeft = 0;
  let charRight = word.length - 1;
  let tempChar = "";
  let reversedStr = "";

  while (charLeft < charRight) {
    for (let i = 0; i < arrChar.length; i++) {
      tempChar = arrChar[charLeft];
      arrChar[charLeft] = arrChar[charRight];
      arrChar[charRight] = tempChar;
    }

    charLeft++;
    charRight--;
  }

  for (let j = 0; j < word.length; j++) {
    reversedStr += arrChar[j];
  }

  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
