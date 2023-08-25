/**
 * FUNCTION palindromes(str):
 *   CREATE a pattern to match non-alphanumeric characters
 *   REMOVE non-alphanumeric characters from str and convert to lowercase
 * 
 *   SET left pointer to 0
 *   SET right pointer to length of str - 1
 * 
 *   WHILE left pointer is less than right pointer:
 *     IF character at left pointer is not the same as character at right pointer:
 *       RETURN false
 * 
 *     MOVE left pointer one step to the right
 *     MOVE right pointer one step to the left
 * 
 *   RETURN true
 * END FUNCTION
 */

const palindromes = function (str) {
  let pattern = /[^a-zA-Z0-9]/g;
  str = str.replace(pattern, "").toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
