/**
 * FUNCTION removeFromArray(arr, ...args):
 *   CREATE an empty list called newArr
 *   
 *   FOR each item in arr:
 *     SET found to false
 * 
 *     FOR each item in args:
 *       IF item in arr is the same as item in args:
 *         SET found to true
 *         BREAK the loop
 *     
 *     IF found is false:
 *       ADD item from arr to the end of newArr
 * 
 *   RETURN newArr
 */


const removeFromArray = function (arr, ...args) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      newArr[newArr.length] = arr[i];
    }
  }

  return newArr;
};
;

// Do not edit below this line
module.exports = removeFromArray;
